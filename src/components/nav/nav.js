import logo from '../../img/logo.svg';


import './nav.scss';

const About = () => {
    

    return (
        <nav className="about_wrapper">
            <img className="about_logo" src={logo} alt="coffee logo" />
            <a href='google.com' className="about_text">Coffee house</a>
            <a href='google.com' className="about_text">Our coffee</a>
            <a href='google.com' className="about_text">For your pleasure</a>
        </nav>
    );
}

export {About};