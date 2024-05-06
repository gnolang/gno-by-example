const markdownContent: string = `

By using the Banker module, you are able to send native Gno coins, such as \`ugnot\`,
from one address to another. Each realm can inject the Banker module into the Gno
runtime and can cast it into a specific type of Banker. Each Banker type has its 
own set of access rights for security reasons. Banker types are the following:

- \`BankerTypeReadonly\` - read-only access to coin balances,
- \`BankerTypeOrigSend\` - full access to coins sent with the transaction that 
calls the banker,
- \`BankerTypeRealmSend\` - full access to coins that the realm itself owns,
including the ones sent with the transaction,
- \`BankerTypeRealmIssue\` - able to issue new coins.


<Playground open="src/tutorials/gno.land/gbe/chain/05-banker/banker.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F05-banker%2Fbanker.gno%22%2C%22content%22%3A%22package%20event%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22std%5C%22%5Cn)%5Cn%5Cnfunc%20ReadBalances(owner%20std.Address)%20string%20%7B%5Cn%5Ctbanker%20%3A%3D%20std.GetBanker(std.BankerTypeReadonly)%5Cn%5Ctcoins%20%3A%3D%20banker.GetCoins(owner)%5Cn%5Ctreturn%20coins.String()%5Cn%7D%5Cn%22%7D%5D">

<Playground open="src/tutorials/gno.land/gbe/chain/05-banker/banker_test.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F05-banker%2Fbanker_test.gno%22%2C%22content%22%3A%22package%20event%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22std%5C%22%5Cn%5Ct%5C%22testing%5C%22%5Cn)%5Cn%5Cnfunc%20TesteadBalances(t%20*testing.T)%20%7B%5Cn%5Ctowner%20%3A%3D%20std.Address(%5C%22g1jg8mtutu9khhfwc4nxmuhcpftf0pajdhfvsqf5%5C%22)%5Cn%5Ctprintln(ReadBalances(owner))%5Cn%7D%5Cn%22%7D%2C%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F05-banker%2Fbanker.gno%22%2C%22content%22%3A%22package%20event%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22std%5C%22%5Cn)%5Cn%5Cnfunc%20ReadBalances(owner%20std.Address)%20string%20%7B%5Cn%5Ctbanker%20%3A%3D%20std.GetBanker(std.BankerTypeReadonly)%5Cn%5Ctcoins%20%3A%3D%20banker.GetCoins(owner)%5Cn%5Ctreturn%20coins.String()%5Cn%7D%5Cn%22%7D%5D">
`;

const title: string = "Sending native coins in Gno";

const section: string = "Chain";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
