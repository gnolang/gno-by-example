---
title: Importing
section: Basics
---

In Gno, you can import 3 different types of code - Gno standard libraries,
on-chain packages, and on-chain realms.

### Standard libraries

The Gno Standard Library behaves as you would expect in Go - simply import and 
use it. However, some packages, such as `crypto/rand` are not available due to
their non-deterministic nature. You can see a full compatability list 
[here](https://docs.gno.land/reference/go-gno-compatibility/#stdlibs).

### On-chain packages and realms

Gno code can be written and deployed to the chain. This code, be it a package
or a realm, can then be imported by other Gno code, allowing for reusability.

Packages and realms live under specific package paths, such as `gno.land/p/demo/`
& `gno.land/r/demo/`. They can be imported by other code using this path, and
used as expected.

Let's check out some examples:

```go file=./imports.gno
```

```go file=./imports_test.gno depends_on_file=./imports.gno
```

Read more about packages, realms, and standard libraries in the 
[Official Documentation](https://docs.gno.land/), and see more example packages
and realms [here](https://github.com/gnolang/gno/tree/master/examples).