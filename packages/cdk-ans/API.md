# cdk-ans
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### App <a name="App" id="cdk-ans.App"></a>

Represents a cdk-ans application.

#### Initializers <a name="Initializers" id="cdk-ans.App.Initializer"></a>

```typescript
import { App } from 'cdk-ans'

new App(props?: AppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.App.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.AppProps">AppProps</a></code> | configuration options. |

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-ans.App.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.AppProps">AppProps</a>

configuration options.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.App.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.App.synth">synth</a></code> | Synthesizes all resources to the output directory. |

---

##### `toString` <a name="toString" id="cdk-ans.App.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="cdk-ans.App.synth"></a>

```typescript
public synth(): void
```

Synthesizes all resources to the output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.App.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.App.isConstruct"></a>

```typescript
import { App } from 'cdk-ans'

App.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.App.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.App.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.App.property.inventories">inventories</a></code> | <code><a href="#cdk-ans.Inventory">Inventory</a>[]</code> | Returns all the inventories in this app, sorted topologically. |
| <code><a href="#cdk-ans.App.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which files will be synthesized. |
| <code><a href="#cdk-ans.App.property.playbooks">playbooks</a></code> | <code><a href="#cdk-ans.Playbook">Playbook</a>[]</code> | Returns all the playbooks in this app, sorted topologically. |
| <code><a href="#cdk-ans.App.property.projects">projects</a></code> | <code><a href="#cdk-ans.Project">Project</a>[]</code> | Returns all the playbooks in this app, sorted topologically. |
| <code><a href="#cdk-ans.App.property.roles">roles</a></code> | <code><a href="#cdk-ans.Role">Role</a>[]</code> | Returns all the roles in this app, sorted topologically. |
| <code><a href="#cdk-ans.App.property.synthesizer">synthesizer</a></code> | <code><a href="#cdk-ans.ISynthesizer">ISynthesizer</a></code> | The synthesizer that will be used to synthesize the project. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.App.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `inventories`<sup>Required</sup> <a name="inventories" id="cdk-ans.App.property.inventories"></a>

```typescript
public readonly inventories: Inventory[];
```

- *Type:* <a href="#cdk-ans.Inventory">Inventory</a>[]

Returns all the inventories in this app, sorted topologically.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="cdk-ans.App.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The output directory into which files will be synthesized.

---

##### `playbooks`<sup>Required</sup> <a name="playbooks" id="cdk-ans.App.property.playbooks"></a>

```typescript
public readonly playbooks: Playbook[];
```

- *Type:* <a href="#cdk-ans.Playbook">Playbook</a>[]

Returns all the playbooks in this app, sorted topologically.

---

##### `projects`<sup>Required</sup> <a name="projects" id="cdk-ans.App.property.projects"></a>

```typescript
public readonly projects: Project[];
```

- *Type:* <a href="#cdk-ans.Project">Project</a>[]

Returns all the playbooks in this app, sorted topologically.

---

##### `roles`<sup>Required</sup> <a name="roles" id="cdk-ans.App.property.roles"></a>

```typescript
public readonly roles: Role[];
```

- *Type:* <a href="#cdk-ans.Role">Role</a>[]

Returns all the roles in this app, sorted topologically.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdk-ans.App.property.synthesizer"></a>

```typescript
public readonly synthesizer: ISynthesizer;
```

- *Type:* <a href="#cdk-ans.ISynthesizer">ISynthesizer</a>

The synthesizer that will be used to synthesize the project.

---


### Block <a name="Block" id="cdk-ans.Block"></a>

- *Implements:* <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

#### Initializers <a name="Initializers" id="cdk-ans.Block.Initializer"></a>

```typescript
import { Block } from 'cdk-ans'

new Block(scope: Construct, name: string, props: BlockProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Block.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Block.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Block.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.BlockProps">BlockProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Block.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Block.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.Block.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.BlockProps">BlockProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Block.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.Block.toJson">toJson</a></code> | *No description.* |
| <code><a href="#cdk-ans.Block.next">next</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.Block.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toJson` <a name="toJson" id="cdk-ans.Block.toJson"></a>

```typescript
public toJson(): any
```

##### `next` <a name="next" id="cdk-ans.Block.next"></a>

```typescript
public next(next: ITaskChainable): TaskDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.Block.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Block.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.Block.isConstruct"></a>

```typescript
import { Block } from 'cdk-ans'

Block.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Block.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Block.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.Block.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.tasks">tasks</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.always">always</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.notify">notify</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Block.property.rescue">rescue</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Block.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.Block.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Block.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.Block.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.Block.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.Block.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.Block.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.Block.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.Block.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.Block.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.Block.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.Block.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.Block.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.Block.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.Block.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.Block.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.Block.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.Block.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.Block.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.Block.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.Block.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.Block.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.Block.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.Block.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.Block.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.Block.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="cdk-ans.Block.property.tasks"></a>

```typescript
public readonly tasks: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `always`<sup>Optional</sup> <a name="always" id="cdk-ans.Block.property.always"></a>

```typescript
public readonly always: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `notify`<sup>Optional</sup> <a name="notify" id="cdk-ans.Block.property.notify"></a>

```typescript
public readonly notify: Handler[];
```

- *Type:* <a href="#cdk-ans.Handler">Handler</a>[]

---

##### `rescue`<sup>Optional</sup> <a name="rescue" id="cdk-ans.Block.property.rescue"></a>

```typescript
public readonly rescue: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---


### CommandTask <a name="CommandTask" id="cdk-ans.CommandTask"></a>

#### Initializers <a name="Initializers" id="cdk-ans.CommandTask.Initializer"></a>

```typescript
import { CommandTask } from 'cdk-ans'

new CommandTask(scope: Construct, name: string, props: CommandTaskProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.CommandTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.CommandTaskProps">CommandTaskProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.CommandTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.CommandTask.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.CommandTask.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.CommandTaskProps">CommandTaskProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.CommandTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.CommandTask.toJson">toJson</a></code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.next">next</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.CommandTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toJson` <a name="toJson" id="cdk-ans.CommandTask.toJson"></a>

```typescript
public toJson(): any
```

##### `next` <a name="next" id="cdk-ans.CommandTask.next"></a>

```typescript
public next(next: ITaskChainable): TaskDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.CommandTask.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.CommandTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.CommandTask.isConstruct"></a>

```typescript
import { CommandTask } from 'cdk-ans'

CommandTask.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.CommandTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.CommandTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.CommandTask.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.action">action</a></code> | <code><a href="#cdk-ans.TaskAction">TaskAction</a></code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.args">args</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.async">async</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.changedWhen">changedWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.delay">delay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.delegateFacts">delegateFacts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.delegateTo">delegateTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.failedWhen">failedWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.localAction">localAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.loop">loop</a></code> | <code>string \| string[]</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.loopControl">loopControl</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.notify">notify</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.poll">poll</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.register">register</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.until">until</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.when">when</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.with">with</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTask.property.withItems">withItems</a></code> | <code>{[ key: string ]: any}[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.CommandTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.CommandTask.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.CommandTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.CommandTask.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.CommandTask.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.CommandTask.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.CommandTask.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.CommandTask.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.CommandTask.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.CommandTask.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.CommandTask.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.CommandTask.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.CommandTask.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.CommandTask.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.CommandTask.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.CommandTask.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.CommandTask.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.CommandTask.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.CommandTask.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.CommandTask.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.CommandTask.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.CommandTask.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.CommandTask.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.CommandTask.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.CommandTask.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.CommandTask.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ans.CommandTask.property.action"></a>

```typescript
public readonly action: TaskAction;
```

- *Type:* <a href="#cdk-ans.TaskAction">TaskAction</a>

---

##### `args`<sup>Optional</sup> <a name="args" id="cdk-ans.CommandTask.property.args"></a>

```typescript
public readonly args: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `async`<sup>Optional</sup> <a name="async" id="cdk-ans.CommandTask.property.async"></a>

```typescript
public readonly async: number;
```

- *Type:* number

---

##### `changedWhen`<sup>Optional</sup> <a name="changedWhen" id="cdk-ans.CommandTask.property.changedWhen"></a>

```typescript
public readonly changedWhen: string;
```

- *Type:* string

---

##### `delay`<sup>Optional</sup> <a name="delay" id="cdk-ans.CommandTask.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

---

##### `delegateFacts`<sup>Optional</sup> <a name="delegateFacts" id="cdk-ans.CommandTask.property.delegateFacts"></a>

```typescript
public readonly delegateFacts: boolean;
```

- *Type:* boolean

---

##### `delegateTo`<sup>Optional</sup> <a name="delegateTo" id="cdk-ans.CommandTask.property.delegateTo"></a>

```typescript
public readonly delegateTo: string;
```

- *Type:* string

---

##### `failedWhen`<sup>Optional</sup> <a name="failedWhen" id="cdk-ans.CommandTask.property.failedWhen"></a>

```typescript
public readonly failedWhen: string;
```

- *Type:* string

---

##### `localAction`<sup>Optional</sup> <a name="localAction" id="cdk-ans.CommandTask.property.localAction"></a>

```typescript
public readonly localAction: string;
```

- *Type:* string

---

##### `loop`<sup>Optional</sup> <a name="loop" id="cdk-ans.CommandTask.property.loop"></a>

```typescript
public readonly loop: string | string[];
```

- *Type:* string | string[]

---

##### `loopControl`<sup>Optional</sup> <a name="loopControl" id="cdk-ans.CommandTask.property.loopControl"></a>

```typescript
public readonly loopControl: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `notify`<sup>Optional</sup> <a name="notify" id="cdk-ans.CommandTask.property.notify"></a>

```typescript
public readonly notify: Handler[];
```

- *Type:* <a href="#cdk-ans.Handler">Handler</a>[]

---

##### `poll`<sup>Optional</sup> <a name="poll" id="cdk-ans.CommandTask.property.poll"></a>

```typescript
public readonly poll: number;
```

- *Type:* number

---

##### `register`<sup>Optional</sup> <a name="register" id="cdk-ans.CommandTask.property.register"></a>

```typescript
public readonly register: string;
```

- *Type:* string

---

##### `retries`<sup>Optional</sup> <a name="retries" id="cdk-ans.CommandTask.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `until`<sup>Optional</sup> <a name="until" id="cdk-ans.CommandTask.property.until"></a>

```typescript
public readonly until: string;
```

- *Type:* string

---

##### `when`<sup>Optional</sup> <a name="when" id="cdk-ans.CommandTask.property.when"></a>

```typescript
public readonly when: string;
```

- *Type:* string

---

##### `with`<sup>Optional</sup> <a name="with" id="cdk-ans.CommandTask.property.with"></a>

```typescript
public readonly with: string[];
```

- *Type:* string[]

---

##### `withItems`<sup>Optional</sup> <a name="withItems" id="cdk-ans.CommandTask.property.withItems"></a>

```typescript
public readonly withItems: {[ key: string ]: any}[];
```

- *Type:* {[ key: string ]: any}[]

---


### File <a name="File" id="cdk-ans.File"></a>

#### Initializers <a name="Initializers" id="cdk-ans.File.Initializer"></a>

```typescript
import { File } from 'cdk-ans'

new File(scope: Construct, name: string, props: FileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.File.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.File.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.File.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.FileProps">FileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.File.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.File.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.File.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.FileProps">FileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.File.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-ans.File.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.File.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.File.isConstruct"></a>

```typescript
import { File } from 'cdk-ans'

File.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.File.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.File.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.File.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.File.property.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.File.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="cdk-ans.File.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-ans.File.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---


### FileTask <a name="FileTask" id="cdk-ans.FileTask"></a>

#### Initializers <a name="Initializers" id="cdk-ans.FileTask.Initializer"></a>

```typescript
import { FileTask } from 'cdk-ans'

new FileTask(scope: Construct, name: string, props: FileTaskProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.FileTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.FileTaskProps">FileTaskProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.FileTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.FileTask.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.FileTask.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.FileTaskProps">FileTaskProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.FileTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.FileTask.toJson">toJson</a></code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.next">next</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.FileTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toJson` <a name="toJson" id="cdk-ans.FileTask.toJson"></a>

```typescript
public toJson(): any
```

##### `next` <a name="next" id="cdk-ans.FileTask.next"></a>

```typescript
public next(next: ITaskChainable): TaskDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.FileTask.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.FileTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.FileTask.isConstruct"></a>

```typescript
import { FileTask } from 'cdk-ans'

FileTask.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.FileTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.FileTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.FileTask.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.action">action</a></code> | <code><a href="#cdk-ans.TaskAction">TaskAction</a></code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.args">args</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.async">async</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.changedWhen">changedWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.delay">delay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.delegateFacts">delegateFacts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.delegateTo">delegateTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.failedWhen">failedWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.localAction">localAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.loop">loop</a></code> | <code>string \| string[]</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.loopControl">loopControl</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.notify">notify</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.poll">poll</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.register">register</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.until">until</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.when">when</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.with">with</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.FileTask.property.withItems">withItems</a></code> | <code>{[ key: string ]: any}[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.FileTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.FileTask.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.FileTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.FileTask.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.FileTask.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.FileTask.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.FileTask.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.FileTask.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.FileTask.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.FileTask.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.FileTask.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.FileTask.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.FileTask.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.FileTask.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.FileTask.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.FileTask.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.FileTask.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.FileTask.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.FileTask.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.FileTask.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.FileTask.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.FileTask.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.FileTask.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.FileTask.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.FileTask.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.FileTask.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ans.FileTask.property.action"></a>

```typescript
public readonly action: TaskAction;
```

- *Type:* <a href="#cdk-ans.TaskAction">TaskAction</a>

---

##### `args`<sup>Optional</sup> <a name="args" id="cdk-ans.FileTask.property.args"></a>

```typescript
public readonly args: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `async`<sup>Optional</sup> <a name="async" id="cdk-ans.FileTask.property.async"></a>

```typescript
public readonly async: number;
```

- *Type:* number

---

##### `changedWhen`<sup>Optional</sup> <a name="changedWhen" id="cdk-ans.FileTask.property.changedWhen"></a>

```typescript
public readonly changedWhen: string;
```

- *Type:* string

---

##### `delay`<sup>Optional</sup> <a name="delay" id="cdk-ans.FileTask.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

---

##### `delegateFacts`<sup>Optional</sup> <a name="delegateFacts" id="cdk-ans.FileTask.property.delegateFacts"></a>

```typescript
public readonly delegateFacts: boolean;
```

- *Type:* boolean

---

##### `delegateTo`<sup>Optional</sup> <a name="delegateTo" id="cdk-ans.FileTask.property.delegateTo"></a>

```typescript
public readonly delegateTo: string;
```

- *Type:* string

---

##### `failedWhen`<sup>Optional</sup> <a name="failedWhen" id="cdk-ans.FileTask.property.failedWhen"></a>

```typescript
public readonly failedWhen: string;
```

- *Type:* string

---

##### `localAction`<sup>Optional</sup> <a name="localAction" id="cdk-ans.FileTask.property.localAction"></a>

```typescript
public readonly localAction: string;
```

- *Type:* string

---

##### `loop`<sup>Optional</sup> <a name="loop" id="cdk-ans.FileTask.property.loop"></a>

```typescript
public readonly loop: string | string[];
```

- *Type:* string | string[]

---

##### `loopControl`<sup>Optional</sup> <a name="loopControl" id="cdk-ans.FileTask.property.loopControl"></a>

```typescript
public readonly loopControl: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `notify`<sup>Optional</sup> <a name="notify" id="cdk-ans.FileTask.property.notify"></a>

```typescript
public readonly notify: Handler[];
```

- *Type:* <a href="#cdk-ans.Handler">Handler</a>[]

---

##### `poll`<sup>Optional</sup> <a name="poll" id="cdk-ans.FileTask.property.poll"></a>

```typescript
public readonly poll: number;
```

- *Type:* number

---

##### `register`<sup>Optional</sup> <a name="register" id="cdk-ans.FileTask.property.register"></a>

```typescript
public readonly register: string;
```

- *Type:* string

---

##### `retries`<sup>Optional</sup> <a name="retries" id="cdk-ans.FileTask.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `until`<sup>Optional</sup> <a name="until" id="cdk-ans.FileTask.property.until"></a>

```typescript
public readonly until: string;
```

- *Type:* string

---

##### `when`<sup>Optional</sup> <a name="when" id="cdk-ans.FileTask.property.when"></a>

```typescript
public readonly when: string;
```

- *Type:* string

---

##### `with`<sup>Optional</sup> <a name="with" id="cdk-ans.FileTask.property.with"></a>

```typescript
public readonly with: string[];
```

- *Type:* string[]

---

##### `withItems`<sup>Optional</sup> <a name="withItems" id="cdk-ans.FileTask.property.withItems"></a>

```typescript
public readonly withItems: {[ key: string ]: any}[];
```

- *Type:* {[ key: string ]: any}[]

---


### Handler <a name="Handler" id="cdk-ans.Handler"></a>

#### Initializers <a name="Initializers" id="cdk-ans.Handler.Initializer"></a>

```typescript
import { Handler } from 'cdk-ans'

new Handler(scope: Construct, name: string, props: HandlerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Handler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.HandlerProps">HandlerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Handler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Handler.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.Handler.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.HandlerProps">HandlerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Handler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.Handler.toJson">toJson</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.Handler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toJson` <a name="toJson" id="cdk-ans.Handler.toJson"></a>

```typescript
public toJson(): any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Handler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.Handler.isConstruct"></a>

```typescript
import { Handler } from 'cdk-ans'

Handler.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Handler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Handler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.Handler.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.action">action</a></code> | <code><a href="#cdk-ans.TaskAction">TaskAction</a></code> | *No description.* |
| <code><a href="#cdk-ans.Handler.property.listen">listen</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Handler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.Handler.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Handler.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.Handler.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.Handler.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.Handler.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.Handler.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.Handler.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.Handler.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.Handler.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.Handler.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.Handler.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.Handler.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.Handler.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.Handler.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.Handler.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.Handler.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.Handler.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.Handler.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.Handler.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.Handler.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.Handler.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.Handler.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.Handler.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.Handler.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.Handler.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ans.Handler.property.action"></a>

```typescript
public readonly action: TaskAction;
```

- *Type:* <a href="#cdk-ans.TaskAction">TaskAction</a>

---

##### `listen`<sup>Optional</sup> <a name="listen" id="cdk-ans.Handler.property.listen"></a>

```typescript
public readonly listen: string;
```

- *Type:* string

---


### Host <a name="Host" id="cdk-ans.Host"></a>

- *Implements:* <a href="#cdk-ans.IHostIdentifiable">IHostIdentifiable</a>

#### Initializers <a name="Initializers" id="cdk-ans.Host.Initializer"></a>

```typescript
import { Host } from 'cdk-ans'

new Host(scope: Construct, name: string, props: HostProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Host.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Host.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Host.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.HostProps">HostProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Host.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Host.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.Host.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.HostProps">HostProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Host.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.Host.toJson">toJson</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.Host.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toJson` <a name="toJson" id="cdk-ans.Host.toJson"></a>

```typescript
public toJson(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Host.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-ans.Host.isHost">isHost</a></code> | Return whether the given object is a Host. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.Host.isConstruct"></a>

```typescript
import { Host } from 'cdk-ans'

Host.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Host.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isHost` <a name="isHost" id="cdk-ans.Host.isHost"></a>

```typescript
import { Host } from 'cdk-ans'

Host.isHost(x: any)
```

Return whether the given object is a Host.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Host.isHost.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Host.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.Host.property.ansibleConnection">ansibleConnection</a></code> | <code><a href="#cdk-ans.AnsibleConnection">AnsibleConnection</a></code> | *No description.* |
| <code><a href="#cdk-ans.Host.property.ansibleHost">ansibleHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Host.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Host.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdk-ans.Host.property.ansibleBecome">ansibleBecome</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Host.property.ansiblePassword">ansiblePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Host.property.ansiblePort">ansiblePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Host.property.ansibleUser">ansibleUser</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Host.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ansibleConnection`<sup>Required</sup> <a name="ansibleConnection" id="cdk-ans.Host.property.ansibleConnection"></a>

```typescript
public readonly ansibleConnection: AnsibleConnection;
```

- *Type:* <a href="#cdk-ans.AnsibleConnection">AnsibleConnection</a>

---

##### `ansibleHost`<sup>Required</sup> <a name="ansibleHost" id="cdk-ans.Host.property.ansibleHost"></a>

```typescript
public readonly ansibleHost: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="cdk-ans.Host.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="cdk-ans.Host.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ansibleBecome`<sup>Optional</sup> <a name="ansibleBecome" id="cdk-ans.Host.property.ansibleBecome"></a>

```typescript
public readonly ansibleBecome: boolean;
```

- *Type:* boolean

---

##### `ansiblePassword`<sup>Optional</sup> <a name="ansiblePassword" id="cdk-ans.Host.property.ansiblePassword"></a>

```typescript
public readonly ansiblePassword: string;
```

- *Type:* string

---

##### `ansiblePort`<sup>Optional</sup> <a name="ansiblePort" id="cdk-ans.Host.property.ansiblePort"></a>

```typescript
public readonly ansiblePort: number;
```

- *Type:* number

---

##### `ansibleUser`<sup>Optional</sup> <a name="ansibleUser" id="cdk-ans.Host.property.ansibleUser"></a>

```typescript
public readonly ansibleUser: string;
```

- *Type:* string

---


### HostGroup <a name="HostGroup" id="cdk-ans.HostGroup"></a>

- *Implements:* <a href="#cdk-ans.IHostIdentifiable">IHostIdentifiable</a>

#### Initializers <a name="Initializers" id="cdk-ans.HostGroup.Initializer"></a>

```typescript
import { HostGroup } from 'cdk-ans'

new HostGroup(scope: Construct, name: string, props?: HostGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.HostGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.HostGroupProps">HostGroupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.HostGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.HostGroup.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-ans.HostGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.HostGroupProps">HostGroupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.HostGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.HostGroup.addHosts">addHosts</a></code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.addSubGroups">addSubGroups</a></code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.addVariables">addVariables</a></code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.toJson">toJson</a></code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.toJsonMinimal">toJsonMinimal</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.HostGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addHosts` <a name="addHosts" id="cdk-ans.HostGroup.addHosts"></a>

```typescript
public addHosts(hosts: Host): void
```

###### `hosts`<sup>Required</sup> <a name="hosts" id="cdk-ans.HostGroup.addHosts.parameter.hosts"></a>

- *Type:* <a href="#cdk-ans.Host">Host</a>

---

##### `addSubGroups` <a name="addSubGroups" id="cdk-ans.HostGroup.addSubGroups"></a>

```typescript
public addSubGroups(groups: HostGroup): void
```

###### `groups`<sup>Required</sup> <a name="groups" id="cdk-ans.HostGroup.addSubGroups.parameter.groups"></a>

- *Type:* <a href="#cdk-ans.HostGroup">HostGroup</a>

---

##### `addVariables` <a name="addVariables" id="cdk-ans.HostGroup.addVariables"></a>

```typescript
public addVariables(variables: {[ key: string ]: string}): void
```

###### `variables`<sup>Required</sup> <a name="variables" id="cdk-ans.HostGroup.addVariables.parameter.variables"></a>

- *Type:* {[ key: string ]: string}

---

##### `toJson` <a name="toJson" id="cdk-ans.HostGroup.toJson"></a>

```typescript
public toJson(): {[ key: string ]: any}
```

##### `toJsonMinimal` <a name="toJsonMinimal" id="cdk-ans.HostGroup.toJsonMinimal"></a>

```typescript
public toJsonMinimal(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.HostGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.HostGroup.isConstruct"></a>

```typescript
import { HostGroup } from 'cdk-ans'

HostGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.HostGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.HostGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.HostGroup.property.groups">groups</a></code> | <code>{[ key: string ]: <a href="#cdk-ans.HostGroup">HostGroup</a>}</code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.property.hosts">hosts</a></code> | <code><a href="#cdk-ans.Host">Host</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.HostGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `groups`<sup>Required</sup> <a name="groups" id="cdk-ans.HostGroup.property.groups"></a>

```typescript
public readonly groups: {[ key: string ]: HostGroup};
```

- *Type:* {[ key: string ]: <a href="#cdk-ans.HostGroup">HostGroup</a>}

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="cdk-ans.HostGroup.property.hosts"></a>

```typescript
public readonly hosts: Host[];
```

- *Type:* <a href="#cdk-ans.Host">Host</a>[]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="cdk-ans.HostGroup.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="cdk-ans.HostGroup.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---


### Inventory <a name="Inventory" id="cdk-ans.Inventory"></a>

#### Initializers <a name="Initializers" id="cdk-ans.Inventory.Initializer"></a>

```typescript
import { Inventory } from 'cdk-ans'

new Inventory(scope: Construct, name: string, props: InventoryProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Inventory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Inventory.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Inventory.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.InventoryProps">InventoryProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Inventory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Inventory.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.Inventory.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.InventoryProps">InventoryProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Inventory.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-ans.Inventory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Inventory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.Inventory.isConstruct"></a>

```typescript
import { Inventory } from 'cdk-ans'

Inventory.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Inventory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Inventory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.Inventory.property.groups">groups</a></code> | <code><a href="#cdk-ans.HostGroup">HostGroup</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Inventory.property.hosts">hosts</a></code> | <code><a href="#cdk-ans.Host">Host</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Inventory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `groups`<sup>Required</sup> <a name="groups" id="cdk-ans.Inventory.property.groups"></a>

```typescript
public readonly groups: HostGroup[];
```

- *Type:* <a href="#cdk-ans.HostGroup">HostGroup</a>[]

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="cdk-ans.Inventory.property.hosts"></a>

```typescript
public readonly hosts: Host[];
```

- *Type:* <a href="#cdk-ans.Host">Host</a>[]

---


### PingTask <a name="PingTask" id="cdk-ans.PingTask"></a>

#### Initializers <a name="Initializers" id="cdk-ans.PingTask.Initializer"></a>

```typescript
import { PingTask } from 'cdk-ans'

new PingTask(scope: Construct, name: string, props?: PingTaskProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.PingTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.PingTaskProps">PingTaskProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.PingTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.PingTask.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-ans.PingTask.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.PingTaskProps">PingTaskProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.PingTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.PingTask.toJson">toJson</a></code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.next">next</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.PingTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toJson` <a name="toJson" id="cdk-ans.PingTask.toJson"></a>

```typescript
public toJson(): any
```

##### `next` <a name="next" id="cdk-ans.PingTask.next"></a>

```typescript
public next(next: ITaskChainable): TaskDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.PingTask.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.PingTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.PingTask.isConstruct"></a>

```typescript
import { PingTask } from 'cdk-ans'

PingTask.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.PingTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.PingTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.PingTask.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.action">action</a></code> | <code><a href="#cdk-ans.TaskAction">TaskAction</a></code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.args">args</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.async">async</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.changedWhen">changedWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.delay">delay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.delegateFacts">delegateFacts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.delegateTo">delegateTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.failedWhen">failedWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.localAction">localAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.loop">loop</a></code> | <code>string \| string[]</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.loopControl">loopControl</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.notify">notify</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.poll">poll</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.register">register</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.until">until</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.when">when</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.with">with</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.PingTask.property.withItems">withItems</a></code> | <code>{[ key: string ]: any}[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.PingTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.PingTask.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.PingTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.PingTask.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.PingTask.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.PingTask.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.PingTask.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.PingTask.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.PingTask.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.PingTask.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.PingTask.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.PingTask.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.PingTask.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.PingTask.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.PingTask.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.PingTask.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.PingTask.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.PingTask.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.PingTask.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.PingTask.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.PingTask.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.PingTask.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.PingTask.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.PingTask.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.PingTask.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.PingTask.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ans.PingTask.property.action"></a>

```typescript
public readonly action: TaskAction;
```

- *Type:* <a href="#cdk-ans.TaskAction">TaskAction</a>

---

##### `args`<sup>Optional</sup> <a name="args" id="cdk-ans.PingTask.property.args"></a>

```typescript
public readonly args: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `async`<sup>Optional</sup> <a name="async" id="cdk-ans.PingTask.property.async"></a>

```typescript
public readonly async: number;
```

- *Type:* number

---

##### `changedWhen`<sup>Optional</sup> <a name="changedWhen" id="cdk-ans.PingTask.property.changedWhen"></a>

```typescript
public readonly changedWhen: string;
```

- *Type:* string

---

##### `delay`<sup>Optional</sup> <a name="delay" id="cdk-ans.PingTask.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

---

##### `delegateFacts`<sup>Optional</sup> <a name="delegateFacts" id="cdk-ans.PingTask.property.delegateFacts"></a>

```typescript
public readonly delegateFacts: boolean;
```

- *Type:* boolean

---

##### `delegateTo`<sup>Optional</sup> <a name="delegateTo" id="cdk-ans.PingTask.property.delegateTo"></a>

```typescript
public readonly delegateTo: string;
```

- *Type:* string

---

##### `failedWhen`<sup>Optional</sup> <a name="failedWhen" id="cdk-ans.PingTask.property.failedWhen"></a>

```typescript
public readonly failedWhen: string;
```

- *Type:* string

---

##### `localAction`<sup>Optional</sup> <a name="localAction" id="cdk-ans.PingTask.property.localAction"></a>

```typescript
public readonly localAction: string;
```

- *Type:* string

---

##### `loop`<sup>Optional</sup> <a name="loop" id="cdk-ans.PingTask.property.loop"></a>

```typescript
public readonly loop: string | string[];
```

- *Type:* string | string[]

---

##### `loopControl`<sup>Optional</sup> <a name="loopControl" id="cdk-ans.PingTask.property.loopControl"></a>

```typescript
public readonly loopControl: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `notify`<sup>Optional</sup> <a name="notify" id="cdk-ans.PingTask.property.notify"></a>

```typescript
public readonly notify: Handler[];
```

- *Type:* <a href="#cdk-ans.Handler">Handler</a>[]

---

##### `poll`<sup>Optional</sup> <a name="poll" id="cdk-ans.PingTask.property.poll"></a>

```typescript
public readonly poll: number;
```

- *Type:* number

---

##### `register`<sup>Optional</sup> <a name="register" id="cdk-ans.PingTask.property.register"></a>

```typescript
public readonly register: string;
```

- *Type:* string

---

##### `retries`<sup>Optional</sup> <a name="retries" id="cdk-ans.PingTask.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `until`<sup>Optional</sup> <a name="until" id="cdk-ans.PingTask.property.until"></a>

```typescript
public readonly until: string;
```

- *Type:* string

---

##### `when`<sup>Optional</sup> <a name="when" id="cdk-ans.PingTask.property.when"></a>

```typescript
public readonly when: string;
```

- *Type:* string

---

##### `with`<sup>Optional</sup> <a name="with" id="cdk-ans.PingTask.property.with"></a>

```typescript
public readonly with: string[];
```

- *Type:* string[]

---

##### `withItems`<sup>Optional</sup> <a name="withItems" id="cdk-ans.PingTask.property.withItems"></a>

```typescript
public readonly withItems: {[ key: string ]: any}[];
```

- *Type:* {[ key: string ]: any}[]

---


### Play <a name="Play" id="cdk-ans.Play"></a>

- *Implements:* <a href="#cdk-ans.IPlayChainable">IPlayChainable</a>

A play is a collection of tasks and metadata to execute on a set of hosts.

Plays are chainable together to create a playbook

https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html#play

#### Initializers <a name="Initializers" id="cdk-ans.Play.Initializer"></a>

```typescript
import { Play } from 'cdk-ans'

new Play(scope: Construct, name: string, props: PlayProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Play.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Play.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Play.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.PlayProps">PlayProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Play.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Play.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.Play.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.PlayProps">PlayProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Play.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.Play.toJson">toJson</a></code> | *No description.* |
| <code><a href="#cdk-ans.Play.flattenHosts">flattenHosts</a></code> | *No description.* |
| <code><a href="#cdk-ans.Play.next">next</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.Play.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toJson` <a name="toJson" id="cdk-ans.Play.toJson"></a>

```typescript
public toJson(): any
```

##### `flattenHosts` <a name="flattenHosts" id="cdk-ans.Play.flattenHosts"></a>

```typescript
public flattenHosts(): string[]
```

##### `next` <a name="next" id="cdk-ans.Play.next"></a>

```typescript
public next(next: IPlayChainable): PlayDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.Play.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.IPlayChainable">IPlayChainable</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Play.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.Play.isConstruct"></a>

```typescript
import { Play } from 'cdk-ans'

Play.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Play.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Play.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.Play.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.hosts">hosts</a></code> | <code><a href="#cdk-ans.IHostIdentifiable">IHostIdentifiable</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.factPath">factPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.forceHandlers">forceHandlers</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.gatherFacts">gatherFacts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.gatherSubset">gatherSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.gatherTimeout">gatherTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.handlers">handlers</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.maxFailPercentage">maxFailPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.order">order</a></code> | <code><a href="#cdk-ans.PlayHostOrder">PlayHostOrder</a></code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.postTasks">postTasks</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.preTasks">preTasks</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.roles">roles</a></code> | <code><a href="#cdk-ans.RoleDefinition">RoleDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.serial">serial</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.tasks">tasks</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.varPrompt">varPrompt</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Play.property.varsFiles">varsFiles</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Play.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.Play.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Play.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="cdk-ans.Play.property.hosts"></a>

```typescript
public readonly hosts: IHostIdentifiable[];
```

- *Type:* <a href="#cdk-ans.IHostIdentifiable">IHostIdentifiable</a>[]

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.Play.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.Play.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.Play.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.Play.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.Play.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.Play.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.Play.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.Play.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.Play.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.Play.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.Play.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.Play.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `factPath`<sup>Optional</sup> <a name="factPath" id="cdk-ans.Play.property.factPath"></a>

```typescript
public readonly factPath: string;
```

- *Type:* string

---

##### `forceHandlers`<sup>Optional</sup> <a name="forceHandlers" id="cdk-ans.Play.property.forceHandlers"></a>

```typescript
public readonly forceHandlers: boolean;
```

- *Type:* boolean

---

##### `gatherFacts`<sup>Optional</sup> <a name="gatherFacts" id="cdk-ans.Play.property.gatherFacts"></a>

```typescript
public readonly gatherFacts: boolean;
```

- *Type:* boolean

---

##### `gatherSubset`<sup>Optional</sup> <a name="gatherSubset" id="cdk-ans.Play.property.gatherSubset"></a>

```typescript
public readonly gatherSubset: string;
```

- *Type:* string

---

##### `gatherTimeout`<sup>Optional</sup> <a name="gatherTimeout" id="cdk-ans.Play.property.gatherTimeout"></a>

```typescript
public readonly gatherTimeout: number;
```

- *Type:* number

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="cdk-ans.Play.property.handlers"></a>

```typescript
public readonly handlers: Handler[];
```

- *Type:* <a href="#cdk-ans.Handler">Handler</a>[]

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.Play.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.Play.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `maxFailPercentage`<sup>Optional</sup> <a name="maxFailPercentage" id="cdk-ans.Play.property.maxFailPercentage"></a>

```typescript
public readonly maxFailPercentage: number;
```

- *Type:* number

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.Play.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.Play.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `order`<sup>Optional</sup> <a name="order" id="cdk-ans.Play.property.order"></a>

```typescript
public readonly order: PlayHostOrder;
```

- *Type:* <a href="#cdk-ans.PlayHostOrder">PlayHostOrder</a>

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.Play.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `postTasks`<sup>Optional</sup> <a name="postTasks" id="cdk-ans.Play.property.postTasks"></a>

```typescript
public readonly postTasks: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `preTasks`<sup>Optional</sup> <a name="preTasks" id="cdk-ans.Play.property.preTasks"></a>

```typescript
public readonly preTasks: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.Play.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `roles`<sup>Optional</sup> <a name="roles" id="cdk-ans.Play.property.roles"></a>

```typescript
public readonly roles: RoleDefinition;
```

- *Type:* <a href="#cdk-ans.RoleDefinition">RoleDefinition</a>

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.Play.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `serial`<sup>Optional</sup> <a name="serial" id="cdk-ans.Play.property.serial"></a>

```typescript
public readonly serial: number;
```

- *Type:* number

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="cdk-ans.Play.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.Play.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="cdk-ans.Play.property.tasks"></a>

```typescript
public readonly tasks: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.Play.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.Play.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `varPrompt`<sup>Optional</sup> <a name="varPrompt" id="cdk-ans.Play.property.varPrompt"></a>

```typescript
public readonly varPrompt: string[];
```

- *Type:* string[]

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.Play.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `varsFiles`<sup>Optional</sup> <a name="varsFiles" id="cdk-ans.Play.property.varsFiles"></a>

```typescript
public readonly varsFiles: string[];
```

- *Type:* string[]

---


### Playbook <a name="Playbook" id="cdk-ans.Playbook"></a>

#### Initializers <a name="Initializers" id="cdk-ans.Playbook.Initializer"></a>

```typescript
import { Playbook } from 'cdk-ans'

new Playbook(scope: Construct, name: string, props: PlaybookProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Playbook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Playbook.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Playbook.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.PlaybookProps">PlaybookProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Playbook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Playbook.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.Playbook.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.PlaybookProps">PlaybookProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Playbook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.Playbook.toJson">toJson</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.Playbook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toJson` <a name="toJson" id="cdk-ans.Playbook.toJson"></a>

```typescript
public toJson(): any[]
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Playbook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.Playbook.isConstruct"></a>

```typescript
import { Playbook } from 'cdk-ans'

Playbook.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Playbook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Playbook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.Playbook.property.playDefinition">playDefinition</a></code> | <code><a href="#cdk-ans.PlayDefinition">PlayDefinition</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Playbook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `playDefinition`<sup>Required</sup> <a name="playDefinition" id="cdk-ans.Playbook.property.playDefinition"></a>

```typescript
public readonly playDefinition: PlayDefinition;
```

- *Type:* <a href="#cdk-ans.PlayDefinition">PlayDefinition</a>

---


### Project <a name="Project" id="cdk-ans.Project"></a>

#### Initializers <a name="Initializers" id="cdk-ans.Project.Initializer"></a>

```typescript
import { Project } from 'cdk-ans'

new Project(scope: Construct, name: string, props?: ProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Project.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Project.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.ProjectProps">ProjectProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Project.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-ans.Project.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.ProjectProps">ProjectProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Project.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-ans.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.Project.isConstruct"></a>

```typescript
import { Project } from 'cdk-ans'

Project.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Project.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.Project.property.inventories">inventories</a></code> | <code><a href="#cdk-ans.Inventory">Inventory</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Project.property.playbooks">playbooks</a></code> | <code><a href="#cdk-ans.Playbook">Playbook</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Project.property.roles">roles</a></code> | <code><a href="#cdk-ans.Role">Role</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `inventories`<sup>Required</sup> <a name="inventories" id="cdk-ans.Project.property.inventories"></a>

```typescript
public readonly inventories: Inventory[];
```

- *Type:* <a href="#cdk-ans.Inventory">Inventory</a>[]

---

##### `playbooks`<sup>Required</sup> <a name="playbooks" id="cdk-ans.Project.property.playbooks"></a>

```typescript
public readonly playbooks: Playbook[];
```

- *Type:* <a href="#cdk-ans.Playbook">Playbook</a>[]

---

##### `roles`<sup>Required</sup> <a name="roles" id="cdk-ans.Project.property.roles"></a>

```typescript
public readonly roles: Role[];
```

- *Type:* <a href="#cdk-ans.Role">Role</a>[]

---


### Resource <a name="Resource" id="cdk-ans.Resource"></a>

#### Initializers <a name="Initializers" id="cdk-ans.Resource.Initializer"></a>

```typescript
import { Resource } from 'cdk-ans'

new Resource(scope: Construct, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Resource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Resource.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Resource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Resource.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Resource.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-ans.Resource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Resource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.Resource.isConstruct"></a>

```typescript
import { Resource } from 'cdk-ans'

Resource.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Resource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Resource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Resource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Role <a name="Role" id="cdk-ans.Role"></a>

#### Initializers <a name="Initializers" id="cdk-ans.Role.Initializer"></a>

```typescript
import { Role } from 'cdk-ans'

new Role(scope: Construct, name: string, props: RoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Role.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Role.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Role.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.RoleProps">RoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Role.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Role.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.Role.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.RoleProps">RoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Role.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.Role.addDefaultVariables">addDefaultVariables</a></code> | *No description.* |
| <code><a href="#cdk-ans.Role.addFile">addFile</a></code> | *No description.* |
| <code><a href="#cdk-ans.Role.addHandler">addHandler</a></code> | *No description.* |
| <code><a href="#cdk-ans.Role.addTask">addTask</a></code> | *No description.* |
| <code><a href="#cdk-ans.Role.addTemplate">addTemplate</a></code> | *No description.* |
| <code><a href="#cdk-ans.Role.addVariables">addVariables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.Role.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDefaultVariables` <a name="addDefaultVariables" id="cdk-ans.Role.addDefaultVariables"></a>

```typescript
public addDefaultVariables(variables: {[ key: string ]: any}): void
```

###### `variables`<sup>Required</sup> <a name="variables" id="cdk-ans.Role.addDefaultVariables.parameter.variables"></a>

- *Type:* {[ key: string ]: any}

---

##### `addFile` <a name="addFile" id="cdk-ans.Role.addFile"></a>

```typescript
public addFile(file: File): void
```

###### `file`<sup>Required</sup> <a name="file" id="cdk-ans.Role.addFile.parameter.file"></a>

- *Type:* <a href="#cdk-ans.File">File</a>

---

##### `addHandler` <a name="addHandler" id="cdk-ans.Role.addHandler"></a>

```typescript
public addHandler(handler: Handler): void
```

###### `handler`<sup>Required</sup> <a name="handler" id="cdk-ans.Role.addHandler.parameter.handler"></a>

- *Type:* <a href="#cdk-ans.Handler">Handler</a>

---

##### `addTask` <a name="addTask" id="cdk-ans.Role.addTask"></a>

```typescript
public addTask(task: Task): void
```

###### `task`<sup>Required</sup> <a name="task" id="cdk-ans.Role.addTask.parameter.task"></a>

- *Type:* <a href="#cdk-ans.Task">Task</a>

---

##### `addTemplate` <a name="addTemplate" id="cdk-ans.Role.addTemplate"></a>

```typescript
public addTemplate(template: TemplateFile): void
```

###### `template`<sup>Required</sup> <a name="template" id="cdk-ans.Role.addTemplate.parameter.template"></a>

- *Type:* <a href="#cdk-ans.TemplateFile">TemplateFile</a>

---

##### `addVariables` <a name="addVariables" id="cdk-ans.Role.addVariables"></a>

```typescript
public addVariables(variables: {[ key: string ]: any}): void
```

###### `variables`<sup>Required</sup> <a name="variables" id="cdk-ans.Role.addVariables.parameter.variables"></a>

- *Type:* {[ key: string ]: any}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Role.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.Role.isConstruct"></a>

```typescript
import { Role } from 'cdk-ans'

Role.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Role.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Role.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.Role.property.defaults">defaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Role.property.files">files</a></code> | <code><a href="#cdk-ans.File">File</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Role.property.handlers">handlers</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Role.property.tasks">tasks</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.Role.property.templates">templates</a></code> | <code><a href="#cdk-ans.TemplateFile">TemplateFile</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Role.property.variables">variables</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Role.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `defaults`<sup>Required</sup> <a name="defaults" id="cdk-ans.Role.property.defaults"></a>

```typescript
public readonly defaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `files`<sup>Required</sup> <a name="files" id="cdk-ans.Role.property.files"></a>

```typescript
public readonly files: File[];
```

- *Type:* <a href="#cdk-ans.File">File</a>[]

---

##### `handlers`<sup>Required</sup> <a name="handlers" id="cdk-ans.Role.property.handlers"></a>

```typescript
public readonly handlers: Handler[];
```

- *Type:* <a href="#cdk-ans.Handler">Handler</a>[]

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="cdk-ans.Role.property.tasks"></a>

```typescript
public readonly tasks: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `templates`<sup>Required</sup> <a name="templates" id="cdk-ans.Role.property.templates"></a>

```typescript
public readonly templates: TemplateFile[];
```

- *Type:* <a href="#cdk-ans.TemplateFile">TemplateFile</a>[]

---

##### `variables`<sup>Required</sup> <a name="variables" id="cdk-ans.Role.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---


### RoleTarget <a name="RoleTarget" id="cdk-ans.RoleTarget"></a>

- *Implements:* <a href="#cdk-ans.IRoleChainable">IRoleChainable</a>

Represents a targetted role for use within a playbook.

https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html#role

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.RoleTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.RoleTarget.toJson">toJson</a></code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.next">next</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.RoleTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toJson` <a name="toJson" id="cdk-ans.RoleTarget.toJson"></a>

```typescript
public toJson(): any
```

##### `next` <a name="next" id="cdk-ans.RoleTarget.next"></a>

```typescript
public next(next: IRoleChainable): RoleDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.RoleTarget.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.IRoleChainable">IRoleChainable</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.RoleTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-ans.RoleTarget.fromRole">fromRole</a></code> | Creates a role target from a role. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.RoleTarget.isConstruct"></a>

```typescript
import { RoleTarget } from 'cdk-ans'

RoleTarget.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.RoleTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromRole` <a name="fromRole" id="cdk-ans.RoleTarget.fromRole"></a>

```typescript
import { RoleTarget } from 'cdk-ans'

RoleTarget.fromRole(scope: Construct, role: Role, props?: RoleTargetProps)
```

Creates a role target from a role.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.RoleTarget.fromRole.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `role`<sup>Required</sup> <a name="role" id="cdk-ans.RoleTarget.fromRole.parameter.role"></a>

- *Type:* <a href="#cdk-ans.Role">Role</a>

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-ans.RoleTarget.fromRole.parameter.props"></a>

- *Type:* <a href="#cdk-ans.RoleTargetProps">RoleTargetProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.RoleTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.RoleTarget.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.role">role</a></code> | <code><a href="#cdk-ans.Role">Role</a></code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.delegateFacts">delegateFacts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.delegateTo">delegateTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTarget.property.when">when</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.RoleTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.RoleTarget.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.RoleTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="cdk-ans.RoleTarget.property.role"></a>

```typescript
public readonly role: Role;
```

- *Type:* <a href="#cdk-ans.Role">Role</a>

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.RoleTarget.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.RoleTarget.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.RoleTarget.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.RoleTarget.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.RoleTarget.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.RoleTarget.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.RoleTarget.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.RoleTarget.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.RoleTarget.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.RoleTarget.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `delegateFacts`<sup>Optional</sup> <a name="delegateFacts" id="cdk-ans.RoleTarget.property.delegateFacts"></a>

```typescript
public readonly delegateFacts: boolean;
```

- *Type:* boolean

---

##### `delegateTo`<sup>Optional</sup> <a name="delegateTo" id="cdk-ans.RoleTarget.property.delegateTo"></a>

```typescript
public readonly delegateTo: string;
```

- *Type:* string

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.RoleTarget.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.RoleTarget.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.RoleTarget.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.RoleTarget.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.RoleTarget.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.RoleTarget.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.RoleTarget.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.RoleTarget.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.RoleTarget.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.RoleTarget.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.RoleTarget.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.RoleTarget.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.RoleTarget.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `when`<sup>Optional</sup> <a name="when" id="cdk-ans.RoleTarget.property.when"></a>

```typescript
public readonly when: string;
```

- *Type:* string

---


### Step <a name="Step" id="cdk-ans.Step"></a>

#### Initializers <a name="Initializers" id="cdk-ans.Step.Initializer"></a>

```typescript
import { Step } from 'cdk-ans'

new Step(scope: Construct, name: string, props: StepProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Step.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Step.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Step.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.StepProps">StepProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Step.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Step.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.Step.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.StepProps">StepProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Step.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.Step.toJson">toJson</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.Step.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toJson` <a name="toJson" id="cdk-ans.Step.toJson"></a>

```typescript
public toJson(): any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Step.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.Step.isConstruct"></a>

```typescript
import { Step } from 'cdk-ans'

Step.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Step.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Step.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.Step.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Step.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Step.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.Step.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Step.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---


### Task <a name="Task" id="cdk-ans.Task"></a>

- *Implements:* <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

#### Initializers <a name="Initializers" id="cdk-ans.Task.Initializer"></a>

```typescript
import { Task } from 'cdk-ans'

new Task(scope: Construct, name: string, props: TaskProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Task.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Task.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.TaskProps">TaskProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Task.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Task.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.Task.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.TaskProps">TaskProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Task.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.Task.toJson">toJson</a></code> | *No description.* |
| <code><a href="#cdk-ans.Task.next">next</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.Task.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toJson` <a name="toJson" id="cdk-ans.Task.toJson"></a>

```typescript
public toJson(): any
```

##### `next` <a name="next" id="cdk-ans.Task.next"></a>

```typescript
public next(next: ITaskChainable): TaskDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.Task.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Task.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.Task.isConstruct"></a>

```typescript
import { Task } from 'cdk-ans'

Task.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Task.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Task.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.Task.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.action">action</a></code> | <code><a href="#cdk-ans.TaskAction">TaskAction</a></code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.args">args</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.async">async</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.changedWhen">changedWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.delay">delay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.delegateFacts">delegateFacts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.delegateTo">delegateTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.failedWhen">failedWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.localAction">localAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.loop">loop</a></code> | <code>string \| string[]</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.loopControl">loopControl</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.notify">notify</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.poll">poll</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.register">register</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.until">until</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.when">when</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.with">with</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.withItems">withItems</a></code> | <code>{[ key: string ]: any}[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Task.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.Task.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Task.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.Task.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.Task.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.Task.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.Task.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.Task.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.Task.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.Task.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.Task.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.Task.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.Task.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.Task.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.Task.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.Task.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.Task.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.Task.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.Task.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.Task.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.Task.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.Task.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.Task.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.Task.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.Task.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.Task.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ans.Task.property.action"></a>

```typescript
public readonly action: TaskAction;
```

- *Type:* <a href="#cdk-ans.TaskAction">TaskAction</a>

---

##### `args`<sup>Optional</sup> <a name="args" id="cdk-ans.Task.property.args"></a>

```typescript
public readonly args: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `async`<sup>Optional</sup> <a name="async" id="cdk-ans.Task.property.async"></a>

```typescript
public readonly async: number;
```

- *Type:* number

---

##### `changedWhen`<sup>Optional</sup> <a name="changedWhen" id="cdk-ans.Task.property.changedWhen"></a>

```typescript
public readonly changedWhen: string;
```

- *Type:* string

---

##### `delay`<sup>Optional</sup> <a name="delay" id="cdk-ans.Task.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

---

##### `delegateFacts`<sup>Optional</sup> <a name="delegateFacts" id="cdk-ans.Task.property.delegateFacts"></a>

```typescript
public readonly delegateFacts: boolean;
```

- *Type:* boolean

---

##### `delegateTo`<sup>Optional</sup> <a name="delegateTo" id="cdk-ans.Task.property.delegateTo"></a>

```typescript
public readonly delegateTo: string;
```

- *Type:* string

---

##### `failedWhen`<sup>Optional</sup> <a name="failedWhen" id="cdk-ans.Task.property.failedWhen"></a>

```typescript
public readonly failedWhen: string;
```

- *Type:* string

---

##### `localAction`<sup>Optional</sup> <a name="localAction" id="cdk-ans.Task.property.localAction"></a>

```typescript
public readonly localAction: string;
```

- *Type:* string

---

##### `loop`<sup>Optional</sup> <a name="loop" id="cdk-ans.Task.property.loop"></a>

```typescript
public readonly loop: string | string[];
```

- *Type:* string | string[]

---

##### `loopControl`<sup>Optional</sup> <a name="loopControl" id="cdk-ans.Task.property.loopControl"></a>

```typescript
public readonly loopControl: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `notify`<sup>Optional</sup> <a name="notify" id="cdk-ans.Task.property.notify"></a>

```typescript
public readonly notify: Handler[];
```

- *Type:* <a href="#cdk-ans.Handler">Handler</a>[]

---

##### `poll`<sup>Optional</sup> <a name="poll" id="cdk-ans.Task.property.poll"></a>

```typescript
public readonly poll: number;
```

- *Type:* number

---

##### `register`<sup>Optional</sup> <a name="register" id="cdk-ans.Task.property.register"></a>

```typescript
public readonly register: string;
```

- *Type:* string

---

##### `retries`<sup>Optional</sup> <a name="retries" id="cdk-ans.Task.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `until`<sup>Optional</sup> <a name="until" id="cdk-ans.Task.property.until"></a>

```typescript
public readonly until: string;
```

- *Type:* string

---

##### `when`<sup>Optional</sup> <a name="when" id="cdk-ans.Task.property.when"></a>

```typescript
public readonly when: string;
```

- *Type:* string

---

##### `with`<sup>Optional</sup> <a name="with" id="cdk-ans.Task.property.with"></a>

```typescript
public readonly with: string[];
```

- *Type:* string[]

---

##### `withItems`<sup>Optional</sup> <a name="withItems" id="cdk-ans.Task.property.withItems"></a>

```typescript
public readonly withItems: {[ key: string ]: any}[];
```

- *Type:* {[ key: string ]: any}[]

---


### TaskBase <a name="TaskBase" id="cdk-ans.TaskBase"></a>

#### Initializers <a name="Initializers" id="cdk-ans.TaskBase.Initializer"></a>

```typescript
import { TaskBase } from 'cdk-ans'

new TaskBase(scope: Construct, name: string, props: TaskBaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.TaskBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.TaskBaseProps">TaskBaseProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.TaskBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.TaskBase.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.TaskBase.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.TaskBaseProps">TaskBaseProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.TaskBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.TaskBase.toJson">toJson</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.TaskBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `toJson` <a name="toJson" id="cdk-ans.TaskBase.toJson"></a>

```typescript
public toJson(): any
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.TaskBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.TaskBase.isConstruct"></a>

```typescript
import { TaskBase } from 'cdk-ans'

TaskBase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.TaskBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.TaskBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.TaskBase.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBase.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.TaskBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.TaskBase.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.TaskBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.TaskBase.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.TaskBase.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.TaskBase.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.TaskBase.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.TaskBase.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.TaskBase.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.TaskBase.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.TaskBase.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.TaskBase.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.TaskBase.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.TaskBase.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.TaskBase.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.TaskBase.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.TaskBase.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.TaskBase.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.TaskBase.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.TaskBase.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.TaskBase.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.TaskBase.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.TaskBase.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.TaskBase.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.TaskBase.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.TaskBase.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---


### TemplateFile <a name="TemplateFile" id="cdk-ans.TemplateFile"></a>

#### Initializers <a name="Initializers" id="cdk-ans.TemplateFile.Initializer"></a>

```typescript
import { TemplateFile } from 'cdk-ans'

new TemplateFile(scope: Construct, name: string, props: TemplateFileProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.TemplateFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.TemplateFile.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TemplateFile.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.TemplateFileProps">TemplateFileProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.TemplateFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.TemplateFile.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.TemplateFile.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.TemplateFileProps">TemplateFileProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.TemplateFile.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-ans.TemplateFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.TemplateFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.TemplateFile.isConstruct"></a>

```typescript
import { TemplateFile } from 'cdk-ans'

TemplateFile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.TemplateFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.TemplateFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.TemplateFile.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TemplateFile.property.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.TemplateFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="cdk-ans.TemplateFile.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-ans.TemplateFile.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### AppProps <a name="AppProps" id="cdk-ans.AppProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.AppProps.Initializer"></a>

```typescript
import { AppProps } from 'cdk-ans'

const appProps: AppProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.AppProps.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.AppProps.property.synthesizer">synthesizer</a></code> | <code><a href="#cdk-ans.ISynthesizer">ISynthesizer</a></code> | *No description.* |

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="cdk-ans.AppProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* CDKANS_OUTDIR if defined, otherwise "dist"

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="cdk-ans.AppProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: ISynthesizer;
```

- *Type:* <a href="#cdk-ans.ISynthesizer">ISynthesizer</a>

---

### BlockProps <a name="BlockProps" id="cdk-ans.BlockProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.BlockProps.Initializer"></a>

```typescript
import { BlockProps } from 'cdk-ans'

const blockProps: BlockProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.BlockProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.tasks">tasks</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.always">always</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.delegateFacts">delegateFacts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.delegateTo">delegateTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.notify">notify</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.rescue">rescue</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.BlockProps.property.when">when</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.BlockProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.BlockProps.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.BlockProps.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.BlockProps.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.BlockProps.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.BlockProps.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.BlockProps.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.BlockProps.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.BlockProps.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.BlockProps.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.BlockProps.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.BlockProps.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.BlockProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.BlockProps.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.BlockProps.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.BlockProps.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.BlockProps.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.BlockProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.BlockProps.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.BlockProps.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.BlockProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.BlockProps.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.BlockProps.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.BlockProps.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="cdk-ans.BlockProps.property.tasks"></a>

```typescript
public readonly tasks: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `always`<sup>Optional</sup> <a name="always" id="cdk-ans.BlockProps.property.always"></a>

```typescript
public readonly always: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `delegateFacts`<sup>Optional</sup> <a name="delegateFacts" id="cdk-ans.BlockProps.property.delegateFacts"></a>

```typescript
public readonly delegateFacts: boolean;
```

- *Type:* boolean

---

##### `delegateTo`<sup>Optional</sup> <a name="delegateTo" id="cdk-ans.BlockProps.property.delegateTo"></a>

```typescript
public readonly delegateTo: string;
```

- *Type:* string

---

##### `notify`<sup>Optional</sup> <a name="notify" id="cdk-ans.BlockProps.property.notify"></a>

```typescript
public readonly notify: Handler[];
```

- *Type:* <a href="#cdk-ans.Handler">Handler</a>[]

---

##### `rescue`<sup>Optional</sup> <a name="rescue" id="cdk-ans.BlockProps.property.rescue"></a>

```typescript
public readonly rescue: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `when`<sup>Optional</sup> <a name="when" id="cdk-ans.BlockProps.property.when"></a>

```typescript
public readonly when: string;
```

- *Type:* string

---

### CommandTaskActionProps <a name="CommandTaskActionProps" id="cdk-ans.CommandTaskActionProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.CommandTaskActionProps.Initializer"></a>

```typescript
import { CommandTaskActionProps } from 'cdk-ans'

const commandTaskActionProps: CommandTaskActionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.CommandTaskActionProps.property.cmd">cmd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskActionProps.property.argv">argv</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskActionProps.property.chdir">chdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskActionProps.property.creates">creates</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskActionProps.property.removes">removes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskActionProps.property.stdin">stdin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskActionProps.property.stdinAddNewline">stdinAddNewline</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskActionProps.property.stdinEmptyEnds">stdinEmptyEnds</a></code> | <code>boolean</code> | *No description.* |

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="cdk-ans.CommandTaskActionProps.property.cmd"></a>

```typescript
public readonly cmd: string;
```

- *Type:* string

---

##### `argv`<sup>Optional</sup> <a name="argv" id="cdk-ans.CommandTaskActionProps.property.argv"></a>

```typescript
public readonly argv: string[];
```

- *Type:* string[]

---

##### `chdir`<sup>Optional</sup> <a name="chdir" id="cdk-ans.CommandTaskActionProps.property.chdir"></a>

```typescript
public readonly chdir: string;
```

- *Type:* string

---

##### `creates`<sup>Optional</sup> <a name="creates" id="cdk-ans.CommandTaskActionProps.property.creates"></a>

```typescript
public readonly creates: string;
```

- *Type:* string

---

##### `removes`<sup>Optional</sup> <a name="removes" id="cdk-ans.CommandTaskActionProps.property.removes"></a>

```typescript
public readonly removes: string;
```

- *Type:* string

---

##### `stdin`<sup>Optional</sup> <a name="stdin" id="cdk-ans.CommandTaskActionProps.property.stdin"></a>

```typescript
public readonly stdin: string;
```

- *Type:* string

---

##### `stdinAddNewline`<sup>Optional</sup> <a name="stdinAddNewline" id="cdk-ans.CommandTaskActionProps.property.stdinAddNewline"></a>

```typescript
public readonly stdinAddNewline: boolean;
```

- *Type:* boolean

---

##### `stdinEmptyEnds`<sup>Optional</sup> <a name="stdinEmptyEnds" id="cdk-ans.CommandTaskActionProps.property.stdinEmptyEnds"></a>

```typescript
public readonly stdinEmptyEnds: boolean;
```

- *Type:* boolean

---

### CommandTaskProps <a name="CommandTaskProps" id="cdk-ans.CommandTaskProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.CommandTaskProps.Initializer"></a>

```typescript
import { CommandTaskProps } from 'cdk-ans'

const commandTaskProps: CommandTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.CommandTaskProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.CommandTaskProps.property.command">command</a></code> | <code><a href="#cdk-ans.CommandTaskActionProps">CommandTaskActionProps</a></code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.CommandTaskProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.CommandTaskProps.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.CommandTaskProps.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.CommandTaskProps.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.CommandTaskProps.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.CommandTaskProps.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.CommandTaskProps.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.CommandTaskProps.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.CommandTaskProps.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.CommandTaskProps.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.CommandTaskProps.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.CommandTaskProps.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.CommandTaskProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.CommandTaskProps.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.CommandTaskProps.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.CommandTaskProps.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.CommandTaskProps.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.CommandTaskProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.CommandTaskProps.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.CommandTaskProps.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.CommandTaskProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.CommandTaskProps.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.CommandTaskProps.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.CommandTaskProps.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `command`<sup>Required</sup> <a name="command" id="cdk-ans.CommandTaskProps.property.command"></a>

```typescript
public readonly command: CommandTaskActionProps;
```

- *Type:* <a href="#cdk-ans.CommandTaskActionProps">CommandTaskActionProps</a>

---

### FileProps <a name="FileProps" id="cdk-ans.FileProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.FileProps.Initializer"></a>

```typescript
import { FileProps } from 'cdk-ans'

const fileProps: FileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.FileProps.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileProps.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-ans.FileProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="cdk-ans.FileProps.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

### FileTaskActionProps <a name="FileTaskActionProps" id="cdk-ans.FileTaskActionProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.FileTaskActionProps.Initializer"></a>

```typescript
import { FileTaskActionProps } from 'cdk-ans'

const fileTaskActionProps: FileTaskActionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.FileTaskActionProps.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.accessTime">accessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.accessTimeFormat">accessTimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.follow">follow</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.force">force</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.modificationTime">modificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.modificationTimeFormat">modificationTimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.recurse">recurse</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.selevel">selevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.serole">serole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.setype">setype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.seuser">seuser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.src">src</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskActionProps.property.unsafeWrites">unsafeWrites</a></code> | <code>boolean</code> | *No description.* |

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-ans.FileTaskActionProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `accessTime`<sup>Optional</sup> <a name="accessTime" id="cdk-ans.FileTaskActionProps.property.accessTime"></a>

```typescript
public readonly accessTime: string;
```

- *Type:* string

---

##### `accessTimeFormat`<sup>Optional</sup> <a name="accessTimeFormat" id="cdk-ans.FileTaskActionProps.property.accessTimeFormat"></a>

```typescript
public readonly accessTimeFormat: string;
```

- *Type:* string

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="cdk-ans.FileTaskActionProps.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `follow`<sup>Optional</sup> <a name="follow" id="cdk-ans.FileTaskActionProps.property.follow"></a>

```typescript
public readonly follow: boolean;
```

- *Type:* boolean

---

##### `force`<sup>Optional</sup> <a name="force" id="cdk-ans.FileTaskActionProps.property.force"></a>

```typescript
public readonly force: boolean;
```

- *Type:* boolean

---

##### `group`<sup>Optional</sup> <a name="group" id="cdk-ans.FileTaskActionProps.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `mode`<sup>Optional</sup> <a name="mode" id="cdk-ans.FileTaskActionProps.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `modificationTime`<sup>Optional</sup> <a name="modificationTime" id="cdk-ans.FileTaskActionProps.property.modificationTime"></a>

```typescript
public readonly modificationTime: string;
```

- *Type:* string

---

##### `modificationTimeFormat`<sup>Optional</sup> <a name="modificationTimeFormat" id="cdk-ans.FileTaskActionProps.property.modificationTimeFormat"></a>

```typescript
public readonly modificationTimeFormat: string;
```

- *Type:* string

---

##### `owner`<sup>Optional</sup> <a name="owner" id="cdk-ans.FileTaskActionProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `recurse`<sup>Optional</sup> <a name="recurse" id="cdk-ans.FileTaskActionProps.property.recurse"></a>

```typescript
public readonly recurse: boolean;
```

- *Type:* boolean

---

##### `selevel`<sup>Optional</sup> <a name="selevel" id="cdk-ans.FileTaskActionProps.property.selevel"></a>

```typescript
public readonly selevel: string;
```

- *Type:* string

---

##### `serole`<sup>Optional</sup> <a name="serole" id="cdk-ans.FileTaskActionProps.property.serole"></a>

```typescript
public readonly serole: string;
```

- *Type:* string

---

##### `setype`<sup>Optional</sup> <a name="setype" id="cdk-ans.FileTaskActionProps.property.setype"></a>

```typescript
public readonly setype: string;
```

- *Type:* string

---

##### `seuser`<sup>Optional</sup> <a name="seuser" id="cdk-ans.FileTaskActionProps.property.seuser"></a>

```typescript
public readonly seuser: string;
```

- *Type:* string

---

##### `src`<sup>Optional</sup> <a name="src" id="cdk-ans.FileTaskActionProps.property.src"></a>

```typescript
public readonly src: string;
```

- *Type:* string

---

##### `state`<sup>Optional</sup> <a name="state" id="cdk-ans.FileTaskActionProps.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `unsafeWrites`<sup>Optional</sup> <a name="unsafeWrites" id="cdk-ans.FileTaskActionProps.property.unsafeWrites"></a>

```typescript
public readonly unsafeWrites: boolean;
```

- *Type:* boolean

---

### FileTaskProps <a name="FileTaskProps" id="cdk-ans.FileTaskProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.FileTaskProps.Initializer"></a>

```typescript
import { FileTaskProps } from 'cdk-ans'

const fileTaskProps: FileTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.FileTaskProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.FileTaskProps.property.file">file</a></code> | <code><a href="#cdk-ans.FileTaskActionProps">FileTaskActionProps</a></code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.FileTaskProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.FileTaskProps.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.FileTaskProps.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.FileTaskProps.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.FileTaskProps.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.FileTaskProps.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.FileTaskProps.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.FileTaskProps.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.FileTaskProps.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.FileTaskProps.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.FileTaskProps.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.FileTaskProps.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.FileTaskProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.FileTaskProps.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.FileTaskProps.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.FileTaskProps.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.FileTaskProps.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.FileTaskProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.FileTaskProps.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.FileTaskProps.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.FileTaskProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.FileTaskProps.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.FileTaskProps.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.FileTaskProps.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `file`<sup>Required</sup> <a name="file" id="cdk-ans.FileTaskProps.property.file"></a>

```typescript
public readonly file: FileTaskActionProps;
```

- *Type:* <a href="#cdk-ans.FileTaskActionProps">FileTaskActionProps</a>

---

### HandlerProps <a name="HandlerProps" id="cdk-ans.HandlerProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.HandlerProps.Initializer"></a>

```typescript
import { HandlerProps } from 'cdk-ans'

const handlerProps: HandlerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.HandlerProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.action">action</a></code> | <code><a href="#cdk-ans.TaskAction">TaskAction</a></code> | *No description.* |
| <code><a href="#cdk-ans.HandlerProps.property.listen">listen</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.HandlerProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.HandlerProps.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.HandlerProps.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.HandlerProps.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.HandlerProps.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.HandlerProps.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.HandlerProps.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.HandlerProps.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.HandlerProps.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.HandlerProps.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.HandlerProps.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.HandlerProps.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.HandlerProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.HandlerProps.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.HandlerProps.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.HandlerProps.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.HandlerProps.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.HandlerProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.HandlerProps.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.HandlerProps.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.HandlerProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.HandlerProps.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.HandlerProps.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.HandlerProps.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ans.HandlerProps.property.action"></a>

```typescript
public readonly action: TaskAction;
```

- *Type:* <a href="#cdk-ans.TaskAction">TaskAction</a>

---

##### `listen`<sup>Optional</sup> <a name="listen" id="cdk-ans.HandlerProps.property.listen"></a>

```typescript
public readonly listen: string;
```

- *Type:* string

---

### HostGroupProps <a name="HostGroupProps" id="cdk-ans.HostGroupProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.HostGroupProps.Initializer"></a>

```typescript
import { HostGroupProps } from 'cdk-ans'

const hostGroupProps: HostGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.HostGroupProps.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="cdk-ans.HostGroupProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

### HostProps <a name="HostProps" id="cdk-ans.HostProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.HostProps.Initializer"></a>

```typescript
import { HostProps } from 'cdk-ans'

const hostProps: HostProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.HostProps.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HostProps.property.ansibleBecome">ansibleBecome</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.HostProps.property.ansiblePassword">ansiblePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HostProps.property.ansiblePort">ansiblePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.HostProps.property.ansibleUser">ansibleUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HostProps.property.connectionType">connectionType</a></code> | <code><a href="#cdk-ans.AnsibleConnection">AnsibleConnection</a></code> | *No description.* |
| <code><a href="#cdk-ans.HostProps.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HostProps.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `host`<sup>Required</sup> <a name="host" id="cdk-ans.HostProps.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `ansibleBecome`<sup>Optional</sup> <a name="ansibleBecome" id="cdk-ans.HostProps.property.ansibleBecome"></a>

```typescript
public readonly ansibleBecome: boolean;
```

- *Type:* boolean

---

##### `ansiblePassword`<sup>Optional</sup> <a name="ansiblePassword" id="cdk-ans.HostProps.property.ansiblePassword"></a>

```typescript
public readonly ansiblePassword: string;
```

- *Type:* string

---

##### `ansiblePort`<sup>Optional</sup> <a name="ansiblePort" id="cdk-ans.HostProps.property.ansiblePort"></a>

```typescript
public readonly ansiblePort: number;
```

- *Type:* number

---

##### `ansibleUser`<sup>Optional</sup> <a name="ansibleUser" id="cdk-ans.HostProps.property.ansibleUser"></a>

```typescript
public readonly ansibleUser: string;
```

- *Type:* string

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="cdk-ans.HostProps.property.connectionType"></a>

```typescript
public readonly connectionType: AnsibleConnection;
```

- *Type:* <a href="#cdk-ans.AnsibleConnection">AnsibleConnection</a>

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="cdk-ans.HostProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `variables`<sup>Optional</sup> <a name="variables" id="cdk-ans.HostProps.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### InventoryProps <a name="InventoryProps" id="cdk-ans.InventoryProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.InventoryProps.Initializer"></a>

```typescript
import { InventoryProps } from 'cdk-ans'

const inventoryProps: InventoryProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.InventoryProps.property.groups">groups</a></code> | <code><a href="#cdk-ans.HostGroup">HostGroup</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.InventoryProps.property.hosts">hosts</a></code> | <code><a href="#cdk-ans.Host">Host</a>[]</code> | *No description.* |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="cdk-ans.InventoryProps.property.groups"></a>

```typescript
public readonly groups: HostGroup[];
```

- *Type:* <a href="#cdk-ans.HostGroup">HostGroup</a>[]

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="cdk-ans.InventoryProps.property.hosts"></a>

```typescript
public readonly hosts: Host[];
```

- *Type:* <a href="#cdk-ans.Host">Host</a>[]

---

### PingTaskProps <a name="PingTaskProps" id="cdk-ans.PingTaskProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.PingTaskProps.Initializer"></a>

```typescript
import { PingTaskProps } from 'cdk-ans'

const pingTaskProps: PingTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.PingTaskProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PingTaskProps.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.PingTaskProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.PingTaskProps.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.PingTaskProps.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.PingTaskProps.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.PingTaskProps.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.PingTaskProps.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.PingTaskProps.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.PingTaskProps.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.PingTaskProps.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.PingTaskProps.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.PingTaskProps.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.PingTaskProps.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.PingTaskProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.PingTaskProps.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.PingTaskProps.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.PingTaskProps.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.PingTaskProps.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.PingTaskProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.PingTaskProps.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.PingTaskProps.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.PingTaskProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.PingTaskProps.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.PingTaskProps.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.PingTaskProps.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

### PlaybookProps <a name="PlaybookProps" id="cdk-ans.PlaybookProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.PlaybookProps.Initializer"></a>

```typescript
import { PlaybookProps } from 'cdk-ans'

const playbookProps: PlaybookProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.PlaybookProps.property.playDefinition">playDefinition</a></code> | <code><a href="#cdk-ans.PlayDefinition">PlayDefinition</a></code> | *No description.* |

---

##### `playDefinition`<sup>Required</sup> <a name="playDefinition" id="cdk-ans.PlaybookProps.property.playDefinition"></a>

```typescript
public readonly playDefinition: PlayDefinition;
```

- *Type:* <a href="#cdk-ans.PlayDefinition">PlayDefinition</a>

---

### PlayProps <a name="PlayProps" id="cdk-ans.PlayProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.PlayProps.Initializer"></a>

```typescript
import { PlayProps } from 'cdk-ans'

const playProps: PlayProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.PlayProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.hosts">hosts</a></code> | <code><a href="#cdk-ans.IHostIdentifiable">IHostIdentifiable</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.factPath">factPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.forceHandlers">forceHandlers</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.gatherFacts">gatherFacts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.gatherSubset">gatherSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.gatherTimeout">gatherTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.handlers">handlers</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.maxFailPercentage">maxFailPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.order">order</a></code> | <code><a href="#cdk-ans.PlayHostOrder">PlayHostOrder</a></code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.postTasks">postTasks</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.preTasks">preTasks</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.roles">roles</a></code> | <code><a href="#cdk-ans.RoleDefinition">RoleDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.serial">serial</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.tasks">tasks</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.varPrompt">varPrompt</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.PlayProps.property.varsFiles">varsFiles</a></code> | <code>string[]</code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.PlayProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.PlayProps.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.PlayProps.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.PlayProps.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.PlayProps.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.PlayProps.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.PlayProps.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.PlayProps.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.PlayProps.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.PlayProps.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.PlayProps.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.PlayProps.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.PlayProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.PlayProps.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.PlayProps.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.PlayProps.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.PlayProps.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.PlayProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.PlayProps.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.PlayProps.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.PlayProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.PlayProps.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.PlayProps.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.PlayProps.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="cdk-ans.PlayProps.property.hosts"></a>

```typescript
public readonly hosts: IHostIdentifiable[];
```

- *Type:* <a href="#cdk-ans.IHostIdentifiable">IHostIdentifiable</a>[]

---

##### `factPath`<sup>Optional</sup> <a name="factPath" id="cdk-ans.PlayProps.property.factPath"></a>

```typescript
public readonly factPath: string;
```

- *Type:* string

---

##### `forceHandlers`<sup>Optional</sup> <a name="forceHandlers" id="cdk-ans.PlayProps.property.forceHandlers"></a>

```typescript
public readonly forceHandlers: boolean;
```

- *Type:* boolean

---

##### `gatherFacts`<sup>Optional</sup> <a name="gatherFacts" id="cdk-ans.PlayProps.property.gatherFacts"></a>

```typescript
public readonly gatherFacts: boolean;
```

- *Type:* boolean

---

##### `gatherSubset`<sup>Optional</sup> <a name="gatherSubset" id="cdk-ans.PlayProps.property.gatherSubset"></a>

```typescript
public readonly gatherSubset: string;
```

- *Type:* string

---

##### `gatherTimeout`<sup>Optional</sup> <a name="gatherTimeout" id="cdk-ans.PlayProps.property.gatherTimeout"></a>

```typescript
public readonly gatherTimeout: number;
```

- *Type:* number

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="cdk-ans.PlayProps.property.handlers"></a>

```typescript
public readonly handlers: Handler[];
```

- *Type:* <a href="#cdk-ans.Handler">Handler</a>[]

---

##### `maxFailPercentage`<sup>Optional</sup> <a name="maxFailPercentage" id="cdk-ans.PlayProps.property.maxFailPercentage"></a>

```typescript
public readonly maxFailPercentage: number;
```

- *Type:* number

---

##### `order`<sup>Optional</sup> <a name="order" id="cdk-ans.PlayProps.property.order"></a>

```typescript
public readonly order: PlayHostOrder;
```

- *Type:* <a href="#cdk-ans.PlayHostOrder">PlayHostOrder</a>

---

##### `postTasks`<sup>Optional</sup> <a name="postTasks" id="cdk-ans.PlayProps.property.postTasks"></a>

```typescript
public readonly postTasks: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `preTasks`<sup>Optional</sup> <a name="preTasks" id="cdk-ans.PlayProps.property.preTasks"></a>

```typescript
public readonly preTasks: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `roles`<sup>Optional</sup> <a name="roles" id="cdk-ans.PlayProps.property.roles"></a>

```typescript
public readonly roles: RoleDefinition;
```

- *Type:* <a href="#cdk-ans.RoleDefinition">RoleDefinition</a>

---

##### `serial`<sup>Optional</sup> <a name="serial" id="cdk-ans.PlayProps.property.serial"></a>

```typescript
public readonly serial: number;
```

- *Type:* number

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="cdk-ans.PlayProps.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="cdk-ans.PlayProps.property.tasks"></a>

```typescript
public readonly tasks: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `varPrompt`<sup>Optional</sup> <a name="varPrompt" id="cdk-ans.PlayProps.property.varPrompt"></a>

```typescript
public readonly varPrompt: string[];
```

- *Type:* string[]

---

##### `varsFiles`<sup>Optional</sup> <a name="varsFiles" id="cdk-ans.PlayProps.property.varsFiles"></a>

```typescript
public readonly varsFiles: string[];
```

- *Type:* string[]

---

### ProjectProps <a name="ProjectProps" id="cdk-ans.ProjectProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.ProjectProps.Initializer"></a>

```typescript
import { ProjectProps } from 'cdk-ans'

const projectProps: ProjectProps = { ... }
```


### ProjectSynthesizerOptions <a name="ProjectSynthesizerOptions" id="cdk-ans.ProjectSynthesizerOptions"></a>

Options on how the project synthezier should behave when synthesizing a project.

#### Initializer <a name="Initializer" id="cdk-ans.ProjectSynthesizerOptions.Initializer"></a>

```typescript
import { ProjectSynthesizerOptions } from 'cdk-ans'

const projectSynthesizerOptions: ProjectSynthesizerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.ProjectSynthesizerOptions.property.inventoryOptions">inventoryOptions</a></code> | <code><a href="#cdk-ans.SynthesizeInventoryOptions">SynthesizeInventoryOptions</a></code> | Options on how to synthesize inventories. |
| <code><a href="#cdk-ans.ProjectSynthesizerOptions.property.playbookOptions">playbookOptions</a></code> | <code><a href="#cdk-ans.SynthesizePlaybookOptions">SynthesizePlaybookOptions</a></code> | Options on how to synthesize playbooks. |
| <code><a href="#cdk-ans.ProjectSynthesizerOptions.property.roleOptions">roleOptions</a></code> | <code><a href="#cdk-ans.SynthesizeRoleOptions">SynthesizeRoleOptions</a></code> | Options on how to synthesize roles. |

---

##### `inventoryOptions`<sup>Optional</sup> <a name="inventoryOptions" id="cdk-ans.ProjectSynthesizerOptions.property.inventoryOptions"></a>

```typescript
public readonly inventoryOptions: SynthesizeInventoryOptions;
```

- *Type:* <a href="#cdk-ans.SynthesizeInventoryOptions">SynthesizeInventoryOptions</a>

Options on how to synthesize inventories.

---

##### `playbookOptions`<sup>Optional</sup> <a name="playbookOptions" id="cdk-ans.ProjectSynthesizerOptions.property.playbookOptions"></a>

```typescript
public readonly playbookOptions: SynthesizePlaybookOptions;
```

- *Type:* <a href="#cdk-ans.SynthesizePlaybookOptions">SynthesizePlaybookOptions</a>

Options on how to synthesize playbooks.

---

##### `roleOptions`<sup>Optional</sup> <a name="roleOptions" id="cdk-ans.ProjectSynthesizerOptions.property.roleOptions"></a>

```typescript
public readonly roleOptions: SynthesizeRoleOptions;
```

- *Type:* <a href="#cdk-ans.SynthesizeRoleOptions">SynthesizeRoleOptions</a>

Options on how to synthesize roles.

---

### RoleProps <a name="RoleProps" id="cdk-ans.RoleProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.RoleProps.Initializer"></a>

```typescript
import { RoleProps } from 'cdk-ans'

const roleProps: RoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.RoleProps.property.tasks">tasks</a></code> | <code><a href="#cdk-ans.TaskDefinition">TaskDefinition</a></code> | *No description.* |
| <code><a href="#cdk-ans.RoleProps.property.defaults">defaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.RoleProps.property.files">files</a></code> | <code><a href="#cdk-ans.File">File</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.RoleProps.property.handlers">handlers</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.RoleProps.property.tasksAlt">tasksAlt</a></code> | <code><a href="#cdk-ans.Task">Task</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.RoleProps.property.templates">templates</a></code> | <code><a href="#cdk-ans.TemplateFile">TemplateFile</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.RoleProps.property.variables">variables</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="cdk-ans.RoleProps.property.tasks"></a>

```typescript
public readonly tasks: TaskDefinition;
```

- *Type:* <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="cdk-ans.RoleProps.property.defaults"></a>

```typescript
public readonly defaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `files`<sup>Optional</sup> <a name="files" id="cdk-ans.RoleProps.property.files"></a>

```typescript
public readonly files: File[];
```

- *Type:* <a href="#cdk-ans.File">File</a>[]

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="cdk-ans.RoleProps.property.handlers"></a>

```typescript
public readonly handlers: Handler[];
```

- *Type:* <a href="#cdk-ans.Handler">Handler</a>[]

---

##### `tasksAlt`<sup>Optional</sup> <a name="tasksAlt" id="cdk-ans.RoleProps.property.tasksAlt"></a>

```typescript
public readonly tasksAlt: Task[];
```

- *Type:* <a href="#cdk-ans.Task">Task</a>[]

---

##### `templates`<sup>Optional</sup> <a name="templates" id="cdk-ans.RoleProps.property.templates"></a>

```typescript
public readonly templates: TemplateFile[];
```

- *Type:* <a href="#cdk-ans.TemplateFile">TemplateFile</a>[]

---

##### `variables`<sup>Optional</sup> <a name="variables" id="cdk-ans.RoleProps.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

### RoleTargetProps <a name="RoleTargetProps" id="cdk-ans.RoleTargetProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.RoleTargetProps.Initializer"></a>

```typescript
import { RoleTargetProps } from 'cdk-ans'

const roleTargetProps: RoleTargetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.RoleTargetProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.delegateFacts">delegateFacts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.delegateTo">delegateTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.RoleTargetProps.property.when">when</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.RoleTargetProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.RoleTargetProps.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.RoleTargetProps.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.RoleTargetProps.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.RoleTargetProps.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.RoleTargetProps.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.RoleTargetProps.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.RoleTargetProps.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.RoleTargetProps.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.RoleTargetProps.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.RoleTargetProps.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.RoleTargetProps.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.RoleTargetProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.RoleTargetProps.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.RoleTargetProps.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.RoleTargetProps.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.RoleTargetProps.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.RoleTargetProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.RoleTargetProps.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.RoleTargetProps.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.RoleTargetProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.RoleTargetProps.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.RoleTargetProps.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.RoleTargetProps.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `delegateFacts`<sup>Optional</sup> <a name="delegateFacts" id="cdk-ans.RoleTargetProps.property.delegateFacts"></a>

```typescript
public readonly delegateFacts: boolean;
```

- *Type:* boolean

---

##### `delegateTo`<sup>Optional</sup> <a name="delegateTo" id="cdk-ans.RoleTargetProps.property.delegateTo"></a>

```typescript
public readonly delegateTo: string;
```

- *Type:* string

---

##### `when`<sup>Optional</sup> <a name="when" id="cdk-ans.RoleTargetProps.property.when"></a>

```typescript
public readonly when: string;
```

- *Type:* string

---

### StepProps <a name="StepProps" id="cdk-ans.StepProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.StepProps.Initializer"></a>

```typescript
import { StepProps } from 'cdk-ans'

const stepProps: StepProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.StepProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.StepProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### SynthesizeInventoryOptions <a name="SynthesizeInventoryOptions" id="cdk-ans.SynthesizeInventoryOptions"></a>

#### Initializer <a name="Initializer" id="cdk-ans.SynthesizeInventoryOptions.Initializer"></a>

```typescript
import { SynthesizeInventoryOptions } from 'cdk-ans'

const synthesizeInventoryOptions: SynthesizeInventoryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.SynthesizeInventoryOptions.property.inventoryOutputType">inventoryOutputType</a></code> | <code><a href="#cdk-ans.InventoryOutputType">InventoryOutputType</a></code> | How to organzie inventory output. |
| <code><a href="#cdk-ans.SynthesizeInventoryOptions.property.outDir">outDir</a></code> | <code>string</code> | Where synthezied roles should be saved. |

---

##### `inventoryOutputType`<sup>Optional</sup> <a name="inventoryOutputType" id="cdk-ans.SynthesizeInventoryOptions.property.inventoryOutputType"></a>

```typescript
public readonly inventoryOutputType: InventoryOutputType;
```

- *Type:* <a href="#cdk-ans.InventoryOutputType">InventoryOutputType</a>
- *Default:* InventoryOutputType.SINGLE_FILE

How to organzie inventory output.

---

##### `outDir`<sup>Optional</sup> <a name="outDir" id="cdk-ans.SynthesizeInventoryOptions.property.outDir"></a>

```typescript
public readonly outDir: string;
```

- *Type:* string
- *Default:* inventories

Where synthezied roles should be saved.

---

### SynthesizePlaybookOptions <a name="SynthesizePlaybookOptions" id="cdk-ans.SynthesizePlaybookOptions"></a>

#### Initializer <a name="Initializer" id="cdk-ans.SynthesizePlaybookOptions.Initializer"></a>

```typescript
import { SynthesizePlaybookOptions } from 'cdk-ans'

const synthesizePlaybookOptions: SynthesizePlaybookOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.SynthesizePlaybookOptions.property.dontCreateSitePlaybook">dontCreateSitePlaybook</a></code> | <code>boolean</code> | If a `site.yaml` should be created that includes all playbooks. |
| <code><a href="#cdk-ans.SynthesizePlaybookOptions.property.outDir">outDir</a></code> | <code>string</code> | Where synthezied playbooks should be saved. |
| <code><a href="#cdk-ans.SynthesizePlaybookOptions.property.playbookOutputType">playbookOutputType</a></code> | <code><a href="#cdk-ans.PlaybookOutputType">PlaybookOutputType</a></code> | How to organzie playbook output. |

---

##### `dontCreateSitePlaybook`<sup>Optional</sup> <a name="dontCreateSitePlaybook" id="cdk-ans.SynthesizePlaybookOptions.property.dontCreateSitePlaybook"></a>

```typescript
public readonly dontCreateSitePlaybook: boolean;
```

- *Type:* boolean
- *Default:* false

If a `site.yaml` should be created that includes all playbooks.

---

##### `outDir`<sup>Optional</sup> <a name="outDir" id="cdk-ans.SynthesizePlaybookOptions.property.outDir"></a>

```typescript
public readonly outDir: string;
```

- *Type:* string
- *Default:* projects

Where synthezied playbooks should be saved.

Only used if `playbookOutputType` is `PlaybookOutputType.IN_DIRECTORY`

---

##### `playbookOutputType`<sup>Optional</sup> <a name="playbookOutputType" id="cdk-ans.SynthesizePlaybookOptions.property.playbookOutputType"></a>

```typescript
public readonly playbookOutputType: PlaybookOutputType;
```

- *Type:* <a href="#cdk-ans.PlaybookOutputType">PlaybookOutputType</a>
- *Default:* PlaybookOutputType.IN_ROOT

How to organzie playbook output.

---

### SynthesizeRoleOptions <a name="SynthesizeRoleOptions" id="cdk-ans.SynthesizeRoleOptions"></a>

#### Initializer <a name="Initializer" id="cdk-ans.SynthesizeRoleOptions.Initializer"></a>

```typescript
import { SynthesizeRoleOptions } from 'cdk-ans'

const synthesizeRoleOptions: SynthesizeRoleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.SynthesizeRoleOptions.property.outDir">outDir</a></code> | <code>string</code> | Where synthezied roles should be saved. |
| <code><a href="#cdk-ans.SynthesizeRoleOptions.property.roleOutputType">roleOutputType</a></code> | <code><a href="#cdk-ans.RoleOutputType">RoleOutputType</a></code> | How to organzie role output. |

---

##### `outDir`<sup>Optional</sup> <a name="outDir" id="cdk-ans.SynthesizeRoleOptions.property.outDir"></a>

```typescript
public readonly outDir: string;
```

- *Type:* string
- *Default:* roles

Where synthezied roles should be saved.

---

##### `roleOutputType`<sup>Optional</sup> <a name="roleOutputType" id="cdk-ans.SynthesizeRoleOptions.property.roleOutputType"></a>

```typescript
public readonly roleOutputType: RoleOutputType;
```

- *Type:* <a href="#cdk-ans.RoleOutputType">RoleOutputType</a>
- *Default:* RoleOutputType.STANDARD

How to organzie role output.

---

### TaskActionProps <a name="TaskActionProps" id="cdk-ans.TaskActionProps"></a>

An empty interface TaskActionProps extends from This is a placeholder incase there are base settings ever needed for an Action.

#### Initializer <a name="Initializer" id="cdk-ans.TaskActionProps.Initializer"></a>

```typescript
import { TaskActionProps } from 'cdk-ans'

const taskActionProps: TaskActionProps = { ... }
```


### TaskBaseProps <a name="TaskBaseProps" id="cdk-ans.TaskBaseProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.TaskBaseProps.Initializer"></a>

```typescript
import { TaskBaseProps } from 'cdk-ans'

const taskBaseProps: TaskBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.TaskBaseProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskBaseProps.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.TaskBaseProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.TaskBaseProps.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.TaskBaseProps.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.TaskBaseProps.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.TaskBaseProps.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.TaskBaseProps.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.TaskBaseProps.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.TaskBaseProps.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.TaskBaseProps.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.TaskBaseProps.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.TaskBaseProps.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.TaskBaseProps.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.TaskBaseProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.TaskBaseProps.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.TaskBaseProps.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.TaskBaseProps.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.TaskBaseProps.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.TaskBaseProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.TaskBaseProps.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.TaskBaseProps.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.TaskBaseProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.TaskBaseProps.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.TaskBaseProps.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.TaskBaseProps.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

### TaskProps <a name="TaskProps" id="cdk-ans.TaskProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.TaskProps.Initializer"></a>

```typescript
import { TaskProps } from 'cdk-ans'

const taskProps: TaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.TaskProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.anyErrorsFatal">anyErrorsFatal</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.become">become</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.becomeExe">becomeExe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.becomeFlags">becomeFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.becomeMethod">becomeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.becomeUser">becomeUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.checkMode">checkMode</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.collections">collections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.debugger">debugger</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.diff">diff</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.environment">environment</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.ignoreErrors">ignoreErrors</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.ignoreUnreachable">ignoreUnreachable</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.moduleDefaults">moduleDefaults</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.noLog">noLog</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.remoteUser">remoteUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.runOnce">runOnce</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.throttle">throttle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.vars">vars</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.action">action</a></code> | <code><a href="#cdk-ans.TaskAction">TaskAction</a></code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.args">args</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.async">async</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.changedWhen">changedWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.delay">delay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.delegateFacts">delegateFacts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.delegateTo">delegateTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.failedWhen">failedWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.localAction">localAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.loop">loop</a></code> | <code>string \| string[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.loopControl">loopControl</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.notify">notify</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.poll">poll</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.register">register</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.until">until</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.when">when</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.with">with</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.withItems">withItems</a></code> | <code>{[ key: string ]: any}[]</code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.TaskProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `anyErrorsFatal`<sup>Optional</sup> <a name="anyErrorsFatal" id="cdk-ans.TaskProps.property.anyErrorsFatal"></a>

```typescript
public readonly anyErrorsFatal: boolean;
```

- *Type:* boolean

---

##### `become`<sup>Optional</sup> <a name="become" id="cdk-ans.TaskProps.property.become"></a>

```typescript
public readonly become: boolean;
```

- *Type:* boolean

---

##### `becomeExe`<sup>Optional</sup> <a name="becomeExe" id="cdk-ans.TaskProps.property.becomeExe"></a>

```typescript
public readonly becomeExe: string;
```

- *Type:* string

---

##### `becomeFlags`<sup>Optional</sup> <a name="becomeFlags" id="cdk-ans.TaskProps.property.becomeFlags"></a>

```typescript
public readonly becomeFlags: string;
```

- *Type:* string

---

##### `becomeMethod`<sup>Optional</sup> <a name="becomeMethod" id="cdk-ans.TaskProps.property.becomeMethod"></a>

```typescript
public readonly becomeMethod: string;
```

- *Type:* string

---

##### `becomeUser`<sup>Optional</sup> <a name="becomeUser" id="cdk-ans.TaskProps.property.becomeUser"></a>

```typescript
public readonly becomeUser: string;
```

- *Type:* string

---

##### `checkMode`<sup>Optional</sup> <a name="checkMode" id="cdk-ans.TaskProps.property.checkMode"></a>

```typescript
public readonly checkMode: boolean;
```

- *Type:* boolean

---

##### `collections`<sup>Optional</sup> <a name="collections" id="cdk-ans.TaskProps.property.collections"></a>

```typescript
public readonly collections: string[];
```

- *Type:* string[]

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdk-ans.TaskProps.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `debugger`<sup>Optional</sup> <a name="debugger" id="cdk-ans.TaskProps.property.debugger"></a>

```typescript
public readonly debugger: boolean;
```

- *Type:* boolean

---

##### `diff`<sup>Optional</sup> <a name="diff" id="cdk-ans.TaskProps.property.diff"></a>

```typescript
public readonly diff: boolean;
```

- *Type:* boolean

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-ans.TaskProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="cdk-ans.TaskProps.property.ignoreErrors"></a>

```typescript
public readonly ignoreErrors: boolean;
```

- *Type:* boolean

---

##### `ignoreUnreachable`<sup>Optional</sup> <a name="ignoreUnreachable" id="cdk-ans.TaskProps.property.ignoreUnreachable"></a>

```typescript
public readonly ignoreUnreachable: boolean;
```

- *Type:* boolean

---

##### `moduleDefaults`<sup>Optional</sup> <a name="moduleDefaults" id="cdk-ans.TaskProps.property.moduleDefaults"></a>

```typescript
public readonly moduleDefaults: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `noLog`<sup>Optional</sup> <a name="noLog" id="cdk-ans.TaskProps.property.noLog"></a>

```typescript
public readonly noLog: boolean;
```

- *Type:* boolean

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk-ans.TaskProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `remoteUser`<sup>Optional</sup> <a name="remoteUser" id="cdk-ans.TaskProps.property.remoteUser"></a>

```typescript
public readonly remoteUser: string;
```

- *Type:* string

---

##### `runOnce`<sup>Optional</sup> <a name="runOnce" id="cdk-ans.TaskProps.property.runOnce"></a>

```typescript
public readonly runOnce: boolean;
```

- *Type:* boolean

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-ans.TaskProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="cdk-ans.TaskProps.property.throttle"></a>

```typescript
public readonly throttle: number;
```

- *Type:* number

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-ans.TaskProps.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `vars`<sup>Optional</sup> <a name="vars" id="cdk-ans.TaskProps.property.vars"></a>

```typescript
public readonly vars: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `action`<sup>Required</sup> <a name="action" id="cdk-ans.TaskProps.property.action"></a>

```typescript
public readonly action: TaskAction;
```

- *Type:* <a href="#cdk-ans.TaskAction">TaskAction</a>

---

##### `args`<sup>Optional</sup> <a name="args" id="cdk-ans.TaskProps.property.args"></a>

```typescript
public readonly args: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `async`<sup>Optional</sup> <a name="async" id="cdk-ans.TaskProps.property.async"></a>

```typescript
public readonly async: number;
```

- *Type:* number

---

##### `changedWhen`<sup>Optional</sup> <a name="changedWhen" id="cdk-ans.TaskProps.property.changedWhen"></a>

```typescript
public readonly changedWhen: string;
```

- *Type:* string

---

##### `delay`<sup>Optional</sup> <a name="delay" id="cdk-ans.TaskProps.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

---

##### `delegateFacts`<sup>Optional</sup> <a name="delegateFacts" id="cdk-ans.TaskProps.property.delegateFacts"></a>

```typescript
public readonly delegateFacts: boolean;
```

- *Type:* boolean

---

##### `delegateTo`<sup>Optional</sup> <a name="delegateTo" id="cdk-ans.TaskProps.property.delegateTo"></a>

```typescript
public readonly delegateTo: string;
```

- *Type:* string

---

##### `failedWhen`<sup>Optional</sup> <a name="failedWhen" id="cdk-ans.TaskProps.property.failedWhen"></a>

```typescript
public readonly failedWhen: string;
```

- *Type:* string

---

##### `localAction`<sup>Optional</sup> <a name="localAction" id="cdk-ans.TaskProps.property.localAction"></a>

```typescript
public readonly localAction: string;
```

- *Type:* string

---

##### `loop`<sup>Optional</sup> <a name="loop" id="cdk-ans.TaskProps.property.loop"></a>

```typescript
public readonly loop: string | string[];
```

- *Type:* string | string[]

---

##### `loopControl`<sup>Optional</sup> <a name="loopControl" id="cdk-ans.TaskProps.property.loopControl"></a>

```typescript
public readonly loopControl: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `notify`<sup>Optional</sup> <a name="notify" id="cdk-ans.TaskProps.property.notify"></a>

```typescript
public readonly notify: Handler[];
```

- *Type:* <a href="#cdk-ans.Handler">Handler</a>[]

---

##### `poll`<sup>Optional</sup> <a name="poll" id="cdk-ans.TaskProps.property.poll"></a>

```typescript
public readonly poll: number;
```

- *Type:* number

---

##### `register`<sup>Optional</sup> <a name="register" id="cdk-ans.TaskProps.property.register"></a>

```typescript
public readonly register: string;
```

- *Type:* string

---

##### `retries`<sup>Optional</sup> <a name="retries" id="cdk-ans.TaskProps.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `until`<sup>Optional</sup> <a name="until" id="cdk-ans.TaskProps.property.until"></a>

```typescript
public readonly until: string;
```

- *Type:* string

---

##### `when`<sup>Optional</sup> <a name="when" id="cdk-ans.TaskProps.property.when"></a>

```typescript
public readonly when: string;
```

- *Type:* string

---

##### `with`<sup>Optional</sup> <a name="with" id="cdk-ans.TaskProps.property.with"></a>

```typescript
public readonly with: string[];
```

- *Type:* string[]

---

##### `withItems`<sup>Optional</sup> <a name="withItems" id="cdk-ans.TaskProps.property.withItems"></a>

```typescript
public readonly withItems: {[ key: string ]: any}[];
```

- *Type:* {[ key: string ]: any}[]

---

### TemplateFileProps <a name="TemplateFileProps" id="cdk-ans.TemplateFileProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.TemplateFileProps.Initializer"></a>

```typescript
import { TemplateFileProps } from 'cdk-ans'

const templateFileProps: TemplateFileProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.TemplateFileProps.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TemplateFileProps.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-ans.TemplateFileProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="cdk-ans.TemplateFileProps.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### DependencyGraph <a name="DependencyGraph" id="cdk-ans.DependencyGraph"></a>

Represents the dependency graph for a given Node.

This graph includes the dependency relationships between all nodes in the
node (construct) sub-tree who's root is this Node.

Note that this means that lonely nodes (no dependencies and no dependants) are also included in this graph as
childless children of the root node of the graph.

The graph does not include cross-scope dependencies. That is, if a child on the current scope depends on a node
from a different scope, that relationship is not represented in this graph.

#### Initializers <a name="Initializers" id="cdk-ans.DependencyGraph.Initializer"></a>

```typescript
import { DependencyGraph } from 'cdk-ans'

new DependencyGraph(node: Node)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.DependencyGraph.Initializer.parameter.node">node</a></code> | <code>constructs.Node</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.DependencyGraph.Initializer.parameter.node"></a>

- *Type:* constructs.Node

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.DependencyGraph.topology">topology</a></code> | *No description.* |

---

##### `topology` <a name="topology" id="cdk-ans.DependencyGraph.topology"></a>

```typescript
public topology(): IConstruct[]
```

> [Vertex.topology ()](Vertex.topology ())


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.DependencyGraph.property.root">root</a></code> | <code><a href="#cdk-ans.DependencyVertex">DependencyVertex</a></code> | Returns the root of the graph. |

---

##### `root`<sup>Required</sup> <a name="root" id="cdk-ans.DependencyGraph.property.root"></a>

```typescript
public readonly root: DependencyVertex;
```

- *Type:* <a href="#cdk-ans.DependencyVertex">DependencyVertex</a>

Returns the root of the graph.

Note that this vertex will always have `null` as its `.value` since it is an artifical root
that binds all the connected spaces of the graph.

---


### DependencyVertex <a name="DependencyVertex" id="cdk-ans.DependencyVertex"></a>

Represents a vertex in the graph.

The value of each vertex is an `IConstruct` that is accessible via the `.value` getter.

#### Initializers <a name="Initializers" id="cdk-ans.DependencyVertex.Initializer"></a>

```typescript
import { DependencyVertex } from 'cdk-ans'

new DependencyVertex(value?: IConstruct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.DependencyVertex.Initializer.parameter.value">value</a></code> | <code>constructs.IConstruct</code> | *No description.* |

---

##### `value`<sup>Optional</sup> <a name="value" id="cdk-ans.DependencyVertex.Initializer.parameter.value"></a>

- *Type:* constructs.IConstruct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.DependencyVertex.addChild">addChild</a></code> | Adds a vertex as a dependency of the current node. |
| <code><a href="#cdk-ans.DependencyVertex.topology">topology</a></code> | Returns a topologically sorted array of the constructs in the sub-graph. |

---

##### `addChild` <a name="addChild" id="cdk-ans.DependencyVertex.addChild"></a>

```typescript
public addChild(dep: DependencyVertex): void
```

Adds a vertex as a dependency of the current node.

Also updates the parents of `dep`, so that it contains this node as a parent.

This operation will fail in case it creates a cycle in the graph.

###### `dep`<sup>Required</sup> <a name="dep" id="cdk-ans.DependencyVertex.addChild.parameter.dep"></a>

- *Type:* <a href="#cdk-ans.DependencyVertex">DependencyVertex</a>

The dependency.

---

##### `topology` <a name="topology" id="cdk-ans.DependencyVertex.topology"></a>

```typescript
public topology(): IConstruct[]
```

Returns a topologically sorted array of the constructs in the sub-graph.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.DependencyVertex.property.inbound">inbound</a></code> | <code><a href="#cdk-ans.DependencyVertex">DependencyVertex</a>[]</code> | Returns the parents of the vertex (i.e dependants). |
| <code><a href="#cdk-ans.DependencyVertex.property.outbound">outbound</a></code> | <code><a href="#cdk-ans.DependencyVertex">DependencyVertex</a>[]</code> | Returns the children of the vertex (i.e dependencies). |
| <code><a href="#cdk-ans.DependencyVertex.property.value">value</a></code> | <code>constructs.IConstruct</code> | Returns the IConstruct this graph vertex represents. |

---

##### `inbound`<sup>Required</sup> <a name="inbound" id="cdk-ans.DependencyVertex.property.inbound"></a>

```typescript
public readonly inbound: DependencyVertex[];
```

- *Type:* <a href="#cdk-ans.DependencyVertex">DependencyVertex</a>[]

Returns the parents of the vertex (i.e dependants).

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="cdk-ans.DependencyVertex.property.outbound"></a>

```typescript
public readonly outbound: DependencyVertex[];
```

- *Type:* <a href="#cdk-ans.DependencyVertex">DependencyVertex</a>[]

Returns the children of the vertex (i.e dependencies).

---

##### `value`<sup>Optional</sup> <a name="value" id="cdk-ans.DependencyVertex.property.value"></a>

```typescript
public readonly value: IConstruct;
```

- *Type:* constructs.IConstruct

Returns the IConstruct this graph vertex represents.

`null` in case this is the root of the graph.

---


### PlayDefinition <a name="PlayDefinition" id="cdk-ans.PlayDefinition"></a>

- *Implements:* <a href="#cdk-ans.IPlayChainable">IPlayChainable</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.PlayDefinition.toJson">toJson</a></code> | Iterate over the chain, JSONify it, and return it as an array. |
| <code><a href="#cdk-ans.PlayDefinition.next">next</a></code> | *No description.* |

---

##### `toJson` <a name="toJson" id="cdk-ans.PlayDefinition.toJson"></a>

```typescript
public toJson(): any[]
```

Iterate over the chain, JSONify it, and return it as an array.

##### `next` <a name="next" id="cdk-ans.PlayDefinition.next"></a>

```typescript
public next(next: IPlayChainable): PlayDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.PlayDefinition.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.IPlayChainable">IPlayChainable</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.PlayDefinition.sequence">sequence</a></code> | *No description.* |

---

##### `sequence` <a name="sequence" id="cdk-ans.PlayDefinition.sequence"></a>

```typescript
import { PlayDefinition } from 'cdk-ans'

PlayDefinition.sequence(next: IPlayChainable, chain: Step[])
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.PlayDefinition.sequence.parameter.next"></a>

- *Type:* <a href="#cdk-ans.IPlayChainable">IPlayChainable</a>

---

###### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.PlayDefinition.sequence.parameter.chain"></a>

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.PlayDefinition.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.PlayDefinition.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---


### ProjectSynthesizer <a name="ProjectSynthesizer" id="cdk-ans.ProjectSynthesizer"></a>

- *Implements:* <a href="#cdk-ans.ISynthesizer">ISynthesizer</a>

#### Initializers <a name="Initializers" id="cdk-ans.ProjectSynthesizer.Initializer"></a>

```typescript
import { ProjectSynthesizer } from 'cdk-ans'

new ProjectSynthesizer(options?: ProjectSynthesizerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.ProjectSynthesizer.Initializer.parameter.options">options</a></code> | <code><a href="#cdk-ans.ProjectSynthesizerOptions">ProjectSynthesizerOptions</a></code> | *No description.* |

---

##### `options`<sup>Optional</sup> <a name="options" id="cdk-ans.ProjectSynthesizer.Initializer.parameter.options"></a>

- *Type:* <a href="#cdk-ans.ProjectSynthesizerOptions">ProjectSynthesizerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.ProjectSynthesizer.synth">synth</a></code> | *No description.* |

---

##### `synth` <a name="synth" id="cdk-ans.ProjectSynthesizer.synth"></a>

```typescript
public synth(project: Project, outDir: string): void
```

###### `project`<sup>Required</sup> <a name="project" id="cdk-ans.ProjectSynthesizer.synth.parameter.project"></a>

- *Type:* <a href="#cdk-ans.Project">Project</a>

---

###### `outDir`<sup>Required</sup> <a name="outDir" id="cdk-ans.ProjectSynthesizer.synth.parameter.outDir"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.ProjectSynthesizer.property.options">options</a></code> | <code><a href="#cdk-ans.ProjectSynthesizerOptions">ProjectSynthesizerOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="cdk-ans.ProjectSynthesizer.property.options"></a>

```typescript
public readonly options: ProjectSynthesizerOptions;
```

- *Type:* <a href="#cdk-ans.ProjectSynthesizerOptions">ProjectSynthesizerOptions</a>

---


### RoleDefinition <a name="RoleDefinition" id="cdk-ans.RoleDefinition"></a>

- *Implements:* <a href="#cdk-ans.IRoleChainable">IRoleChainable</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.RoleDefinition.toJson">toJson</a></code> | Iterate over the chain, JSONify it, and return it as an array. |
| <code><a href="#cdk-ans.RoleDefinition.next">next</a></code> | *No description.* |

---

##### `toJson` <a name="toJson" id="cdk-ans.RoleDefinition.toJson"></a>

```typescript
public toJson(): any[]
```

Iterate over the chain, JSONify it, and return it as an array.

##### `next` <a name="next" id="cdk-ans.RoleDefinition.next"></a>

```typescript
public next(next: IRoleChainable): RoleDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.RoleDefinition.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.IRoleChainable">IRoleChainable</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.RoleDefinition.sequence">sequence</a></code> | *No description.* |

---

##### `sequence` <a name="sequence" id="cdk-ans.RoleDefinition.sequence"></a>

```typescript
import { RoleDefinition } from 'cdk-ans'

RoleDefinition.sequence(next: IRoleChainable, chain: Step[])
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.RoleDefinition.sequence.parameter.next"></a>

- *Type:* <a href="#cdk-ans.IRoleChainable">IRoleChainable</a>

---

###### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.RoleDefinition.sequence.parameter.chain"></a>

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.RoleDefinition.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.RoleDefinition.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---


### RunDefinition <a name="RunDefinition" id="cdk-ans.RunDefinition"></a>

- *Implements:* <a href="#cdk-ans.IChainable">IChainable</a>

#### Initializers <a name="Initializers" id="cdk-ans.RunDefinition.Initializer"></a>

```typescript
import { RunDefinition } from 'cdk-ans'

new RunDefinition(chain: Step[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.RunDefinition.Initializer.parameter.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.RunDefinition.Initializer.parameter.chain"></a>

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.RunDefinition.toJson">toJson</a></code> | Iterate over the chain, JSONify it, and return it as an array. |

---

##### `toJson` <a name="toJson" id="cdk-ans.RunDefinition.toJson"></a>

```typescript
public toJson(): any[]
```

Iterate over the chain, JSONify it, and return it as an array.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.RunDefinition.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.RunDefinition.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---


### SimpleNamer <a name="SimpleNamer" id="cdk-ans.SimpleNamer"></a>

- *Implements:* <a href="#cdk-ans.INamer">INamer</a>

#### Initializers <a name="Initializers" id="cdk-ans.SimpleNamer.Initializer"></a>

```typescript
import { SimpleNamer } from 'cdk-ans'

new SimpleNamer()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.SimpleNamer.name">name</a></code> | *No description.* |

---

##### `name` <a name="name" id="cdk-ans.SimpleNamer.name"></a>

```typescript
public name(construct: IConstruct): string
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-ans.SimpleNamer.name.parameter.construct"></a>

- *Type:* constructs.IConstruct

---




### TaskAction <a name="TaskAction" id="cdk-ans.TaskAction"></a>

Base class for all Task Actions.

#### Initializers <a name="Initializers" id="cdk-ans.TaskAction.Initializer"></a>

```typescript
import { TaskAction } from 'cdk-ans'

new TaskAction(name: string, props: {[ key: string ]: any})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.TaskAction.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskAction.Initializer.parameter.props">props</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.TaskAction.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.TaskAction.Initializer.parameter.props"></a>

- *Type:* {[ key: string ]: any}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.TaskAction.toJson">toJson</a></code> | *No description.* |

---

##### `toJson` <a name="toJson" id="cdk-ans.TaskAction.toJson"></a>

```typescript
public toJson(): any
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.TaskAction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskAction.property.props">props</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.TaskAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.TaskAction.property.props"></a>

```typescript
public readonly props: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---


### TaskDefinition <a name="TaskDefinition" id="cdk-ans.TaskDefinition"></a>

- *Implements:* <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.TaskDefinition.toJson">toJson</a></code> | Iterate over the chain, JSONify it, and return it as an array. |
| <code><a href="#cdk-ans.TaskDefinition.next">next</a></code> | *No description.* |

---

##### `toJson` <a name="toJson" id="cdk-ans.TaskDefinition.toJson"></a>

```typescript
public toJson(): any[]
```

Iterate over the chain, JSONify it, and return it as an array.

##### `next` <a name="next" id="cdk-ans.TaskDefinition.next"></a>

```typescript
public next(next: ITaskChainable): TaskDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.TaskDefinition.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.TaskDefinition.sequence">sequence</a></code> | *No description.* |

---

##### `sequence` <a name="sequence" id="cdk-ans.TaskDefinition.sequence"></a>

```typescript
import { TaskDefinition } from 'cdk-ans'

TaskDefinition.sequence(next: ITaskChainable, chain: Step[])
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.TaskDefinition.sequence.parameter.next"></a>

- *Type:* <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

---

###### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.TaskDefinition.sequence.parameter.chain"></a>

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.TaskDefinition.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.TaskDefinition.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---


### Variable <a name="Variable" id="cdk-ans.Variable"></a>

Ansible variable.

A class used to format anisble variables.

> [https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html](https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html)

#### Initializers <a name="Initializers" id="cdk-ans.Variable.Initializer"></a>

```typescript
import { Variable } from 'cdk-ans'

new Variable()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Variable.of">of</a></code> | Wraps a given string in Ansible's templating syntax. |
| <code><a href="#cdk-ans.Variable.ofItem">ofItem</a></code> | Wraps a given string in Ansible's templating syntax as a property of an item. |

---

##### `of` <a name="of" id="cdk-ans.Variable.of"></a>

```typescript
import { Variable } from 'cdk-ans'

Variable.of(value: string)
```

Wraps a given string in Ansible's templating syntax.

###### `value`<sup>Required</sup> <a name="value" id="cdk-ans.Variable.of.parameter.value"></a>

- *Type:* string

---

##### `ofItem` <a name="ofItem" id="cdk-ans.Variable.ofItem"></a>

```typescript
import { Variable } from 'cdk-ans'

Variable.ofItem(value: string)
```

Wraps a given string in Ansible's templating syntax as a property of an item.

###### `value`<sup>Required</sup> <a name="value" id="cdk-ans.Variable.ofItem.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Variable.property.AnsibleBecomeUser">AnsibleBecomeUser</a></code> | <code>string</code> | The user Ansible ‘becomes’ after using privilege escalation. |
| <code><a href="#cdk-ans.Variable.property.AnsibleCheckMode">AnsibleCheckMode</a></code> | <code>string</code> | Boolean that indicates if we are in check mode or not. |
| <code><a href="#cdk-ans.Variable.property.AnsibleCheckModeEnabled">AnsibleCheckModeEnabled</a></code> | <code>string</code> | The names of the roles currently imported into the current play as dependencies of other plays. |
| <code><a href="#cdk-ans.Variable.property.AnsibleCollectionName">AnsibleCollectionName</a></code> | <code>string</code> | The name of the collection the task that is executing is a part of. |
| <code><a href="#cdk-ans.Variable.property.AnsibleConfigFile">AnsibleConfigFile</a></code> | <code>string</code> | The full path of used Ansible configuration file. |
| <code><a href="#cdk-ans.Variable.property.AnsibleConnection">AnsibleConnection</a></code> | <code>string</code> | The connection plugin actually used for the task on the target host. |
| <code><a href="#cdk-ans.Variable.property.AnsibleDiffMode">AnsibleDiffMode</a></code> | <code>string</code> | Boolean that indicates if we are in diff mode or not. |
| <code><a href="#cdk-ans.Variable.property.AnsibleFacts">AnsibleFacts</a></code> | <code>string</code> | Contains any facts gathered or cached for the inventory_hostname Facts are normally gathered by the setup module automatically in a play, but any module can return facts. |
| <code><a href="#cdk-ans.Variable.property.AnsibleForks">AnsibleForks</a></code> | <code>string</code> | Integer reflecting the number of maximum forks available to this run. |
| <code><a href="#cdk-ans.Variable.property.AnsibleHost">AnsibleHost</a></code> | <code>string</code> | The ip/name of the target host to use instead of inventory_hostname. |
| <code><a href="#cdk-ans.Variable.property.AnsibleIndexVar">AnsibleIndexVar</a></code> | <code>string</code> | The name of the value provided to `loop_control.index_var`. Added in `2.9`. |
| <code><a href="#cdk-ans.Variable.property.AnsibleInventorySources">AnsibleInventorySources</a></code> | <code>string</code> | List of sources used as inventory. |
| <code><a href="#cdk-ans.Variable.property.AnsibleLimit">AnsibleLimit</a></code> | <code>string</code> | Contents of the `--limit` CLI option for the current execution of Ansible. |
| <code><a href="#cdk-ans.Variable.property.AnsibleLocal">AnsibleLocal</a></code> | <code>string</code> | Contains any ‘local facts’ gathered or cached for the inventory_hostname. |
| <code><a href="#cdk-ans.Variable.property.AnsibleLoop">AnsibleLoop</a></code> | <code>string</code> | A dictionary/map containing extended loop information when enabled through `loop_control.extended`. |
| <code><a href="#cdk-ans.Variable.property.AnsibleLoopVar">AnsibleLoopVar</a></code> | <code>string</code> | The name of the value provided to `loop_control.loop_var`. Added in `2.8`. |
| <code><a href="#cdk-ans.Variable.property.AnsibleParentRoleName">AnsibleParentRoleName</a></code> | <code>string</code> | When the current role is being executed by means of an include_role or import_role action, this variable contains a list of all parent roles, with the most recent role (in other words, the role that included/imported this role) being the first item in the list. |
| <code><a href="#cdk-ans.Variable.property.AnsibleParentRolePath">AnsibleParentRolePath</a></code> | <code>string</code> | When the current role is being executed by means of an include_role or import_role action, this variable contains a list of all parent roles paths, with the most recent role (in other words, the role that included/imported this role) being the first item in the list. |
| <code><a href="#cdk-ans.Variable.property.AnsiblePlayBatch">AnsiblePlayBatch</a></code> | <code>string</code> | List of active hosts in the current play run limited by the serial, aka ‘batch’. |
| <code><a href="#cdk-ans.Variable.property.AnsiblePlaybookPython">AnsiblePlaybookPython</a></code> | <code>string</code> | The path to the python interpreter being used by Ansible on the controller. |
| <code><a href="#cdk-ans.Variable.property.AnsiblePlayHosts">AnsiblePlayHosts</a></code> | <code>string</code> | List of hosts in the current play run, not limited by the serial. |
| <code><a href="#cdk-ans.Variable.property.AnsiblePlayHostsAll">AnsiblePlayHostsAll</a></code> | <code>string</code> | List of all the hosts that were targeted by the play. |
| <code><a href="#cdk-ans.Variable.property.AnsiblePlayName">AnsiblePlayName</a></code> | <code>string</code> | The name of the currently executed play. |
| <code><a href="#cdk-ans.Variable.property.AnsiblePlayRoleNames">AnsiblePlayRoleNames</a></code> | <code>string</code> | The names of the roles currently imported into the current play. |
| <code><a href="#cdk-ans.Variable.property.AnsiblePort">AnsiblePort</a></code> | <code>string</code> | The port used to connect to the target host. |
| <code><a href="#cdk-ans.Variable.property.AnsiblePythonInterpreter">AnsiblePythonInterpreter</a></code> | <code>string</code> | The path to the Python executable Ansible should use on the target host. |
| <code><a href="#cdk-ans.Variable.property.AnsibleRoleName">AnsibleRoleName</a></code> | <code>string</code> | The fully qualified collection role name, in the format of `namespace.collection.role_name`. |
| <code><a href="#cdk-ans.Variable.property.AnsibleRoleNames">AnsibleRoleNames</a></code> | <code>string</code> | The names of the roles currently imported into the current play, or roles referenced as dependencies of the roles imported into the current play. |
| <code><a href="#cdk-ans.Variable.property.AnsibleRunTags">AnsibleRunTags</a></code> | <code>string</code> | Contents of the `--tags` CLI option, which specifies which tags will be included for the current run. |
| <code><a href="#cdk-ans.Variable.property.AnsibleSearchPath">AnsibleSearchPath</a></code> | <code>string</code> | Current search path for action plugins and lookups, in other words, where we search for relative paths when you do `template: src=myfile`. |
| <code><a href="#cdk-ans.Variable.property.AnsibleSkipTags">AnsibleSkipTags</a></code> | <code>string</code> | Contents of the `--skip-tags` CLI option, which specifies which tags will be skipped for the current run. |
| <code><a href="#cdk-ans.Variable.property.AnsibleUser">AnsibleUser</a></code> | <code>string</code> | The user Ansible ‘logs in’ as. |
| <code><a href="#cdk-ans.Variable.property.AnsibleVerbosity">AnsibleVerbosity</a></code> | <code>string</code> | Current verbosity setting for Ansible. |
| <code><a href="#cdk-ans.Variable.property.AnsibleVersion">AnsibleVersion</a></code> | <code>string</code> | Dictionary/map that contains information about the current running version of ansible, it has the following keys: full, major, minor, revision and string. |
| <code><a href="#cdk-ans.Variable.property.GroupNames">GroupNames</a></code> | <code>string</code> | List of groups the current host is part of. |
| <code><a href="#cdk-ans.Variable.property.Groups">Groups</a></code> | <code>string</code> | A dictionary/map with all the groups in inventory and each group has the list of hosts that belong to it. |
| <code><a href="#cdk-ans.Variable.property.HostVars">HostVars</a></code> | <code>string</code> | A dictionary/map with all the hosts in inventory and variables assigned to them. |
| <code><a href="#cdk-ans.Variable.property.InventoryDir">InventoryDir</a></code> | <code>string</code> | The directory of the inventory source in which the `inventory_hostname` was first defined. |
| <code><a href="#cdk-ans.Variable.property.InventoryFile">InventoryFile</a></code> | <code>string</code> | The file name of the inventory source in which the `inventory_hostname` was first defined. |
| <code><a href="#cdk-ans.Variable.property.InventoryHostname">InventoryHostname</a></code> | <code>string</code> | The inventory name for the ‘current’ host being iterated over in the play. |
| <code><a href="#cdk-ans.Variable.property.InventoryHostnameShort">InventoryHostnameShort</a></code> | <code>string</code> | The short version of `inventory_hostname`. |
| <code><a href="#cdk-ans.Variable.property.Omit">Omit</a></code> | <code>string</code> | Special variable that allows you to ‘omit’ an option in a task, for example `- user: name=bob home={{ bobs_home\|default(omit) }}`. |
| <code><a href="#cdk-ans.Variable.property.PlaybookDir">PlaybookDir</a></code> | <code>string</code> | The path to the directory of the current playbook being executed. |
| <code><a href="#cdk-ans.Variable.property.RoleName">RoleName</a></code> | <code>string</code> | The name of the role currently being executed. |
| <code><a href="#cdk-ans.Variable.property.RolePath">RolePath</a></code> | <code>string</code> | The path to the dir of the currently running role. |

---

##### `AnsibleBecomeUser`<sup>Required</sup> <a name="AnsibleBecomeUser" id="cdk-ans.Variable.property.AnsibleBecomeUser"></a>

```typescript
public readonly AnsibleBecomeUser: string;
```

- *Type:* string

The user Ansible ‘becomes’ after using privilege escalation.

This must be available to the ‘login user’.

---

##### `AnsibleCheckMode`<sup>Required</sup> <a name="AnsibleCheckMode" id="cdk-ans.Variable.property.AnsibleCheckMode"></a>

```typescript
public readonly AnsibleCheckMode: string;
```

- *Type:* string

Boolean that indicates if we are in check mode or not.

---

##### `AnsibleCheckModeEnabled`<sup>Required</sup> <a name="AnsibleCheckModeEnabled" id="cdk-ans.Variable.property.AnsibleCheckModeEnabled"></a>

```typescript
public readonly AnsibleCheckModeEnabled: string;
```

- *Type:* string

The names of the roles currently imported into the current play as dependencies of other plays.

---

##### `AnsibleCollectionName`<sup>Required</sup> <a name="AnsibleCollectionName" id="cdk-ans.Variable.property.AnsibleCollectionName"></a>

```typescript
public readonly AnsibleCollectionName: string;
```

- *Type:* string

The name of the collection the task that is executing is a part of.

In the format of `namespace.collection`.

---

##### `AnsibleConfigFile`<sup>Required</sup> <a name="AnsibleConfigFile" id="cdk-ans.Variable.property.AnsibleConfigFile"></a>

```typescript
public readonly AnsibleConfigFile: string;
```

- *Type:* string

The full path of used Ansible configuration file.

---

##### `AnsibleConnection`<sup>Required</sup> <a name="AnsibleConnection" id="cdk-ans.Variable.property.AnsibleConnection"></a>

```typescript
public readonly AnsibleConnection: string;
```

- *Type:* string

The connection plugin actually used for the task on the target host.

---

##### `AnsibleDiffMode`<sup>Required</sup> <a name="AnsibleDiffMode" id="cdk-ans.Variable.property.AnsibleDiffMode"></a>

```typescript
public readonly AnsibleDiffMode: string;
```

- *Type:* string

Boolean that indicates if we are in diff mode or not.

---

##### `AnsibleFacts`<sup>Required</sup> <a name="AnsibleFacts" id="cdk-ans.Variable.property.AnsibleFacts"></a>

```typescript
public readonly AnsibleFacts: string;
```

- *Type:* string

Contains any facts gathered or cached for the inventory_hostname Facts are normally gathered by the setup module automatically in a play, but any module can return facts.

> [https://docs.ansible.com/ansible/latest/collections/ansible/builtin/setup_module.html](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/setup_module.html)

---

##### `AnsibleForks`<sup>Required</sup> <a name="AnsibleForks" id="cdk-ans.Variable.property.AnsibleForks"></a>

```typescript
public readonly AnsibleForks: string;
```

- *Type:* string

Integer reflecting the number of maximum forks available to this run.

---

##### `AnsibleHost`<sup>Required</sup> <a name="AnsibleHost" id="cdk-ans.Variable.property.AnsibleHost"></a>

```typescript
public readonly AnsibleHost: string;
```

- *Type:* string

The ip/name of the target host to use instead of inventory_hostname.

---

##### `AnsibleIndexVar`<sup>Required</sup> <a name="AnsibleIndexVar" id="cdk-ans.Variable.property.AnsibleIndexVar"></a>

```typescript
public readonly AnsibleIndexVar: string;
```

- *Type:* string

The name of the value provided to `loop_control.index_var`. Added in `2.9`.

---

##### `AnsibleInventorySources`<sup>Required</sup> <a name="AnsibleInventorySources" id="cdk-ans.Variable.property.AnsibleInventorySources"></a>

```typescript
public readonly AnsibleInventorySources: string;
```

- *Type:* string

List of sources used as inventory.

---

##### `AnsibleLimit`<sup>Required</sup> <a name="AnsibleLimit" id="cdk-ans.Variable.property.AnsibleLimit"></a>

```typescript
public readonly AnsibleLimit: string;
```

- *Type:* string

Contents of the `--limit` CLI option for the current execution of Ansible.

---

##### `AnsibleLocal`<sup>Required</sup> <a name="AnsibleLocal" id="cdk-ans.Variable.property.AnsibleLocal"></a>

```typescript
public readonly AnsibleLocal: string;
```

- *Type:* string

Contains any ‘local facts’ gathered or cached for the inventory_hostname.

The keys available depend on the custom facts created. See the setup module and facts.d or local facts for more details.

---

##### `AnsibleLoop`<sup>Required</sup> <a name="AnsibleLoop" id="cdk-ans.Variable.property.AnsibleLoop"></a>

```typescript
public readonly AnsibleLoop: string;
```

- *Type:* string

A dictionary/map containing extended loop information when enabled through `loop_control.extended`.

---

##### `AnsibleLoopVar`<sup>Required</sup> <a name="AnsibleLoopVar" id="cdk-ans.Variable.property.AnsibleLoopVar"></a>

```typescript
public readonly AnsibleLoopVar: string;
```

- *Type:* string

The name of the value provided to `loop_control.loop_var`. Added in `2.8`.

---

##### `AnsibleParentRoleName`<sup>Required</sup> <a name="AnsibleParentRoleName" id="cdk-ans.Variable.property.AnsibleParentRoleName"></a>

```typescript
public readonly AnsibleParentRoleName: string;
```

- *Type:* string

When the current role is being executed by means of an include_role or import_role action, this variable contains a list of all parent roles, with the most recent role (in other words, the role that included/imported this role) being the first item in the list.

When multiple inclusions occur, this list lists the last role (in other words, the role that included this role) as the first item in the list. It is also possible that a specific role exists more than once in this list.

For example: When role A includes role B, inside role B, `ansible_parent_role_names` will equal to `['A']`. If role **B** then includes role **C**, the list becomes `['B', 'A']`.

> [https://docs.ansible.com/ansible/latest/collections/ansible/builtin/import_role_module.html](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/import_role_module.html)

---

##### `AnsibleParentRolePath`<sup>Required</sup> <a name="AnsibleParentRolePath" id="cdk-ans.Variable.property.AnsibleParentRolePath"></a>

```typescript
public readonly AnsibleParentRolePath: string;
```

- *Type:* string

When the current role is being executed by means of an include_role or import_role action, this variable contains a list of all parent roles paths, with the most recent role (in other words, the role that included/imported this role) being the first item in the list.

Please refer to `ansible_parent_role_names` for the order of items in this list.

> [https://docs.ansible.com/ansible/latest/collections/ansible/builtin/import_role_module.html](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/import_role_module.html)

---

##### `AnsiblePlayBatch`<sup>Required</sup> <a name="AnsiblePlayBatch" id="cdk-ans.Variable.property.AnsiblePlayBatch"></a>

```typescript
public readonly AnsiblePlayBatch: string;
```

- *Type:* string

List of active hosts in the current play run limited by the serial, aka ‘batch’.

Failed/Unreachable hosts are not considered ‘active’.

---

##### `AnsiblePlaybookPython`<sup>Required</sup> <a name="AnsiblePlaybookPython" id="cdk-ans.Variable.property.AnsiblePlaybookPython"></a>

```typescript
public readonly AnsiblePlaybookPython: string;
```

- *Type:* string

The path to the python interpreter being used by Ansible on the controller.

---

##### `AnsiblePlayHosts`<sup>Required</sup> <a name="AnsiblePlayHosts" id="cdk-ans.Variable.property.AnsiblePlayHosts"></a>

```typescript
public readonly AnsiblePlayHosts: string;
```

- *Type:* string

List of hosts in the current play run, not limited by the serial.

Failed/Unreachable hosts are excluded from this list.

---

##### `AnsiblePlayHostsAll`<sup>Required</sup> <a name="AnsiblePlayHostsAll" id="cdk-ans.Variable.property.AnsiblePlayHostsAll"></a>

```typescript
public readonly AnsiblePlayHostsAll: string;
```

- *Type:* string

List of all the hosts that were targeted by the play.

---

##### `AnsiblePlayName`<sup>Required</sup> <a name="AnsiblePlayName" id="cdk-ans.Variable.property.AnsiblePlayName"></a>

```typescript
public readonly AnsiblePlayName: string;
```

- *Type:* string

The name of the currently executed play.

Added in `2.8.` (name attribute of the play, not file name of the playbook.)

---

##### `AnsiblePlayRoleNames`<sup>Required</sup> <a name="AnsiblePlayRoleNames" id="cdk-ans.Variable.property.AnsiblePlayRoleNames"></a>

```typescript
public readonly AnsiblePlayRoleNames: string;
```

- *Type:* string

The names of the roles currently imported into the current play.

This list does not contain the role names that are implicitly included through dependencies.

---

##### `AnsiblePort`<sup>Required</sup> <a name="AnsiblePort" id="cdk-ans.Variable.property.AnsiblePort"></a>

```typescript
public readonly AnsiblePort: string;
```

- *Type:* string

The port used to connect to the target host.

---

##### `AnsiblePythonInterpreter`<sup>Required</sup> <a name="AnsiblePythonInterpreter" id="cdk-ans.Variable.property.AnsiblePythonInterpreter"></a>

```typescript
public readonly AnsiblePythonInterpreter: string;
```

- *Type:* string

The path to the Python executable Ansible should use on the target host.

> [https://docs.ansible.com/ansible/latest/reference_appendices/interpreter_discovery.html](https://docs.ansible.com/ansible/latest/reference_appendices/interpreter_discovery.html)

---

##### `AnsibleRoleName`<sup>Required</sup> <a name="AnsibleRoleName" id="cdk-ans.Variable.property.AnsibleRoleName"></a>

```typescript
public readonly AnsibleRoleName: string;
```

- *Type:* string

The fully qualified collection role name, in the format of `namespace.collection.role_name`.

---

##### `AnsibleRoleNames`<sup>Required</sup> <a name="AnsibleRoleNames" id="cdk-ans.Variable.property.AnsibleRoleNames"></a>

```typescript
public readonly AnsibleRoleNames: string;
```

- *Type:* string

The names of the roles currently imported into the current play, or roles referenced as dependencies of the roles imported into the current play.

---

##### `AnsibleRunTags`<sup>Required</sup> <a name="AnsibleRunTags" id="cdk-ans.Variable.property.AnsibleRunTags"></a>

```typescript
public readonly AnsibleRunTags: string;
```

- *Type:* string

Contents of the `--tags` CLI option, which specifies which tags will be included for the current run.

Note that if `--tags` is not passed, this variable will default to `["all"]`.

---

##### `AnsibleSearchPath`<sup>Required</sup> <a name="AnsibleSearchPath" id="cdk-ans.Variable.property.AnsibleSearchPath"></a>

```typescript
public readonly AnsibleSearchPath: string;
```

- *Type:* string

Current search path for action plugins and lookups, in other words, where we search for relative paths when you do `template: src=myfile`.

---

##### `AnsibleSkipTags`<sup>Required</sup> <a name="AnsibleSkipTags" id="cdk-ans.Variable.property.AnsibleSkipTags"></a>

```typescript
public readonly AnsibleSkipTags: string;
```

- *Type:* string

Contents of the `--skip-tags` CLI option, which specifies which tags will be skipped for the current run.

---

##### `AnsibleUser`<sup>Required</sup> <a name="AnsibleUser" id="cdk-ans.Variable.property.AnsibleUser"></a>

```typescript
public readonly AnsibleUser: string;
```

- *Type:* string

The user Ansible ‘logs in’ as.

---

##### `AnsibleVerbosity`<sup>Required</sup> <a name="AnsibleVerbosity" id="cdk-ans.Variable.property.AnsibleVerbosity"></a>

```typescript
public readonly AnsibleVerbosity: string;
```

- *Type:* string

Current verbosity setting for Ansible.

---

##### `AnsibleVersion`<sup>Required</sup> <a name="AnsibleVersion" id="cdk-ans.Variable.property.AnsibleVersion"></a>

```typescript
public readonly AnsibleVersion: string;
```

- *Type:* string

Dictionary/map that contains information about the current running version of ansible, it has the following keys: full, major, minor, revision and string.

---

##### `GroupNames`<sup>Required</sup> <a name="GroupNames" id="cdk-ans.Variable.property.GroupNames"></a>

```typescript
public readonly GroupNames: string;
```

- *Type:* string

List of groups the current host is part of.

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="cdk-ans.Variable.property.Groups"></a>

```typescript
public readonly Groups: string;
```

- *Type:* string

A dictionary/map with all the groups in inventory and each group has the list of hosts that belong to it.

---

##### `HostVars`<sup>Required</sup> <a name="HostVars" id="cdk-ans.Variable.property.HostVars"></a>

```typescript
public readonly HostVars: string;
```

- *Type:* string

A dictionary/map with all the hosts in inventory and variables assigned to them.

---

##### `InventoryDir`<sup>Required</sup> <a name="InventoryDir" id="cdk-ans.Variable.property.InventoryDir"></a>

```typescript
public readonly InventoryDir: string;
```

- *Type:* string

The directory of the inventory source in which the `inventory_hostname` was first defined.

---

##### `InventoryFile`<sup>Required</sup> <a name="InventoryFile" id="cdk-ans.Variable.property.InventoryFile"></a>

```typescript
public readonly InventoryFile: string;
```

- *Type:* string

The file name of the inventory source in which the `inventory_hostname` was first defined.

---

##### `InventoryHostname`<sup>Required</sup> <a name="InventoryHostname" id="cdk-ans.Variable.property.InventoryHostname"></a>

```typescript
public readonly InventoryHostname: string;
```

- *Type:* string

The inventory name for the ‘current’ host being iterated over in the play.

---

##### `InventoryHostnameShort`<sup>Required</sup> <a name="InventoryHostnameShort" id="cdk-ans.Variable.property.InventoryHostnameShort"></a>

```typescript
public readonly InventoryHostnameShort: string;
```

- *Type:* string

The short version of `inventory_hostname`.

---

##### `Omit`<sup>Required</sup> <a name="Omit" id="cdk-ans.Variable.property.Omit"></a>

```typescript
public readonly Omit: string;
```

- *Type:* string

Special variable that allows you to ‘omit’ an option in a task, for example `- user: name=bob home={{ bobs_home|default(omit) }}`.

---

##### `PlaybookDir`<sup>Required</sup> <a name="PlaybookDir" id="cdk-ans.Variable.property.PlaybookDir"></a>

```typescript
public readonly PlaybookDir: string;
```

- *Type:* string

The path to the directory of the current playbook being executed.

NOTE: This might be different than directory of the playbook passed to the `ansible-playbook` command line when a playbook contains a `import_playbook` statement.

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="cdk-ans.Variable.property.RoleName"></a>

```typescript
public readonly RoleName: string;
```

- *Type:* string

The name of the role currently being executed.

---

##### `RolePath`<sup>Required</sup> <a name="RolePath" id="cdk-ans.Variable.property.RolePath"></a>

```typescript
public readonly RolePath: string;
```

- *Type:* string

The path to the dir of the currently running role.

---

### Yaml <a name="Yaml" id="cdk-ans.Yaml"></a>

YAML utilities.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Yaml.load">load</a></code> | Downloads a set of YAML documents from a file and returns them as javascript objects. |
| <code><a href="#cdk-ans.Yaml.save">save</a></code> | Saves a set of objects as a multi-document YAML file. |
| <code><a href="#cdk-ans.Yaml.stringify">stringify</a></code> | Stringify a document (or multiple documents) into YAML. |

---

##### `load` <a name="load" id="cdk-ans.Yaml.load"></a>

```typescript
import { Yaml } from 'cdk-ans'

Yaml.load(file: string)
```

Downloads a set of YAML documents from a file and returns them as javascript objects.

Empty documents are filtered out.

###### `file`<sup>Required</sup> <a name="file" id="cdk-ans.Yaml.load.parameter.file"></a>

- *Type:* string

path to load from.

---

##### `save` <a name="save" id="cdk-ans.Yaml.save"></a>

```typescript
import { Yaml } from 'cdk-ans'

Yaml.save(filePath: string, docs: any[])
```

Saves a set of objects as a multi-document YAML file.

###### `filePath`<sup>Required</sup> <a name="filePath" id="cdk-ans.Yaml.save.parameter.filePath"></a>

- *Type:* string

The output path.

---

###### `docs`<sup>Required</sup> <a name="docs" id="cdk-ans.Yaml.save.parameter.docs"></a>

- *Type:* any[]

The set of objects.

---

##### `stringify` <a name="stringify" id="cdk-ans.Yaml.stringify"></a>

```typescript
import { Yaml } from 'cdk-ans'

Yaml.stringify(docs: any)
```

Stringify a document (or multiple documents) into YAML.

We convert undefined values to null, but ignore any documents that are
undefined.

###### `docs`<sup>Required</sup> <a name="docs" id="cdk-ans.Yaml.stringify.parameter.docs"></a>

- *Type:* any

A set of objects to convert to YAML.

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IChainable <a name="IChainable" id="cdk-ans.IChainable"></a>

- *Implemented By:* <a href="#cdk-ans.Block">Block</a>, <a href="#cdk-ans.CommandTask">CommandTask</a>, <a href="#cdk-ans.FileTask">FileTask</a>, <a href="#cdk-ans.PingTask">PingTask</a>, <a href="#cdk-ans.Play">Play</a>, <a href="#cdk-ans.PlayDefinition">PlayDefinition</a>, <a href="#cdk-ans.RoleDefinition">RoleDefinition</a>, <a href="#cdk-ans.RoleTarget">RoleTarget</a>, <a href="#cdk-ans.RunDefinition">RunDefinition</a>, <a href="#cdk-ans.Task">Task</a>, <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>, <a href="#cdk-ans.IChainable">IChainable</a>, <a href="#cdk-ans.IPlayChainable">IPlayChainable</a>, <a href="#cdk-ans.IRoleChainable">IRoleChainable</a>, <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.IChainable.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.IChainable.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

### IHostIdentifiable <a name="IHostIdentifiable" id="cdk-ans.IHostIdentifiable"></a>

- *Implemented By:* <a href="#cdk-ans.Host">Host</a>, <a href="#cdk-ans.HostGroup">HostGroup</a>, <a href="#cdk-ans.IHostIdentifiable">IHostIdentifiable</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.IHostIdentifiable.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="cdk-ans.IHostIdentifiable.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

### INamer <a name="INamer" id="cdk-ans.INamer"></a>

- *Implemented By:* <a href="#cdk-ans.SimpleNamer">SimpleNamer</a>, <a href="#cdk-ans.INamer">INamer</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.INamer.name">name</a></code> | *No description.* |

---

##### `name` <a name="name" id="cdk-ans.INamer.name"></a>

```typescript
public name(construct: IConstruct): string
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-ans.INamer.name.parameter.construct"></a>

- *Type:* constructs.IConstruct

---


### IPlayChainable <a name="IPlayChainable" id="cdk-ans.IPlayChainable"></a>

- *Extends:* <a href="#cdk-ans.IChainable">IChainable</a>

- *Implemented By:* <a href="#cdk-ans.Play">Play</a>, <a href="#cdk-ans.PlayDefinition">PlayDefinition</a>, <a href="#cdk-ans.IPlayChainable">IPlayChainable</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.IPlayChainable.next">next</a></code> | *No description.* |

---

##### `next` <a name="next" id="cdk-ans.IPlayChainable.next"></a>

```typescript
public next(next: IPlayChainable): PlayDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.IPlayChainable.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.IPlayChainable">IPlayChainable</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.IPlayChainable.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.IPlayChainable.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

### IRoleChainable <a name="IRoleChainable" id="cdk-ans.IRoleChainable"></a>

- *Extends:* <a href="#cdk-ans.IChainable">IChainable</a>

- *Implemented By:* <a href="#cdk-ans.RoleDefinition">RoleDefinition</a>, <a href="#cdk-ans.RoleTarget">RoleTarget</a>, <a href="#cdk-ans.IRoleChainable">IRoleChainable</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.IRoleChainable.next">next</a></code> | *No description.* |

---

##### `next` <a name="next" id="cdk-ans.IRoleChainable.next"></a>

```typescript
public next(next: IRoleChainable): RoleDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.IRoleChainable.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.IRoleChainable">IRoleChainable</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.IRoleChainable.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.IRoleChainable.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

### ISynthesizer <a name="ISynthesizer" id="cdk-ans.ISynthesizer"></a>

- *Implemented By:* <a href="#cdk-ans.ProjectSynthesizer">ProjectSynthesizer</a>, <a href="#cdk-ans.ISynthesizer">ISynthesizer</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.ISynthesizer.synth">synth</a></code> | *No description.* |

---

##### `synth` <a name="synth" id="cdk-ans.ISynthesizer.synth"></a>

```typescript
public synth(project: Project, outDir: string): void
```

###### `project`<sup>Required</sup> <a name="project" id="cdk-ans.ISynthesizer.synth.parameter.project"></a>

- *Type:* <a href="#cdk-ans.Project">Project</a>

---

###### `outDir`<sup>Required</sup> <a name="outDir" id="cdk-ans.ISynthesizer.synth.parameter.outDir"></a>

- *Type:* string

---


### ITaskChainable <a name="ITaskChainable" id="cdk-ans.ITaskChainable"></a>

- *Extends:* <a href="#cdk-ans.IChainable">IChainable</a>

- *Implemented By:* <a href="#cdk-ans.Block">Block</a>, <a href="#cdk-ans.CommandTask">CommandTask</a>, <a href="#cdk-ans.FileTask">FileTask</a>, <a href="#cdk-ans.PingTask">PingTask</a>, <a href="#cdk-ans.Task">Task</a>, <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>, <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.ITaskChainable.next">next</a></code> | *No description.* |

---

##### `next` <a name="next" id="cdk-ans.ITaskChainable.next"></a>

```typescript
public next(next: ITaskChainable): TaskDefinition
```

###### `next`<sup>Required</sup> <a name="next" id="cdk-ans.ITaskChainable.next.parameter.next"></a>

- *Type:* <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.ITaskChainable.property.chain">chain</a></code> | <code><a href="#cdk-ans.Step">Step</a>[]</code> | *No description.* |

---

##### `chain`<sup>Required</sup> <a name="chain" id="cdk-ans.ITaskChainable.property.chain"></a>

```typescript
public readonly chain: Step[];
```

- *Type:* <a href="#cdk-ans.Step">Step</a>[]

---

## Enums <a name="Enums" id="Enums"></a>

### AnsibleConnection <a name="AnsibleConnection" id="cdk-ans.AnsibleConnection"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.AnsibleConnection.SMART">SMART</a></code> | *No description.* |
| <code><a href="#cdk-ans.AnsibleConnection.SSH">SSH</a></code> | *No description.* |
| <code><a href="#cdk-ans.AnsibleConnection.PARAMIKO">PARAMIKO</a></code> | *No description.* |

---

##### `SMART` <a name="SMART" id="cdk-ans.AnsibleConnection.SMART"></a>

---


##### `SSH` <a name="SSH" id="cdk-ans.AnsibleConnection.SSH"></a>

---


##### `PARAMIKO` <a name="PARAMIKO" id="cdk-ans.AnsibleConnection.PARAMIKO"></a>

---


### InventoryOutputType <a name="InventoryOutputType" id="cdk-ans.InventoryOutputType"></a>

How inventories should be sythesized in the output directory.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.InventoryOutputType.SINGLE_FILE">SINGLE_FILE</a></code> | Create a single inventory file including all hosts, hosts vars, and groups in one. |
| <code><a href="#cdk-ans.InventoryOutputType.GROUP_AND_HOST_VAR_FILES">GROUP_AND_HOST_VAR_FILES</a></code> | Create a file for hosts, a file for each host's vars, and a file for each group's vars. |

---

##### `SINGLE_FILE` <a name="SINGLE_FILE" id="cdk-ans.InventoryOutputType.SINGLE_FILE"></a>

Create a single inventory file including all hosts, hosts vars, and groups in one.

---


##### `GROUP_AND_HOST_VAR_FILES` <a name="GROUP_AND_HOST_VAR_FILES" id="cdk-ans.InventoryOutputType.GROUP_AND_HOST_VAR_FILES"></a>

Create a file for hosts, a file for each host's vars, and a file for each group's vars.

---


### PlaybookOutputType <a name="PlaybookOutputType" id="cdk-ans.PlaybookOutputType"></a>

How playbooks should be sythesized in the output directory.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.PlaybookOutputType.IN_ROOT">IN_ROOT</a></code> | Place all playbooks in the root of the project. |
| <code><a href="#cdk-ans.PlaybookOutputType.IN_DIRECTORY">IN_DIRECTORY</a></code> | Place all playbooks in a directory named "playbooks". |

---

##### `IN_ROOT` <a name="IN_ROOT" id="cdk-ans.PlaybookOutputType.IN_ROOT"></a>

Place all playbooks in the root of the project.

---


##### `IN_DIRECTORY` <a name="IN_DIRECTORY" id="cdk-ans.PlaybookOutputType.IN_DIRECTORY"></a>

Place all playbooks in a directory named "playbooks".

---


### PlayHostOrder <a name="PlayHostOrder" id="cdk-ans.PlayHostOrder"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.PlayHostOrder.INVENTORY">INVENTORY</a></code> | *No description.* |
| <code><a href="#cdk-ans.PlayHostOrder.SORTED">SORTED</a></code> | *No description.* |
| <code><a href="#cdk-ans.PlayHostOrder.REVERSE_SORTED">REVERSE_SORTED</a></code> | *No description.* |
| <code><a href="#cdk-ans.PlayHostOrder.REVERSE_INVENTORY">REVERSE_INVENTORY</a></code> | *No description.* |
| <code><a href="#cdk-ans.PlayHostOrder.SHUFFLED">SHUFFLED</a></code> | *No description.* |

---

##### `INVENTORY` <a name="INVENTORY" id="cdk-ans.PlayHostOrder.INVENTORY"></a>

---


##### `SORTED` <a name="SORTED" id="cdk-ans.PlayHostOrder.SORTED"></a>

---


##### `REVERSE_SORTED` <a name="REVERSE_SORTED" id="cdk-ans.PlayHostOrder.REVERSE_SORTED"></a>

---


##### `REVERSE_INVENTORY` <a name="REVERSE_INVENTORY" id="cdk-ans.PlayHostOrder.REVERSE_INVENTORY"></a>

---


##### `SHUFFLED` <a name="SHUFFLED" id="cdk-ans.PlayHostOrder.SHUFFLED"></a>

---


### RoleOutputType <a name="RoleOutputType" id="cdk-ans.RoleOutputType"></a>

How roles should be sythesized in the output directory.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.RoleOutputType.STANDARD">STANDARD</a></code> | Use the standard role structure https://docs.ansible.com/ansible/2.8/user_guide/playbooks_reuse_roles.html#role-directory-structure. |

---

##### `STANDARD` <a name="STANDARD" id="cdk-ans.RoleOutputType.STANDARD"></a>

Use the standard role structure https://docs.ansible.com/ansible/2.8/user_guide/playbooks_reuse_roles.html#role-directory-structure.

---

