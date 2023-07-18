import { Construct } from 'constructs';
import { Role } from '../resource/role';
import { convertKeysToSnakeCase } from '../util';

export interface RoleTargetProps {
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

  /**
   * Creates a role target from a role
   */
  static fromRole(scope: Construct, role: Role, props?: RoleTargetProps): RoleTarget {
    return new RoleTarget(scope, role.node.id+'-target', role, props);
  }

  readonly props?: RoleTargetProps;

  private constructor(scope: Construct, name: string, readonly role: Role, props?: RoleTargetProps) {
    super(scope, name);
    this.props = props;
  }

  toJson() {
    const roleJson: Record<string, any> = {
      role: this.role.node.id,
      ...this.props,
    };

    return convertKeysToSnakeCase(roleJson);
  }
}