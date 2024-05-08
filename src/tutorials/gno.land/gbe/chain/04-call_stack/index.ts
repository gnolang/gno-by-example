const markdownContent: string = `

In Gno, you can get the caller of the transaction in multiple ways, depending on
what you're trying to achieve. 

<Playground open="src/tutorials/gno.land/gbe/chain/04-call_stack/callstack.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F04-call_stack%2Fcallstack.gno%22%2C%22content%22%3A%22package%20event%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22std%5C%22%5Cn)%5Cn%5Cnfunc%20Callers()%20%7B%5Cn%5Ct%2F%2F%20The%20main%20way%20to%20get%20the%20transaction%20caller%5Cn%5CtimmediateCaller%20%3A%3D%20std.PrevRealm().Addr()%5Cn%5Cn%5Ct%2F%2F%20When%20there%20are%20multiple%20connected%20calls%2C%20such%20as%5Cn%5Ct%2F%2F%20User%20%3E%20realm%20A%20%3E%20realm%20B%5Cn%5Ct%2F%2F%20You%20can%20get%20the%20origin%20caller%20using%20std.GetOrigCaller()%5Cn%5CtoriginCaller%20%3A%3D%20std.GetOrigCaller()%5Cn%7D%5Cn%22%7D%5D">`;

const title: string = "Getting the transaction caller";

const section: string = "Chain";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
