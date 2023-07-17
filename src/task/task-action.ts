import { convertKeysToSnakeCase } from '../util';

export class TaskActionProps {}

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