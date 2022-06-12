import './app.scss';

import Promo from '../main-page/promo/promo';
import AboutAs from '../main-page/about-as/about-as';
import { Component } from 'react';

class App extends Component {
    
    render() {
        return(
            <div className='app'>
                <Promo/>
                <AboutAs/>
            </div>
        ) 
    }
}

export default App;
