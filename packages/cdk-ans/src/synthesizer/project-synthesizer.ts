import * as fs from 'fs';
import * as path from 'path';
import { InventoryOutputType, PlaybookOutputType, RoleOutputType, ISynthesizer } from './synthesizer';
import { Project } from '../project';
import { Inventory } from '../resource/inventory';
import { Playbook } from '../resource/playbook';
import { Role } from '../resource/role';
import { convertKeysToSnakeCase } from '../util';
import { Yaml } from '../yaml';

const DEFAULT_INV_DIR = 'inventories';
const DEFAULT_ROLE_DIR = 'roles';
const DEFAULT_PLAYBOOK_DIR = 'playbooks';
const DEFAULT_INV_OUTPUT_TYPE = InventoryOutputType.SINGLE_FILE;
const DEFAULT_ROLE_OUTPUT_TYPE = RoleOutputType.STANDARD;
const DEFAULT_PLAYBOOK_OUTPUT_TYPE = PlaybookOutputType.IN_ROOT;
const DEFAULT_CREATE_SITE_PLAYBOOK = true;

export interface SynthesizeInventoryOptions {
  /** Where synthezied roles should be saved
   * @default inventories
   */
  readonly outDir?: string;
  /** How to organzie inventory output
   * @default InventoryOutputType.SINGLE_FILE
   */
  readonly inventoryOutputType?: InventoryOutputType;
}

export interface SynthesizeRoleOptions {
  /** Where synthezied roles should be saved
   * @default roles
   */
  readonly outDir?: string;
  /** How to organzie role output
   * @default RoleOutputType.STANDARD
   */
  readonly roleOutputType?: RoleOutputType;
}

export interface SynthesizePlaybookOptions {
  /** Where synthezied playbooks should be saved. Only used if `playbookOutputType` is `PlaybookOutputType.IN_DIRECTORY`
   * @default projects
   */
  readonly outDir?: string;
  /**
   * If a `site.yaml` should be created that includes all playbooks
   * @default false
   */
  readonly dontCreateSitePlaybook?: boolean;
  /** How to organzie playbook output
   * @default PlaybookOutputType.IN_ROOT
   */
  readonly playbookOutputType?: PlaybookOutputType;
}

/**
 * Options on how the project synthezier should behave when synthesizing a project
 */
export interface ProjectSynthesizerOptions {
  /**
   * Options on how to synthesize inventories
   */
  readonly inventoryOptions?: SynthesizeInventoryOptions;
  /**
   * Options on how to synthesize roles
   */
  readonly roleOptions?: SynthesizeRoleOptions;
  /**
   * Options on how to synthesize playbooks
   */
  readonly playbookOptions?: SynthesizePlaybookOptions;
}

export class ProjectSynthesizer implements ISynthesizer {
  readonly options: ProjectSynthesizerOptions;
  constructor(options?: ProjectSynthesizerOptions) {
    this.options = options ?? {};
  }

  synth(project: Project, outDir: string) {
    // preflight
    /// validate project and nodes
    // TODO: 'validate project and nodes';

    /// setup project output directory
    const rootDir = path.join(outDir, project.node.id);
    fs.mkdirSync(rootDir, { recursive: true });

    /// if inventories exist, synthesize them
    if (project.inventories.length > 0) {
      const invDir = path.join(rootDir, this.options.inventoryOptions?.outDir ?? DEFAULT_INV_DIR);
      fs.mkdirSync(invDir, { recursive: true });
      project.inventories.forEach(i => {
        this.synthesizeInventory(i, invDir, this.options.inventoryOptions?.inventoryOutputType ?? DEFAULT_INV_OUTPUT_TYPE);
      });
    }

    /// if roles exist, synthesize them
    if (project.roles.length > 0) {
      const roleDir = path.join(rootDir, this.options.roleOptions?.outDir ?? DEFAULT_ROLE_DIR);
      fs.mkdirSync(roleDir, { recursive: true });
      project.roles.forEach(r => this.synthesizeRole(r, roleDir, this.options.roleOptions?.roleOutputType ?? DEFAULT_ROLE_OUTPUT_TYPE));
    }

    /// if playbooks exist, synthesize them
    if (project.playbooks.length > 0) {
      let playbookDir = rootDir;
      const playbookOutputType = this.options.playbookOptions?.playbookOutputType ?? DEFAULT_PLAYBOOK_OUTPUT_TYPE;
      if (playbookOutputType === PlaybookOutputType.IN_DIRECTORY) {
        playbookDir = path.join(rootDir, this.options.playbookOptions?.outDir ?? DEFAULT_PLAYBOOK_DIR);
        fs.mkdirSync(playbookDir, { recursive: true });
      }
      DEFAULT_CREATE_SITE_PLAYBOOK;
      project.playbooks.forEach(p => {
        this.synthesizePlaybook(p, playbookDir, playbookOutputType);
      });
      if (!this.options.playbookOptions?.dontCreateSitePlaybook) {
        this.createSitePlaybook(project.playbooks, playbookDir);
      }
    }
  }

  private synthesizeInventory(inventory: Inventory, outDir: string, outputType: InventoryOutputType) {
    const invDir = path.join(outDir, inventory.node.id);
    fs.mkdirSync(invDir, { recursive: true });

    switch (outputType) {
      case InventoryOutputType.SINGLE_FILE:
        const invObject: Record<string, any> = {};
        const groupedHosts: string[] = [];

        if (inventory.groups.length !== 0) {
          let groups: Record<string, any> = {};
          inventory.groups.forEach(g => {
            groups[g.node.id] = g.toJson();
            g.hosts.forEach(h => {
              groupedHosts.push(h.node.id);
            });
          });
          invObject.children = groups;
        }

        if (groupedHosts.length == inventory.hosts.length || inventory.hosts.length != 0) {
          let ungroupedHosts: Record<string, any> = {};
          inventory.hosts.forEach(h => {
            if (groupedHosts.includes(h.node.id)) {
              return;
            }
            ungroupedHosts[h.node.id] = h.toJson();
          });
          invObject.hosts = ungroupedHosts;
        };

        const file = {
          all: invObject,
        };
        Yaml.save(path.join(invDir, 'hosts.yaml'), [file]);
        break;
      case InventoryOutputType.GROUP_AND_HOST_VAR_FILES:
        const hostObjects: Record<string, any> = {};
        const groupVars: Record<string, Record<string, any>> = {};
        const hostVars: Record<string, Record<string, any>> = {};
        const hostsInGroup: string[] = [];

        if (inventory.groups.length !== 0) {
          let groups: Record<string, any> = {};
          inventory.groups.forEach(g => {
            groups[g.node.id] = g.toJsonMinimal();
            g.hosts.forEach(h => {
              hostsInGroup.push(h.node.id);
              hostVars[h.node.id] = h.toJson();
            });
            groupVars[g.node.id] = g.variables;
          });
          hostObjects.children = groups;
        }

        if (hostsInGroup.length == inventory.hosts.length || inventory.hosts.length != 0) {
          let ungroupedHosts: Record<string, any> = {};
          inventory.hosts.forEach(h => {
            if (hostsInGroup.includes(h.node.id)) {
              return;
            }
            ungroupedHosts[h.node.id] = {};
            hostVars[h.node.id] = h.toJson();
          });
          hostObjects.hosts = ungroupedHosts;
        };

        const minimalFile = {
          all: hostObjects,
        };
        Yaml.save(path.join(invDir, 'hosts.yaml'), [minimalFile]);

        if (Object.keys(groupVars).length !== 0) {
          const groupVarDir = path.join(invDir, 'group_vars');
          fs.mkdirSync(groupVarDir, { recursive: true });
          Object.keys(groupVars).forEach(g => {
            Yaml.save(path.join(groupVarDir, `${g}.yaml`), [groupVars[g]]);
          });
        }

        if (Object.keys(hostVars).length !== 0) {
          const hostVarDir = path.join(invDir, 'host_vars');
          fs.mkdirSync(hostVarDir, { recursive: true });
          Object.keys(hostVars).forEach(h => {
            Yaml.save(path.join(hostVarDir, `${h}.yaml`), [hostVars[h]]);
          });
        }

        break;
      default:
        throw new Error(`Unknown inventory output type: ${outputType}`);
    }
  }

  private synthesizeRole(role: Role, outDir: string, outputType: RoleOutputType) {
    const roleDir = path.join(outDir, role.node.id);
    fs.mkdirSync(roleDir, { recursive: true });
    switch (outputType) {
      case RoleOutputType.STANDARD:
        if (role.tasks.chain.length > 0) {
          fs.mkdirSync(path.join(roleDir, 'tasks'), { recursive: true });
          let taskList = [role.tasks.toJson()];
          if (!Array.isArray(taskList[0])) {
            taskList = [taskList];
          }
          Yaml.save(path.join(roleDir, 'tasks', 'main.yaml'), taskList);
        }

        if (role.handlers?.length > 0) { //TODO: handlers arent synthing
          fs.mkdirSync(path.join(roleDir, 'handlers'), { recursive: true });
          Yaml.save(path.join(roleDir, 'handlers', 'main.yaml'), [role.handlers.map(h => h.toJson())]);
        }

        if (Object.keys(role.variables ?? []).length > 0) {
          fs.mkdirSync(path.join(roleDir, 'vars'), { recursive: true });
          Yaml.save(path.join(roleDir, 'vars', 'main.yaml'), [convertKeysToSnakeCase(role.variables)]);
        }

        if (Object.keys(role.defaults ?? []).length > 0) {
          fs.mkdirSync(path.join(roleDir, 'defaults'), { recursive: true });
          Yaml.save(path.join(roleDir, 'defaults', 'main.yaml'), [convertKeysToSnakeCase(role.defaults)]);
        }

        if (role.files?.length > 0) {
          const fileDir = path.join(roleDir, 'files');
          fs.mkdirSync(fileDir, { recursive: true });
          role.files.forEach(f => {
            fs.copyFileSync(f.path, path.join(fileDir, f.fileName));
          });
        }

        if (role.templates?.length > 0) {
          const fileDir = path.join(roleDir, 'templates');
          fs.mkdirSync(fileDir, { recursive: true });
          role.templates.forEach(f => {
            fs.copyFileSync(f.path, path.join(fileDir, f.fileName));
          });
        }
        break;
      default:
        throw new Error(`Unknown role output type: ${outputType}`);
    }
  }

  private synthesizePlaybook(playbook: Playbook, outDir: string, outputType: PlaybookOutputType) {
    outputType;
    const playbookJson = playbook.toJson();
    Yaml.save(path.join(outDir, `${playbook.name}.yaml`), [playbookJson]);
  }

  private createSitePlaybook(playbooks: Playbook[], outDir: string) {
    const tasks = playbooks.map(p => {
      return {
        include: `${p.name}.yaml`,
      };
    });
    const site = {
      name: 'Site Playbook',
      hosts: 'all',
      gather_facts: false,
      tasks: tasks,
    };
    Yaml.save(path.join(outDir, 'site.yaml'), [[site]]);
  }
}