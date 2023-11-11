import "./FunFacts.css";

import funfacts from "../../data/funfacts";
import FunFactBox from "./FunFactBox/FunFactBox";

export default function FunFacts() {
  return (
    <div className="funfacts">
      <div className="container">
        <div className="funfact-boxes">
          {funfacts?.map((funfact) => (
            <FunFactBox key={funfact.id} {...funfact} />
          ))}
        </div>
      </div>
    </div>
  );
}
