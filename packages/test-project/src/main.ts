import { App } from 'cdk-ans';
import { TestProject } from './projects/test-project';


const app = new App();

new TestProject(app, 'test-project');

app.synth();