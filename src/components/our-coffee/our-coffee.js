import Promo from "../promo/Promo";
import Beans from "../our-beans/Beans";
import Footer from "../footer/Footer";
import Cards from "../cards/Cards";
import Filtres from "../filtres/Filtres";

import girl from '../../img/girl.jpg';
import beansBlackLogo from '../../img/beans_logo_black.svg';


const OurCoffee = () => {
    

    return (
        <div>
            <Promo title="Our Coffee"/>
            <Beans 
                    img={girl}
                    logo={beansBlackLogo}
                    text={ <div> Extremity sweetness difficult behaviour he of. On <br />
                    disposal of as landlord horrible. <br /> <br />
                    Afraid at highly months do things on at. Situation <br /> recommend objection do intention <br />
                    so questions.  <br />
                    As greatly removed calling pleased improve an. <br /> Last ask him cold feel <br />
                    met spot shy want. Children me laughing we <br /> prospect answered followed. At it went <br />
                    is song that held help face. <br /> </div> }
                    subtitle='About our beans'/>
                <Filtres/>
                <Cards/> 
            <Footer/>
        </div>
    )
}

export default OurCoffee;