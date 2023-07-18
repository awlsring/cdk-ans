import { Construct } from 'constructs';
import { TaskAction } from './task-action';

export interface TaskBaseProps {
  readonly name?: string;
  readonly failedWhen?: string;
  readonly changedWhen?: string;
  readonly anyErrorsFatal?: boolean;
  readonly args?: Record<string, any>;
  readonly async?: number;
  readonly become?: boolean;
  readonly becomeExe?: string;
  readonly becomeUser?: string;
  readonly becomeMethod?: string;
  readonly becomeFlags?: string;
  readonly checkMode?: boolean;
  readonly collections?: string[];
  readonly connection?: string;
  readonly delay?: number;
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly diff?: boolean;
  readonly environment?: Record<string, any>;
  readonly ignoreErrors?: boolean;
  readonly ignoreUnreachable?: boolean;
  readonly localAction?: string;
  readonly loop?: string | string[];
  readonly loopControl?: Record<string, any>;
  readonly moduleDefaults?: Record<string, any>;
  readonly noLog?: boolean;
  readonly notify?: string[];
  readonly poll?: number;
  readonly port?: number;
  readonly register?: string;
  readonly remoteUser?: string;
  readonly retries?: number;
  readonly runOnce?: boolean;
  readonly tags?: string[];
  readonly throttle?: number;
  readonly until?: string;
  readonly when?: string;
  readonly withItems?: Record<string, any>[];
  readonly with?: string[];
}

export abstract class TaskBase extends Construct {
  readonly abstract action: TaskAction;
  readonly name?: string;
  readonly failedWhen?: string;
  readonly changedWhen?: string;
  readonly anyErrorsFatal?: boolean;
  readonly args?: Record<string, any>;
  readonly async?: number;
  readonly become?: boolean;
  readonly becomeExe?: string;
  readonly becomeUser?: string;
  readonly becomeMethod?: string;
  readonly becomeFlags?: string;
  readonly checkMode?: boolean;
  readonly collections?: string[];
  readonly connection?: string;
  readonly delay?: number;
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly diff?: boolean;
  readonly environment?: Record<string, any>;
  readonly ignoreErrors?: boolean;
  readonly ignoreUnreachable?: boolean;
  readonly localAction?: string;
  readonly loop?: string | string[];
  readonly loopControl?: Record<string, any>;
  readonly moduleDefaults?: Record<string, any>;
  readonly noLog?: boolean;
  readonly notify?: string[];
  readonly poll?: number;
  readonly port?: number;
  readonly register?: string;
  readonly remoteUser?: string;
  readonly retries?: number;
  readonly runOnce?: boolean;
  readonly tags?: string[];
  readonly throttle?: number;
  readonly until?: string;
  readonly when?: string;
  readonly withItems?: Record<string, any>[];
  readonly with?: string[];

  constructor(scope: Construct, name: string, props: TaskBaseProps) {
    super(scope, name);
    this.name = props.name ?? name;
    this.failedWhen = props.failedWhen;
    this.changedWhen = props.changedWhen;
    this.anyErrorsFatal = props.anyErrorsFatal;
    this.args = props.args;
    this.async = props.async;
    this.become = props.become;
    this.becomeExe = props.becomeExe;
    this.becomeUser = props.becomeUser;
    this.becomeMethod = props.becomeMethod;
    this.becomeFlags = props.becomeFlags;
    this.changedWhen = props.changedWhen;
    this.checkMode = props.checkMode;
    this.collections = props.collections;
    this.connection = props.connection;
    this.delay = props.delay;
    this.delegateFacts = props.delegateFacts;
    this.delegateTo = props.delegateTo;
    this.diff = props.diff;
    this.environment = props.environment;
    this.failedWhen = props.failedWhen;
    this.ignoreErrors = props.ignoreErrors;
    this.ignoreUnreachable = props.ignoreUnreachable;
    this.localAction = props.localAction;
    this.loop = props.loop;
    this.loopControl = props.loopControl;
    this.moduleDefaults = props.moduleDefaults;
    this.noLog = props.noLog;
    this.notify = props.notify;
    this.poll = props.poll;
    this.port = props.port;
    this.register = props.register;
    this.remoteUser = props.remoteUser;
    this.retries = props.retries;
    this.runOnce = props.runOnce;
    this.tags = props.tags;
    this.throttle = props.throttle;
    this.until = props.until;
    this.when = props.when;
    this.withItems = props.withItems;
    this.with = props.with;
  }

  toJson() {
    return {
      name: this.name,
      ...this.action.toJson(),
    };
  }
}