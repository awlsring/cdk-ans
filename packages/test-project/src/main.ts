import { App, InventoryOutputType, ProjectSynthesizer } from 'cdk-ans';
import { PiholeHaProject } from './projects/pihole-ha/pihole-ha-project';
import { TestProject } from './projects/test-project';

const synth = new ProjectSynthesizer({
  inventoryOptions: {
    inventoryOutputType: InventoryOutputType.GROUP_AND_HOST_VAR_FILES,
  },
});

const app = new App({
  synthesizer: synth,
});

new TestProject(app, 'test-project');

new PiholeHaProject(app, 'pihole-ha', {
});

app.synth();