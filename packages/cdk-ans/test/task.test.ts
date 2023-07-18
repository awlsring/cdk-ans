// export class MyRole extends Role {
//   constructor(app: App, name: string) {
//     super(app, name);

//     // new Task(this, 'test', {
//     //   name: 'test',
//     //   action: new FileTask(this, 'test', {
//     //     path: '/tmp/test'
//     //   }),
//     // });

//     const t = new FileTask(this, 'test', {
//       name: 'test',
//       file: { path: '/tmp/test' },
//     });

//     const t2 = new CommandTask(this, 'test-2', {
//       name: 'test2',
//       command: {
//         cmd: 'ls',
//         stdinAddNewline: true,
//       },
//     });

//     const t3 = new CommandTask(this, 'test-3', {
//       name: 'test3',
//       command: {
//         cmd: 'ls',
//         stdinAddNewline: true,
//       },
//     });

//     const chain = t.next(t2).next(t3);

//     console.log(chain.taskChain);
//   }
// }


test('hello', () => {
  // console.log('hello');
  // const app = new App({ outdir: 'dist-test' });

  // new MyRole(app, 'test');

  // role.tasks.forEach(t => console.log(t.toJson()));
});