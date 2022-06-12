import logo from '../../img/logo.svg';
import blackLogo from '../../img/black_logo.svg'

import './about.scss';

const About = () => {
    

    return (
        <div className="about_wrapper">
            <img className="about_logo" src={logo} alt="coffee logo" />
            <a href='google.com' className="about_text">Coffee house</a>
            <a href='google.com' className="about_text">Our coffee</a>
            <a href='google.com' className="about_text">For your pleasure</a>
        </div>
    );
}


const AboutBlack = () => {
    

    return (
        <div className="about_wrapper">
            <img className="about_logo" src={blackLogo} alt="coffee logo" />
            <div href='google.com' className="about_text_black">Coffee house</div>
            <div href='google.com' className="about_text_black">Our coffee</div>
            <div href='google.com' className="about_text_black">For your pleasure</div>
        </div>
    );
}

export {About};
export {AboutBlack};