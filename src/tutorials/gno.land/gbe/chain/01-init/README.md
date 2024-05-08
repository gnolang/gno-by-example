---
title: Setting initial values using init
section: Chain
---

One of the most important concepts in Gno is the `init()` function. Just like in 
Go, it is called upon initialization of the program - which, in the case of Gno,
is only once, upon its deployment. It can be used to set initial values, such as
admin addresses.

```go file=./init.gno
```

Calling `PrevRealm()` or `GetOrigCaller()` in the `init()` will always return the
address of the deployer. 

```go file=./init_test.gno depends_on_file=./init.gno
```