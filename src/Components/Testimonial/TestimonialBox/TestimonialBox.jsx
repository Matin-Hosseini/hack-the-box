import "./TestimonialBox.css";

export default function TestimonialBox({ comment, img, name, job }) {
  return (
    <div className="testimonial-box">
      <p className="testimonial-box__comment">{comment}</p>

      <div className="testimonial-box__footer">
        <div className="testimonial-box__writer-img">
          <img
            src={`./../../../../src/assets/images/home-page/testimonial/${img}`}
            alt={name}
          />
        </div>

        <div className="testimonial-box__writer-info">
          <span className="testimonial-box__writer-name">{name},</span>
          <span className="testimonial-box__writer-job">{job}</span>
        </div>
      </div>
    </div>
  );
}
