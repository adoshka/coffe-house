import itemPhoto3 from '../../img/item_photo_3.jpg';

import './Cards.scss'

const Cards = () => {


    return (
        <section className='cards'>
            <div className="container">
            <div className="card_wrapper">
                    <div className="card_item">
                        <img src={itemPhoto3} alt="aromistico coffee" className="card_image" />
                        <div className="card_title">AROMISTICO Coffee 1 kg</div>
                        <div className="card-location">Brazil</div>
                        <div className="card_price">6.99$</div>
                    </div>
                    <div className="card_item">
                        <img src={itemPhoto3} alt="aromistico coffee" className="card_image" />
                        <div className="card_title">AROMISTICO Coffee 1 kg</div>
                        <div className="card-location">Kenya</div>
                        <div className="card_price">6.99$</div>
                    </div>
                    <div className="card_item">
                        <img src={itemPhoto3} alt="aromistico coffee" className="card_image" />
                        <div className="card_title">AROMISTICO Coffee 1 kg</div>
                        <div className="card-location">Columbia</div>
                        <div className="card_price">6.99$</div>
                    </div>
                    <div className="card_item">
                        <img src={itemPhoto3} alt="aromistico coffee" className="card_image" />
                        <div className="card_title">AROMISTICO Coffee 1 kg</div>
                        <div className="card-location">Brazil</div>
                        <div className="card_price">6.99$</div>
                    </div>
                    <div className="card_item">
                        <img src={itemPhoto3} alt="aromistico coffee" className="card_image" />
                        <div className="card_title">AROMISTICO Coffee 1 kg</div>
                        <div className="card-location">Brazil</div>
                        <div className="card_price">6.99$</div>
                    </div>
                    <div className="card_item">
                        <img src={itemPhoto3} alt="aromistico coffee" className="card_image" />
                        <div className="card_title">AROMISTICO Coffee 1 kg</div>
                        <div className="card-location">Brazil</div>
                        <div className="card_price">6.99$</div>
                    </div>
                </div>
        </div>
        </section>
    )
}

export default Cards;