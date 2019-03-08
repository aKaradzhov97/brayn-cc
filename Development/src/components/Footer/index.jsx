import React, { Component } from 'react';

//Styles
import './styles.css';

export default class Footer extends Component {
    render = () => {
        return (
            <footer className="site-footer">
                <section>
                    <span>Copyright © 2019. All rights reserved | Design & developed by <a href="https://www.github.com/akaradzhov97" className="dev-credits">aKaradzhov97</a></span>
                </section>
            </footer>
        );
    }
};