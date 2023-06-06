import conditions from "./tutorials/gno.land/gbe/conditions/index";
import constants from "./tutorials/gno.land/gbe/constants/index";
import counting from "./tutorials/gno.land/gbe/count/index";
import helloWorld from "./tutorials/gno.land/gbe/hello/index";
import primitives from "./tutorials/gno.land/gbe/primitives/index";
import variables from "./tutorials/gno.land/gbe/variables/index";

const tutorials = [
  {
    section: "Section 1",
    link: "section-1",
    items: [
      {
        link: "conditions",
        data: conditions,
      },
      {
        link: "constants",
        data: constants,
      },
      {
        link: "counting",
        data: counting,
      },
      {
        link: "hello-world",
        data: helloWorld,
      },
      {
        link: "primitives",
        data: primitives,
      },
      {
        link: "variables",
        data: variables,
      },
    ],
  },
];

export default tutorials;
