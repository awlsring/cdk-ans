import { App, Block, Task, TaskAction } from '../../../src';

describe('TaskDefinition', () => {
  test('should be able to chain tasks', () => {
    const app = new App();

    const taskProps = { action: new TaskAction('test', {}) };

    const task = new Task(app, 'task1', taskProps);
    const task2 = new Task(app, 'task2', taskProps);

    const all = task.next(task2);

    expect(all.chain.length).toEqual(2);

    all.chain.forEach((p, i) => {
      expect(p.name).toEqual(`task${i + 1}`);
    });
  });

  test('should be able to chain tasks with blocks', () => {
    const app = new App();

    const taskProps = { action: new TaskAction('test', {}) };

    const task = new Task(app, 'step1', taskProps);

    const blockTask = new Task(app, 'task-blick', taskProps);
    const block = new Block(app, 'step2', {
      tasks: blockTask,
    });

    const task2 = new Task(app, 'step3', taskProps);

    const all = task.next(block).next(task2);

    expect(all.chain.length).toEqual(3);

    all.chain.forEach((p, i) => {
      expect(p.name).toEqual(`step${i + 1}`);
    });
  });
});