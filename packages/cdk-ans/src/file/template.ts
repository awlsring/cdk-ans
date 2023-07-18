import { Construct } from 'constructs';
import { File, FileProps } from './file';

export interface TemplateFileProps extends FileProps {}

export class TemplateFile extends File {
  constructor(scope: Construct, name: string, props: TemplateFileProps) {
    super(scope, name, props);

    if (!this.isValidTemplate(props.path)) {
      throw new Error('Invalid template file, must end with .j2');
    }
    if (props.fileName) {
      if (!this.isValidTemplate(props.fileName)) {
        throw new Error('Invalid new file name, must end with .j2');
      }
    }
  }

  private isValidTemplate(path: string): boolean {
    return path.endsWith('.j2');
  }
}