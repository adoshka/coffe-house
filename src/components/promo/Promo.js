import './Promo.scss';

import Nav from '../nav/Nav';

const Promo = (props) => {


    return (
        <section className="promo">
            <div className="container">
                    <Nav/>
                    <div className="title_big title_big-mt_60">{props.title}</div>
            </div>
        </section>
    )
}

export default  Promo;