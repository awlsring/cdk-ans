import { TaskProps } from '../task';

export type ActionlessTaskProps = Omit<TaskProps, 'action'>;