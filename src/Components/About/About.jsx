import "./About.css";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import logoLottie from "./../../data/lottie/htb-logo.json";
import Typewriter from "typewriter-effect";

//local-files
import AboutBox from "./AboutBox/AboutBox";

//data
import about from "../../data/about";
import { Link } from "react-router-dom";

export default function About() {
  const [whyBoxes, setWhyBoxes] = useState(null);

  useEffect(() => {
    setWhyBoxes(about);
  });

  return (
    <div className="about">
      <div className="about__header">
        <div className="logo-lottie">
          <Lottie animationData={logoLottie} />
        </div>
        <h2 className="about__title">Why Hack The Box?</h2>
        <p className="about__caption">
          Upskilling cyber superhumans since 2017.
        </p>
      </div>

      <div className="container">
        <div className="about-boxes">
          {whyBoxes?.map((box) => (
            <AboutBox key={box.id} {...box} />
          ))}
        </div>

        <div className="funfact">
          <h2 className="funfact__title">
            2.3m
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("members")
                  .start()
                  .pauseFor(2500)
                  .deleteAll(150)
                  .typeString("hackers")
                  .start()
                  .pauseFor(2500)
                  .deleteAll(150)
                  .typeString("learners")
                  .start()
                  .pauseFor(3000)
                  .deleteAll(150);
              }}
              options={{
                loop: true,
              }}
            />
          </h2>
          <span className="funfact__caption">
            Be part of the <Link to={"/community"}>HTB Community</Link>. Get
            involved.
          </span>
        </div>
      </div>
    </div>
  );
}
