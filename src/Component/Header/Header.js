import React from "react";
import Nav from "./Nav/Nav.js";
import MaterialIcon from "material-icons-react";
import "./Header.css";
import Logo from "../Logo/Logo";

const Header = () => {
  const width = window.innerWidth;
  const [showResult, setShowResult] = React.useState(
    width < 992 ? false : true
  );
  const toggleNav = () => {
    console.log(showResult);
    if (showResult) {
      console.log(showResult);
      setShowResult(false);
    } else {
      setShowResult(true);
    }
  };
  return (
    <div className="header container">
      <nav className="navbar navbar-expand-lg">
        <Logo />
        <button
          aria-controls="responsive-navbar-nav"
          type="button"
          aria-label="Toggle navigation"
          className="navbar-toggler collapsed"
          onClick={toggleNav}
        >
          <MaterialIcon icon="menu" size={30} />
        </button>
        {showResult ? <Nav /> : null}
      </nav>
    </div>
  );
};
export default Header;
