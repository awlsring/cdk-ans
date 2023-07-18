import { Construct } from 'constructs';
import { Role } from '../resource/role';

export interface RoleTargetProps {
  readonly role: Role;
  readonly anyErrorsFatal?: boolean;
  readonly become?: boolean;
  readonly becomeExe?: string;
  readonly becomeFlags?: string;
  readonly becomeMethod?: string;
  readonly becomeUser?: string;
  readonly checkMode?: boolean;
  readonly collections?: string[]; // probably collection typing at some point
  readonly connection?: string;
  readonly debugger?: boolean;
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly diff?: boolean;
  readonly environment?: Record<string, any>;
  readonly ignoreErrors?: boolean;
  readonly ignoreUnreachable?: boolean;
  readonly moduleDefaults?: Record<string, any>;
  readonly name?: string;
  readonly noLog?: boolean;
  readonly port?: number;
  readonly remoteUser?: string;
  readonly runOnce?: boolean;
  readonly tags?: string[];
  readonly throttle?: number;
  readonly timeout?: number;
  readonly vars?: Record<string, any>;
  readonly when?: string;
}

/**
 * Represents a targetted role for use within a playbook
 *
 * https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html#role
 */
export class RoleTarget extends Construct {

  readonly role: Role;
  readonly anyErrorsFatal?: boolean;
  readonly become?: boolean;
  readonly becomeExe?: string;
  readonly becomeFlags?: string;
  readonly becomeMethod?: string;
  readonly becomeUser?: string;
  readonly checkMode?: boolean;
  readonly collections?: string[]; // probably collection typing at some point
  readonly connection?: string;
  readonly debugger?: boolean;
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
  readonly diff?: boolean;
  readonly environment?: Record<string, any>;
  readonly ignoreErrors?: boolean;
  readonly ignoreUnreachable?: boolean;
  readonly moduleDefaults?: Record<string, any>;
  readonly name?: string;
  readonly noLog?: boolean;
  readonly port?: number;
  readonly remoteUser?: string;
  readonly runOnce?: boolean;
  readonly tags?: string[];
  readonly throttle?: number;
  readonly timeout?: number;
  readonly vars?: Record<string, any>;
  readonly when?: string;

  constructor(scope: Construct, name: string, props: RoleTargetProps) {
    super(scope, name);

    this.role = props.role;
    this.anyErrorsFatal = props.anyErrorsFatal;
    this.become = props.become;
    this.becomeExe = props.becomeExe;
    this.becomeFlags = props.becomeFlags;
    this.becomeMethod = props.becomeMethod;
    this.becomeUser = props.becomeUser;
    this.checkMode = props.checkMode;
    this.collections = props.collections;
    this.connection = props.connection;
    this.debugger = props.debugger;
    this.delegateFacts = props.delegateFacts;
    this.delegateTo = props.delegateTo;
    this.diff = props.diff;
    this.environment = props.environment;
    this.ignoreErrors = props.ignoreErrors;
    this.ignoreUnreachable = props.ignoreUnreachable;
    this.moduleDefaults = props.moduleDefaults;
    this.name = props.name;
    this.noLog = props.noLog;
    this.port = props.port;
    this.remoteUser = props.remoteUser;
    this.runOnce = props.runOnce;
    this.tags = props.tags;
    this.throttle = props.throttle;
    this.timeout = props.timeout;
    this.vars = props.vars;
    this.when = props.when;
  }

  toJson() {
  }
}