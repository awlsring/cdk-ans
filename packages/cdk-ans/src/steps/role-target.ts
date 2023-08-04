import { Construct } from 'constructs';
import { Conditional } from './conditional';
import { IRoleChainable, RoleDefinition } from './run-definition/role-definition';
import { Step } from './step';
import { TaskBaseProps } from './task-base';
import { Role } from '../resource/role';

export interface RoleTargetProps extends TaskBaseProps {
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly when?: Conditional;
}

/**
 * Represents a targetted role for use within a playbook
 *
 * https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html#role
 */
export class RoleTarget extends Step implements IRoleChainable {
  /**
   * Creates a role target from a role
   */
  static fromRole(scope: Construct, role: Role, props?: RoleTargetProps): RoleTarget {
    return new RoleTarget(scope, role.node.id+'-target', role, props);
  }

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
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly when?: Conditional;

  private constructor(scope: Construct, name: string, readonly role: Role, props?: RoleTargetProps) {
    super(scope, name, props ?? {});
    this.anyErrorsFatal = props?.anyErrorsFatal;
    this.become = props?.become;
    this.becomeExe = props?.becomeExe;
    this.becomeMethod = props?.becomeMethod;
    this.becomeUser = props?.becomeUser;
    this.becomeFlags = props?.becomeFlags;
    this.checkMode = props?.checkMode;
    this.collections = props?.collections;
    this.connection = props?.connection;
    this.debugger = props?.debugger;
    this.diff = props?.diff;
    this.environment = props?.environment;
    this.ignoreErrors = props?.ignoreErrors;
    this.ignoreUnreachable = props?.ignoreUnreachable;
    this.moduleDefaults = props?.moduleDefaults;
    this.noLog = props?.noLog;
    this.port = props?.port;
    this.remoteUser = props?.remoteUser;
    this.runOnce = props?.runOnce;
    this.tags = props?.tags;
    this.throttle = props?.throttle;
    this.timeout = props?.timeout;
    this.vars = props?.vars;
    this.delegateFacts = props?.delegateFacts;
    this.delegateTo = props?.delegateTo;
    this.when = props?.when;
  }

  next(next: IRoleChainable): RoleDefinition {
    return RoleDefinition.sequence(next, this.chain);
  }

  toJson(): any {
    const task: Record<string, any> = {
      role: this.role.node.id,
    };

    if (this.delegateFacts) {
      task.delegate_facts = this.delegateFacts;
    }

    if (this.delegateTo) {
      task.delegate_to = this.delegateTo;
    }

    if (this.when) {
      task.when = this.when.format();
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

    return task;
  }
}