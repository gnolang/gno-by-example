const markdownContent: string = `

As in Go, we have two ways to check for specific conditions, using \`if\` statements and \`switch\`es:

<Playground open="src/tutorials/gno.land/gbe/basics/06-conditions/conditions.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fbasics%2F06-conditions%2Fconditions.gno%22%2C%22content%22%3A%22func%20RenderIf(v%20string)%20string%20%7B%5Cn%5Ctif%20v%20%3D%3D%20%5C%22v1%5C%22%20%7B%5Cn%5Ct%5Ctreturn%20%5C%22value%20one%5C%22%5Cn%5Ct%7D%20else%20if%20v%20%3D%3D%20%5C%22v2%5C%22%20%7B%5Cn%5Ct%5Ctreturn%20%5C%22value%20two%5C%22%5Cn%5Ct%7D%20else%20%7B%5Cn%5Ct%5Ctreturn%20%5C%22other%20value%5C%22%5Cn%5Ct%7D%5Cn%7D%22%7D%5D">

<Playground open="src/tutorials/gno.land/gbe/basics/06-conditions/conditions.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fbasics%2F06-conditions%2Fconditions.gno%22%2C%22content%22%3A%22func%20RenderSwitch(v%20string)%20(out%20string)%20%7B%5Cn%5Ctswitch%20v%20%7B%5Cn%5Ctcase%20%5C%22v1%5C%22%3A%5Cn%5Ct%5Ctout%20%3D%20%5C%22value%20one%5C%22%5Cn%5Ct%5Ctbreak%5Cn%5Ctcase%20%5C%22v2%5C%22%3A%5Cn%5Ct%5Ctout%20%3D%20%5C%22value%20two%5C%22%5Cn%5Ct%5Ctbreak%5Cn%5Ctdefault%3A%5Cn%5Ct%5Ctout%20%3D%20%5C%22other%20value%5C%22%5Cn%5Ct%5Ctbreak%5Cn%5Ct%7D%5Cn%5Cn%5Ctreturn%5Cn%7D%22%7D%5D">
Check out the full example [here](https://github.com/gnolang/gno-by-example/tree/main/src/tutorials/gno.land/gbe/06-conditions).`;

const title: string = "Conditions";

const section: string = "Getting Started";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
