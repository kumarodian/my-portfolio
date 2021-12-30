import "./Nav.css";

const NavItem = (props) => {
  return (
    <a
      className="nav-link secondaryColor"
      {...props}
      style={{ fontWeight: "bold" }}
    >
      {props.children}
    </a>
  );
};
const Nav = () => {
  return (
    <div className="navbar-nav ms-auto">
      <NavItem href="#home" children="Home" />
      <NavItem href="#intro" children="My Intro" />
      <NavItem href="#expertise" children="Expertise" />
      <NavItem href="#qualification" children="Qualification" />
      <NavItem href="#recentWork" children="Recent Work" />
      {/* <a className="nav-link hireMe backgroundTheme" href="/home">
        Hire Me
      </a> */}
    </div>
  );
};
export default Nav;
