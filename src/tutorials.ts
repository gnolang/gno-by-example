import helloWorld from "./tutorials/gno.land/gbe/basics/01-hello/index";
import firstApp from "./tutorials/gno.land/gbe/basics/02-count/index";
import primitives from "./tutorials/gno.land/gbe/basics/03-primitives/index";
import variables from "./tutorials/gno.land/gbe/basics/04-variables/index";
import constants from "./tutorials/gno.land/gbe/basics/05-constants/index";
import conditions from "./tutorials/gno.land/gbe/basics/06-conditions/index";
import loops from "./tutorials/gno.land/gbe/basics/07-loops/index";
import importing from "./tutorials/gno.land/gbe/basics/08-imports/index";
import settingInitialValuesUsingInit from "./tutorials/gno.land/gbe/chain/01-init/index";
import revertingATransaction from "./tutorials/gno.land/gbe/chain/02-panic/index";
import emittingAnEvent from "./tutorials/gno.land/gbe/chain/03-events/index";
import gettingTheTransactionCaller from "./tutorials/gno.land/gbe/chain/04-call_stack/index";
import manipulatingCoins from "./tutorials/gno.land/gbe/chain/05-coins/index";
import sendingCoins from "./tutorials/gno.land/gbe/chain/06-banker/index";

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
      {
        link: "importing",
        data: importing,
      },
    ],
  },
  {
    section: "Chain",
    link: "chain",
    items: [
      {
        link: "setting-initial-values-using-init",
        data: settingInitialValuesUsingInit,
      },
      {
        link: "reverting-a-transaction",
        data: revertingATransaction,
      },
      {
        link: "emitting-an-event",
        data: emittingAnEvent,
      },
      {
        link: "getting-the-transaction-caller",
        data: gettingTheTransactionCaller,
      },
      {
        link: "manipulating-coins",
        data: manipulatingCoins,
      },
      {
        link: "sending-coins",
        data: sendingCoins,
      },
    ],
  },
];

export default tutorials;
