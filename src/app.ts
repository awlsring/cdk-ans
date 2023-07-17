import * as fs from 'fs';
import { Construct, IConstruct } from 'constructs';
import { DependencyGraph } from './dependency';
import { Project } from './project';
import { Inventory } from './resource/inventory';
import { Playbook } from './resource/playbook';
import { Role } from './resource/role';
import { ProjectSynthesizer } from './synthesizer/project-synthesizer';
import { ISynthesizer } from './synthesizer/synthesizer';

export interface AppProps {
  /**
   * @default - CDKANS_OUTDIR if defined, otherwise "dist"
   */
  readonly outdir?: string;
  readonly synthesizer?: ISynthesizer;
}

/**
 * Represents a cdk-ans application.
 */
export class App extends Construct {
  /**
   * The output directory into which files will be synthesized.
   */
  public readonly outdir: string;

  /**
   * The synthesizer that will be used to synthesize the project.
   */
  public readonly synthesizer: ISynthesizer;

  /**
   * Returns all the playbooks in this app, sorted topologically.
   */
  public get projects(): Project[] {
    const isProject = (x: IConstruct): x is Project => x instanceof Project;
    return new DependencyGraph(this.node)
      .topology()
      .filter(isProject);
  }

  /**
   * Returns all the playbooks in this app, sorted topologically.
   */
  public get playbooks(): Playbook[] {
    const isPlaybook = (x: IConstruct): x is Playbook => x instanceof Playbook;
    return new DependencyGraph(this.node)
      .topology()
      .filter(isPlaybook);
  }

  /**
   * Returns all the inventories in this app, sorted topologically.
   */
  public get inventories(): Inventory[] {
    const isInventory = (x: IConstruct): x is Inventory => x instanceof Inventory;
    return new DependencyGraph(this.node)
      .topology()
      .filter(isInventory);
  }

  /**
   * Returns all the roles in this app, sorted topologically.
   */
  public get roles(): Role[] {
    const isRole = (x: IConstruct): x is Role => x instanceof Role;
    return new DependencyGraph(this.node)
      .topology()
      .filter(isRole);
  }

  /**
   * Defines an app
   * @param props configuration options
   */
  constructor(props?: AppProps) {
    super(undefined as any, '');
    this.outdir = props?.outdir ?? process.env.CDKANS_OUTDIR ?? 'dist';

    this.synthesizer = props?.synthesizer ? props.synthesizer : this.buildDefaultSynthesizer();
  }

  private buildDefaultSynthesizer(): ISynthesizer {
    return new ProjectSynthesizer();
  }

  /**
   * Synthesizes all resources to the output directory
   */
  public synth(): void {
    fs.mkdirSync(this.outdir, { recursive: true });

    this.projects.forEach(p => {
      this.synthesizer.synth(p, this.outdir);
    });
  }
}