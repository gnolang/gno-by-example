const markdownContent: string = `

Reverting a transaction is a crucial feature of blockchain systems. In Gno,
we revert transactions by using \`panic()\`. 

<Playground open="src/tutorials/gno.land/gbe/chain/02-panic/panic.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F02-panic%2Fpanic.gno%22%2C%22content%22%3A%22package%20panic%5Cn%5Cnvar%20count%20int%5Cn%5Cnfunc%20Increment(shouldRevert%20bool)%20%7B%5Cn%5Ctcount%2B%2B%5Cn%5Cn%5Ctif%20shouldRevert%20%7B%5Cn%5Ct%5Ctcount%2B%2B%5Cn%5Ct%5Ctpanic(%5C%22i%20was%20instructed%20to%20revert!%5C%22)%5Cn%5Ct%7D%5Cn%7D%5Cn%22%7D%5D">

By reverting a transaction, all state changes that have happened up until that 
point of execution will not be applied.`;

const title: string = "Reverting a transaction";

const section: string = "Chain";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
