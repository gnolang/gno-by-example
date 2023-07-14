const markdownContent: string = `

This is the simplest application that you can create using Gno. \`Render(string) string\` is a special method that will be
used by \`gnoweb\` to render markdown output.

<Playground open="src/tutorials/gno.land/gbe/01-hello/hello.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F01-hello%2Fhello.gno%22%2C%22content%22%3A%22package%20hello%5Cn%5Cnfunc%20Render(path%20string)%20string%20%7B%5Cn%5Ctreturn%20%5C%22Hello%20World!%5C%22%5Cn%7D%22%7D%5D">

We can test the \`Render\` method:

<Playground open="src/tutorials/gno.land/gbe/01-hello/hello_test.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F01-hello%2Fhello_test.gno%22%2C%22content%22%3A%22package%20hello%5Cn%5Cnimport%20%5C%22testing%5C%22%5Cn%5Cnfunc%20TestHello(t%20*testing.T)%20%7B%5Cn%5Ctgot%20%3A%3D%20Render(%5C%22%5C%22)%5Cn%5Ctexpected%20%3A%3D%20%5C%22Hello%20World!%5C%22%5Cn%5Ctif%20got%20!%3D%20expected%20%7B%5Cn%5Ct%5Ctt.Fatalf(%5C%22expected%20%25q%2C%20got%20%25q.%5C%22%2C%20expected%2C%20got)%5Cn%5Ct%7D%5Cn%7D%22%7D%2C%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F01-hello%2Fhello.gno%22%2C%22content%22%3A%22package%20hello%5Cn%5Cnfunc%20Render(path%20string)%20string%20%7B%5Cn%5Ctreturn%20%5C%22Hello%20World!%5C%22%5Cn%7D%22%7D%5D">
`;

const title: string = "Hello World";

const section: string = "Getting Started";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
