const markdownContent: string = `

Let's create our first application. This realm is able to add and substract from a global count variable using \`Add()\`
and \`Remove()\` methods. The state will be saved between executions.

<!--TODO: add an example about how to deploy this realm and how to call to Add() and Remove() using the command line -->

<Playground open="src/tutorials/gno.land/gbe/02-count/count.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F02-count%2Fcount.gno%22%2C%22content%22%3A%22package%20count%5Cn%5Cnimport%20%5C%22fmt%5C%22%5Cn%5Cnvar%20count%20int%5Cn%5Cnfunc%20Render(path%20string)%20string%20%7B%5Cn%5Ctreturn%20fmt.Sprintf(%5C%22Count%3A%20%25d%5C%22%2C%20count)%5Cn%7D%5Cn%5Cnfunc%20Add()%20%7B%5Cn%5Ctcount%2B%2B%5Cn%7D%5Cn%5Cnfunc%20Remove()%20%7B%5Cn%5Ctcount--%5Cn%7D%22%7D%5D">

Tests:

<Playground open="src/tutorials/gno.land/gbe/02-count/count_test.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F02-count%2Fcount_test.gno%22%2C%22content%22%3A%22package%20count%5Cn%5Cnimport%20%5C%22testing%5C%22%5Cn%5Cnfunc%20TestCount(t%20*testing.T)%20%7B%5Cn%5CtAdd()%5Cn%5CtAdd()%5Cn%5CtAdd()%5Cn%5CtRemove()%5Cn%5Ctgot%20%3A%3D%20Render(%5C%22%5C%22)%5Cn%5Ctexpected%20%3A%3D%20%5C%22Count%3A%202%5C%22%5Cn%5Ctif%20got%20!%3D%20expected%20%7B%5Cn%5Ct%5Ctt.Fatalf(%5C%22expected%20%25q%2C%20got%20%25q.%5C%22%2C%20expected%2C%20got)%5Cn%5Ct%7D%5Cn%7D%22%7D%2C%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F02-count%2Fcount.gno%22%2C%22content%22%3A%22package%20count%5Cn%5Cnimport%20%5C%22fmt%5C%22%5Cn%5Cnvar%20count%20int%5Cn%5Cnfunc%20Render(path%20string)%20string%20%7B%5Cn%5Ctreturn%20fmt.Sprintf(%5C%22Count%3A%20%25d%5C%22%2C%20count)%5Cn%7D%5Cn%5Cnfunc%20Add()%20%7B%5Cn%5Ctcount%2B%2B%5Cn%7D%5Cn%5Cnfunc%20Remove()%20%7B%5Cn%5Ctcount--%5Cn%7D%22%7D%5D">
`;

const title: string = "First App";

const section: string = "Getting Started";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
