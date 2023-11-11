import businessLottie from "./lottie/businesses.json";
import hackersLottie from "./lottie/hackers.json";
import uniDeskLottie from "./lottie/uni-desk.json";

const heroBoxes = [
  {
    id: 1,
    title: "For Business",
    caption:
      "One solution for developing cybersecurity skills across your entire IT team",
    link: "Get a Demo",
    to: "/",
    lottieAnimation: businessLottie,
  },
  {
    id: 2,
    title: "For Hackers",
    caption:
      "A undefied suite of hacking experiences-from beginners to seasoned professionals ",
    link: "Join for Free",
    to: "/",
    lottieAnimation: hackersLottie,
  },
  {
    id: 3,
    title: "For Universities",
    caption:
      "A huge libraray of educational content to help your students put theory into practice",
    link: "Enroll for Free",
    to: "/",
    lottieAnimation: uniDeskLottie,
  },
];

export default heroBoxes;
