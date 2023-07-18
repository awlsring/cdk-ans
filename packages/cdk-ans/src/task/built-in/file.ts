import { Construct } from 'constructs';
import { Task } from '../task';
import { TaskAction, TaskActionProps } from '../task-action';
import { TaskBaseProps } from '../task-base';
import { INextable } from '../task-definition';

export interface FileTaskActionProps extends TaskActionProps {
  readonly path: string;
  readonly accessTime?: string;
  readonly accessTimeFormat?: string;
  readonly attributes?: string;
  readonly follow?: boolean;
  readonly force?: boolean;
  readonly group?: string;
  readonly mode?: string;
  readonly modificationTime?: string;
  readonly modificationTimeFormat?: string;
  readonly owner?: string;
  readonly recurse?: boolean;
  readonly selevel?: string;
  readonly serole?: string;
  readonly setype?: string;
  readonly seuser?: string;
  readonly src?: string;
  readonly state?: string;
  readonly unsafeWrites?: boolean;
}

export interface FileTaskProps extends TaskBaseProps {
  readonly file: FileTaskActionProps;
}

export class FileTask extends Task implements INextable {
  constructor(scope: Construct, name: string, props: FileTaskProps) {
    const action = new TaskAction('file', props.file);
    super(scope, name, { ...props, action });
  }
}