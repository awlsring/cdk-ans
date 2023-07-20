import { Construct } from 'constructs';

export interface TaskBaseProps {
  readonly name?: string;
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

export abstract class TaskBase extends Construct {
  readonly name: string;
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
    super(scope, name);
    this.name = props.name ?? name;
    this.anyErrorsFatal = props.anyErrorsFatal;
    this.become = props.become;
    this.becomeExe = props.becomeExe;
    this.becomeUser = props.becomeUser;
    this.becomeMethod = props.becomeMethod;
    this.becomeFlags = props.becomeFlags;
    this.checkMode = props.checkMode;
    this.collections = props.collections;
    this.connection = props.connection;
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
  }

}