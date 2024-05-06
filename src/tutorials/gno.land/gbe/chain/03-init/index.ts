const markdownContent: string = `

One of the most important concepts in Gno is the \`init()\` function. Just like in 
Go, it is called upon initialization of the program - which, in the case of Gno,
is only once, upon its deployment. It can be used to set initial values, such as
admin addresses.

<Playground open="src/tutorials/gno.land/gbe/chain/03-init/init.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F03-init%2Finit.gno%22%2C%22content%22%3A%22package%20event%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22std%5C%22%5Cn)%5Cn%5Cnvar%20admin%20std.Address%5Cn%5Cnfunc%20init()%20%7B%5Cn%5Ctadmin%20%3D%20std.PrevRealm().Addr()%5Cn%7D%5Cn%5Cnfunc%20GetAdmin()%20string%20%7B%5Cn%5Ctreturn%20admin.String()%5Cn%7D%5Cn%22%7D%5D">

Calling \`PrevRealm()\` or \`GetOrigCaller()\` in the \`init()\` will always return the
address of the deployer. 

<Playground open="src/tutorials/gno.land/gbe/chain/03-init/init_test.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F03-init%2Finit_test.gno%22%2C%22content%22%3A%22package%20event%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22testing%5C%22%5Cn)%5Cn%5Cnfunc%20TestInit(t%20*testing.T)%20%7B%5Cn%5Ctprintln(%5C%22Admin%20address%3A%20%5C%22%20%2B%20GetAdmin())%5Cn%7D%5Cn%5Cn%2F%2Ffunc%20TestCallInit()%20%7B%5Cn%2F%2F%5Ctinit()%20%2F%2F%20Trying%20to%20invoke%20init()%20somewhere%20will%20fail%5Cn%2F%2F%7D%5Cn%22%7D%2C%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fchain%2F03-init%2Finit.gno%22%2C%22content%22%3A%22package%20event%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22std%5C%22%5Cn)%5Cn%5Cnvar%20admin%20std.Address%5Cn%5Cnfunc%20init()%20%7B%5Cn%5Ctadmin%20%3D%20std.PrevRealm().Addr()%5Cn%7D%5Cn%5Cnfunc%20GetAdmin()%20string%20%7B%5Cn%5Ctreturn%20admin.String()%5Cn%7D%5Cn%22%7D%5D">`;

const title: string = "Setting initial values using init";

const section: string = "Chain";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
