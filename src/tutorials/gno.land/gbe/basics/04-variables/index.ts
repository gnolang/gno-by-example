const markdownContent: string = `

Global variables will keep the state between executions, but that is not the case for variables outside the global context, like inside functions:

<Playground open="src/tutorials/gno.land/gbe/basics/04-variables/variables.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fbasics%2F04-variables%2Fvariables.gno%22%2C%22content%22%3A%22package%20variables%5Cn%5Cnimport%20%5C%22fmt%5C%22%5Cn%5Cn%2F%2F%20this%20variable%20will%20keep%20the%20state%20between%20realm%20calls%5Cnvar%20count%20int%5Cn%5Cnfunc%20Render(name%20string)%20string%20%7B%5Cn%5Ct%2F%2F%20adding%20one%20to%20the%20global%20variable%20to%20keep%20track%20of%20Render%20calls%5Cn%5Ctcount%2B%2B%5Cn%5Cn%5Ct%2F%2F%20this%20variable%20is%20created%20at%20function%20scope%2C%20so%20it%20won't%20be%20persisted%20on%20the%20realm%20state.%5Cn%5Cthi%20%3A%3D%20fmt.Sprintf(%5C%22Hello%20%25s!%5C%22%2C%20name)%5Cn%5Ct%5Cn%5Ctreturn%20fmt.Sprintf(%5C%22%25s.%20Call%20number%20%25d%5C%22%2C%20hi%2C%20count)%5Cn%7D%22%7D%5D">
`;

const title: string = "Variables";

const section: string = "Basics";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
