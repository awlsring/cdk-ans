import { Construct } from 'constructs';
import { Role } from '../resource/role';
import { TaskBaseProps } from '../task/task-base';
import { convertKeysToSnakeCase } from '../util';

export interface RoleTargetProps extends TaskBaseProps {
  readonly delegateFacts?: boolean;
  readonly delegateTo?: string;
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