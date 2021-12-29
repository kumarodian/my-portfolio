import Nav from "./Nav/Nav.js";
import "./Header.css";
import Logo from "../Logo/Logo";
const Header = () => {
  return (
    <div className="header container">
      <nav className="navbar navbar-expand-lg">
        <Logo />
        <button
          aria-controls="responsive-navbar-nav"
          type="button"
          aria-label="Toggle navigation"
          className="navbar-toggler collapsed"
        >
          <i>Nav</i>
        </button>
        <Nav></Nav>
      </nav>
    </div>
  );
};
export default Header;
