import './promo.scss';

import beansLogo from '../../../img/beans_logo.svg';

import  Nav  from '../../nav/Nav';

const Promo = () => {


    return (
        <section className='promo'>
            <div className="container">
                <Nav/>

                <h1 className="title_big">
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