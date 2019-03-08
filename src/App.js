import React, { Component } from 'react';
import Header from './components/Header/index';
import AppRouter from './AppRouter';
import Footer from './components/Footer/index'
import './index.css';

class App extends Component {
    render = () => {
        return (
            <div className="App">
                <Header/>
                <AppRouter/>
                <Footer/>
            </div>
        );
    }
}

export default App;