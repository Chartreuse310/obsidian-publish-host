---
aliases: "iterateRefs"
cssclasses: hide-title
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[`iterateRefs`](iterateRefs)

## iterateRefs() function

**Signature:**

```typescript
export function iterateRefs(refs: Reference[], cb: (ref: Reference) => boolean | void): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  <code>refs</code> | [`Reference`](Reference)<code>[]</code> |  |
|  <code>cb</code> | <code>(ref: </code>[`Reference`](Reference)<code>) =&gt; boolean &#124; void</code> |  |

**Returns:**

`boolean`

true if callback ever returns true, false otherwise.
