import './App.scss';
import '../variables/titles.scss'

import { Component } from 'react';
import MainPage from '../main-page/main-page';
// import OurCoffee from '../our-coffee/our-coffee';
// import ForPleasure from '../for-pleasure-page/for-pleasure';

class App extends Component {
    
    render() {
        return(
            <div className='app'>
                <MainPage/>
                {/* <OurCoffee/> */}
                {/* <ForPleasure/> */}
            </div>
        ) 
    }
}

export default App;
