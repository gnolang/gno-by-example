const markdownContent: string = `

Constants works as they do in standard Go:

<Playground open="src/tutorials/gno.land/gbe/05-constants/constants.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F05-constants%2Fconstants.gno%22%2C%22content%22%3A%22package%20constants%5Cn%5Cnconst%20s%20%3D%20%5C%22constant%20string%5C%22%5Cn%5Cnfunc%20Render(name%20string)%20string%20%7B%5Cn%5Ct%2F%2F%20we%20cannot%20change%20the%20assignment%20on%20a%20constant%2C%5Cn%5Ct%2F%2F%20so%20this%20line%20will%20fail%20when%20compiling%5Cn%5Ct%2F%2F%20s%20%3D%20%5C%22other%20value%5C%22%5Cn%5Cn%5Ctreturn%20s%5Cn%7D%5Cn%22%7D%5D">
`;

const title: string = "Constants";

const section: string = "Getting Started";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
