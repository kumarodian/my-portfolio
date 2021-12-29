import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar-nav ms-auto">
      <a className="nav-link" href="/home">
        Home
      </a>
      <a className="nav-link" href="#index">
        My Intro
      </a>
      <a className="nav-link" href="#expertise">
        Expertise
      </a>
      <a className="nav-link" href="#qualification">
        Qualification
      </a>
      <a className="nav-link" href="#recentWork">
        Recent Work
      </a>
      {/* <a className="nav-link hireMe backgroundTheme" href="/home">
        Hire Me
      </a> */}
    </div>
  );
};
export default Nav;
