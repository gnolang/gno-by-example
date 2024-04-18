import helloWorld from "./tutorials/gno.land/gbe/basics/01-hello/index";
import firstApp from "./tutorials/gno.land/gbe/basics/02-count/index";
import primitives from "./tutorials/gno.land/gbe/basics/03-primitives/index";
import variables from "./tutorials/gno.land/gbe/basics/04-variables/index";
import constants from "./tutorials/gno.land/gbe/basics/05-constants/index";
import conditions from "./tutorials/gno.land/gbe/basics/06-conditions/index";
import loops from "./tutorials/gno.land/gbe/basics/07-loops/index";
import helloWorld from "./tutorials/gno.land/gbe/new/01-hello/index";

const tutorials = [
  {
    section: "Getting Started",
    link: "getting-started",
    items: [
      {
        link: "hello-world",
        data: helloWorld,
      },
      {
        link: "first-app",
        data: firstApp,
      },
      {
        link: "primitives",
        data: primitives,
      },
      {
        link: "variables",
        data: variables,
      },
      {
        link: "constants",
        data: constants,
      },
      {
        link: "conditions",
        data: conditions,
      },
      {
        link: "loops",
        data: loops,
      },
    ],
  },
  {
    section: "New",
    link: "new",
    items: [
      {
        link: "hello-world",
        data: helloWorld,
      },
    ],
  },
];

export default tutorials;
