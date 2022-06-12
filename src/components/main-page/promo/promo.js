import './promo.scss';

import beansLogo from '../../../img/beans_logo.svg';

import { About } from '../../about/about';

const Promo = () => {


    return (
        <section className='promo'>
            <div className="container">
                <About/>

                <h1 className="promo_title">
                    Everything You Love About Coffee
                </h1>
                <img className='promo_logo' src={beansLogo} alt="beans coffee logo" />
                <h2 className="promo_descr">We makes every day full of energy and taste</h2>
                <h2 className="promo_descr promo_descr_mt_20">Want to try our beans?</h2>
                <button className="promo_btn">More</button>
            </div>
        </section>
    );
}

export default Promo;