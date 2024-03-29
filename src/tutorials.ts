import helloWorld from "./tutorials/gno.land/gbe/01-hello/index";
import firstApp from "./tutorials/gno.land/gbe/02-count/index";
import primitives from "./tutorials/gno.land/gbe/03-primitives/index";
import variables from "./tutorials/gno.land/gbe/04-variables/index";
import constants from "./tutorials/gno.land/gbe/05-constants/index";
import conditions from "./tutorials/gno.land/gbe/06-conditions/index";
import loops from "./tutorials/gno.land/gbe/07-loops/index";

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
];

export default tutorials;
