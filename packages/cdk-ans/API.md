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
| <code><a href="#cdk-ans.Block.property.when">when</a></code> | <code><a href="#cdk-ans.Conditional">Conditional</a></code> | *No description.* |

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

##### `when`<sup>Optional</sup> <a name="when" id="cdk-ans.Block.property.when"></a>

```typescript
public readonly when: Conditional;
```

- *Type:* <a href="#cdk-ans.Conditional">Conditional</a>

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

Represents a host in an Ansible inventory.

> [https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups)

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
| <code><a href="#cdk-ans.Host.addVariables">addVariables</a></code> | Assigns additional variables to this host. |
| <code><a href="#cdk-ans.Host.toJson">toJson</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.Host.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addVariables` <a name="addVariables" id="cdk-ans.Host.addVariables"></a>

```typescript
public addVariables(variables: HostVariable): void
```

Assigns additional variables to this host.

###### `variables`<sup>Required</sup> <a name="variables" id="cdk-ans.Host.addVariables.parameter.variables"></a>

- *Type:* <a href="#cdk-ans.HostVariable">HostVariable</a>

A list of variables to add to this host.

---

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
| <code><a href="#cdk-ans.Host.property.variables">variables</a></code> | <code><a href="#cdk-ans.HostVariable">HostVariable</a>[]</code> | *No description.* |
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
public readonly variables: HostVariable[];
```

- *Type:* <a href="#cdk-ans.HostVariable">HostVariable</a>[]

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

A group of hosts in an Ansible inventory.

> [https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups](https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups)

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
| <code><a href="#cdk-ans.HostGroup.addHosts">addHosts</a></code> | Assigns additional hosts to this group. |
| <code><a href="#cdk-ans.HostGroup.addSubGroups">addSubGroups</a></code> | Assigns additional groups as subgroups to this group. |
| <code><a href="#cdk-ans.HostGroup.addVariables">addVariables</a></code> | Assigns additional variables to this group. |
| <code><a href="#cdk-ans.HostGroup.toJson">toJson</a></code> | JSONify this group. |

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

Assigns additional hosts to this group.

###### `hosts`<sup>Required</sup> <a name="hosts" id="cdk-ans.HostGroup.addHosts.parameter.hosts"></a>

- *Type:* <a href="#cdk-ans.Host">Host</a>

A list of hosts to add to this group.

---

##### `addSubGroups` <a name="addSubGroups" id="cdk-ans.HostGroup.addSubGroups"></a>

```typescript
public addSubGroups(groups: HostGroup): void
```

Assigns additional groups as subgroups to this group.

###### `groups`<sup>Required</sup> <a name="groups" id="cdk-ans.HostGroup.addSubGroups.parameter.groups"></a>

- *Type:* <a href="#cdk-ans.HostGroup">HostGroup</a>

A list of groups to add as subgroups to this group.

---

##### `addVariables` <a name="addVariables" id="cdk-ans.HostGroup.addVariables"></a>

```typescript
public addVariables(variables: HostVariable): void
```

Assigns additional variables to this group.

###### `variables`<sup>Required</sup> <a name="variables" id="cdk-ans.HostGroup.addVariables.parameter.variables"></a>

- *Type:* <a href="#cdk-ans.HostVariable">HostVariable</a>

A list of variables to add to this group.

---

##### `toJson` <a name="toJson" id="cdk-ans.HostGroup.toJson"></a>

```typescript
public toJson(): {[ key: string ]: any}
```

JSONify this group.

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
| <code><a href="#cdk-ans.HostGroup.property.variables">variables</a></code> | <code><a href="#cdk-ans.HostVariable">HostVariable</a>[]</code> | *No description.* |

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
public readonly variables: HostVariable[];
```

- *Type:* <a href="#cdk-ans.HostVariable">HostVariable</a>[]

---


### HostVariable <a name="HostVariable" id="cdk-ans.HostVariable"></a>

- *Implements:* <a href="#cdk-ans.IVariable">IVariable</a>

#### Initializers <a name="Initializers" id="cdk-ans.HostVariable.Initializer"></a>

```typescript
import { HostVariable } from 'cdk-ans'

new HostVariable(scope: Construct, id: string, props: HostVariableProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.HostVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.HostVariable.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HostVariable.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ans.HostVariableProps">HostVariableProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.HostVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ans.HostVariable.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ans.HostVariable.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ans.HostVariableProps">HostVariableProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.HostVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.HostVariable.asRaw">asRaw</a></code> | Returns the variable as a raw string. |
| <code><a href="#cdk-ans.HostVariable.asVariable">asVariable</a></code> | Returns the variable as an ansible variable string `{{ variable }}`. |
| <code><a href="#cdk-ans.HostVariable.index">index</a></code> | *No description.* |
| <code><a href="#cdk-ans.HostVariable.property">property</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.HostVariable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `asRaw` <a name="asRaw" id="cdk-ans.HostVariable.asRaw"></a>

```typescript
public asRaw(): string
```

Returns the variable as a raw string.

##### `asVariable` <a name="asVariable" id="cdk-ans.HostVariable.asVariable"></a>

```typescript
public asVariable(): string
```

Returns the variable as an ansible variable string `{{ variable }}`.

##### `index` <a name="index" id="cdk-ans.HostVariable.index"></a>

```typescript
public index(_: number): IVariable
```

###### `_`<sup>Required</sup> <a name="_" id="cdk-ans.HostVariable.index.parameter._"></a>

- *Type:* number

---

##### `property` <a name="property" id="cdk-ans.HostVariable.property"></a>

```typescript
public property(_: string): IVariable
```

###### `_`<sup>Required</sup> <a name="_" id="cdk-ans.HostVariable.property.parameter._"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.HostVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-ans.HostVariable.isConstruct"></a>

```typescript
import { HostVariable } from 'cdk-ans'

HostVariable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.HostVariable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.HostVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.HostVariable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HostVariable.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.HostVariable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.HostVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ans.HostVariable.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---


### Inventory <a name="Inventory" id="cdk-ans.Inventory"></a>

Represents an Ansible inventory.

> [https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups](https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups)

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
| <code><a href="#cdk-ans.Inventory.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Inventory.property.variables">variables</a></code> | <code><a href="#cdk-ans.HostVariable">HostVariable</a>[]</code> | *No description.* |

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

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Inventory.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="cdk-ans.Inventory.property.variables"></a>

```typescript
public readonly variables: HostVariable[];
```

- *Type:* <a href="#cdk-ans.HostVariable">HostVariable</a>[]

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
| <code><a href="#cdk-ans.Playbook.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Playbook.property.playDefinition">playDefinition</a></code> | <code><a href="#cdk-ans.PlayDefinition">PlayDefinition</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Playbook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Playbook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

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
| <code><a href="#cdk-ans.Project.property.name">name</a></code> | <code>string</code> | *No description.* |
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

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Project.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

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
| <code><a href="#cdk-ans.Role.property.name">name</a></code> | <code>string</code> | *No description.* |
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

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Role.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

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

RoleTarget.fromRole(scope: Construct, id: string, role: Role, props?: RoleTargetProps)
```

Creates a role target from a role.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.RoleTarget.fromRole.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-ans.RoleTarget.fromRole.parameter.id"></a>

- *Type:* string

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
| <code><a href="#cdk-ans.RoleTarget.property.when">when</a></code> | <code><a href="#cdk-ans.Conditional">Conditional</a></code> | *No description.* |

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
public readonly when: Conditional;
```

- *Type:* <a href="#cdk-ans.Conditional">Conditional</a>

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
| <code><a href="#cdk-ans.Task.property.failedWhen">failedWhen</a></code> | <code><a href="#cdk-ans.Conditional">Conditional</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.localAction">localAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.loop">loop</a></code> | <code>string \| string[]</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.loopControl">loopControl</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.notify">notify</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.poll">poll</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.register">register</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.until">until</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.Task.property.when">when</a></code> | <code><a href="#cdk-ans.Conditional">Conditional</a></code> | *No description.* |
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
public readonly failedWhen: Conditional[];
```

- *Type:* <a href="#cdk-ans.Conditional">Conditional</a>[]

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
public readonly when: Conditional;
```

- *Type:* <a href="#cdk-ans.Conditional">Conditional</a>

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
| <code><a href="#cdk-ans.BlockProps.property.when">when</a></code> | <code><a href="#cdk-ans.Conditional">Conditional</a></code> | *No description.* |

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
public readonly when: Conditional;
```

- *Type:* <a href="#cdk-ans.Conditional">Conditional</a>

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

Properties for a host group.

#### Initializer <a name="Initializer" id="cdk-ans.HostGroupProps.Initializer"></a>

```typescript
import { HostGroupProps } from 'cdk-ans'

const hostGroupProps: HostGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.HostGroupProps.property.groups">groups</a></code> | <code><a href="#cdk-ans.HostGroup">HostGroup</a>[]</code> | Subgroups of this group. |
| <code><a href="#cdk-ans.HostGroupProps.property.hosts">hosts</a></code> | <code><a href="#cdk-ans.Host">Host</a>[]</code> | Hosts in this group. |
| <code><a href="#cdk-ans.HostGroupProps.property.identifier">identifier</a></code> | <code>string</code> | The identifier of the group. |
| <code><a href="#cdk-ans.HostGroupProps.property.variables">variables</a></code> | <code><a href="#cdk-ans.HostVariable">HostVariable</a>[]</code> | Variables that will be set on all hosts in this group. |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="cdk-ans.HostGroupProps.property.groups"></a>

```typescript
public readonly groups: HostGroup[];
```

- *Type:* <a href="#cdk-ans.HostGroup">HostGroup</a>[]

Subgroups of this group.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="cdk-ans.HostGroupProps.property.hosts"></a>

```typescript
public readonly hosts: Host[];
```

- *Type:* <a href="#cdk-ans.Host">Host</a>[]

Hosts in this group.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="cdk-ans.HostGroupProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The identifier of the group.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="cdk-ans.HostGroupProps.property.variables"></a>

```typescript
public readonly variables: HostVariable[];
```

- *Type:* <a href="#cdk-ans.HostVariable">HostVariable</a>[]

Variables that will be set on all hosts in this group.

---

### HostProps <a name="HostProps" id="cdk-ans.HostProps"></a>

Configuration for a host in an Ansible inventory.

#### Initializer <a name="Initializer" id="cdk-ans.HostProps.Initializer"></a>

```typescript
import { HostProps } from 'cdk-ans'

const hostProps: HostProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.HostProps.property.host">host</a></code> | <code>string</code> | The hostname or IP address of the host. |
| <code><a href="#cdk-ans.HostProps.property.ansibleBecome">ansibleBecome</a></code> | <code>boolean</code> | Whether to become privileged. |
| <code><a href="#cdk-ans.HostProps.property.ansiblePassword">ansiblePassword</a></code> | <code>string</code> | The password to use to connect to the host. |
| <code><a href="#cdk-ans.HostProps.property.ansiblePort">ansiblePort</a></code> | <code>number</code> | The port to connect to on the remote host. |
| <code><a href="#cdk-ans.HostProps.property.ansibleUser">ansibleUser</a></code> | <code>string</code> | The user to connect to the host as. |
| <code><a href="#cdk-ans.HostProps.property.connectionType">connectionType</a></code> | <code><a href="#cdk-ans.AnsibleConnection">AnsibleConnection</a></code> | The connection type to use to connect to the host. |
| <code><a href="#cdk-ans.HostProps.property.identifier">identifier</a></code> | <code>string</code> | The identifier of the host on syntesis. |
| <code><a href="#cdk-ans.HostProps.property.variables">variables</a></code> | <code><a href="#cdk-ans.HostVariable">HostVariable</a>[]</code> | Additional variables to set for the host. |

---

##### `host`<sup>Required</sup> <a name="host" id="cdk-ans.HostProps.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The hostname or IP address of the host.

---

##### `ansibleBecome`<sup>Optional</sup> <a name="ansibleBecome" id="cdk-ans.HostProps.property.ansibleBecome"></a>

```typescript
public readonly ansibleBecome: boolean;
```

- *Type:* boolean
- *Default:* no become

Whether to become privileged.

> [https://docs.ansible.com/ansible/latest/user_guide/become.html](https://docs.ansible.com/ansible/latest/user_guide/become.html)

---

##### `ansiblePassword`<sup>Optional</sup> <a name="ansiblePassword" id="cdk-ans.HostProps.property.ansiblePassword"></a>

```typescript
public readonly ansiblePassword: string;
```

- *Type:* string
- *Default:* no password

The password to use to connect to the host.

> [https://docs.ansible.com/ansible/latest/user_guide/connection_details.html#ssh-connection-variables](https://docs.ansible.com/ansible/latest/user_guide/connection_details.html#ssh-connection-variables)

---

##### `ansiblePort`<sup>Optional</sup> <a name="ansiblePort" id="cdk-ans.HostProps.property.ansiblePort"></a>

```typescript
public readonly ansiblePort: number;
```

- *Type:* number
- *Default:* the default port for the connection type

The port to connect to on the remote host.

> [https://docs.ansible.com/ansible/latest/user_guide/connection_details.html#connection-types](https://docs.ansible.com/ansible/latest/user_guide/connection_details.html#connection-types)

---

##### `ansibleUser`<sup>Optional</sup> <a name="ansibleUser" id="cdk-ans.HostProps.property.ansibleUser"></a>

```typescript
public readonly ansibleUser: string;
```

- *Type:* string

The user to connect to the host as.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="cdk-ans.HostProps.property.connectionType"></a>

```typescript
public readonly connectionType: AnsibleConnection;
```

- *Type:* <a href="#cdk-ans.AnsibleConnection">AnsibleConnection</a>
- *Default:* AnsibleConnection.SSH

The connection type to use to connect to the host.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="cdk-ans.HostProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string
- *Default:* the construct's id

The identifier of the host on syntesis.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="cdk-ans.HostProps.property.variables"></a>

```typescript
public readonly variables: HostVariable[];
```

- *Type:* <a href="#cdk-ans.HostVariable">HostVariable</a>[]

Additional variables to set for the host.

---

### HostVariableProps <a name="HostVariableProps" id="cdk-ans.HostVariableProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.HostVariableProps.Initializer"></a>

```typescript
import { HostVariableProps } from 'cdk-ans'

const hostVariableProps: HostVariableProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.HostVariableProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.HostVariableProps.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.HostVariableProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-ans.HostVariableProps.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### InventoryProps <a name="InventoryProps" id="cdk-ans.InventoryProps"></a>

Properties for an Ansible inventory.

#### Initializer <a name="Initializer" id="cdk-ans.InventoryProps.Initializer"></a>

```typescript
import { InventoryProps } from 'cdk-ans'

const inventoryProps: InventoryProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.InventoryProps.property.groups">groups</a></code> | <code><a href="#cdk-ans.HostGroup">HostGroup</a>[]</code> | Groups in the inventory. |
| <code><a href="#cdk-ans.InventoryProps.property.hosts">hosts</a></code> | <code><a href="#cdk-ans.Host">Host</a>[]</code> | Hosts in the inventory. |
| <code><a href="#cdk-ans.InventoryProps.property.name">name</a></code> | <code>string</code> | The name of the inventory. |
| <code><a href="#cdk-ans.InventoryProps.property.variables">variables</a></code> | <code><a href="#cdk-ans.HostVariable">HostVariable</a>[]</code> | Inventory level variables that will be set on all hosts. |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="cdk-ans.InventoryProps.property.groups"></a>

```typescript
public readonly groups: HostGroup[];
```

- *Type:* <a href="#cdk-ans.HostGroup">HostGroup</a>[]

Groups in the inventory.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="cdk-ans.InventoryProps.property.hosts"></a>

```typescript
public readonly hosts: Host[];
```

- *Type:* <a href="#cdk-ans.Host">Host</a>[]

Hosts in the inventory.

Hosts added here are part of the top level "all" group.

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.InventoryProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* the name of the construct.

The name of the inventory.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="cdk-ans.InventoryProps.property.variables"></a>

```typescript
public readonly variables: HostVariable[];
```

- *Type:* <a href="#cdk-ans.HostVariable">HostVariable</a>[]

Inventory level variables that will be set on all hosts.

> [https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html#adding-variables-to-inventory](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html#adding-variables-to-inventory)

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
| <code><a href="#cdk-ans.PlaybookProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `playDefinition`<sup>Required</sup> <a name="playDefinition" id="cdk-ans.PlaybookProps.property.playDefinition"></a>

```typescript
public readonly playDefinition: PlayDefinition;
```

- *Type:* <a href="#cdk-ans.PlayDefinition">PlayDefinition</a>

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.PlaybookProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

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

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.ProjectProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.ProjectProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

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
| <code><a href="#cdk-ans.RoleProps.property.name">name</a></code> | <code>string</code> | *No description.* |
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

##### `name`<sup>Optional</sup> <a name="name" id="cdk-ans.RoleProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

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
| <code><a href="#cdk-ans.RoleTargetProps.property.when">when</a></code> | <code><a href="#cdk-ans.Conditional">Conditional</a></code> | *No description.* |

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
public readonly when: Conditional;
```

- *Type:* <a href="#cdk-ans.Conditional">Conditional</a>

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
| <code><a href="#cdk-ans.SynthesizePlaybookOptions.property.outDir">outDir</a></code> | <code>string</code> | Where synthezied playbooks should be saved. |
| <code><a href="#cdk-ans.SynthesizePlaybookOptions.property.playbookOutputType">playbookOutputType</a></code> | <code><a href="#cdk-ans.PlaybookOutputType">PlaybookOutputType</a></code> | How to organzie playbook output. |

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
| <code><a href="#cdk-ans.TaskProps.property.failedWhen">failedWhen</a></code> | <code><a href="#cdk-ans.Conditional">Conditional</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.localAction">localAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.loop">loop</a></code> | <code>string \| string[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.loopControl">loopControl</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.notify">notify</a></code> | <code><a href="#cdk-ans.Handler">Handler</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.poll">poll</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.register">register</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.until">until</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.TaskProps.property.when">when</a></code> | <code><a href="#cdk-ans.Conditional">Conditional</a></code> | *No description.* |
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
public readonly failedWhen: Conditional[];
```

- *Type:* <a href="#cdk-ans.Conditional">Conditional</a>[]

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
public readonly when: Conditional;
```

- *Type:* <a href="#cdk-ans.Conditional">Conditional</a>

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

### AnyVariable <a name="AnyVariable" id="cdk-ans.AnyVariable"></a>

A variable that can be used to access any type of variable.

Used by returns of `property` and `index` methods of other variables.

#### Initializers <a name="Initializers" id="cdk-ans.AnyVariable.Initializer"></a>

```typescript
import { AnyVariable } from 'cdk-ans'

new AnyVariable(name: string, parents?: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.AnyVariable.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.AnyVariable.Initializer.parameter.parents">parents</a></code> | <code>string[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.AnyVariable.Initializer.parameter.name"></a>

- *Type:* string

---

##### `parents`<sup>Optional</sup> <a name="parents" id="cdk-ans.AnyVariable.Initializer.parameter.parents"></a>

- *Type:* string[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.AnyVariable.asRaw">asRaw</a></code> | Returns the variable as a raw string. |
| <code><a href="#cdk-ans.AnyVariable.asVariable">asVariable</a></code> | Returns the variable as an ansible variable string `{{ variable }}`. |
| <code><a href="#cdk-ans.AnyVariable.index">index</a></code> | *No description.* |
| <code><a href="#cdk-ans.AnyVariable.property">property</a></code> | *No description.* |

---

##### `asRaw` <a name="asRaw" id="cdk-ans.AnyVariable.asRaw"></a>

```typescript
public asRaw(): string
```

Returns the variable as a raw string.

##### `asVariable` <a name="asVariable" id="cdk-ans.AnyVariable.asVariable"></a>

```typescript
public asVariable(): string
```

Returns the variable as an ansible variable string `{{ variable }}`.

##### `index` <a name="index" id="cdk-ans.AnyVariable.index"></a>

```typescript
public index(index: number): IVariable
```

###### `index`<sup>Required</sup> <a name="index" id="cdk-ans.AnyVariable.index.parameter.index"></a>

- *Type:* number

---

##### `property` <a name="property" id="cdk-ans.AnyVariable.property"></a>

```typescript
public property(key: string): IVariable
```

###### `key`<sup>Required</sup> <a name="key" id="cdk-ans.AnyVariable.property.parameter.key"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.AnyVariable.of">of</a></code> | *No description.* |

---

##### `of` <a name="of" id="cdk-ans.AnyVariable.of"></a>

```typescript
import { AnyVariable } from 'cdk-ans'

AnyVariable.of(name: string)
```

###### `name`<sup>Required</sup> <a name="name" id="cdk-ans.AnyVariable.of.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.AnyVariable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.AnyVariable.property.parents">parents</a></code> | <code>string[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.AnyVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parents`<sup>Required</sup> <a name="parents" id="cdk-ans.AnyVariable.property.parents"></a>

```typescript
public readonly parents: string[];
```

- *Type:* string[]

---


### BaseVariable <a name="BaseVariable" id="cdk-ans.BaseVariable"></a>

- *Implements:* <a href="#cdk-ans.IVariable">IVariable</a>

The base variable class that all other variables extend from.

#### Initializers <a name="Initializers" id="cdk-ans.BaseVariable.Initializer"></a>

```typescript
import { BaseVariable } from 'cdk-ans'

new BaseVariable(name: string, parents?: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.BaseVariable.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.BaseVariable.Initializer.parameter.parents">parents</a></code> | <code>string[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.BaseVariable.Initializer.parameter.name"></a>

- *Type:* string

---

##### `parents`<sup>Optional</sup> <a name="parents" id="cdk-ans.BaseVariable.Initializer.parameter.parents"></a>

- *Type:* string[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.BaseVariable.asRaw">asRaw</a></code> | Returns the variable as a raw string. |
| <code><a href="#cdk-ans.BaseVariable.asVariable">asVariable</a></code> | Returns the variable as an ansible variable string `{{ variable }}`. |
| <code><a href="#cdk-ans.BaseVariable.index">index</a></code> | *No description.* |
| <code><a href="#cdk-ans.BaseVariable.property">property</a></code> | *No description.* |

---

##### `asRaw` <a name="asRaw" id="cdk-ans.BaseVariable.asRaw"></a>

```typescript
public asRaw(): string
```

Returns the variable as a raw string.

##### `asVariable` <a name="asVariable" id="cdk-ans.BaseVariable.asVariable"></a>

```typescript
public asVariable(): string
```

Returns the variable as an ansible variable string `{{ variable }}`.

##### `index` <a name="index" id="cdk-ans.BaseVariable.index"></a>

```typescript
public index(index: number): IVariable
```

###### `index`<sup>Required</sup> <a name="index" id="cdk-ans.BaseVariable.index.parameter.index"></a>

- *Type:* number

---

##### `property` <a name="property" id="cdk-ans.BaseVariable.property"></a>

```typescript
public property(name: string): IVariable
```

###### `name`<sup>Required</sup> <a name="name" id="cdk-ans.BaseVariable.property.parameter.name"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.BaseVariable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.BaseVariable.property.parents">parents</a></code> | <code>string[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.BaseVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parents`<sup>Required</sup> <a name="parents" id="cdk-ans.BaseVariable.property.parents"></a>

```typescript
public readonly parents: string[];
```

- *Type:* string[]

---


### Conditional <a name="Conditional" id="cdk-ans.Conditional"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Conditional.format">format</a></code> | *No description.* |

---

##### `format` <a name="format" id="cdk-ans.Conditional.format"></a>

```typescript
public format(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Conditional.and">and</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.bool">bool</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.equal">equal</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.greaterThan">greaterThan</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.greaterThanOrEqual">greaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.in">in</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.is">is</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.isNot">isNot</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.lessThan">lessThan</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.lessThanOrEqual">lessThanOrEqual</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.notBool">notBool</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.notEqual">notEqual</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.notIn">notIn</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.or">or</a></code> | *No description.* |

---

##### `and` <a name="and" id="cdk-ans.Conditional.and"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.and(condition1: any, condition2: any)
```

###### `condition1`<sup>Required</sup> <a name="condition1" id="cdk-ans.Conditional.and.parameter.condition1"></a>

- *Type:* any

---

###### `condition2`<sup>Required</sup> <a name="condition2" id="cdk-ans.Conditional.and.parameter.condition2"></a>

- *Type:* any

---

##### `bool` <a name="bool" id="cdk-ans.Conditional.bool"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.bool(bool: any)
```

###### `bool`<sup>Required</sup> <a name="bool" id="cdk-ans.Conditional.bool.parameter.bool"></a>

- *Type:* any

---

##### `equal` <a name="equal" id="cdk-ans.Conditional.equal"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.equal(var1: any, var2: any)
```

###### `var1`<sup>Required</sup> <a name="var1" id="cdk-ans.Conditional.equal.parameter.var1"></a>

- *Type:* any

---

###### `var2`<sup>Required</sup> <a name="var2" id="cdk-ans.Conditional.equal.parameter.var2"></a>

- *Type:* any

---

##### `greaterThan` <a name="greaterThan" id="cdk-ans.Conditional.greaterThan"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.greaterThan(var1: any, var2: any)
```

###### `var1`<sup>Required</sup> <a name="var1" id="cdk-ans.Conditional.greaterThan.parameter.var1"></a>

- *Type:* any

---

###### `var2`<sup>Required</sup> <a name="var2" id="cdk-ans.Conditional.greaterThan.parameter.var2"></a>

- *Type:* any

---

##### `greaterThanOrEqual` <a name="greaterThanOrEqual" id="cdk-ans.Conditional.greaterThanOrEqual"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.greaterThanOrEqual(var1: any, var2: any)
```

###### `var1`<sup>Required</sup> <a name="var1" id="cdk-ans.Conditional.greaterThanOrEqual.parameter.var1"></a>

- *Type:* any

---

###### `var2`<sup>Required</sup> <a name="var2" id="cdk-ans.Conditional.greaterThanOrEqual.parameter.var2"></a>

- *Type:* any

---

##### `in` <a name="in" id="cdk-ans.Conditional.in"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.in(var1: any, var2: any)
```

###### `var1`<sup>Required</sup> <a name="var1" id="cdk-ans.Conditional.in.parameter.var1"></a>

- *Type:* any

---

###### `var2`<sup>Required</sup> <a name="var2" id="cdk-ans.Conditional.in.parameter.var2"></a>

- *Type:* any

---

##### `is` <a name="is" id="cdk-ans.Conditional.is"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.is(var1: any, isEval: IsEvaluation)
```

###### `var1`<sup>Required</sup> <a name="var1" id="cdk-ans.Conditional.is.parameter.var1"></a>

- *Type:* any

---

###### `isEval`<sup>Required</sup> <a name="isEval" id="cdk-ans.Conditional.is.parameter.isEval"></a>

- *Type:* <a href="#cdk-ans.IsEvaluation">IsEvaluation</a>

---

##### `isNot` <a name="isNot" id="cdk-ans.Conditional.isNot"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.isNot(var1: any, isEval: IsEvaluation)
```

###### `var1`<sup>Required</sup> <a name="var1" id="cdk-ans.Conditional.isNot.parameter.var1"></a>

- *Type:* any

---

###### `isEval`<sup>Required</sup> <a name="isEval" id="cdk-ans.Conditional.isNot.parameter.isEval"></a>

- *Type:* <a href="#cdk-ans.IsEvaluation">IsEvaluation</a>

---

##### `lessThan` <a name="lessThan" id="cdk-ans.Conditional.lessThan"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.lessThan(var1: any, var2: any)
```

###### `var1`<sup>Required</sup> <a name="var1" id="cdk-ans.Conditional.lessThan.parameter.var1"></a>

- *Type:* any

---

###### `var2`<sup>Required</sup> <a name="var2" id="cdk-ans.Conditional.lessThan.parameter.var2"></a>

- *Type:* any

---

##### `lessThanOrEqual` <a name="lessThanOrEqual" id="cdk-ans.Conditional.lessThanOrEqual"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.lessThanOrEqual(var1: any, var2: any)
```

###### `var1`<sup>Required</sup> <a name="var1" id="cdk-ans.Conditional.lessThanOrEqual.parameter.var1"></a>

- *Type:* any

---

###### `var2`<sup>Required</sup> <a name="var2" id="cdk-ans.Conditional.lessThanOrEqual.parameter.var2"></a>

- *Type:* any

---

##### `notBool` <a name="notBool" id="cdk-ans.Conditional.notBool"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.notBool(bool: any)
```

###### `bool`<sup>Required</sup> <a name="bool" id="cdk-ans.Conditional.notBool.parameter.bool"></a>

- *Type:* any

---

##### `notEqual` <a name="notEqual" id="cdk-ans.Conditional.notEqual"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.notEqual(var1: any, var2: any)
```

###### `var1`<sup>Required</sup> <a name="var1" id="cdk-ans.Conditional.notEqual.parameter.var1"></a>

- *Type:* any

---

###### `var2`<sup>Required</sup> <a name="var2" id="cdk-ans.Conditional.notEqual.parameter.var2"></a>

- *Type:* any

---

##### `notIn` <a name="notIn" id="cdk-ans.Conditional.notIn"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.notIn(var1: any, var2: any)
```

###### `var1`<sup>Required</sup> <a name="var1" id="cdk-ans.Conditional.notIn.parameter.var1"></a>

- *Type:* any

---

###### `var2`<sup>Required</sup> <a name="var2" id="cdk-ans.Conditional.notIn.parameter.var2"></a>

- *Type:* any

---

##### `or` <a name="or" id="cdk-ans.Conditional.or"></a>

```typescript
import { Conditional } from 'cdk-ans'

Conditional.or(condition1: any, condition2: any)
```

###### `condition1`<sup>Required</sup> <a name="condition1" id="cdk-ans.Conditional.or.parameter.condition1"></a>

- *Type:* any

---

###### `condition2`<sup>Required</sup> <a name="condition2" id="cdk-ans.Conditional.or.parameter.condition2"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Conditional.property.mode">mode</a></code> | <code><a href="#cdk-ans.ConditionalEvaluation">ConditionalEvaluation</a></code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.property.var1">var1</a></code> | <code>any</code> | *No description.* |
| <code><a href="#cdk-ans.Conditional.property.var2">var2</a></code> | <code>any</code> | *No description.* |

---

##### `mode`<sup>Required</sup> <a name="mode" id="cdk-ans.Conditional.property.mode"></a>

```typescript
public readonly mode: ConditionalEvaluation;
```

- *Type:* <a href="#cdk-ans.ConditionalEvaluation">ConditionalEvaluation</a>

---

##### `var1`<sup>Required</sup> <a name="var1" id="cdk-ans.Conditional.property.var1"></a>

```typescript
public readonly var1: any;
```

- *Type:* any

---

##### `var2`<sup>Optional</sup> <a name="var2" id="cdk-ans.Conditional.property.var2"></a>

```typescript
public readonly var2: any;
```

- *Type:* any

---


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


### DictionaryVariable <a name="DictionaryVariable" id="cdk-ans.DictionaryVariable"></a>

A variable that represents a dictionary (object) This can be used to access properties of the dictionary.

#### Initializers <a name="Initializers" id="cdk-ans.DictionaryVariable.Initializer"></a>

```typescript
import { DictionaryVariable } from 'cdk-ans'

new DictionaryVariable(name: string, parents?: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.DictionaryVariable.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.DictionaryVariable.Initializer.parameter.parents">parents</a></code> | <code>string[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.DictionaryVariable.Initializer.parameter.name"></a>

- *Type:* string

---

##### `parents`<sup>Optional</sup> <a name="parents" id="cdk-ans.DictionaryVariable.Initializer.parameter.parents"></a>

- *Type:* string[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.DictionaryVariable.asRaw">asRaw</a></code> | Returns the variable as a raw string. |
| <code><a href="#cdk-ans.DictionaryVariable.asVariable">asVariable</a></code> | Returns the variable as an ansible variable string `{{ variable }}`. |
| <code><a href="#cdk-ans.DictionaryVariable.index">index</a></code> | *No description.* |
| <code><a href="#cdk-ans.DictionaryVariable.property">property</a></code> | *No description.* |

---

##### `asRaw` <a name="asRaw" id="cdk-ans.DictionaryVariable.asRaw"></a>

```typescript
public asRaw(): string
```

Returns the variable as a raw string.

##### `asVariable` <a name="asVariable" id="cdk-ans.DictionaryVariable.asVariable"></a>

```typescript
public asVariable(): string
```

Returns the variable as an ansible variable string `{{ variable }}`.

##### `index` <a name="index" id="cdk-ans.DictionaryVariable.index"></a>

```typescript
public index(_: number): IVariable
```

###### `_`<sup>Required</sup> <a name="_" id="cdk-ans.DictionaryVariable.index.parameter._"></a>

- *Type:* number

---

##### `property` <a name="property" id="cdk-ans.DictionaryVariable.property"></a>

```typescript
public property(key: string): IVariable
```

###### `key`<sup>Required</sup> <a name="key" id="cdk-ans.DictionaryVariable.property.parameter.key"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.DictionaryVariable.of">of</a></code> | *No description.* |

---

##### `of` <a name="of" id="cdk-ans.DictionaryVariable.of"></a>

```typescript
import { DictionaryVariable } from 'cdk-ans'

DictionaryVariable.of(name: string)
```

###### `name`<sup>Required</sup> <a name="name" id="cdk-ans.DictionaryVariable.of.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.DictionaryVariable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.DictionaryVariable.property.parents">parents</a></code> | <code>string[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.DictionaryVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parents`<sup>Required</sup> <a name="parents" id="cdk-ans.DictionaryVariable.property.parents"></a>

```typescript
public readonly parents: string[];
```

- *Type:* string[]

---


### ListVariable <a name="ListVariable" id="cdk-ans.ListVariable"></a>

A variable that can be used to access a indexed sub variables.

#### Initializers <a name="Initializers" id="cdk-ans.ListVariable.Initializer"></a>

```typescript
import { ListVariable } from 'cdk-ans'

new ListVariable(name: string, parents?: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.ListVariable.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.ListVariable.Initializer.parameter.parents">parents</a></code> | <code>string[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.ListVariable.Initializer.parameter.name"></a>

- *Type:* string

---

##### `parents`<sup>Optional</sup> <a name="parents" id="cdk-ans.ListVariable.Initializer.parameter.parents"></a>

- *Type:* string[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.ListVariable.asRaw">asRaw</a></code> | Returns the variable as a raw string. |
| <code><a href="#cdk-ans.ListVariable.asVariable">asVariable</a></code> | Returns the variable as an ansible variable string `{{ variable }}`. |
| <code><a href="#cdk-ans.ListVariable.index">index</a></code> | *No description.* |
| <code><a href="#cdk-ans.ListVariable.property">property</a></code> | *No description.* |

---

##### `asRaw` <a name="asRaw" id="cdk-ans.ListVariable.asRaw"></a>

```typescript
public asRaw(): string
```

Returns the variable as a raw string.

##### `asVariable` <a name="asVariable" id="cdk-ans.ListVariable.asVariable"></a>

```typescript
public asVariable(): string
```

Returns the variable as an ansible variable string `{{ variable }}`.

##### `index` <a name="index" id="cdk-ans.ListVariable.index"></a>

```typescript
public index(index: number): IVariable
```

###### `index`<sup>Required</sup> <a name="index" id="cdk-ans.ListVariable.index.parameter.index"></a>

- *Type:* number

---

##### `property` <a name="property" id="cdk-ans.ListVariable.property"></a>

```typescript
public property(_: string): IVariable
```

###### `_`<sup>Required</sup> <a name="_" id="cdk-ans.ListVariable.property.parameter._"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.ListVariable.of">of</a></code> | *No description.* |

---

##### `of` <a name="of" id="cdk-ans.ListVariable.of"></a>

```typescript
import { ListVariable } from 'cdk-ans'

ListVariable.of(name: string)
```

###### `name`<sup>Required</sup> <a name="name" id="cdk-ans.ListVariable.of.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.ListVariable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.ListVariable.property.parents">parents</a></code> | <code>string[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.ListVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parents`<sup>Required</sup> <a name="parents" id="cdk-ans.ListVariable.property.parents"></a>

```typescript
public readonly parents: string[];
```

- *Type:* string[]

---


### MagicVariable <a name="MagicVariable" id="cdk-ans.MagicVariable"></a>

Ansible magic variable.

A class used to format anisble variables.

> [https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html](https://docs.ansible.com/ansible/latest/reference_appendices/special_variables.html)

#### Initializers <a name="Initializers" id="cdk-ans.MagicVariable.Initializer"></a>

```typescript
import { MagicVariable } from 'cdk-ans'

new MagicVariable()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleBecomeUser">AnsibleBecomeUser</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The user Ansible ‘becomes’ after using privilege escalation. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleCheckMode">AnsibleCheckMode</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | Boolean that indicates if we are in check mode or not. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleCheckModeEnabled">AnsibleCheckModeEnabled</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The names of the roles currently imported into the current play as dependencies of other plays. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleCollectionName">AnsibleCollectionName</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The name of the collection the task that is executing is a part of. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleConfigFile">AnsibleConfigFile</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The full path of used Ansible configuration file. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleConnection">AnsibleConnection</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The connection plugin actually used for the task on the target host. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleDiffMode">AnsibleDiffMode</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | Boolean that indicates if we are in diff mode or not. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleFacts">AnsibleFacts</a></code> | <code><a href="#cdk-ans.DictionaryVariable">DictionaryVariable</a></code> | Contains any facts gathered or cached for the inventory_hostname Facts are normally gathered by the setup module automatically in a play, but any module can return facts. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleForks">AnsibleForks</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | Integer reflecting the number of maximum forks available to this run. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleHost">AnsibleHost</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The ip/name of the target host to use instead of inventory_hostname. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleIndexVar">AnsibleIndexVar</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The name of the value provided to `loop_control.index_var`. Added in `2.9`. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleInventorySources">AnsibleInventorySources</a></code> | <code><a href="#cdk-ans.ListVariable">ListVariable</a></code> | List of sources used as inventory. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleLimit">AnsibleLimit</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | Contents of the `--limit` CLI option for the current execution of Ansible. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleLocal">AnsibleLocal</a></code> | <code><a href="#cdk-ans.DictionaryVariable">DictionaryVariable</a></code> | Contains any ‘local facts’ gathered or cached for the inventory_hostname. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleLoop">AnsibleLoop</a></code> | <code><a href="#cdk-ans.DictionaryVariable">DictionaryVariable</a></code> | A dictionary/map containing extended loop information when enabled through `loop_control.extended`. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleLoopVar">AnsibleLoopVar</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The name of the value provided to `loop_control.loop_var`. Added in `2.8`. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleParentRoleNames">AnsibleParentRoleNames</a></code> | <code><a href="#cdk-ans.ListVariable">ListVariable</a></code> | When the current role is being executed by means of an include_role or import_role action, this variable contains a list of all parent roles, with the most recent role (in other words, the role that included/imported this role) being the first item in the list. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleParentRolePath">AnsibleParentRolePath</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | When the current role is being executed by means of an include_role or import_role action, this variable contains a list of all parent roles paths, with the most recent role (in other words, the role that included/imported this role) being the first item in the list. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsiblePlayBatch">AnsiblePlayBatch</a></code> | <code><a href="#cdk-ans.ListVariable">ListVariable</a></code> | List of active hosts in the current play run limited by the serial, aka ‘batch’. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsiblePlaybookPython">AnsiblePlaybookPython</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The path to the python interpreter being used by Ansible on the controller. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsiblePlayHosts">AnsiblePlayHosts</a></code> | <code><a href="#cdk-ans.ListVariable">ListVariable</a></code> | List of hosts in the current play run, not limited by the serial. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsiblePlayHostsAll">AnsiblePlayHostsAll</a></code> | <code><a href="#cdk-ans.ListVariable">ListVariable</a></code> | List of all the hosts that were targeted by the play. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsiblePlayName">AnsiblePlayName</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The name of the currently executed play. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsiblePlayRoleNames">AnsiblePlayRoleNames</a></code> | <code><a href="#cdk-ans.ListVariable">ListVariable</a></code> | The names of the roles currently imported into the current play. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsiblePort">AnsiblePort</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The port used to connect to the target host. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsiblePythonInterpreter">AnsiblePythonInterpreter</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The path to the Python executable Ansible should use on the target host. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleRoleName">AnsibleRoleName</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The fully qualified collection role name, in the format of `namespace.collection.role_name`. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleRoleNames">AnsibleRoleNames</a></code> | <code><a href="#cdk-ans.ListVariable">ListVariable</a></code> | The names of the roles currently imported into the current play, or roles referenced as dependencies of the roles imported into the current play. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleRunTags">AnsibleRunTags</a></code> | <code><a href="#cdk-ans.ListVariable">ListVariable</a></code> | Contents of the `--tags` CLI option, which specifies which tags will be included for the current run. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleSearchPath">AnsibleSearchPath</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | Current search path for action plugins and lookups, in other words, where we search for relative paths when you do `template: src=myfile`. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleSkipTags">AnsibleSkipTags</a></code> | <code><a href="#cdk-ans.ListVariable">ListVariable</a></code> | Contents of the `--skip-tags` CLI option, which specifies which tags will be skipped for the current run. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleUser">AnsibleUser</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The user Ansible ‘logs in’ as. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleVerbosity">AnsibleVerbosity</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | Current verbosity setting for Ansible. |
| <code><a href="#cdk-ans.MagicVariable.property.AnsibleVersion">AnsibleVersion</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | Dictionary/map that contains information about the current running version of ansible, it has the following keys: full, major, minor, revision and string. |
| <code><a href="#cdk-ans.MagicVariable.property.GroupNames">GroupNames</a></code> | <code><a href="#cdk-ans.ListVariable">ListVariable</a></code> | List of groups the current host is part of. |
| <code><a href="#cdk-ans.MagicVariable.property.Groups">Groups</a></code> | <code><a href="#cdk-ans.DictionaryVariable">DictionaryVariable</a></code> | A dictionary/map with all the groups in inventory and each group has the list of hosts that belong to it. |
| <code><a href="#cdk-ans.MagicVariable.property.HostVars">HostVars</a></code> | <code><a href="#cdk-ans.DictionaryVariable">DictionaryVariable</a></code> | A dictionary/map with all the hosts in inventory and variables assigned to them. |
| <code><a href="#cdk-ans.MagicVariable.property.InventoryDir">InventoryDir</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The directory of the inventory source in which the `inventory_hostname` was first defined. |
| <code><a href="#cdk-ans.MagicVariable.property.InventoryFile">InventoryFile</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The file name of the inventory source in which the `inventory_hostname` was first defined. |
| <code><a href="#cdk-ans.MagicVariable.property.InventoryHostname">InventoryHostname</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The inventory name for the ‘current’ host being iterated over in the play. |
| <code><a href="#cdk-ans.MagicVariable.property.InventoryHostnameShort">InventoryHostnameShort</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The short version of `inventory_hostname`. |
| <code><a href="#cdk-ans.MagicVariable.property.Item">Item</a></code> | <code><a href="#cdk-ans.AnyVariable">AnyVariable</a></code> | A special variable to quickly implement an item variable in a loop. |
| <code><a href="#cdk-ans.MagicVariable.property.Omit">Omit</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | Special variable that allows you to ‘omit’ an option in a task, for example `- user: name=bob home={{ bobs_home\|default(omit) }}`. |
| <code><a href="#cdk-ans.MagicVariable.property.PlaybookDir">PlaybookDir</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The path to the directory of the current playbook being executed. |
| <code><a href="#cdk-ans.MagicVariable.property.RoleName">RoleName</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The name of the role currently being executed. |
| <code><a href="#cdk-ans.MagicVariable.property.RolePath">RolePath</a></code> | <code><a href="#cdk-ans.SimpleVariable">SimpleVariable</a></code> | The path to the dir of the currently running role. |

---

##### `AnsibleBecomeUser`<sup>Required</sup> <a name="AnsibleBecomeUser" id="cdk-ans.MagicVariable.property.AnsibleBecomeUser"></a>

```typescript
public readonly AnsibleBecomeUser: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The user Ansible ‘becomes’ after using privilege escalation.

This must be available to the ‘login user’.

---

##### `AnsibleCheckMode`<sup>Required</sup> <a name="AnsibleCheckMode" id="cdk-ans.MagicVariable.property.AnsibleCheckMode"></a>

```typescript
public readonly AnsibleCheckMode: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

Boolean that indicates if we are in check mode or not.

---

##### `AnsibleCheckModeEnabled`<sup>Required</sup> <a name="AnsibleCheckModeEnabled" id="cdk-ans.MagicVariable.property.AnsibleCheckModeEnabled"></a>

```typescript
public readonly AnsibleCheckModeEnabled: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The names of the roles currently imported into the current play as dependencies of other plays.

---

##### `AnsibleCollectionName`<sup>Required</sup> <a name="AnsibleCollectionName" id="cdk-ans.MagicVariable.property.AnsibleCollectionName"></a>

```typescript
public readonly AnsibleCollectionName: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The name of the collection the task that is executing is a part of.

In the format of `namespace.collection`.

---

##### `AnsibleConfigFile`<sup>Required</sup> <a name="AnsibleConfigFile" id="cdk-ans.MagicVariable.property.AnsibleConfigFile"></a>

```typescript
public readonly AnsibleConfigFile: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The full path of used Ansible configuration file.

---

##### `AnsibleConnection`<sup>Required</sup> <a name="AnsibleConnection" id="cdk-ans.MagicVariable.property.AnsibleConnection"></a>

```typescript
public readonly AnsibleConnection: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The connection plugin actually used for the task on the target host.

---

##### `AnsibleDiffMode`<sup>Required</sup> <a name="AnsibleDiffMode" id="cdk-ans.MagicVariable.property.AnsibleDiffMode"></a>

```typescript
public readonly AnsibleDiffMode: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

Boolean that indicates if we are in diff mode or not.

---

##### `AnsibleFacts`<sup>Required</sup> <a name="AnsibleFacts" id="cdk-ans.MagicVariable.property.AnsibleFacts"></a>

```typescript
public readonly AnsibleFacts: DictionaryVariable;
```

- *Type:* <a href="#cdk-ans.DictionaryVariable">DictionaryVariable</a>

Contains any facts gathered or cached for the inventory_hostname Facts are normally gathered by the setup module automatically in a play, but any module can return facts.

> [https://docs.ansible.com/ansible/latest/collections/ansible/builtin/setup_module.html](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/setup_module.html)

---

##### `AnsibleForks`<sup>Required</sup> <a name="AnsibleForks" id="cdk-ans.MagicVariable.property.AnsibleForks"></a>

```typescript
public readonly AnsibleForks: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

Integer reflecting the number of maximum forks available to this run.

---

##### `AnsibleHost`<sup>Required</sup> <a name="AnsibleHost" id="cdk-ans.MagicVariable.property.AnsibleHost"></a>

```typescript
public readonly AnsibleHost: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The ip/name of the target host to use instead of inventory_hostname.

---

##### `AnsibleIndexVar`<sup>Required</sup> <a name="AnsibleIndexVar" id="cdk-ans.MagicVariable.property.AnsibleIndexVar"></a>

```typescript
public readonly AnsibleIndexVar: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The name of the value provided to `loop_control.index_var`. Added in `2.9`.

---

##### `AnsibleInventorySources`<sup>Required</sup> <a name="AnsibleInventorySources" id="cdk-ans.MagicVariable.property.AnsibleInventorySources"></a>

```typescript
public readonly AnsibleInventorySources: ListVariable;
```

- *Type:* <a href="#cdk-ans.ListVariable">ListVariable</a>

List of sources used as inventory.

---

##### `AnsibleLimit`<sup>Required</sup> <a name="AnsibleLimit" id="cdk-ans.MagicVariable.property.AnsibleLimit"></a>

```typescript
public readonly AnsibleLimit: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

Contents of the `--limit` CLI option for the current execution of Ansible.

---

##### `AnsibleLocal`<sup>Required</sup> <a name="AnsibleLocal" id="cdk-ans.MagicVariable.property.AnsibleLocal"></a>

```typescript
public readonly AnsibleLocal: DictionaryVariable;
```

- *Type:* <a href="#cdk-ans.DictionaryVariable">DictionaryVariable</a>

Contains any ‘local facts’ gathered or cached for the inventory_hostname.

The keys available depend on the custom facts created. See the setup module and facts.d or local facts for more details.

---

##### `AnsibleLoop`<sup>Required</sup> <a name="AnsibleLoop" id="cdk-ans.MagicVariable.property.AnsibleLoop"></a>

```typescript
public readonly AnsibleLoop: DictionaryVariable;
```

- *Type:* <a href="#cdk-ans.DictionaryVariable">DictionaryVariable</a>

A dictionary/map containing extended loop information when enabled through `loop_control.extended`.

---

##### `AnsibleLoopVar`<sup>Required</sup> <a name="AnsibleLoopVar" id="cdk-ans.MagicVariable.property.AnsibleLoopVar"></a>

```typescript
public readonly AnsibleLoopVar: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The name of the value provided to `loop_control.loop_var`. Added in `2.8`.

---

##### `AnsibleParentRoleNames`<sup>Required</sup> <a name="AnsibleParentRoleNames" id="cdk-ans.MagicVariable.property.AnsibleParentRoleNames"></a>

```typescript
public readonly AnsibleParentRoleNames: ListVariable;
```

- *Type:* <a href="#cdk-ans.ListVariable">ListVariable</a>

When the current role is being executed by means of an include_role or import_role action, this variable contains a list of all parent roles, with the most recent role (in other words, the role that included/imported this role) being the first item in the list.

When multiple inclusions occur, this list lists the last role (in other words, the role that included this role) as the first item in the list. It is also possible that a specific role exists more than once in this list.

For example: When role A includes role B, inside role B, `ansible_parent_role_names` will equal to `['A']`. If role **B** then includes role **C**, the list becomes `['B', 'A']`.

> [https://docs.ansible.com/ansible/latest/collections/ansible/builtin/import_role_module.html](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/import_role_module.html)

---

##### `AnsibleParentRolePath`<sup>Required</sup> <a name="AnsibleParentRolePath" id="cdk-ans.MagicVariable.property.AnsibleParentRolePath"></a>

```typescript
public readonly AnsibleParentRolePath: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

When the current role is being executed by means of an include_role or import_role action, this variable contains a list of all parent roles paths, with the most recent role (in other words, the role that included/imported this role) being the first item in the list.

Please refer to `ansible_parent_role_names` for the order of items in this list.

> [https://docs.ansible.com/ansible/latest/collections/ansible/builtin/import_role_module.html](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/import_role_module.html)

---

##### `AnsiblePlayBatch`<sup>Required</sup> <a name="AnsiblePlayBatch" id="cdk-ans.MagicVariable.property.AnsiblePlayBatch"></a>

```typescript
public readonly AnsiblePlayBatch: ListVariable;
```

- *Type:* <a href="#cdk-ans.ListVariable">ListVariable</a>

List of active hosts in the current play run limited by the serial, aka ‘batch’.

Failed/Unreachable hosts are not considered ‘active’.

---

##### `AnsiblePlaybookPython`<sup>Required</sup> <a name="AnsiblePlaybookPython" id="cdk-ans.MagicVariable.property.AnsiblePlaybookPython"></a>

```typescript
public readonly AnsiblePlaybookPython: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The path to the python interpreter being used by Ansible on the controller.

---

##### `AnsiblePlayHosts`<sup>Required</sup> <a name="AnsiblePlayHosts" id="cdk-ans.MagicVariable.property.AnsiblePlayHosts"></a>

```typescript
public readonly AnsiblePlayHosts: ListVariable;
```

- *Type:* <a href="#cdk-ans.ListVariable">ListVariable</a>

List of hosts in the current play run, not limited by the serial.

Failed/Unreachable hosts are excluded from this list.

---

##### `AnsiblePlayHostsAll`<sup>Required</sup> <a name="AnsiblePlayHostsAll" id="cdk-ans.MagicVariable.property.AnsiblePlayHostsAll"></a>

```typescript
public readonly AnsiblePlayHostsAll: ListVariable;
```

- *Type:* <a href="#cdk-ans.ListVariable">ListVariable</a>

List of all the hosts that were targeted by the play.

---

##### `AnsiblePlayName`<sup>Required</sup> <a name="AnsiblePlayName" id="cdk-ans.MagicVariable.property.AnsiblePlayName"></a>

```typescript
public readonly AnsiblePlayName: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The name of the currently executed play.

Added in `2.8.` (name attribute of the play, not file name of the playbook.)

---

##### `AnsiblePlayRoleNames`<sup>Required</sup> <a name="AnsiblePlayRoleNames" id="cdk-ans.MagicVariable.property.AnsiblePlayRoleNames"></a>

```typescript
public readonly AnsiblePlayRoleNames: ListVariable;
```

- *Type:* <a href="#cdk-ans.ListVariable">ListVariable</a>

The names of the roles currently imported into the current play.

This list does not contain the role names that are implicitly included through dependencies.

---

##### `AnsiblePort`<sup>Required</sup> <a name="AnsiblePort" id="cdk-ans.MagicVariable.property.AnsiblePort"></a>

```typescript
public readonly AnsiblePort: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The port used to connect to the target host.

---

##### `AnsiblePythonInterpreter`<sup>Required</sup> <a name="AnsiblePythonInterpreter" id="cdk-ans.MagicVariable.property.AnsiblePythonInterpreter"></a>

```typescript
public readonly AnsiblePythonInterpreter: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The path to the Python executable Ansible should use on the target host.

> [https://docs.ansible.com/ansible/latest/reference_appendices/interpreter_discovery.html](https://docs.ansible.com/ansible/latest/reference_appendices/interpreter_discovery.html)

---

##### `AnsibleRoleName`<sup>Required</sup> <a name="AnsibleRoleName" id="cdk-ans.MagicVariable.property.AnsibleRoleName"></a>

```typescript
public readonly AnsibleRoleName: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The fully qualified collection role name, in the format of `namespace.collection.role_name`.

---

##### `AnsibleRoleNames`<sup>Required</sup> <a name="AnsibleRoleNames" id="cdk-ans.MagicVariable.property.AnsibleRoleNames"></a>

```typescript
public readonly AnsibleRoleNames: ListVariable;
```

- *Type:* <a href="#cdk-ans.ListVariable">ListVariable</a>

The names of the roles currently imported into the current play, or roles referenced as dependencies of the roles imported into the current play.

---

##### `AnsibleRunTags`<sup>Required</sup> <a name="AnsibleRunTags" id="cdk-ans.MagicVariable.property.AnsibleRunTags"></a>

```typescript
public readonly AnsibleRunTags: ListVariable;
```

- *Type:* <a href="#cdk-ans.ListVariable">ListVariable</a>

Contents of the `--tags` CLI option, which specifies which tags will be included for the current run.

Note that if `--tags` is not passed, this variable will default to `["all"]`.

---

##### `AnsibleSearchPath`<sup>Required</sup> <a name="AnsibleSearchPath" id="cdk-ans.MagicVariable.property.AnsibleSearchPath"></a>

```typescript
public readonly AnsibleSearchPath: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

Current search path for action plugins and lookups, in other words, where we search for relative paths when you do `template: src=myfile`.

---

##### `AnsibleSkipTags`<sup>Required</sup> <a name="AnsibleSkipTags" id="cdk-ans.MagicVariable.property.AnsibleSkipTags"></a>

```typescript
public readonly AnsibleSkipTags: ListVariable;
```

- *Type:* <a href="#cdk-ans.ListVariable">ListVariable</a>

Contents of the `--skip-tags` CLI option, which specifies which tags will be skipped for the current run.

---

##### `AnsibleUser`<sup>Required</sup> <a name="AnsibleUser" id="cdk-ans.MagicVariable.property.AnsibleUser"></a>

```typescript
public readonly AnsibleUser: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The user Ansible ‘logs in’ as.

---

##### `AnsibleVerbosity`<sup>Required</sup> <a name="AnsibleVerbosity" id="cdk-ans.MagicVariable.property.AnsibleVerbosity"></a>

```typescript
public readonly AnsibleVerbosity: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

Current verbosity setting for Ansible.

---

##### `AnsibleVersion`<sup>Required</sup> <a name="AnsibleVersion" id="cdk-ans.MagicVariable.property.AnsibleVersion"></a>

```typescript
public readonly AnsibleVersion: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

Dictionary/map that contains information about the current running version of ansible, it has the following keys: full, major, minor, revision and string.

---

##### `GroupNames`<sup>Required</sup> <a name="GroupNames" id="cdk-ans.MagicVariable.property.GroupNames"></a>

```typescript
public readonly GroupNames: ListVariable;
```

- *Type:* <a href="#cdk-ans.ListVariable">ListVariable</a>

List of groups the current host is part of.

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="cdk-ans.MagicVariable.property.Groups"></a>

```typescript
public readonly Groups: DictionaryVariable;
```

- *Type:* <a href="#cdk-ans.DictionaryVariable">DictionaryVariable</a>

A dictionary/map with all the groups in inventory and each group has the list of hosts that belong to it.

---

##### `HostVars`<sup>Required</sup> <a name="HostVars" id="cdk-ans.MagicVariable.property.HostVars"></a>

```typescript
public readonly HostVars: DictionaryVariable;
```

- *Type:* <a href="#cdk-ans.DictionaryVariable">DictionaryVariable</a>

A dictionary/map with all the hosts in inventory and variables assigned to them.

---

##### `InventoryDir`<sup>Required</sup> <a name="InventoryDir" id="cdk-ans.MagicVariable.property.InventoryDir"></a>

```typescript
public readonly InventoryDir: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The directory of the inventory source in which the `inventory_hostname` was first defined.

---

##### `InventoryFile`<sup>Required</sup> <a name="InventoryFile" id="cdk-ans.MagicVariable.property.InventoryFile"></a>

```typescript
public readonly InventoryFile: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The file name of the inventory source in which the `inventory_hostname` was first defined.

---

##### `InventoryHostname`<sup>Required</sup> <a name="InventoryHostname" id="cdk-ans.MagicVariable.property.InventoryHostname"></a>

```typescript
public readonly InventoryHostname: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The inventory name for the ‘current’ host being iterated over in the play.

---

##### `InventoryHostnameShort`<sup>Required</sup> <a name="InventoryHostnameShort" id="cdk-ans.MagicVariable.property.InventoryHostnameShort"></a>

```typescript
public readonly InventoryHostnameShort: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The short version of `inventory_hostname`.

---

##### `Item`<sup>Required</sup> <a name="Item" id="cdk-ans.MagicVariable.property.Item"></a>

```typescript
public readonly Item: AnyVariable;
```

- *Type:* <a href="#cdk-ans.AnyVariable">AnyVariable</a>

A special variable to quickly implement an item variable in a loop.

---

##### `Omit`<sup>Required</sup> <a name="Omit" id="cdk-ans.MagicVariable.property.Omit"></a>

```typescript
public readonly Omit: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

Special variable that allows you to ‘omit’ an option in a task, for example `- user: name=bob home={{ bobs_home|default(omit) }}`.

---

##### `PlaybookDir`<sup>Required</sup> <a name="PlaybookDir" id="cdk-ans.MagicVariable.property.PlaybookDir"></a>

```typescript
public readonly PlaybookDir: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The path to the directory of the current playbook being executed.

NOTE: This might be different than directory of the playbook passed to the `ansible-playbook` command line when a playbook contains a `import_playbook` statement.

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="cdk-ans.MagicVariable.property.RoleName"></a>

```typescript
public readonly RoleName: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The name of the role currently being executed.

---

##### `RolePath`<sup>Required</sup> <a name="RolePath" id="cdk-ans.MagicVariable.property.RolePath"></a>

```typescript
public readonly RolePath: SimpleVariable;
```

- *Type:* <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>

The path to the dir of the currently running role.

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


### SimpleVariable <a name="SimpleVariable" id="cdk-ans.SimpleVariable"></a>

A variable that represents a flat value (string, number, boolean).

#### Initializers <a name="Initializers" id="cdk-ans.SimpleVariable.Initializer"></a>

```typescript
import { SimpleVariable } from 'cdk-ans'

new SimpleVariable(name: string, parents?: string[])
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.SimpleVariable.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.SimpleVariable.Initializer.parameter.parents">parents</a></code> | <code>string[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.SimpleVariable.Initializer.parameter.name"></a>

- *Type:* string

---

##### `parents`<sup>Optional</sup> <a name="parents" id="cdk-ans.SimpleVariable.Initializer.parameter.parents"></a>

- *Type:* string[]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.SimpleVariable.asRaw">asRaw</a></code> | Returns the variable as a raw string. |
| <code><a href="#cdk-ans.SimpleVariable.asVariable">asVariable</a></code> | Returns the variable as an ansible variable string `{{ variable }}`. |
| <code><a href="#cdk-ans.SimpleVariable.index">index</a></code> | *No description.* |
| <code><a href="#cdk-ans.SimpleVariable.property">property</a></code> | *No description.* |

---

##### `asRaw` <a name="asRaw" id="cdk-ans.SimpleVariable.asRaw"></a>

```typescript
public asRaw(): string
```

Returns the variable as a raw string.

##### `asVariable` <a name="asVariable" id="cdk-ans.SimpleVariable.asVariable"></a>

```typescript
public asVariable(): string
```

Returns the variable as an ansible variable string `{{ variable }}`.

##### `index` <a name="index" id="cdk-ans.SimpleVariable.index"></a>

```typescript
public index(_: number): IVariable
```

###### `_`<sup>Required</sup> <a name="_" id="cdk-ans.SimpleVariable.index.parameter._"></a>

- *Type:* number

---

##### `property` <a name="property" id="cdk-ans.SimpleVariable.property"></a>

```typescript
public property(_: string): IVariable
```

###### `_`<sup>Required</sup> <a name="_" id="cdk-ans.SimpleVariable.property.parameter._"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.SimpleVariable.of">of</a></code> | *No description.* |

---

##### `of` <a name="of" id="cdk-ans.SimpleVariable.of"></a>

```typescript
import { SimpleVariable } from 'cdk-ans'

SimpleVariable.of(name: string)
```

###### `name`<sup>Required</sup> <a name="name" id="cdk-ans.SimpleVariable.of.parameter.name"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.SimpleVariable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ans.SimpleVariable.property.parents">parents</a></code> | <code>string[]</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.SimpleVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parents`<sup>Required</sup> <a name="parents" id="cdk-ans.SimpleVariable.property.parents"></a>

```typescript
public readonly parents: string[];
```

- *Type:* string[]

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

- *Implemented By:* <a href="#cdk-ans.Block">Block</a>, <a href="#cdk-ans.Play">Play</a>, <a href="#cdk-ans.PlayDefinition">PlayDefinition</a>, <a href="#cdk-ans.RoleDefinition">RoleDefinition</a>, <a href="#cdk-ans.RoleTarget">RoleTarget</a>, <a href="#cdk-ans.RunDefinition">RunDefinition</a>, <a href="#cdk-ans.Task">Task</a>, <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>, <a href="#cdk-ans.IChainable">IChainable</a>, <a href="#cdk-ans.IPlayChainable">IPlayChainable</a>, <a href="#cdk-ans.IRoleChainable">IRoleChainable</a>, <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>


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

- *Implemented By:* <a href="#cdk-ans.Block">Block</a>, <a href="#cdk-ans.Task">Task</a>, <a href="#cdk-ans.TaskDefinition">TaskDefinition</a>, <a href="#cdk-ans.ITaskChainable">ITaskChainable</a>

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

### IVariable <a name="IVariable" id="cdk-ans.IVariable"></a>

- *Implemented By:* <a href="#cdk-ans.AnyVariable">AnyVariable</a>, <a href="#cdk-ans.BaseVariable">BaseVariable</a>, <a href="#cdk-ans.DictionaryVariable">DictionaryVariable</a>, <a href="#cdk-ans.HostVariable">HostVariable</a>, <a href="#cdk-ans.ListVariable">ListVariable</a>, <a href="#cdk-ans.SimpleVariable">SimpleVariable</a>, <a href="#cdk-ans.IVariable">IVariable</a>

A variable that can access any type of variable.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.IVariable.asRaw">asRaw</a></code> | Returns the variable as a raw string. |
| <code><a href="#cdk-ans.IVariable.asVariable">asVariable</a></code> | Returns the variable as an ansible variable string `{{ variable }}`. |
| <code><a href="#cdk-ans.IVariable.index">index</a></code> | *No description.* |
| <code><a href="#cdk-ans.IVariable.property">property</a></code> | *No description.* |

---

##### `asRaw` <a name="asRaw" id="cdk-ans.IVariable.asRaw"></a>

```typescript
public asRaw(): string
```

Returns the variable as a raw string.

##### `asVariable` <a name="asVariable" id="cdk-ans.IVariable.asVariable"></a>

```typescript
public asVariable(): string
```

Returns the variable as an ansible variable string `{{ variable }}`.

##### `index` <a name="index" id="cdk-ans.IVariable.index"></a>

```typescript
public index(index: number): IVariable
```

###### `index`<sup>Required</sup> <a name="index" id="cdk-ans.IVariable.index.parameter.index"></a>

- *Type:* number

---

##### `property` <a name="property" id="cdk-ans.IVariable.property"></a>

```typescript
public property(name: string): IVariable
```

###### `name`<sup>Required</sup> <a name="name" id="cdk-ans.IVariable.property.parameter.name"></a>

- *Type:* string

---


## Enums <a name="Enums" id="Enums"></a>

### AnsibleConnection <a name="AnsibleConnection" id="cdk-ans.AnsibleConnection"></a>

The connection type to use to connect to the host.

> [https://docs.ansible.com/ansible/latest/user_guide/connection_details.html#connection-types](https://docs.ansible.com/ansible/latest/user_guide/connection_details.html#connection-types)

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


### ConditionalEvaluation <a name="ConditionalEvaluation" id="cdk-ans.ConditionalEvaluation"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.ConditionalEvaluation.AND">AND</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.OR">OR</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.IS">IS</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.IS_NOT">IS_NOT</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.IN">IN</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.NOT_IN">NOT_IN</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.WHEN_EQUALS">WHEN_EQUALS</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.WHEN_NOT_EQUALS">WHEN_NOT_EQUALS</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.WHEN_GREATER_THAN">WHEN_GREATER_THAN</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.WHEN_LESS_THAN">WHEN_LESS_THAN</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.WHEN_GREATER_THAN_OR_EQUALS">WHEN_GREATER_THAN_OR_EQUALS</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.WHEN_LESS_THAN_OR_EQUALS">WHEN_LESS_THAN_OR_EQUALS</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.BOOL">BOOL</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.BOOL_NOT">BOOL_NOT</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.DEFINED">DEFINED</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.UNDEFINED">UNDEFINED</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.FAILED">FAILED</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.SUCCEEDED">SUCCEEDED</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.SKIPPED">SKIPPED</a></code> | *No description.* |
| <code><a href="#cdk-ans.ConditionalEvaluation.CHANGED">CHANGED</a></code> | *No description.* |

---

##### `AND` <a name="AND" id="cdk-ans.ConditionalEvaluation.AND"></a>

---


##### `OR` <a name="OR" id="cdk-ans.ConditionalEvaluation.OR"></a>

---


##### `IS` <a name="IS" id="cdk-ans.ConditionalEvaluation.IS"></a>

---


##### `IS_NOT` <a name="IS_NOT" id="cdk-ans.ConditionalEvaluation.IS_NOT"></a>

---


##### `IN` <a name="IN" id="cdk-ans.ConditionalEvaluation.IN"></a>

---


##### `NOT_IN` <a name="NOT_IN" id="cdk-ans.ConditionalEvaluation.NOT_IN"></a>

---


##### `WHEN_EQUALS` <a name="WHEN_EQUALS" id="cdk-ans.ConditionalEvaluation.WHEN_EQUALS"></a>

---


##### `WHEN_NOT_EQUALS` <a name="WHEN_NOT_EQUALS" id="cdk-ans.ConditionalEvaluation.WHEN_NOT_EQUALS"></a>

---


##### `WHEN_GREATER_THAN` <a name="WHEN_GREATER_THAN" id="cdk-ans.ConditionalEvaluation.WHEN_GREATER_THAN"></a>

---


##### `WHEN_LESS_THAN` <a name="WHEN_LESS_THAN" id="cdk-ans.ConditionalEvaluation.WHEN_LESS_THAN"></a>

---


##### `WHEN_GREATER_THAN_OR_EQUALS` <a name="WHEN_GREATER_THAN_OR_EQUALS" id="cdk-ans.ConditionalEvaluation.WHEN_GREATER_THAN_OR_EQUALS"></a>

---


##### `WHEN_LESS_THAN_OR_EQUALS` <a name="WHEN_LESS_THAN_OR_EQUALS" id="cdk-ans.ConditionalEvaluation.WHEN_LESS_THAN_OR_EQUALS"></a>

---


##### `BOOL` <a name="BOOL" id="cdk-ans.ConditionalEvaluation.BOOL"></a>

---


##### `BOOL_NOT` <a name="BOOL_NOT" id="cdk-ans.ConditionalEvaluation.BOOL_NOT"></a>

---


##### `DEFINED` <a name="DEFINED" id="cdk-ans.ConditionalEvaluation.DEFINED"></a>

---


##### `UNDEFINED` <a name="UNDEFINED" id="cdk-ans.ConditionalEvaluation.UNDEFINED"></a>

---


##### `FAILED` <a name="FAILED" id="cdk-ans.ConditionalEvaluation.FAILED"></a>

---


##### `SUCCEEDED` <a name="SUCCEEDED" id="cdk-ans.ConditionalEvaluation.SUCCEEDED"></a>

---


##### `SKIPPED` <a name="SKIPPED" id="cdk-ans.ConditionalEvaluation.SKIPPED"></a>

---


##### `CHANGED` <a name="CHANGED" id="cdk-ans.ConditionalEvaluation.CHANGED"></a>

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


### IsEvaluation <a name="IsEvaluation" id="cdk-ans.IsEvaluation"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.IsEvaluation.DEFINED">DEFINED</a></code> | *No description.* |
| <code><a href="#cdk-ans.IsEvaluation.UNDEFINED">UNDEFINED</a></code> | *No description.* |
| <code><a href="#cdk-ans.IsEvaluation.FAILED">FAILED</a></code> | *No description.* |
| <code><a href="#cdk-ans.IsEvaluation.SUCCEEDED">SUCCEEDED</a></code> | *No description.* |
| <code><a href="#cdk-ans.IsEvaluation.SKIPPED">SKIPPED</a></code> | *No description.* |
| <code><a href="#cdk-ans.IsEvaluation.CHANGED">CHANGED</a></code> | *No description.* |

---

##### `DEFINED` <a name="DEFINED" id="cdk-ans.IsEvaluation.DEFINED"></a>

---


##### `UNDEFINED` <a name="UNDEFINED" id="cdk-ans.IsEvaluation.UNDEFINED"></a>

---


##### `FAILED` <a name="FAILED" id="cdk-ans.IsEvaluation.FAILED"></a>

---


##### `SUCCEEDED` <a name="SUCCEEDED" id="cdk-ans.IsEvaluation.SUCCEEDED"></a>

---


##### `SKIPPED` <a name="SKIPPED" id="cdk-ans.IsEvaluation.SKIPPED"></a>

---


##### `CHANGED` <a name="CHANGED" id="cdk-ans.IsEvaluation.CHANGED"></a>

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

