import helloWorld from "./tutorials/gno.land/gbe/basics/01-hello/index";
import firstApp from "./tutorials/gno.land/gbe/basics/02-count/index";
import primitives from "./tutorials/gno.land/gbe/basics/03-primitives/index";
import variables from "./tutorials/gno.land/gbe/basics/04-variables/index";
import constants from "./tutorials/gno.land/gbe/basics/05-constants/index";
import conditions from "./tutorials/gno.land/gbe/basics/06-conditions/index";
import loops from "./tutorials/gno.land/gbe/basics/07-loops/index";
import revertingATransaction from "./tutorials/gno.land/gbe/chain/01-panic/index";
import settingInitialValuesUsingInit from "./tutorials/gno.land/gbe/chain/02-init/index";
import emittingAnEvent from "./tutorials/gno.land/gbe/chain/03-events/index";
import sendingAndReceivingCoins from "./tutorials/gno.land/gbe/chain/04-coins/index";
import sendingCoins from "./tutorials/gno.land/gbe/chain/05-banker/index";

const tutorials = [
  {
    section: "Basics",
    link: "basics",
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
    section: "Chain",
    link: "chain",
    items: [
      {
        link: "reverting-a-transaction",
        data: revertingATransaction,
      },
      {
        link: "setting-initial-values-using-init",
        data: settingInitialValuesUsingInit,
      },
      {
        link: "emitting-an-event",
        data: emittingAnEvent,
      },
      {
        link: "sending-and-receiving-coins",
        data: sendingAndReceivingCoins,
      },
      {
        link: "sending-coins",
        data: sendingCoins,
      },
    ],
  },
];

export default tutorials;
