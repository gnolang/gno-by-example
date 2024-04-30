const markdownContent: string = `

Loops works as in standard Go, but you have to be careful to always check for the right condition to break it, if not your application will consume all the available Gas.

<Playground open="src/tutorials/gno.land/gbe/basics/07-loops/loops.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fbasics%2F07-loops%2Floops.gno%22%2C%22content%22%3A%22const%20totalLoops%20%3D%2010%5Cn%5Cnfunc%20forLoop()%20string%20%7B%5Cn%5Ctvar%20out%20string%5Cn%5Ctfor%20i%20%3A%3D%200%3B%20i%20%3C%20totalLoops%3B%20i%2B%2B%20%7B%5Cn%5Ct%5Ctout%20%3D%20out%20%2B%20fmt.Sprintf(%5C%22%25d%5C%22%2C%20i)%5Cn%5Ct%7D%5Cn%5Cn%5Ctreturn%20out%5Cn%7D%5Cn%5Cnfunc%20whileLoop()%20string%20%7B%5Cn%5Ctvar%20loops%20int%5Cn%5Ctvar%20out%20string%5Cn%5Ctfor%20%7B%5Cn%5Ct%5Ctif%20loops%20%3D%3D%20totalLoops%20%7B%5Cn%5Ct%5Ct%5Ctbreak%5Cn%5Ct%5Ct%7D%5Cn%5Cn%5Ct%5Ctout%20%3D%20out%20%2B%20%5C%22A%5C%22%5Cn%5Cn%5Ct%5Ct%2F%2F%20you%20have%20to%20be%20sure%20to%20reach%20the%20break%20condition%2C%5Cn%5Ct%5Ct%2F%2F%20if%20not%20you%20will%20exaust%20all%20the%20available%20gas%20for%20this%20execution%5Cn%5Ct%5Ctloops%2B%2B%5Cn%5Ct%7D%5Cn%5Cn%5Ctreturn%20out%5Cn%7D%22%7D%5D">
`;

const title: string = "Loops";

const section: string = "Basics";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
