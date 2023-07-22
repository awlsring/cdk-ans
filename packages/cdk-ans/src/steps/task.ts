import { Construct } from 'constructs';
import { Handler } from './handler';
import { ITaskChainable, TaskDefinition } from './run-definition/task-definition';
import { TaskAction } from './task-action';
import { TaskBase, TaskBaseProps } from './task-base';
import { convertKeysToSnakeCase } from '../util';

export interface TaskProps extends TaskBaseProps {
  readonly action: TaskAction;
  readonly args?: Record<string, any>;
  readonly async?: number;
  readonly changedWhen?: string;
  readonly delay?: number;
  readonly failedWhen?: string;
  readonly localAction?: string;
  readonly loop?: string | string[];
  readonly loopControl?: Record<string, any>;
  readonly notify?: Handler[];
  readonly poll?: number;
  readonly register?: string;
  readonly retries?: number;
  readonly until?: string;
  readonly withItems?: Record<string, any>[];
  readonly with?: string[];
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly when?: string;
}

// make these chainable like aws-cdk sfn?
// https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html#task
export class Task extends TaskBase implements ITaskChainable {
  readonly action: TaskAction;
  readonly notify?: Handler[];

  readonly args?: Record<string, any>;
  readonly async?: number;
  readonly changedWhen?: string;
  readonly delay?: number;
  readonly failedWhen?: string;
  readonly localAction?: string;
  readonly loop?: string | string[];
  readonly loopControl?: Record<string, any>;
  readonly poll?: number;
  readonly register?: string;
  readonly retries?: number;
  readonly until?: string;
  readonly withItems?: Record<string, any>[];
  readonly with?: string[];
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly when?: string;

  constructor(scope: Construct, name: string, props: TaskProps) {
    super(scope, name, props);
    this.action = props.action;
    this.notify = props.notify;
    this.args = props.args;
    this.async = props.async;
    this.changedWhen = props.changedWhen;
    this.delay = props.delay;
    this.failedWhen = props.failedWhen;
    this.localAction = props.localAction;
    this.loop = props.loop;
    this.loopControl = props.loopControl;
    this.poll = props.poll;
    this.register = props.register;
    this.retries = props.retries;
    this.until = props.until;
    this.withItems = props.withItems;
    this.with = props.with;
    this.delegateFacts = props.delegateFacts;
    this.delegateTo = props.delegateTo;
    this.when = props.when;
  }

  next(next: ITaskChainable): TaskDefinition {
    return TaskDefinition.sequence(next, this.chain);
  }

  toJson(): any {
    const task = {
      name: this.name,
      ...this.action.toJson(),
    };

    if (this.args) {
      task.args = this.args;
    }

    if (this.async) {
      task.async = this.async;
    }

    if (this.changedWhen) {
      task.changed_when = this.changedWhen;
    }

    if (this.delay) {
      task.delay = this.delay;
    }

    if (this.failedWhen) {
      task.failed_when = this.failedWhen;
    }

    if (this.localAction) {
      task.local_action = this.localAction;
    }

    if (this.loop) {
      task.loop = this.loop;
    }

    if (this.loopControl) {
      task.loop_control = this.loopControl;
    }

    if (this.poll) {
      task.poll = this.poll;
    }

    if (this.register) {
      task.register = this.register;
    }

    if (this.retries) {
      task.retries = this.retries;
    }

    if (this.until) {
      task.until = this.until;
    }

    if (this.withItems) {
      task.with_items = this.withItems;
    }

    if (this.with) {
      task.with = this.with;
    }

    if (this.delegateFacts) {
      task.delegate_facts = this.delegateFacts;
    }

    if (this.delegateTo) {
      task.delegate_to = this.delegateTo;
    }

    if (this.notify) {
      task.notify = this.notify.map(h => h.name);
    }

    if (this.anyErrorsFatal) {
      task.any_errors_fatal = this.anyErrorsFatal;
    }

    if (this.become) {
      task.become = this.become;
    }

    if (this.becomeExe) {
      task.become_exe = this.becomeUser;
    }

    if (this.becomeMethod) {
      task.become_method = this.becomeMethod;
    }

    if (this.becomeUser) {
      task.become_user = this.becomeUser;
    }

    if (this.becomeFlags) {
      task.become_flags = this.becomeFlags;
    }

    if (this.checkMode) {
      task.check_mode = this.checkMode;
    }

    if (this.collections) {
      task.collections = this.collections;
    }

    if (this.connection) {
      task.connection = this.connection;
    }

    if (this.debugger) {
      task.debugger = this.debugger;
    }

    if (this.diff) {
      task.diff = this.diff;
    }

    if (this.environment) {
      task.environment = this.environment;
    }

    if (this.ignoreErrors) {
      task.ignore_errors = this.ignoreErrors;
    }

    if (this.ignoreUnreachable) {
      task.ignore_unreachable = this.ignoreUnreachable;
    }

    if (this.moduleDefaults) {
      task.module_defaults = this.moduleDefaults;
    }

    if (this.noLog) {
      task.no_log = this.noLog;
    }

    if (this.port) {
      task.port = this.port;
    }

    if (this.remoteUser) {
      task.remote_user = this.remoteUser;
    }

    if (this.runOnce) {
      task.run_once = this.runOnce;
    }

    if (this.tags) {
      task.tags = this.tags;
    }

    if (this.throttle) {
      task.throttle = this.throttle;
    }

    if (this.timeout) {
      task.timeout = this.timeout;
    }

    if (this.vars) {
      task.vars = this.vars;
    }

    return convertKeysToSnakeCase(task);
  }
}