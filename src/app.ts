import * as fs from 'fs';
import * as path from 'path';
import { Construct, IConstruct } from 'constructs';
import { DependencyGraph } from './dependency';
import { Inventory } from './inventory';
import { Playbook } from './playbook';
import { Yaml } from './yaml';

export interface AppProps {
  /**
   * The directory to output Kubernetes manifests.
   *
   * If you synthesize your application using `cdk8s synth`, you must
   * also pass this value to the CLI using the `--output` option or
   * the `output` property in the `cdk8s.yaml` configuration file.
   * Otherwise, the CLI will not know about the output directory,
   * and synthesis will fail.
   *
   * This property is intended for internal and testing use.
   *
   * @default - CDK8S_OUTDIR if defined, otherwise "dist"
   */
  readonly outdir?: string;
}

/**
 * Represents a cdkans application.
 */
export class App extends Construct {
  /**
   * Synthesize a single chart.
   *
   * Each element returned in the resulting array represents a different ApiObject
   * in the scope of the chart.
   *
   * Note that the returned array order is important. It is determined by the various dependencies between
   * the constructs in the chart, where the first element is the one without dependencies, and so on...
   *
   * @returns An array of JSON objects.
   * @param chart the chart to synthesize.
   * @internal
   */
  public static _synthPlaybook(playbook: Playbook): any[] {

    const app: App = App.of(playbook);

    // we must prepare the entire app before synthesizing the chart
    // because the dependency inference happens on the app level.
    resolveDependencies(app);

    // validate the app since we want to call onValidate of the relevant constructs.
    // note this will also call onValidate on constructs from possibly different charts,
    // but thats ok too since we no longer treat constructs as a self-contained synthesis unit.
    validate(app);

    return chartToKube(playbook).map(obj => obj.toJson());
  }

  private static of(c: IConstruct): App {

    const scope = c.node.scope;

    if (!scope) {
      // the app is the only construct without a scope.
      return c as App;
    }

    return App.of(scope);
  }

  /**
   * The output directory into which files will be synthesized.
   */
  public readonly outdir: string;

  /**
   * Returns all the playbooks in this app, sorted topologically.
   */
  public get playbooks(): Playbook[] {
    const isPlaybook = (x: IConstruct): x is Playbook => x instanceof Playbook;
    return new DependencyGraph(this.node)
      .topology()
      .filter(isPlaybook);
  }

  public get inventories(): Inventory[] {
    const isInventory = (x: IConstruct): x is Inventory => x instanceof Inventory;
    return new DependencyGraph(this.node)
      .topology()
      .filter(isInventory);
  }

  /**
   * Defines an app
   * @param props configuration options
   */
  constructor(props: AppProps = { }) {
    super(undefined as any, '');
    this.outdir = props.outdir ?? process.env.CDK8S_OUTDIR ?? 'dist';
  }

  /**
   * Synthesizes all manifests to the output directory
   */
  public synth(): void {

    fs.mkdirSync(this.outdir, { recursive: true });

    // Since we plan on removing the distributed synth mechanism, we no longer call `Node.synthesize`, but rather simply implement
    // the necessary operations. We do however want to preserve the distributed validation.
    validate(this);

    // this is kind of sucky, eventually I would like the DependencyGraph
    // to be able to answer this question.
    const hasDependantPlaybooks = resolveDependencies(this);
    const playbooks = this.playbooks;

    const namer: PlaybookNamer = hasDependantPlaybooks ? new IndexedChartNamer() : new SimplePlaybookNamer();
    for (const playbook of playbooks) {
      const playbookName = namer.name(playbook);
      const objects = Object.values(playbook.toJson());
      Yaml.save(path.join(this.outdir, playbookName+'.yaml'), objects);
    }

  }

  /**
   * Synthesizes the app into a YAML string.
   *
   * @returns A string with all YAML objects across all charts in this app.
   */
  public synthYaml(): string {

    resolveDependencies(this);

    validate(this);

    const playbooks = this.playbooks;
    const docs: any[] = [];

    for (const playbook of playbooks) {
      docs.push(...Object.values(playbook.toJson()));
    }

    return Yaml.stringify(...docs);
  }
}

function validate(app: App) {
  const errors = [];
  for (const child of app.node.findAll()) {
    const childErrors = child.node.validate();
    for (const error of childErrors) {
      errors.push(`[${child.node.path}] ${error}`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Validation failed with the following errors:\n  ${errors.join('\n  ')}`);
  }
}

// function buildDependencies(app: App) {

//   const deps = [];
//   for (const child of app.node.findAll()) {
//     for (const dep of child.node.dependencies) {
//       deps.push({ source: child, target: dep });
//     }
//   }

//   return deps;

// }

function resolveDependencies(_: App) {
  return false;
}

function chartToKube(playbook: Playbook) {
  return new DependencyGraph(playbook.node).topology()
  //     .filter(x => x instanceof ApiObject)
  //     .filter(x => Chart.of(x) === chart) // include an object only in its closest parent chart
    .map(x => (x as Playbook));
}

interface PlaybookNamer {
  name(playbook: Playbook): string;
}

class SimplePlaybookNamer implements PlaybookNamer {
  constructor() {
  }

  public name(playbook: Playbook) {
    return playbook.node.id;
  }
}

class IndexedChartNamer extends SimplePlaybookNamer implements PlaybookNamer {
  private index: number = 0;
  constructor() {
    super();
  }

  public name(playbook: Playbook) {
    const name = `${this.index.toString().padStart(4, '0')}-${super.name(playbook)}`;
    this.index++;
    return name;
  }
}