const markdownContent: string = `

In Gno, any addressable entity can own, send, and receive native coins by default.

By using the Banker module, you are able to send coins, such as \`ugnot\`, from one
address to another.

Each realm has access to the Banker module during runtime. The Banker can be cast
it into a specific type of Banker. Each Banker type has its own set of access
rights for security reasons.

Banker types useful for sending coins are the following:

- \`BankerTypeReadonly\` - read-only access to coin balances,
- \`BankerTypeOrigSend\` - full access only to coins sent with the transaction that calls the banker,
- \`BankerTypeRealmSend\` - full access to coins that the realm itself owns, including the ones sent with the transaction.

<Playground open="src/tutorials/gno.land/gbe/chain/06-banker/banker.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F06-banker%2Fbanker.gno%22%2C%22content%22%3A%22package%20banker%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22std%5C%22%5Cn)%5Cn%5Cn%2F%2F%20ReadBalances%20returns%20the%20coin%20balances%20of%20a%20specific%20address%5Cnfunc%20ReadBalances(owner%20std.Address)%20string%20%7B%5Cn%5Ct%2F%2F%20Initialize%20the%20banker%20with%20read-only%20access%5Cn%5Ctbanker%20%3A%3D%20std.GetBanker(std.BankerTypeReadonly)%5Cn%5Ctcoins%20%3A%3D%20banker.GetCoins(owner)%5Cn%5Ctreturn%20coins.String()%5Cn%7D%5Cn%5Cn%2F%2F%20ForwardGNOT%20takes%20any%20ugnot%20sent%20to%20it%20and%20forwards%20it%20to%20%60to%60%5Cnfunc%20ForwardGNOT(to%20std.Address)%20%7B%5Cn%5Ct%2F%2F%20Initialize%20the%20banker%20with%20sending%20permission%20for%20coins%20sent%20with%20the%20transaction%5Cn%5Ctbanker%20%3A%3D%20std.GetBanker(std.BankerTypeOrigSend)%5Cn%5Ct%2F%2F%20Get%20coins%20sent%20with%20the%20transaction%5Cn%5CtcoinsSent%20%3A%3D%20std.GetOrigSend()%5Cn%5Ct%2F%2F%20Get%20the%20amount%20of%20ugnot%20owned%20by%20the%20realm%5Cn%5CtgnotsSent%20%3A%3D%20coinsSent.AmountOf(%5C%22ugnot%5C%22)%5Cn%5Ct%2F%2F%20Send%20all%20coins%20to%20%60to%60%5Cn%5Ctbanker.SendCoins(to%2C%20std.Coin%7B%5C%22ugnot%5C%22%2C%20gnotsSent%7D)%5Cn%7D%5Cn%5Cn%2F%2F%20SendGNOTFromRealmBalance%20sends%20any%20GNOT%20in%20the%20realm%20balance%20to%20%60to%60%5Cnfunc%20SendGNOTFromRealmBalance(to%20std.Address)%20%7B%5Cn%5Ct%2F%2F%20Initialize%20the%20banker%20with%20permission%20for%20all%20coins%5Cn%5Ctbanker%20%3A%3D%20std.GetBanker(std.BankerTypeRealmSend)%5Cn%5Ct%2F%2F%20Get%20all%20coins%20owned%20by%20this%20realm%5Cn%5CtcurrentRealmCoins%20%3A%3D%20banker.GetCoins(std.CurrentRealm().Addr())%5Cn%5Ct%2F%2F%20Get%20the%20amount%20of%20ugnot%20owned%20by%20the%20realm%5Cn%5CtcurrentRealmGnots%20%3A%3D%20currentRealmCoins.AmountOf(%5C%22ugnot%5C%22)%5Cn%5Ct%2F%2F%20Send%20all%20coins%20to%20%60to%60%5Cn%5Ctbanker.SendCoins(to%2C%20std.Coin%7B%5C%22ugnot%5C%22%2C%20currentRealmGnots%7D)%5Cn%7D%5Cn%22%7D%5D">

Read more about the Banker module [here](https://docs.gno.land/concepts/stdlibs/banker).`;

const title: string = "Sending coins";

const section: string = "Chain";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
