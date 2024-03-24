import { Link } from "react-router-dom";
import "./style.scss";
import { navLinks } from "../../constants";

const Navigation = () => {

  const closeNav = () => {
    const navToggle = document.getElementById("page-nav-toggle") as HTMLInputElement | null;
    if (navToggle) {
      navToggle.checked = false;
    }
  };
  
  return (
    <div className="header-navigation">
      <input
        id="page-nav-toggle"
        className="main-navigation-toggle"
        type="checkbox"
      />
      <label htmlFor="page-nav-toggle">
        <svg className="icon--menu-toggle" viewBox="0 0 60 30">
          <g className="icon-group">
            <g className="icon--menu">
              <path d="M 6 0 L 54 0" />
              <path d="M 6 15 L 54 15" />
              <path d="M 6 30 L 54 30" />
            </g>
            <g className="icon--close">
              <path d="M 15 0 L 45 30" />
              <path d="M 15 30 L 45 0" />
            </g>
          </g>
        </svg>
      </label>

      <nav className="main-navigation">
        <ul>
          {navLinks?.map((navItem) => (
            <li key={navItem.title}>
              <Link to={navItem.link} onClick={closeNav}>
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
