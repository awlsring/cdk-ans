import { AnsibleAnyInput, IVariable } from './variable';

/**
 * An empty interface TaskActionProps extends from
 * This is a placeholder incase there are base settings ever needed for an Action
 */
export interface TaskActionProps {}

/**
 * Base class for all Task Actions
 */
export class TaskAction {
  readonly name: string;
  readonly props: Record<string, AnsibleAnyInput>;
  constructor(name: string, props: Record<string, any>) {
    this.name = name;
    this.props = props;
  }

  toJson(): any {
    return {
      [this.name]: this.convertItems(this.props),
    };
  }

  private implementsVariable(obj: any): obj is IVariable {
    return obj.asVariable !== undefined;
  }

  private convertItems(obj: Record<string, AnsibleAnyInput>): Record<string, any> {
    const snakeCaseObject: Record<string, AnsibleAnyInput> = {};

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const snakeCaseKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
        let value = obj[key];
        if (this.implementsVariable(value)) {
          value = value.asVariable();
        }
        snakeCaseObject[snakeCaseKey] = value;
      }
    }

    return snakeCaseObject;
  }
}