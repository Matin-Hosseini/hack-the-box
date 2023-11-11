import { Link } from "react-router-dom";
import "./Hero.css";

import { BiSolidChevronRight } from "react-icons/bi";

import HeroBox from "./HeroBox/HeroBox";

//data
import heroBoxes from "../../data/heroBoxes";

export default function Hero() {
  return (
    <div className="hero">
      <div className="banner">
        <span className="banner__badge">NEW</span>
        <Link to={"/"} className="banner__link">
          <p>
            Join the biggest cybersecurity event for Universities More than
            $65,000 in prizes
          </p>

          <div className="banner__icon-wrapper">
            <BiSolidChevronRight className="banner__icon" />
          </div>
        </Link>
      </div>

      <div className="container-lg">
        <h1 className="site-title">
          The #1 cybersecurity upskilling platform.
        </h1>
        <p className="site-caption">
          Hack The Box gives individuals, businesses and universities the tools
          they need to continuously improve their cybersecurity capabilities{" "}
          <span>— all in one place.</span>
        </p>
      </div>
      <div className="row container-lg">
        <div className="hero-boxes">
          {heroBoxes?.map((box) => (
            <HeroBox key={box.id} {...box} />
          ))}
        </div>
      </div>
    </div>
  );
}
