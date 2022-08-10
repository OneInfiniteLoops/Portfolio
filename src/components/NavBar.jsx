import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>/james.</h1>
      <nav className="NavLinks">
        <Link to="/#about" className="EachNavBarLink">
          ABOUT
        </Link>
        <Link to="/#work" className="EachNavBarLink">
          WORK
        </Link>
        <Link to="/#contact" className="EachNavBarLink">
          CONTACT
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
