import Nav from './Nav/Nav.js';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="logo colorTheme">SK</div>
                <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
                    <i>Nav</i></button>
                <Nav></Nav>
            </nav>
        </div>
    )
}
export default Header;