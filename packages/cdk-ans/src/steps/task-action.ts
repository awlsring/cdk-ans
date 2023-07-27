import { convertKeysToSnakeCase } from '../util';

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
  readonly props: Record<string, any>;
  constructor(name: string, props: Record<string, any>) {
    this.name = name;
    this.props = props;
  }

  toJson(): any {
    return {
      [this.name]: convertKeysToSnakeCase(this.props),
    };
  }
}