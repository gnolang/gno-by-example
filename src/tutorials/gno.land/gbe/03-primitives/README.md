---
title: Primitives
section: Getting Started
---

Below are primitives that are available in Gno.
Take into account that some special types that do not originally exist in the Go
language will be implemented in Gno. One such example is `bigint`. You can view
the full compatibility table for Go & Gno [here](https://docs.gno.land/reference/go-gno-compatibility).

```go file=./primitives.gno
```

We can test these primitives:

```go file=./primitives_test.gno depends_on_file=./primitives.gno
```
