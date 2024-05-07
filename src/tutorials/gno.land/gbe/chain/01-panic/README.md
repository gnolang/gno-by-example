---
title: Reverting a transaction
section: Chain
---

Reverting a transaction is a crucial feature of blockchain systems. In Gno,
we revert transactions by using `panic()`. 

```go file=./panic.gno
```

By reverting a transaction, all state changes that have happened up until that 
point of execution will not be applied.