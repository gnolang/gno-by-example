---
title: Emitting an event
section: Chain
---

Emitting events in your functions greatly helps off-chain services fetch data.
Events emitted by functions can be found in transaction logs, and are easily
indexable for easy data retrieval. It is good practice to emit an event for 
each action you want to be indexable off-chain.

```go file=./event.gno
```

When this function is called, it will emit the following event:


```json file=./output1.json
```


Calling the `function` again, we will be able to see the count value increase:

```json file=./output2.json
```