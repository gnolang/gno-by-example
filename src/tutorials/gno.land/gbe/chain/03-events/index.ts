const markdownContent: string = `

Emitting events in your functions greatly helps off-chain services fetch data.
Events emitted by functions can be found in transaction logs, and are easily
indexable for easy data retrieval. It is good practice to emit an event for 
each action you want to be indexable off-chain.

<Playground open="src/tutorials/gno.land/gbe/chain/03-events/event.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F03-events%2Fevent.gno%22%2C%22content%22%3A%22package%20event%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22std%5C%22%5Cn%5Ct%5C%22strconv%5C%22%5Cn)%5Cn%5Cnvar%20count%20int%5Cn%5Cnfunc%20Emitter(value2%20string)%20%7B%5Cn%5Ctcount%20%2B%3D%201%5Cn%5Ct%2F%2F%20Here%20we%20define%20a%20unique%20identifier%20for%20our%20event%5Cn%5Ctevent%20%3A%3D%20%5C%22GBE-chain-02-events%5C%22%5Cn%5Cn%5Ct%2F%2F%20%60Emit%60%20takes%20in%20a%20string%20name%2C%20and%20an%20even%20number%20of%20key%3Avalue%20string%20pairs%20as%20arguments%20to%20emit%5Cn%5Ctstd.Emit(event%2C%20%5C%22timesCalled%5C%22%2C%20strconv.Itoa(count)%2C%20%5C%22userArgument%5C%22%2C%20value2)%5Cn%7D%5Cn%22%7D%5D">

When this function is called, it will emit the following event:


<Playground open="src/tutorials/gno.land/gbe/chain/03-events/output1.json" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F03-events%2Foutput1.json%22%2C%22content%22%3A%22%7B%5Cn%20%20%5C%22type%5C%22%3A%20%5C%22GBE-chain-02-events%5C%22%2C%5Cn%20%20%5C%22pkg_path%5C%22%3A%20%5C%22gno.land%2Fr%2Fdemo%2Fevent%5C%22%2C%5Cn%20%20%5C%22func%5C%22%3A%20%5C%22Emitter%5C%22%2C%5Cn%20%20%5C%22attrs%5C%22%3A%20%5B%5Cn%20%20%20%20%7B%5Cn%20%20%20%20%20%20%5C%22key%5C%22%3A%20%5C%22timesCalled%5C%22%2C%5Cn%20%20%20%20%20%20%5C%22value%5C%22%3A%20%5C%221%5C%22%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20%7B%5Cn%20%20%20%20%20%20%5C%22key%5C%22%3A%20%5C%22userArgument%5C%22%2C%5Cn%20%20%20%20%20%20%5C%22value%5C%22%3A%20%5C%22My%201st%20argument!%5C%22%5Cn%20%20%20%20%7D%5Cn%20%20%5D%5Cn%7D%22%7D%5D">


Calling the \`function\` again, we will be able to see the count value increase:

<Playground open="src/tutorials/gno.land/gbe/chain/03-events/output2.json" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F03-events%2Foutput2.json%22%2C%22content%22%3A%22%7B%5Cn%20%20%5C%22type%5C%22%3A%20%5C%22GBE-chain-02-events%5C%22%2C%5Cn%20%20%5C%22pkg_path%5C%22%3A%20%5C%22gno.land%2Fr%2Fdemo%2Fevent%5C%22%2C%5Cn%20%20%5C%22func%5C%22%3A%20%5C%22Emitter%5C%22%2C%5Cn%20%20%5C%22attrs%5C%22%3A%20%5B%5Cn%20%20%20%20%7B%5Cn%20%20%20%20%20%20%5C%22key%5C%22%3A%20%5C%22timesCalled%5C%22%2C%5Cn%20%20%20%20%20%20%5C%22value%5C%22%3A%20%5C%222%5C%22%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20%7B%5Cn%20%20%20%20%20%20%5C%22key%5C%22%3A%20%5C%22userArgument%5C%22%2C%5Cn%20%20%20%20%20%20%5C%22value%5C%22%3A%20%5C%22My%202nd%20argument!%5C%22%5Cn%20%20%20%20%7D%5Cn%20%20%5D%5Cn%7D%22%7D%5D">`;

const title: string = "Emitting an event";

const section: string = "Chain";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
