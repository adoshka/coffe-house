import Promo from '../promo/Promo'
import OurBeans from '../our-beans/Beans';
import Cards from '../cards/Cards';
import Footer from '../footer/Footer';

import coffee from '../../img/coffee.jpg'
import beansBlackLogo from '../../img/beans_logo_black.svg';

import './for-pleasure.scss';

const ForPleasure = () => {


    return (
        <div>
            <div className="promo_bg">
                <Promo title ="For your pleasure"/>
            </div>
            <OurBeans 
                    img={coffee} 
                    logo={beansBlackLogo}
                    text={ <div> Extremity sweetness difficult behaviour he of. On <br />
                                 disposal of as landlord horrible. <br /> <br />
                                 Afraid at highly months do things on at. Situation <br /> recommend objection do intention <br />
                                 so questions.  <br />
                                 As greatly removed calling pleased improve an. <br /> Last ask him cold feel <br />
                                 met spot shy want. Children me laughing we <br /> prospect answered followed. At it went <br />
                                 is song that held help face. <br /> </div> }
                    subtitle='About our goods'/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default ForPleasure;