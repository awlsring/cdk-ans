# CDK Ansible

This is an attempt to define a CDK-esq framework for Ansible playbook definitions. This doesn't work yet, and probably won't for awhile. A lot of this initial code is pulled for cdk8s core as a starting point.
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### App <a name="App" id="cdk-ans.App"></a>

Represents a cdkans application.

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
| <code><a href="#cdk-ans.App.synth">synth</a></code> | Synthesizes all manifests to the output directory. |
| <code><a href="#cdk-ans.App.synthYaml">synthYaml</a></code> | Synthesizes the app into a YAML string. |

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

Synthesizes all manifests to the output directory.

##### `synthYaml` <a name="synthYaml" id="cdk-ans.App.synthYaml"></a>

```typescript
public synthYaml(): string
```

Synthesizes the app into a YAML string.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.App.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ans.App.isConstruct"></a>

```typescript
import { App } from 'cdk-ans'

App.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.App.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.App.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-ans.App.property.inventories">inventories</a></code> | <code><a href="#cdk-ans.Inventory">Inventory</a>[]</code> | *No description.* |
| <code><a href="#cdk-ans.App.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which files will be synthesized. |
| <code><a href="#cdk-ans.App.property.playbooks">playbooks</a></code> | <code><a href="#cdk-ans.Playbook">Playbook</a>[]</code> | Returns all the playbooks in this app, sorted topologically. |

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


### Host <a name="Host" id="cdk-ans.Host"></a>

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

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ans.Host.isConstruct"></a>

```typescript
import { Host } from 'cdk-ans'

Host.isConstruct(x: any)
```

Checks if `x` is a construct.

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
| <code><a href="#cdk-ans.Host.property.hostVariables">hostVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
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

##### `hostVariables`<sup>Required</sup> <a name="hostVariables" id="cdk-ans.Host.property.hostVariables"></a>

```typescript
public readonly hostVariables: {[ key: string ]: string};
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

#### Initializers <a name="Initializers" id="cdk-ans.HostGroup.Initializer"></a>

```typescript
import { HostGroup } from 'cdk-ans'

new HostGroup(scope: Construct, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.HostGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.HostGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.HostGroup.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.HostGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.HostGroup.addHosts">addHosts</a></code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.addSubGroups">addSubGroups</a></code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.addVariables">addVariables</a></code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.toJson">toJson</a></code> | *No description.* |
| <code><a href="#cdk-ans.HostGroup.variables">variables</a></code> | *No description.* |

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

##### `variables` <a name="variables" id="cdk-ans.HostGroup.variables"></a>

```typescript
public variables(): {[ key: string ]: string}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.HostGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ans.HostGroup.isConstruct"></a>

```typescript
import { HostGroup } from 'cdk-ans'

HostGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

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


### Inventory <a name="Inventory" id="cdk-ans.Inventory"></a>

#### Initializers <a name="Initializers" id="cdk-ans.Inventory.Initializer"></a>

```typescript
import { Inventory } from 'cdk-ans'

new Inventory(scope: Construct, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Inventory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Inventory.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Inventory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Inventory.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Inventory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.Inventory.synth">synth</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-ans.Inventory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="cdk-ans.Inventory.synth"></a>

```typescript
public synth(outDir: string): void
```

###### `outDir`<sup>Required</sup> <a name="outDir" id="cdk-ans.Inventory.synth.parameter.outDir"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Inventory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ans.Inventory.isConstruct"></a>

```typescript
import { Inventory } from 'cdk-ans'

Inventory.isConstruct(x: any)
```

Checks if `x` is a construct.

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
| <code><a href="#cdk-ans.Inventory.property.outputType">outputType</a></code> | <code><a href="#cdk-ans.InventoryOutputType">InventoryOutputType</a></code> | How to output the inventory. |

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

##### `outputType`<sup>Required</sup> <a name="outputType" id="cdk-ans.Inventory.property.outputType"></a>

```typescript
public readonly outputType: InventoryOutputType;
```

- *Type:* <a href="#cdk-ans.InventoryOutputType">InventoryOutputType</a>
- *Default:* InventoryOutputType.FILE_PER_INVENTORY

How to output the inventory.

---


### Playbook <a name="Playbook" id="cdk-ans.Playbook"></a>

#### Initializers <a name="Initializers" id="cdk-ans.Playbook.Initializer"></a>

```typescript
import { Playbook } from 'cdk-ans'

new Playbook(scope: Construct, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Playbook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ans.Playbook.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ans.Playbook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-ans.Playbook.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Playbook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-ans.Playbook.toJson">toJson</a></code> | Renders this playbook to a set of JSON resources. |

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

Renders this playbook to a set of JSON resources.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Playbook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-ans.Playbook.isPlaybook">isPlaybook</a></code> | *No description.* |
| <code><a href="#cdk-ans.Playbook.of">of</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ans.Playbook.isConstruct"></a>

```typescript
import { Playbook } from 'cdk-ans'

Playbook.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Playbook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isPlaybook` <a name="isPlaybook" id="cdk-ans.Playbook.isPlaybook"></a>

```typescript
import { Playbook } from 'cdk-ans'

Playbook.isPlaybook(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdk-ans.Playbook.isPlaybook.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdk-ans.Playbook.of"></a>

```typescript
import { Playbook } from 'cdk-ans'

Playbook.of(p: IConstruct)
```

###### `p`<sup>Required</sup> <a name="p" id="cdk-ans.Playbook.of.parameter.p"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ans.Playbook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ans.Playbook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

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
| <code><a href="#cdk-ans.AppProps.property.outdir">outdir</a></code> | <code>string</code> | The directory to output Kubernetes manifests. |

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="cdk-ans.AppProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* CDK8S_OUTDIR if defined, otherwise "dist"

The directory to output Kubernetes manifests.

If you synthesize your application using `cdk8s synth`, you must
also pass this value to the CLI using the `--output` option or
the `output` property in the `cdk8s.yaml` configuration file.
Otherwise, the CLI will not know about the output directory,
and synthesis will fail.

This property is intended for internal and testing use.

---

### HostGroupProps <a name="HostGroupProps" id="cdk-ans.HostGroupProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.HostGroupProps.Initializer"></a>

```typescript
import { HostGroupProps } from 'cdk-ans'

const hostGroupProps: HostGroupProps = { ... }
```


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
| <code><a href="#cdk-ans.HostProps.property.hostVariables">hostVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

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

##### `hostVariables`<sup>Optional</sup> <a name="hostVariables" id="cdk-ans.HostProps.property.hostVariables"></a>

```typescript
public readonly hostVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### InventoryProps <a name="InventoryProps" id="cdk-ans.InventoryProps"></a>

#### Initializer <a name="Initializer" id="cdk-ans.InventoryProps.Initializer"></a>

```typescript
import { InventoryProps } from 'cdk-ans'

const inventoryProps: InventoryProps = { ... }
```


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


### Yaml <a name="Yaml" id="cdk-ans.Yaml"></a>

YAML utilities.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.Yaml.formatObjects">formatObjects</a></code> | *No description.* |
| <code><a href="#cdk-ans.Yaml.load">load</a></code> | Downloads a set of YAML documents (k8s manifest for example) from a URL or a file and returns them as javascript objects. |
| <code><a href="#cdk-ans.Yaml.save">save</a></code> | Saves a set of objects as a multi-document YAML file. |
| <code><a href="#cdk-ans.Yaml.stringify">stringify</a></code> | Stringify a document (or multiple documents) into YAML. |
| <code><a href="#cdk-ans.Yaml.tmp">tmp</a></code> | Saves a set of YAML documents into a temp file (in /tmp). |

---

##### ~~`formatObjects`~~ <a name="formatObjects" id="cdk-ans.Yaml.formatObjects"></a>

```typescript
import { Yaml } from 'cdk-ans'

Yaml.formatObjects(docs: any[])
```

###### `docs`<sup>Required</sup> <a name="docs" id="cdk-ans.Yaml.formatObjects.parameter.docs"></a>

- *Type:* any[]

---

##### `load` <a name="load" id="cdk-ans.Yaml.load"></a>

```typescript
import { Yaml } from 'cdk-ans'

Yaml.load(urlOrFile: string)
```

Downloads a set of YAML documents (k8s manifest for example) from a URL or a file and returns them as javascript objects.

Empty documents are filtered out.

###### `urlOrFile`<sup>Required</sup> <a name="urlOrFile" id="cdk-ans.Yaml.load.parameter.urlOrFile"></a>

- *Type:* string

a URL of a file path to load from.

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

##### `tmp` <a name="tmp" id="cdk-ans.Yaml.tmp"></a>

```typescript
import { Yaml } from 'cdk-ans'

Yaml.tmp(docs: any[])
```

Saves a set of YAML documents into a temp file (in /tmp).

###### `docs`<sup>Required</sup> <a name="docs" id="cdk-ans.Yaml.tmp.parameter.docs"></a>

- *Type:* any[]

the set of documents to save.

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

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ans.InventoryOutputType.FILE_PER_INVENTORY">FILE_PER_INVENTORY</a></code> | *No description.* |

---

##### `FILE_PER_INVENTORY` <a name="FILE_PER_INVENTORY" id="cdk-ans.InventoryOutputType.FILE_PER_INVENTORY"></a>

---

