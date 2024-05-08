---
title: Sending coins
section: Chain
---

In Gno, any addressable entity can own, send, and receive native coins by default.

By using the Banker module, you are able to send coins, such as `ugnot`, from one
address to another.

Each realm has access to the Banker module during runtime. The Banker can be cast
it into a specific type of Banker. Each Banker type has its own set of access
rights for security reasons.

Banker types useful for sending coins are the following:

- `BankerTypeReadonly` - read-only access to coin balances,
- `BankerTypeOrigSend` - full access only to coins sent with the transaction that calls the banker,
- `BankerTypeRealmSend` - full access to coins that the realm itself owns, including the ones sent with the transaction.

```go file=./banker.gno
```

Read more about the Banker module [here](https://docs.gno.land/concepts/stdlibs/banker).