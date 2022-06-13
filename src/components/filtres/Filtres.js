import './Filtres.scss';

const Filtres = () => {

    return (
        <div className="filtres-wrapper">
            <div className="filtres_item">
                <div className="filtres_title filtres_title-mr_19">Lookiing for</div>
                <input className='search_panel' type="text" placeholder='start typing here...'/>
            </div>

            <div className="filtres_item">
                <div className="filtres_title filtres_title-mr_35">Or filter</div>
                <button className="filtres_btn">
                        Brazil
                    </button>
                    <button className="filtres_btn">
                        Kenya
                    </button>
                    <button className="filtres_btn">
                        Columbia
                    </button>
            </div>
        </div>
    )
}

export default Filtres;