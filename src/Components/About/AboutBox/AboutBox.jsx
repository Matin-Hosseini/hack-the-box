import "./AboutBox.css";

export default function AboutBox({ img, title, caption }) {
  return (
    <div className="about-box">
      <img src={img} alt={title} />
      <div className="about-box__content">
        <h3 className="about-box__title">{title}</h3>
        <p className="about-box__caption">{caption}</p>
      </div>
    </div>
  );
}
