const markdownContent: string = `

In Gno, the type \`Coin\` from the \`std\` package is used to represent native coins.
A coin instance is defined by an amount and a denomination.

In the case of Gno's native coin, \`GNOT\`, its in-code \`Coin\` equivalent is 
\`ugnot\`, which represents 1-millionth of a single \`GNOT\`, hence the \`u\` (mirco).

<Playground open="src/tutorials/gno.land/gbe/chain/04-coins/coins.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F04-coins%2Fcoins.gno%22%2C%22content%22%3A%22package%20event%5Cn%5Cnfunc%20Coins()%20%7B%5Cn%5Ct%2F%2F%20We%20define%20a%20coin%20instance%20of%20100%20ugnots%5Cn%5Ctcoin%20%3A%3D%20std.Coin%7B100%2C%20%5C%22ugnot%5C%22%7D%5Cn%5Cn%7D%5Cn%22%7D%5D">



`;

const title: string = "Sending and receiving coins";

const section: string = "Chain";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
