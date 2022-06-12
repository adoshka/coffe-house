import './our-best.scss';

import itemPhoto1 from '../../../img/item_photo_1.jpg';
import itemPhoto2 from '../../../img/item_photo_2.jpg';
import itemPhoto3 from '../../../img/item_photo_3.jpg';

const OurBest = () => {


    return (
        <section className='best'>
            <div className="container">
                    <div className="title">Our best</div>
                    <div className="best_wrapper">
                        <div className="best-item">
                            <img className="best_image" src={itemPhoto1} alt="coffee beans" />
                            <div className="best-item_title">Solimo Coffee Beans 2 kg</div>
                            <div className="best-item_price">10.73$</div>
                        </div>
                        <div className="best-item">
                            <img className="best_image best_image-mb_10" src={itemPhoto2} alt="presto coffee beans" />
                            <div className="best-item_title">Presto Coffee Beans 1 kg</div>
                            <div className="best-item_price">15.99$</div>
                        </div>
                        <div className="best-item">
                            <img className="best_image best_image-mt_37" src={itemPhoto3} alt="aromistico coffee" />
                            <div className="best-item_title">AROMISTICO Coffee 1 kg</div>
                            <div className="best-item_price">6.99$</div>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default OurBest;