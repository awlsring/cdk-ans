import { Construct } from 'constructs';
import { TaskAction } from './task-action';

export interface TaskBaseProps {
  // readonly action: TaskAction;
  readonly name?: string;
  readonly failedWhen?: string;
  readonly changedWhen?: string;
  readonly any_errors_fatal?: boolean;
  readonly args?: Record<string, any>;
  readonly async?: number;
  readonly become?: boolean;
  readonly become_exe?: string;
  readonly become_user?: string;
  readonly become_method?: string;
  readonly become_flags?: string;
  readonly changed_when?: string;
  readonly check_mode?: boolean;
  readonly collections?: string[];
  readonly connection?: string;
  readonly delay?: number;
  readonly delegate_facts?: boolean;
  readonly delegate_to?: string;
  readonly diff?: boolean;
  readonly environment?: Record<string, any>;
  readonly failed_when?: string;
  readonly ignore_errors?: boolean;
  readonly ignore_unreachable?: boolean;
  readonly local_action?: string;
  readonly loop?: string | string[];
  readonly loop_control?: Record<string, any>;
  readonly module_defaults?: Record<string, any>;
  readonly no_log?: boolean;
  readonly notify?: string[];
  readonly poll?: number;
  readonly port?: number;
  readonly register?: string;
  readonly remote_user?: string;
  readonly retries?: number;
  readonly run_once?: boolean;
  readonly tags?: string[];
  readonly throttle?: number;
  readonly until?: string;
  readonly when?: string;
  readonly withItems?: Record<string, any>[];
  readonly with?: string[];
}

export abstract class TaskBase extends Construct {
  // readonly action: TaskAction;
  abstract action: TaskAction;
  readonly name?: string;
  readonly failedWhen?: string;
  readonly changedWhen?: string;
  readonly any_errors_fatal?: boolean;
  readonly args?: Record<string, any>;
  readonly async?: number;
  readonly become?: boolean;
  readonly become_exe?: string;
  readonly become_user?: string;
  readonly become_method?: string;
  readonly become_flags?: string;
  readonly changed_when?: string;
  readonly check_mode?: boolean;
  readonly collections?: string[];
  readonly connection?: string;
  readonly delay?: number;
  readonly delegate_facts?: boolean;
  readonly delegate_to?: string;
  readonly diff?: boolean;
  readonly environment?: Record<string, any>;
  readonly failed_when?: string;
  readonly ignore_errors?: boolean;
  readonly ignore_unreachable?: boolean;
  readonly local_action?: string;
  readonly loop?: string | string[];
  readonly loop_control?: Record<string, any>;
  readonly module_defaults?: Record<string, any>;
  readonly no_log?: boolean;
  readonly notify?: string[];
  readonly poll?: number;
  readonly port?: number;
  readonly register?: string;
  readonly remote_user?: string;
  readonly retries?: number;
  readonly run_once?: boolean;
  readonly tags?: string[];
  readonly throttle?: number;
  readonly until?: string;
  readonly when?: string;
  readonly withItems?: Record<string, any>[];
  readonly with?: string[];

  constructor(scope: Construct, name: string, props: TaskBaseProps) {
    super(scope, name);

    // this.action = props.action;

    // optional
    this.name = props.name ?? name;
    this.failedWhen = props.failedWhen;
    this.changedWhen = props.changedWhen;
    this.any_errors_fatal = props.any_errors_fatal;
    this.args = props.args;
    this.async = props.async;
    this.become = props.become;
    this.become_exe = props.become_exe;
    this.become_user = props.become_user;
    this.become_method = props.become_method;
    this.become_flags = props.become_flags;
    this.changed_when = props.changed_when;
    this.check_mode = props.check_mode;
    this.collections = props.collections;
    this.connection = props.connection;
    this.delay = props.delay;
    this.delegate_facts = props.delegate_facts;
    this.delegate_to = props.delegate_to;
    this.diff = props.diff;
    this.environment = props.environment;
    this.failed_when = props.failed_when;
    this.ignore_errors = props.ignore_errors;
    this.ignore_unreachable = props.ignore_unreachable;
    this.local_action = props.local_action;
    this.loop = props.loop;
    this.loop_control = props.loop_control;
    this.module_defaults = props.module_defaults;
    this.no_log = props.no_log;
    this.notify = props.notify;
    this.poll = props.poll;
    this.port = props.port;
    this.register = props.register;
    this.remote_user = props.remote_user;
    this.retries = props.retries;
    this.run_once = props.run_once;
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