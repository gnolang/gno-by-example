const markdownContent: string = `

In Gno, the type \`Coin\` from the \`std\` package is used to represent native coins.
A coin instance is defined by an amount and a denomination. In the case of Gno's
native coin, \`GNOT\`, its in-code \`Coin\` equivalent is \`ugnot\`, which represents 
1-millionth of a single \`GNOT\`, hence the \`u\` (mirco).

In Gno users also have access to the \`Coins\` type which is a slice of \`Coin\`, 
but represents a mathematically valid set of them, meaning it contains no 
duplicates. This type is useful for manipulating multiple \`Coin\`s at once, 
and has a specific API to support it.

Each Gno transaction contains a set of \`Coins\` sent with it, and this set is 
accessible in code via the \`GetOrigSend()\` function found in the \`std\` package.


<Playground open="src/tutorials/gno.land/gbe/chain/04-coins/coins1.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F04-coins%2Fcoins1.gno%22%2C%22content%22%3A%22package%20coin%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22std%5C%22%5Cn%5Cn%5Ct%5C%22gno.land%2Fp%2Fdemo%2Fufmt%5C%22%5Cn)%5Cn%5Cnfunc%20Coin()%20string%20%7B%5Cn%5Ct%2F%2F%20We%20can%20make%20a%20new%20coin%20instance%2C%201000000%20coins%20of%20denomination%20ugnot%2C%20equal%20to%201%20GNOT%5Cn%5Ctvar%20coinA%20std.Coin%20%3D%20std.Coin%7B%5C%22ugnot%5C%22%2C%201000000%7D%5Cn%5Cn%5Ct%2F%2F%20You%20can%20get%20a%20string%20representaton%20of%20a%20coin%20with%20the%20%60String()%60%20method%5Cn%5CtstringedCoin%20%3A%3D%20coinA.String()%5Cn%5Cn%5Ct%2F%2F%20We%20can%20make%20another%20instance%20of%20ugnot%20coins%2C%20but%20with%20a%20different%20amount%5Cn%5Ctvar%20coinB%20std.Coin%20%3D%20std.Coin%7B%5C%22ugnot%5C%22%2C%20100%7D%5Cn%5Cn%5Ct%2F%2F%20We%20can%20perform%20simple%20checks%20on%20coin%20instances%20to%20compare%20them%5Cn%5Ctif%20coinA.IsGTE(coinB)%20%7B%5Cn%5Ct%5Ctreturn%20ufmt.Sprintf(%5C%22Coin%20A%20(%25s)%20is%20greater%20than%20or%20equal%20than%20Coin%20B%20(%25s)!%5C%22%2C%20coinA.String()%2C%20coinB.String())%5Cn%5Ct%7D%5Cn%5Ctreturn%20ufmt.Sprintf(%5C%22Coin%20B%20(%25s)%20is%20greater%20than%20or%20equal%20than%20Coin%20A%20(%25s)!%5C%22%2C%20coinB.String()%2C%20coinA.String())%5Cn%7D%5Cn%5Cnfunc%20Coins()%20%7B%5Cn%5Ct%2F%2F%20Get%20coins%20sent%20with%20transaction%5Cn%5CtcoinsSent%20%3A%3D%20std.GetOrigSend()%5Cn%5Cn%5Ct%2F%2F%20You%20can%20check%20the%20amount%20of%20specific%20coin%20with%20%60AmountOf%60%5Cn%5CtcoinsSent.AmountOf(%5C%22ugnot%5C%22)%5Cn%5Cn%5Ctvar%20newCoins%20std.Coins%20%3D%20std.Coins%7B%5Cn%5Ct%5Ctstd.Coin%7B%5C%22gbe%5C%22%2C%20100%7D%2C%5Cn%5Ct%5Ctstd.Coin%7B%5C%22ugnot%5C%22%2C%20123%7D%2C%5Cn%5Ct%7D%5Cn%5Cn%5Ct%2F%2F%20Add%20will%20a%20two%20coin%20sets%20together%20while%20keeping%20the%20no-duplicate%20policy%5Cn%5CtaddedCoins%20%3A%3D%20coinsSent.Add(newCoins)%5Cn%7D%5Cn%22%7D%5D">

We can verify this code:

<Playground open="src/tutorials/gno.land/gbe/chain/04-coins/coins1_test.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F04-coins%2Fcoins1_test.gno%22%2C%22content%22%3A%22package%20coin%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22testing%5C%22%5Cn)%5Cn%5Cnfunc%20TestCoin(t%20*testing.T)%20%7B%5Cn%5Ctprintln(Coin())%5Cn%7D%5Cn%22%7D%2C%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F04-coins%2Fcoins1.gno%22%2C%22content%22%3A%22package%20coin%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22std%5C%22%5Cn%5Cn%5Ct%5C%22gno.land%2Fp%2Fdemo%2Fufmt%5C%22%5Cn)%5Cn%5Cnfunc%20Coin()%20string%20%7B%5Cn%5Ct%2F%2F%20We%20can%20make%20a%20new%20coin%20instance%2C%201000000%20coins%20of%20denomination%20ugnot%2C%20equal%20to%201%20GNOT%5Cn%5Ctvar%20coinA%20std.Coin%20%3D%20std.Coin%7B%5C%22ugnot%5C%22%2C%201000000%7D%5Cn%5Cn%5Ct%2F%2F%20You%20can%20get%20a%20string%20representaton%20of%20a%20coin%20with%20the%20%60String()%60%20method%5Cn%5CtstringedCoin%20%3A%3D%20coinA.String()%5Cn%5Cn%5Ct%2F%2F%20We%20can%20make%20another%20instance%20of%20ugnot%20coins%2C%20but%20with%20a%20different%20amount%5Cn%5Ctvar%20coinB%20std.Coin%20%3D%20std.Coin%7B%5C%22ugnot%5C%22%2C%20100%7D%5Cn%5Cn%5Ct%2F%2F%20We%20can%20perform%20simple%20checks%20on%20coin%20instances%20to%20compare%20them%5Cn%5Ctif%20coinA.IsGTE(coinB)%20%7B%5Cn%5Ct%5Ctreturn%20ufmt.Sprintf(%5C%22Coin%20A%20(%25s)%20is%20greater%20than%20or%20equal%20than%20Coin%20B%20(%25s)!%5C%22%2C%20coinA.String()%2C%20coinB.String())%5Cn%5Ct%7D%5Cn%5Ctreturn%20ufmt.Sprintf(%5C%22Coin%20B%20(%25s)%20is%20greater%20than%20or%20equal%20than%20Coin%20A%20(%25s)!%5C%22%2C%20coinB.String()%2C%20coinA.String())%5Cn%7D%5Cn%5Cnfunc%20Coins()%20%7B%5Cn%5Ct%2F%2F%20Get%20coins%20sent%20with%20transaction%5Cn%5CtcoinsSent%20%3A%3D%20std.GetOrigSend()%5Cn%5Cn%5Ct%2F%2F%20You%20can%20check%20the%20amount%20of%20specific%20coin%20with%20%60AmountOf%60%5Cn%5CtcoinsSent.AmountOf(%5C%22ugnot%5C%22)%5Cn%5Cn%5Ctvar%20newCoins%20std.Coins%20%3D%20std.Coins%7B%5Cn%5Ct%5Ctstd.Coin%7B%5C%22gbe%5C%22%2C%20100%7D%2C%5Cn%5Ct%5Ctstd.Coin%7B%5C%22ugnot%5C%22%2C%20123%7D%2C%5Cn%5Ct%7D%5Cn%5Cn%5Ct%2F%2F%20Add%20will%20a%20two%20coin%20sets%20together%20while%20keeping%20the%20no-duplicate%20policy%5Cn%5CtaddedCoins%20%3A%3D%20coinsSent.Add(newCoins)%5Cn%7D%5Cn%22%7D%5D">

Read more about \`Coin\` & \`Coins\` [here](https://docs.gno.land/concepts/stdlibs/coin).`;

const title: string = "Manipulating coins";

const section: string = "Chain";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
