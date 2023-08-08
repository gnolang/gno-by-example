const markdownContent: string = `

Whether you're a seasoned Go developer, or you're just dipping your toes into
Gno, let's start off on the right foot with a ritual
[Hello World](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) program!

Being designed to run smart contracts, there is no such thing as a "main
program" or "main function" as you may be used to in other programming
languages. However, the [gno.land](https://gno.land) blockchain allows having
programs with a special function, \`Render(string) string\`.

This function is called when loading programs from the test nodes' website. The
website will also parse it as markdown and render it, so it's a good idea to add
some **\\*\\*spice!\\*\\*** to it.

<Playground open="src/tutorials/gno.land/gbe/01-hello/hello.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F01-hello%2Fhello.gno%22%2C%22content%22%3A%22package%20hello%5Cn%5Cnfunc%20Render(path%20string)%20string%20%7B%5Cn%5Ctreturn%20%5C%22Hello%20World!%20And%20hello%2C%20**bold!**%5C%22%5Cn%7D%5Cn%22%7D%5D">

On this website, to show how each function is working we'll be using tests;
which work similarly to how they do in Go.

You can define tests in function ending with the \`_test.gno\` suffix. These can
be executed by clicking on the \`Test\` button, available from the menu hidden in
the bottom right circle.

<Playground open="src/tutorials/gno.land/gbe/01-hello/hello_test.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F01-hello%2Fhello_test.gno%22%2C%22content%22%3A%22package%20hello%5Cn%5Cnimport%20%5C%22testing%5C%22%5Cn%5Cnfunc%20TestHello(t%20*testing.T)%20%7B%5Cn%5Ctgot%20%3A%3D%20Render(%5C%22%5C%22)%5Cn%5Ctexpected%20%3A%3D%20%5C%22Hello%20World!%20And%20hello%2C%20**bold!**%5C%22%5Cn%5Ctif%20got%20!%3D%20expected%20%7B%5Cn%5Ct%5Ctt.Fatalf(%5C%22expected%20%25q%2C%20got%20%25q.%5C%22%2C%20expected%2C%20got)%5Cn%5Ct%7D%5Cn%7D%5Cn%22%7D%2C%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F01-hello%2Fhello.gno%22%2C%22content%22%3A%22package%20hello%5Cn%5Cnfunc%20Render(path%20string)%20string%20%7B%5Cn%5Ctreturn%20%5C%22Hello%20World!%20And%20hello%2C%20**bold!**%5C%22%5Cn%7D%5Cn%22%7D%5D">
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
