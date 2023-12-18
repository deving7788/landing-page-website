import { testimonial } from "../data";
import { Link } from "react-router-dom";

const TestimonialPage = () => {
  return (
    <>
      <section className="testimonial-page">
        <div className="back-btn btn">
          <Link to="/" className="router-Link">
            back
          </Link>
        </div>
        <div className="testimonial-container">
          {testimonial.map((item, index) => {
            const { id, name, avatar, title, text } = item;
            return (
              <article key={id} className="single-testimonial">
                <p>{text}</p>
                <img src={avatar} alt="avatar" />
                <div>
                  <span>{name}, </span>
                  <span>{title}</span>
                </div>
              </article>
            );
          })}
        </div>
        <div className="testimonial-btn btn">
          <Link to="/" className="router-Link">
            back
          </Link>
        </div>
      </section>
    </>
  );
};
export default TestimonialPage;
