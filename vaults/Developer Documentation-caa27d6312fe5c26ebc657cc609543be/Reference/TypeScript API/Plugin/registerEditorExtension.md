---
aliases: "Plugin.registerEditorExtension"
cssclasses: hide-title
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[`Plugin`](Plugin) › [`registerEditorExtension`](Plugin/registerEditorExtension)

## Plugin.registerEditorExtension() method

Registers a CodeMirror 6 extension. To reconfigure cm6 extensions for a plugin on the fly, an array should be passed in, and modified dynamically. Once this array is modified, calling [Workspace.updateOptions()](Workspace/updateOptions) will apply the changes.

**Signature:**

```typescript
registerEditorExtension(extension: Extension): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  <code>extension</code> | <code>Extension</code> | must be a CodeMirror 6 <code>Extension</code>, or an array of Extensions. |

**Returns:**

`void`
