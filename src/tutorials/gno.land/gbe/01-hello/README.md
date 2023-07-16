---
title: Hello World
section: Getting Started
---

This is the simplest application that you can create using Gno. `Render(string) string` is a special method that will be
used by `gnoweb` to render markdown output.

```go file=./hello.gno
```

We can test the `Render` method:

```go file=./hello_test.gno depends_on_file=./hello.gno
```
