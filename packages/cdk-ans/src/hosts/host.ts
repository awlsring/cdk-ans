import { Construct } from 'constructs';
import { IHostIdentifiable } from './host-identifiable';
import { HostVariable } from './host-variable';

export const HOST_SYMBOL = Symbol.for('cdk-ans.Host');

/**
 * The connection type to use to connect to the host.
 * @see https://docs.ansible.com/ansible/latest/user_guide/connection_details.html#connection-types
 */
export enum AnsibleConnection {
  SMART = 'smart',
  SSH = 'ssh',
  PARAMIKO = 'paramiko',
}

/**
* Configuration for a host in an Ansible inventory.
*/
export interface HostProps {
  /**
  * The hostname or IP address of the host.
  */
  readonly host: string;
  /**
  * The identifier of the host on syntesis
  *
  * @default - the construct's id
  */
  readonly identifier?: string;
  /**
  * The port to connect to on the remote host.
  *
  * @default - the default port for the connection type
  * @see https://docs.ansible.com/ansible/latest/user_guide/connection_details.html#connection-types
  */
  readonly ansiblePort?: number;
  /**
   * The connection type to use to connect to the host.
   *
   * @default AnsibleConnection.SSH
   */
  readonly connectionType?: AnsibleConnection;
  /**
   * The user to connect to the host as.
   */
  readonly ansibleUser?: string;
  /**
   * The password to use to connect to the host.
   * @default - no password
   * @see https://docs.ansible.com/ansible/latest/user_guide/connection_details.html#ssh-connection-variables
   */
  readonly ansiblePassword?: string;
  /**
   * Whether to become privileged.
   * @default - no become
   * @see https://docs.ansible.com/ansible/latest/user_guide/become.html
   */
  readonly ansibleBecome?: boolean;
  /**
   * Additional variables to set for the host.
   */
  readonly variables?: HostVariable[];
}

/**
 * Represents a host in an Ansible inventory.
 *
 * @see https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups
*/
export class Host extends Construct implements IHostIdentifiable {
  /**
   * Return whether the given object is a Host.
   */
  public static isHost(x: any): x is Host {
    return x !== null && typeof(x) === 'object' && HOST_SYMBOL in x;
  }

  /**
     * Implements `instanceof Host` using the more reliable `Host.isHost` static method
     *
     * @param o The object to check
     * @internal
     */
  static [Symbol.hasInstance](o: unknown) {
    return Host.isHost(o);
  }

  readonly identifier: string;
  readonly ansibleConnection: AnsibleConnection;
  readonly ansibleHost: string;
  readonly ansiblePort?: number;
  readonly ansibleUser?: string;
  readonly ansiblePassword?: string;
  readonly ansibleBecome?: boolean;
  readonly variables: HostVariable[];

  constructor(scope: Construct, name: string, props: HostProps) {
    super(scope, name);

    this.identifier = props.identifier ?? name;
    this.ansibleHost = props.host;
    this.ansibleConnection = props.connectionType ?? AnsibleConnection.SSH;
    this.ansiblePort = props.ansiblePort;
    this.ansibleUser = props.ansibleUser;
    this.ansiblePassword = props.ansiblePassword;
    this.ansibleBecome = props.ansibleBecome;
    this.variables = props.variables ?? [];
  }

  /**
   * Assigns additional variables to this host.
   *
   * @param variables A list of variables to add to this host
   */
  public addVariables(...variables: HostVariable[]) {
    variables.forEach(variable => {
      this.variables.push(variable);
    });
  }


  toJson() {
    const record: Record<string, any> = {
      ansible_host: this.ansibleHost,
      ansible_connection: this.ansibleConnection,
    };

    if (this.ansiblePort) {
      record.ansible_port = this.ansiblePort;
    }

    if (this.ansibleUser) {
      record.ansible_user = this.ansibleUser;
    }

    if (this.ansiblePassword) {
      record.ansible_password = this.ansiblePassword;
    }

    if (this.ansibleBecome) {
      record.ansible_become = this.ansibleBecome;
    }

    if (this.variables && this.variables.length > 0) {
      this.variables.forEach(variable => {
        record[variable.name] = variable.value;
      });
    }

    return record;
  }
}