import './app.scss';
import '../variables/titles.scss'

import { Component } from 'react';
import MainPage from '../main-page/main-page';

class App extends Component {
    
    render() {
        return(
            <div className='app'>
                <MainPage/>
            </div>
        ) 
    }
}

export default App;
