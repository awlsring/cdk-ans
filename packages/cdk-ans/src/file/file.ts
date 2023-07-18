import * as fs from 'fs';
import * as path from 'path';
import { Construct } from 'constructs';

export interface FileProps {
  readonly path: string;
  readonly fileName?: string;
}

export class File extends Construct {
  readonly path: string;
  readonly fileName: string;
  constructor(scope: Construct, name: string, props: FileProps) {
    super(scope, name);
    if (!this.fileExists(props.path)) {
      throw new Error(`File ${props.path} does not exist`);
    }
    this.path = props.path;
    this.fileName = props.fileName || path.basename(this.path);
  }

  private fileExists(file: string): boolean {
    return fs.existsSync(file);
  }
}