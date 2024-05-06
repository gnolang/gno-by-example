---
title: Sending coins
section: Chain
---

In Gno, any addressable entity can own, send, and receive native coins by default.

By using the Banker module, you are able to send coins, such as `ugnot`, from one
address to another.

Each realm can inject the Banker module into the Gno runtime and can cast it into
a specific type of Banker. Each Banker type has its own set of access rights for
security reasons.

Banker types are the following:

- `BankerTypeReadonly` - read-only access to coin balances,
- `BankerTypeOrigSend` - full access only to coins sent with the transaction that calls the banker,
- `BankerTypeRealmSend` - full access to coins that the realm itself owns, including the ones sent with the transaction,
- `BankerTypeRealmIssue` - able to issue new coins.




```go file=./banker.gno
```
