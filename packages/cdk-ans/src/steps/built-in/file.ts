import { Construct } from 'constructs';
import { ANSIBLE_BUILT_IN_NAMESPACE } from './constant';
import { Task } from '../task';
import { TaskAction, TaskActionProps } from '../task-action';
import { TaskBaseProps } from '../task-base';

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

export class FileTask extends Task {
  constructor(scope: Construct, name: string, props: FileTaskProps) {
    const action = new TaskAction(ANSIBLE_BUILT_IN_NAMESPACE+'.file', props.file);
    super(scope, name, { ...props, action });
  }
}