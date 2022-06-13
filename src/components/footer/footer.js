import './Footer.scss';

import blackLogo from '../../img/black_logo.svg';
import beansBlackLogo from '../../img/beans_logo_black.svg';

const Footer = () => {


    return (
        <section className='footer'>
            <div className="container">
                <nav className="footer_wrapper">
                    <div href='google.com' className="footer_text"><img className="footer_logo" src={blackLogo} alt="coffee logo" />Coffee house</div>
                    <div href='google.com' className="footer_text">Our coffee</div>
                    <div href='google.com' className="footer_text">For your pleasure</div>
                </nav>
                <img src={beansBlackLogo} alt="black beans" className="footer_image" />
            </div>
        </section>
    )
}

export default Footer;