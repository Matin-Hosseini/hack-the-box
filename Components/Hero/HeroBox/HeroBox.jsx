import "./HeroBox.css";

import { Link } from "react-router-dom";

import Lottie from "lottie-react";
import businessAnimation from "./../../../data/lottie/businesses.json";

export default function HeroBox({ title, caption, link, to, lottieAnimation }) {
  return (
    <Link to={to} className="hero-box">
      <Lottie animationData={lottieAnimation} />
      <div className="hero-box__content">
        <h3 className="hero-box__title">{title}</h3>
        <p className="hero-box__caption">{caption}</p>
        <span className="hero-box__link">{link}</span>
      </div>
    </Link>
  );
}
