import { Construct } from 'constructs';
import { Handler } from './handler';
import { ITaskChainable, TaskDefinition } from './run-definition/task-definition';
import { TaskBase, TaskBaseProps } from './task-base';

export interface BlockProps extends TaskBaseProps {
  readonly tasks: TaskDefinition;
  readonly always?: TaskDefinition;
  readonly rescue?: TaskDefinition;
  readonly notify?: Handler[];
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly when?: string;
}

export class Block extends TaskBase implements ITaskChainable {
  readonly tasks: TaskDefinition;
  readonly rescue?: TaskDefinition;
  readonly always?: TaskDefinition;
  readonly notify?: Handler[];

  constructor(scope: Construct, name: string, props: BlockProps) {
    super(scope, name, props);
    this.tasks = props.tasks;
    this.rescue = props.rescue;
    this.always = props.always;
    this.notify = props.notify;
  }

  next(next: ITaskChainable): TaskDefinition {
    return TaskDefinition.sequence(next, this.chain);
  }

  toJson(): any {
    const task: Record<string, any> = {
      name: this.name,
      block: this.tasks.toJson(),
    };

    if (this.rescue) {
      task.rescue = this.rescue.toJson();
    }

    if (this.always) {
      task.always = this.always.toJson();
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
  }
}