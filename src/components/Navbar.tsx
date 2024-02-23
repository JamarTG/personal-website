import { NavLink } from "react-router-dom";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <ResumeButton className="nav-link" />
          </li>
          
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
