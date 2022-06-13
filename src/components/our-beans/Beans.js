import './Beans.scss';

const OurBeans = (props) => {


    return (
        <section className="our-beans">
            <div className="container">
                <div className="our-beans_wrapper">
                    <div className="about_beans-item">
                    <img src={props.img} alt="girl drink coffee" className='girl_image' />
                    </div>
                    <div className="about_beans-item">
                        <div className="title">{props.subtitle}</div>
                        <img src={props.logo} alt="black beans"  className='our-beans_image'/>
                        <div  className="our-beans_descr">
                            {props.text}
                        </div>
                    </div>
                </div>
                    <hr />  
                    
            </div>
        </section>
    )
}

export default OurBeans;