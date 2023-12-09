import { testimonial } from "../data";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-section-container">
      <h1>Testimonial</h1>
      <div className="testimonial-container">
        {testimonial.map((item, index) => {
          const { id, name, avatar, title, text } = item;
          if (index < 2) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="testimonial-show-more btn">
        <Link to="testimonial" className="router-Link" reloadDocument={true}>
          show more
        </Link>
      </div>
    </section>
  );
};
export default Testimonial;
