import "./TestimonialBox.css";

export default function TestimonialBox() {
  return (
    <div className="testimonial-box">
      <p className="testimonial-box__comment">
        Since I manage penetration testing in the company, I have to train our
        specialists in penetration testing from time to time to ensure that the
        quality of our results is high. I believe in the “learning by doing”
        principle, so I setup gamified labs, and capture-the-flag competitions.
        We then introduced Hack The Box Academy to the team. The team can now
        quickly learn by themselves through the theoretical and practical side
        of penetration testing with very in-depth and up-to-date materials
        without the need of requested labs or challenges to be built for them.
        As of now, to spice up the learning, we have a “Hacker of the Month”
        where we recognize the most progressive employee in our Hack The Box
        platform.{" "}
      </p>

      <div className="testimonial-box__footer">
        <div className="testimonial-box__writer-img">
          <img src="./../../../../src/assets/images/home-page/testimonial/puma.svg" alt="" />
        </div>

        <div className="testimonial-box__writer-info">
          <span className="testimonial-box__writer-name">Ryan Viriani,</span>
          <span className="testimonial-box__writer-job">
            Uk TeamLead, Adeptis
          </span>
        </div>
      </div>
    </div>
  );
}
