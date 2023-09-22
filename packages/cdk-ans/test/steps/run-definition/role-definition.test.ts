import { App, Role, RoleTarget, Task, TaskAction } from '../../../src';

describe('TaskDefinition', () => {
  test('should be able to chain roles', () => {
    const app = new App();

    const taskProps = { action: new TaskAction('test', {}) };

    const task = new Task(app, 'role-task1', taskProps);
    const role = new Role(app, 'role1', {
      tasks: task,
    });

    const task2 = new Task(app, 'role-task2', taskProps);
    const role2 = new Role(app, 'role2', {
      tasks: task2,
    });

    const all = RoleTarget.fromRole(app, 'target-1', role).next(RoleTarget.fromRole(app, 'target-2', role2));

    expect(all.chain.length).toEqual(2);

    all.chain.forEach((p, i) => {
      expect(p.name).toEqual(`target-${i + 1}`);
    });
  });
});