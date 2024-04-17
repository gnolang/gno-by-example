---
title: Reverting in Gno
section: Chain
---

Reverting a transaction is a crucial feature of blockchain systems. In Gno,
we revert transactions by using `panic()`. 

```go file=./panic.gno
```

Let's see how `panic()` works:
```go file=./panic_test.gno depends_on_file=./panic.gno
```
