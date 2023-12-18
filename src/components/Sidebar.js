import { sidebarItems } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const Sidebar = () => {
  const [hideSidebar, setHideSidebar] = useState(true);
  const windowWidth = window.innerWidth;
  useEffect(() => {
    if (windowWidth >= 1500) {
      setHideSidebar(false);
    } else {
      setHideSidebar(true);
    }
  }, [windowWidth]);

  return (
    <div className={hideSidebar ? "sidebar hide-sidebar" : "sidebar"}>
      <div
        className="hide-sidebar-btn-container"
        onClick={() => setHideSidebar(true)}
      >
        <FontAwesomeIcon icon={faSquareXmark} className="hide-sidebar-btn" />
      </div>
      <div
        className={hideSidebar ? "show-sidebar-btn" : "show-sidebar-btn sidebar-hidden"}
        onClick={() => setHideSidebar(false)}
      ></div>
      <div className="sidebar-items">
        {sidebarItems.map((item) => {
          const { id, text, link } = item;
          return (
            <div key={id}>
              <a
                href={link}
                className="sidebar-link"
                style={{ textDecoration: "none" }}
              >
                {text}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
