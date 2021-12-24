import './Nav.css';

const Nav = () => {
    return(
        <div className="navbar-nav ms-auto">
            <a className="nav-link" href="/home">Home</a>
            <a className="nav-link" href="/home">My Intro</a>
            <a className="nav-link" href="/home">Portfolio</a>
            <a className="nav-link" href="/home">Contact</a>
            <a className="nav-link hireMe backgroundTheme" href="/home">Hire Me</a>
        </div>
    )
}
export default Nav;