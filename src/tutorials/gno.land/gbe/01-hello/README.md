---
title: Hello World
section: Getting Started
---

Whether you're a seasoned Go developer, or you're just dipping your toes into
Gno, let's start off on the right foot with a ritual
[Hello World](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) program!

Being designed to run smart contracts, there is no such thing as a "main
program" or "main function" as you may be used to in other programming
languages. However, the [gno.land](https://gno.land) blockchain allows having
programs with a special function, `Render(string) string`.

This function is called when loading programs from the test nodes' website. The
website will also parse it as markdown and render it, so it's a good idea to add
some **\*\*spice!\*\*** to it.

```go file=./hello.gno
```

On this website, to show how each function is working we'll be using tests;
which work similarly to how they do in Go.

You can define tests in function ending with the `_test.gno` suffix. These can
be executed by clicking on the `Test` button, available from the menu hidden in
the bottom right circle.

```go file=./hello_test.gno depends_on_file=./hello.gno
```
