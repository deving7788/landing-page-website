import { Expertise, Slides, Sidebar,Introduction,Testimonial, Contact } from "../components";

const HomePage = () => {
  return (
    <div id="homepage">
      <Sidebar />
      <Introduction/>
      <Expertise />
      <Slides />
      <Testimonial/>
      <Contact/>
    </div>
  );
};
export default HomePage;
