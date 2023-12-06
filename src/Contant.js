import ReferFriendIcon from "./assets/images/ReferIcon.svg";
import DailySpinIcon from "./assets/images/DailySpinIcon.svg";
import SurveryIcon from "./assets/images/SurveyIcon.svg";
import WatchVideoIcon from "./assets/images/WatchVideoIcon.svg";
import CoinIcon from "./assets/images/CoinsIcon.svg";
import RedeemIcon from "./assets/images/RedeemIcon.svg";

const PointSystems = [
  {
    bgColor:
      "linear-gradient(82.05deg, #0098EA 5.49%, #0098EA 48.11%, #53BEFE 96.19%),linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15))",
    amount: "500",
    emptyIconNum: "2",
    fillIconNum: "0",
    text: "Refer your Friends",
    icon: ReferFriendIcon,
    url: "/",
  },
  {
    bgColor:
      "linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15)), linear-gradient(258.65deg, #AA7FF0 1.01%, #7561DB 42.82%, #AA7FF0 89.98%)",
    amount: "8000",
    emptyIconNum: "1",
    fillIconNum: "1",
    text: "Daily Spin",
    icon: DailySpinIcon,
    url: "/",
  },
  {
    bgColor:
      "linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15)), linear-gradient(81.99deg, #4664FF 5.48%, #6D74FB 60.94%, #3875EA 108.65%)",
    amount: "5000",
    emptyIconNum: "2",
    fillIconNum: "0",
    text: "Answer Surveys",
    icon: SurveryIcon,
    url: "/answer_survey",
  },
  {
    bgColor:
      "linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15)), linear-gradient(248.16deg, #EEACCD 17.14%, #DF77A9 58.26%, #FFC3E0 101.85%)",
    amount: "10",
    emptyIconNum: "2",
    fillIconNum: "0",
    text: "Watch a video Available",
    icon: WatchVideoIcon,
    url: "/",
  },
  {
    bgColor:
      "linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15)), linear-gradient(76.96deg, #ECC75F -4.06%, #FFA68A 47.73%, #FFBE85 93.04%)",
    amount: "3000",
    emptyIconNum: "2",
    fillIconNum: "0",
    text: "Coins for Mini-Games!",
    icon: CoinIcon,
    url: "/",
  },
  {
    bgColor:
      "linear-gradient(67.71deg, #0856FD -5.17%, #199CFF 39.15%, #41E6EF 90.21%), linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15))",
    amount: "50",
    emptyIconNum: "2",
    fillIconNum: "0",
    text: "Redeem with Merchants",
    icon: RedeemIcon,
    url: "/",
  },
];

export { PointSystems };
