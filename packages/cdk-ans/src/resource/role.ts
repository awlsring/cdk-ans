import { Construct } from 'constructs';
import { Resource } from './resource';
import { File } from '../file/file';
import { TemplateFile } from '../file/template';
import { Handler } from '../steps/handler';
import { TaskDefinition } from '../steps/run-definition/task-definition';
import { Task } from '../steps/task';

export interface RoleProps {
  readonly tasks: TaskDefinition;
  readonly tasksAlt?: Task[];
  readonly handlers?: Handler[];
  readonly files?: File[];
  readonly templates?: TemplateFile[]; // make a template class
  readonly variables?: Record<string, any>;
  readonly defaults?: Record<string, any>;
}

export class Role extends Resource {
  readonly tasks: TaskDefinition;
  private _files: File[] = [];
  private _templates: TemplateFile[] = [];
  private _handlers: Handler[] = [];
  private _variables: Record<string, any> = {};
  private _defaults: Record<string, any> = {};

  constructor(scope: Construct, name: string, props: RoleProps) {
    super(scope, name);
    this.tasks = props?.tasks;
  }

  get files(): File[] {
    return this._files;
  }

  get templates(): TemplateFile[] {
    return this._templates;
  }

  get handlers(): Handler[] {
    return this._handlers;
  }

  get variables(): Record<string, any> {
    return this._variables;
  }

  get defaults(): Record<string, any> {
    return this._defaults;
  }

  addTask(task: Task) {
    this.tasks.chain.push(task);
  }

  addFile(file: File) {
    this._files.push(file);
  }

  addTemplate(template: TemplateFile) {
    this._templates.push(template);
  }

  addHandler(handler: Handler) {
    this._handlers.push(handler);
  }

  addVariables(variables: Record<string, any>) {
    this.setVariables(this._variables, variables);
  }

  addDefaultVariables(variables: Record<string, any>) {
    this.setVariables(this._defaults, variables);
  }

  private setVariables(variableSet: Record<string, any>, variables: Record<string, any>) {
    Object.keys(variables).forEach(k => {
      variableSet[k] = variables[k];
    });
  }
}