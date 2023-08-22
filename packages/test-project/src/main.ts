import { App, Host, Inventory } from 'cdk-ans';
import { Construct } from 'constructs';
import { PiholeHaProject } from './projects/pihole-ha/pihole-ha-project';
import { TestProject } from './projects/test-project';


const app = new App();

// closure inventory to bind to project it is passed into
const localhostInventory = (scope: Construct) => {
  const localhost = new Host(scope, 'localhost', {
    host: 'localhost',
  });
  return new Inventory(scope, 'inventory', {
    hosts: [localhost],
  });
};

new TestProject(app, 'test-project');

new PiholeHaProject(app, 'pihole-ha', {
  inventory: localhostInventory,
});

app.synth();