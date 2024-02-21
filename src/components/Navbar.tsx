import { NavLink } from "react-router-dom";
import ResumeDownloadButton from "./ResumeViewButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>

        <li className="nav-item">
          <ResumeDownloadButton className="nav-link" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
