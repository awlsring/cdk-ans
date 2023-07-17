import { Construct } from 'constructs';

export const HOST_SYMBOL = Symbol.for('cdk-ans.Host');

export enum AnsibleConnection {
  SMART = 'smart',
  SSH = 'ssh',
  PARAMIKO = 'paramiko',
}

export interface HostProps {
  readonly host: string;
  readonly ansiblePort?: number;
  readonly connectionType?: AnsibleConnection;
  readonly ansibleUser?: string;
  readonly ansiblePassword?: string;
  readonly ansibleBecome?: boolean;
  readonly variables?: Record<string, string>;
}

export class Host extends Construct {
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

  readonly ansibleConnection: AnsibleConnection;
  readonly ansibleHost: string;
  readonly ansiblePort?: number;
  readonly ansibleUser?: string;
  readonly ansiblePassword?: string;
  readonly ansibleBecome?: boolean;
  readonly variables: Record<string, string> = {};

  constructor(scope: Construct, name: string, props: HostProps) {
    super(scope, name);

    this.ansibleHost = props.host;
    this.ansibleConnection = props.connectionType ?? AnsibleConnection.SSH;
    this.ansiblePort = props.ansiblePort;
    this.ansibleUser = props.ansibleUser;
    this.ansiblePassword = props.ansiblePassword;
    this.ansibleBecome = props.ansibleBecome;
    this.variables = props.variables ?? {};
  }

  toJson() {
    const record: Record<string, any> = {
      ansible_host: this.ansibleHost,
      ansible_connection: this.ansibleConnection,
      ...this.variables,
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

    return record;
  }
}