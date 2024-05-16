---
title: First App
section: Basics
---

Let's create our first application. This realm is able to add and subtract from 
a global counter variable using `Add()` and `Subtract()` methods. The state will 
be saved between executions.

```go file=./count.gno
```

Tests:

```go file=./count_test.gno depends_on_file=./count.gno
```
