import React, { Component } from 'react';

//Styles
import './styles.css';

export default class Home extends Component {
    render = () => {
        return (
            <main>
                <section className="home-container">
                    <h2>Innovation at its finest</h2>
                </section>
                <section className="home-credentials">
                    <article className="text-wrapper">
                        <p className="home-credentials-text">this.application is designed & developed as a Code Challenge to demonstrate knowledge of trending technologies in the field of programming. The Code Challenge is provided by Brayn.io. Fun & Top challenge - provided by top company!</p>
                        <a href="https://brayn.io">Visit Brayn.io</a>
                    </article>
                </section>
            </main>
        )
    }
}