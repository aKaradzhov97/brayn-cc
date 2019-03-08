import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Styles
import './styles.css';

//Images
import logo from './images/site-logo.png';

export default class Header extends Component {
    render = () => {
        return (
            <header className="site-header">
                <input type="checkbox" name="main-nav-toggle" id="main-nav-toggle" />
                <div className="wrapper">
                    <div className="site-branding">
                        <p className="site-title">
                            <Link to="/">
                                <img src={logo} alt="logo" className="site-logo" />
                            </Link>
                        </p>
                        <p className="site-description">
                            Code challenge
                        </p>
                    </div>

                    <label htmlFor="main-nav-toggle" id="toggle">
                        <i className="fas fa-bars"></i>
                        <i className="fas fa-times" id="times-icon"></i>
                    </label>

                    <nav className="navigation main">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/invoices">Invoices</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
};