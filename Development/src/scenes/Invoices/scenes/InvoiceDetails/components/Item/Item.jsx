import React, { Component } from 'react';

//Styles
import './styles.css';

export default class Item extends Component {
    render = () => {
        return (
            <article className="invoice-item-container">
                <section>Item: {this.props.index + 1}</section>
                <section>Description: {this.props.description}</section>
                <section>Amount: {this.props.amount}</section>
                <section>Price: {this.props.price}</section>
                <section>VAT Rate (%): {this.props.vat_rate}</section>
            </article>
        );
    }
}