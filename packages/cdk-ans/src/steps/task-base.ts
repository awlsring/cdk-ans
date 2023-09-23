import { Construct } from 'constructs';
import { Step, StepProps } from './step';
import { implementsVariable } from './variable';

export interface TaskBaseProps extends StepProps {
  readonly anyErrorsFatal?: boolean;
  readonly become?: boolean;
  readonly becomeExe?: string;
  readonly becomeMethod?: string;
  readonly becomeUser?: string;
  readonly becomeFlags?: string;
  readonly checkMode?: boolean;
  readonly collections?: string[];
  readonly connection?: string;
  readonly debugger?: boolean;
  readonly diff?: boolean;
  readonly environment?: Record<string, any>;
  readonly ignoreErrors?: boolean;
  readonly ignoreUnreachable?: boolean;
  readonly moduleDefaults?: Record<string, any>;
  readonly noLog?: boolean;
  readonly port?: number;
  readonly remoteUser?: string;
  readonly runOnce?: boolean;
  readonly tags?: string[];
  readonly throttle?: number;
  readonly timeout?: number;
  readonly vars?: Record<string, any>;
}

export abstract class TaskBase extends Step {
  readonly anyErrorsFatal?: boolean;
  readonly become?: boolean;
  readonly becomeExe?: string;
  readonly becomeMethod?: string;
  readonly becomeUser?: string;
  readonly becomeFlags?: string;
  readonly checkMode?: boolean;
  readonly collections?: string[];
  readonly connection?: string;
  readonly debugger?: boolean;
  readonly diff?: boolean;
  readonly environment?: Record<string, any>;
  readonly ignoreErrors?: boolean;
  readonly ignoreUnreachable?: boolean;
  readonly moduleDefaults?: Record<string, any>;
  readonly noLog?: boolean;
  readonly port?: number;
  readonly remoteUser?: string;
  readonly runOnce?: boolean;
  readonly tags?: string[];
  readonly throttle?: number;
  readonly timeout?: number;
  readonly vars?: Record<string, any>;

  constructor(scope: Construct, name: string, props: TaskBaseProps) {
    super(scope, name, props);
    this.anyErrorsFatal = props.anyErrorsFatal;
    this.become = props.become;
    this.becomeExe = props.becomeExe;
    this.becomeMethod = props.becomeMethod;
    this.becomeUser = props.becomeUser;
    this.becomeFlags = props.becomeFlags;
    this.checkMode = props.checkMode;
    this.collections = props.collections;
    this.connection = props.connection;
    this.debugger = props.debugger;
    this.diff = props.diff;
    this.environment = props.environment;
    this.ignoreErrors = props.ignoreErrors;
    this.ignoreUnreachable = props.ignoreUnreachable;
    this.moduleDefaults = props.moduleDefaults;
    this.noLog = props.noLog;
    this.port = props.port;
    this.remoteUser = props.remoteUser;
    this.runOnce = props.runOnce;
    this.tags = props.tags;
    this.throttle = props.throttle;
    this.timeout = props.timeout;
    this.vars = props.vars;
  }

  protected convertItems(obj: Record<string, any>): Record<string, any> {
    const snakeCaseObject: Record<string, any> = {};

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const snakeCaseKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
        let value = obj[key];
        if (implementsVariable(value)) {
          value = value.asVariable();
        }
        snakeCaseObject[snakeCaseKey] = value;
      }
    }

    return snakeCaseObject;
  }
}