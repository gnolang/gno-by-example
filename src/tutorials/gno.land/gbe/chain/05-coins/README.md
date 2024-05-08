---
title: Manipulating coins
section: Chain
---

In Gno, the type `Coin` from the `std` package is used to represent native coins.
A coin instance is defined by an amount and a denomination. In the case of Gno's
native coin, `GNOT`, its in-code `Coin` equivalent is `ugnot`, which represents 
1-millionth of a single `GNOT`, hence the `u` (mirco).

In Gno users also have access to the `Coins` type which is a slice of `Coin`, 
but represents a mathematically valid set of them, meaning it contains no 
duplicates. This type is useful for manipulating multiple `Coin`s at once, 
and has a specific API to support it.

Each Gno transaction contains a set of `Coins` sent with it, and this set is 
accessible in code via the `GetOrigSend()` function found in the `std` package.


```go file=./coins1.gno
```

We can verify this code:

```go file=./coins1_test.gno depends_on_file=./coins1.gno
```

Read more about `Coin` & `Coins` [here](https://docs.gno.land/concepts/stdlibs/coin).