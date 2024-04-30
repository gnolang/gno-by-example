---
title: Events in Gno
section: Chain
---

Emitting events in your functions greatly helps off-chain services fetch data.
Events emitted by functions can be found in transaction logs, and are easily
indexable for easy data retrieval. It is good practice to emit an event for 
each action you want to be indexable off-chain.

```go file=./event.gno
```

Calling the `Emitter` function with `gnokey maketx call` will result in an event 
emitted: 

```
// todo fill in once test/run has support for displaying events
```
