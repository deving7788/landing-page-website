import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhoneFlip } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  return (
    <>
      <header className="topbar-container">
        <div className="main-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h2> Legal Excellence</h2>
        <div className="topbar-contact">
          <div>
            <span>
              <FontAwesomeIcon
                className="phone-icon"
                icon={faSquarePhoneFlip}
              />
            </span>
            <span>00-000-000</span>
          </div>
          <div>Email: admin@legalexpert.com</div>
        </div>
      </header>
    </>
  );
};
export default Topbar;
