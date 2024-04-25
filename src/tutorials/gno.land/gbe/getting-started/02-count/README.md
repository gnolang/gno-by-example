---
title: First App
section: Getting Started
---

Let's create our first application. This realm is able to add and subtract from 
a global count variable using `Add()` and `Subtract()` methods. The state will 
be saved between executions.

<!--TODO: add an example about how to deploy this realm and how to call to Add() and Remove() using the command line -->

```go file=./count.gno
```

Tests:

```go file=./count_test.gno depends_on_file=./count.gno
```
