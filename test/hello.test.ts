import { App, Inventory } from '../src';
import { Host } from '../src/hosts/host';
import { HostGroup } from '../src/hosts/host-group';

class MyInventory extends Inventory {
  constructor(app: App, name: string) {
    super(app, name);

    new Host(this, 'all-host', { host: 'all-host.local' });
    const groupedHost = new Host(this, 'group-host', { host: 'group-host1.local' });
    const doubleGroupedHost = new Host(this, 'double-group-host', { host: 'group-host2.local' });
    const subGroupedHost = new Host(this, 'sub-group-host', { host: 'sub-group-host.local' });

    const subGroup = new HostGroup(this, 'subgroup');
    subGroup.addHosts(subGroupedHost);

    const main = new HostGroup(this, 'group1');
    main.addHosts(groupedHost);
    main.addVariables({ my_var: 'myValue' });

    const other = new HostGroup(this, 'group2');
    other.addHosts(groupedHost, doubleGroupedHost);
    other.addSubGroups(subGroup);
    other.addVariables({ my_var: 'myValue' });

  }
}

test('hello', () => {
  const app = new App();

  const myInv = new MyInventory(app, 'my-inv');

  console.log('Hosts');
  myInv.hosts.forEach(h => {
    console.log(h.node.id);
    console.log(h.toJson());
  });
  console.log('Inventories');
  app.inventories.forEach(i => {
    console.log(i.node.id);
    i.groups.forEach(g => {
      let obn = {
        [g.node.id]: g.toJson(),
      };
      console.log(JSON.stringify(obn, null, 2));
    });
  });

  myInv.synth('tmp/inventories');
});