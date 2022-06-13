import logo from '../../img/logo.svg';


import './Nav.scss';

const Nav = (props) => {
    

    return (
        <nav className="about_wrapper">
            <img className="nav_logo" src={logo} alt="coffee logo" />
            <a href='google.com' className="nav_text">Coffee house</a>
            <a href='google.com' className="nav_text">Our coffee</a>
            <a href='google.com' className="nav_text">For your pleasure</a>
        </nav>
    );
}

export default Nav;