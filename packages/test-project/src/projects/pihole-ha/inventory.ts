import { Host, HostVariable, Inventory } from 'cdk-ans';
import { Construct } from 'constructs';

export interface PiholeInventoryProps {
  readonly variables: HostVariable[];
}

export class PiholeInventory extends Construct {
  readonly inventory: Inventory;
  constructor(scope: Construct, name: string, props: PiholeInventoryProps) {
    super(scope, name);

    const pihole1 = new Host(this, 'pihole1', {
      host: '10.0.0.2',
      variables: [
        new HostVariable(this, 'pi1-priority', {
          name: 'priority',
          value: '101',
        }),
      ],
    });

    const pihole2 = new Host(this, 'pihole2', {
      host: '10.0.0.1',
      variables: [
        new HostVariable(this, 'pi2-priority', {
          name: 'priority',
          value: '100',
        }),
      ],
    });

    this.inventory = new Inventory(this, 'test-inv', {
      hosts: [pihole1, pihole2],
      variables: props.variables,
    });

  }
}