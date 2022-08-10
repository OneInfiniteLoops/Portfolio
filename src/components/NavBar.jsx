import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>/james.</h1>
      <nav className="NavLinks">
        <Link to="#about" smooth className="EachNavBarLink">
          ABOUT
        </Link>
        <Link to="#work" smooth className="EachNavBarLink">
          WORK
        </Link>
        <Link to="#contact" smooth className="EachNavBarLink">
          CONTACT
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
