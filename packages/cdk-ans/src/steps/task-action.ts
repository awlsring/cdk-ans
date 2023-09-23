import { AnsibleAnyInput, convertNestedItems } from './variable';

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
    const items = convertNestedItems(this.props);

    switch (true) {
      case this.isKeyValue(items):
        return { [this.name]: convertNestedItems(items.key_value) };
      case this.isFreeForm(items):
        return { [this.name]: items.free_form };
      default:
        return {
          [this.name]: items,
        };
    }
  }

  private isKeyValue(items: Record<string, any>): boolean {
    const keys = Object.keys(items);
    if (keys.length === 1 && keys[0] === 'key_value') {
      return true;
    }
    return false;
  }

  private isFreeForm(items: Record<string, any>): boolean {
    const keys = Object.keys(items);
    if (keys.length === 1 && keys[0] === 'free_form') {
      return true;
    }
    return false;
  }
}