import { Construct } from 'constructs';
import { Handler } from './handler';
import { IPlayChainable, PlayDefinition } from './run-definition/play-definition';
import { RoleDefinition } from './run-definition/role-definition';
import { TaskDefinition } from './run-definition/task-definition';
import { Step } from './step';
import { TaskBaseProps } from './task-base';
import { IHostIdentifiable } from '../hosts/host-identifiable';

export enum PlayHostOrder {
  INVENTORY = 'inventory',
  SORTED = 'sorted',
  REVERSE_SORTED = 'reverse_sorted',
  REVERSE_INVENTORY = 'reverse_inventory',
  SHUFFLED = 'shuffle',
}

export interface PlayProps extends TaskBaseProps {
  readonly tasks?: TaskDefinition;

  readonly factPath?: string;
  readonly forceHandlers?: boolean;
  readonly gatherFacts?: boolean;
  readonly gatherSubset?: string;
  readonly gatherTimeout?: number;
  readonly handlers?: Handler[]; //TODO handler target class?
  readonly hosts: IHostIdentifiable[];
  readonly maxFailPercentage?: number;
  readonly order?: PlayHostOrder;
  readonly postTasks?: TaskDefinition;
  readonly preTasks?: TaskDefinition;
  readonly roles?: RoleDefinition;
  readonly serial?: number;
  readonly strategy?: string; //TODO: Vaidate string is right, uses "connection strategy"
  readonly varsFiles?: string[];
  readonly varPrompt?: string[];
}

/**
 * A play is a collection of tasks and metadata to execute on a set of hosts. Plays are chainable together to create a playbook
 *
 * https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html#play
 */
export class Play extends Step implements IPlayChainable { //TODO: User props in jsonification
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

  readonly factPath?: string;
  readonly forceHandlers?: boolean;
  readonly gatherFacts?: boolean;
  readonly gatherSubset?: string;
  readonly gatherTimeout?: number;
  readonly handlers?: Handler[];
  readonly maxFailPercentage?: number;
  readonly order?: PlayHostOrder;
  readonly postTasks?: TaskDefinition;
  readonly preTasks?: TaskDefinition;
  readonly serial?: number;
  readonly strategy?: string;
  readonly varsFiles?: string[];
  readonly varPrompt?: string[];

  readonly roles?: RoleDefinition;
  readonly tasks?: TaskDefinition;
  readonly hosts: IHostIdentifiable[] = [];

  constructor(scope: Construct, name: string, props: PlayProps) {
    super(scope, name, props);
    this.hosts = props.hosts ?? [];
    this.roles = props.roles;
    this.tasks = props.tasks;
    this.factPath = props.factPath;
    this.forceHandlers = props.forceHandlers;
    this.gatherFacts = props.gatherFacts;
    this.gatherSubset = props.gatherSubset;
    this.gatherTimeout = props.gatherTimeout;
    this.handlers = props.handlers;
    this.maxFailPercentage = props.maxFailPercentage;
    this.order = props.order;
    this.postTasks = props.postTasks;
    this.preTasks = props.preTasks;
    this.serial = props.serial;
    this.strategy = props.strategy;
    this.varsFiles = props.varsFiles;
    this.varPrompt = props.varPrompt;
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

  next(next: IPlayChainable): PlayDefinition {
    return PlayDefinition.sequence(next, this.chain);
  }

  flattenHosts(): string[] {
    const list: string[] = [];
    this.hosts.forEach(host => {
      list.push(host.identifier);
    });
    return list;
  }

  toJson(): any {
    // TODO: more jank object instead of list fix
    let tasks = [];
    if (this.tasks) {
      tasks = this.tasks.toJson();
      if (!tasks.length) {
        tasks = [tasks];
      }
    }
    const j: Record<string, any> = {
      name: this.name,
      hosts: this.flattenHosts(),
    };
    if (tasks.length > 0) {
      j.tasks = tasks;
    }
    if (this.roles) {
      let roles = this.roles.toJson();
      if (!roles.length) {
        roles = [roles];
      }
      j.roles = roles;
    }

    if (this.factPath) {
      j.fact_path = this.factPath;
    }

    if (this.forceHandlers) {
      j.force_handlers = this.forceHandlers;
    }

    if (this.gatherFacts) {
      j.gather_facts = this.gatherFacts;
    }

    if (this.gatherSubset) {
      j.gather_subset = this.gatherSubset;
    }

    if (this.gatherTimeout) {
      j.gather_timeout = this.gatherTimeout;
    }

    if (this.handlers) {
      j.handlers = this.handlers.map(h => h.name);
    }

    if (this.maxFailPercentage) {
      j.max_fail_percentage = this.maxFailPercentage;
    }

    if (this.order) {
      j.order = this.order;
    }

    if (this.postTasks) {
      let postTasks = this.postTasks.toJson();
      if (!postTasks.length) {
        postTasks = [postTasks];
      }
      j.post_tasks = postTasks;
    }

    if (this.preTasks) {
      let preTasks = this.preTasks.toJson();
      if (!preTasks.length) {
        preTasks = [preTasks];
      }
      j.pre_tasks = preTasks;
    }

    if (this.serial) {
      j.serial = this.serial;
    }

    if (this.strategy) {
      j.strategy = this.strategy;
    }

    if (this.varsFiles) {
      j.vars_files = this.varsFiles;
    }

    if (this.varPrompt) {
      j.var_prompt = this.varPrompt;
    }

    if (this.anyErrorsFatal) {
      j.any_errors_fatal = this.anyErrorsFatal;
    }

    if (this.become) {
      j.become = this.become;
    }

    if (this.becomeExe) {
      j.become_exe = this.becomeUser;
    }

    if (this.becomeMethod) {
      j.become_method = this.becomeMethod;
    }

    if (this.becomeUser) {
      j.become_user = this.becomeUser;
    }

    if (this.becomeFlags) {
      j.become_flags = this.becomeFlags;
    }

    if (this.checkMode) {
      j.check_mode = this.checkMode;
    }

    if (this.collections) {
      j.collections = this.collections;
    }

    if (this.connection) {
      j.connection = this.connection;
    }

    if (this.debugger) {
      j.debugger = this.debugger;
    }

    if (this.diff) {
      j.diff = this.diff;
    }

    if (this.environment) {
      j.environment = this.environment;
    }

    if (this.ignoreErrors) {
      j.ignore_errors = this.ignoreErrors;
    }

    if (this.ignoreUnreachable) {
      j.ignore_unreachable = this.ignoreUnreachable;
    }

    if (this.moduleDefaults) {
      j.module_defaults = this.moduleDefaults;
    }

    if (this.noLog) {
      j.no_log = this.noLog;
    }

    if (this.port) {
      j.port = this.port;
    }

    if (this.remoteUser) {
      j.remote_user = this.remoteUser;
    }

    if (this.runOnce) {
      j.run_once = this.runOnce;
    }

    if (this.tags) {
      j.tags = this.tags;
    }

    if (this.throttle) {
      j.throttle = this.throttle;
    }

    if (this.timeout) {
      j.timeout = this.timeout;
    }

    if (this.vars) {
      j.vars = this.vars;
    }

    return j;
  }
}