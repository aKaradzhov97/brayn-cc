import React, { Component } from 'react';

//Utilities
import authenticator from '../../../../services/api/authenticator';
import notificator from '../../../../utilities/notificator';
import invoiceController from '../../../../services/api/invoice-controller';

//Styles
import './styles.css';
import Item from "./components/Item/Item";

export default class InvoiceDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            invoice: {}
        }
    }

    componentDidMount = () => {
        if (authenticator.isNotAuthenticated()) {
            authenticator.authenticate()
                .then((res) => {
                    authenticator.saveSession(res);
                    invoiceController.getById(this.props.match.params.id)
                        .then((res) => {
                            this.setState({
                                invoice: res
                            });

                            notificator.showInfo("Loaded invoice data!");
                        })
                        .catch((err) => {
                            notificator.handleError(err.status);
                            this.props.history.push('/');
                        });
                })
                .catch((err) => {
                    notificator.handleError(err.status);
                });
        } else {
            invoiceController.getById(this.props.match.params.id)
                .then((res) => {
                    this.setState({
                        invoice: res
                    });

                    notificator.showInfo("Loaded invoice data!");
                })
                .catch((err) => {
                    notificator.handleError(err.status);
                    this.props.history.push('/');
                });
        }
    };

    render = () => {
        return (
            <main>
                <section className="details-container">
                    <h2>Details for invoice</h2>
                    <article>
                        <section>Invoice number</section>
                        <section>{this.state.invoice.receipt_id || "-"}</section>
                    </article>
                    <article>
                        <section>Invoice date</section>
                        <section>{this.state.invoice.receipt_date || "-"}</section>
                    </article>
                    <article>
                        <section>Debitor</section>
                        <section>{ this.state.invoice.Debitor ? this.state.invoice.Debitor.name : "-" }</section>
                    </article>
                    <article>
                        <section>Service period</section>
                        <section>{this.state.invoice.service_period || "-"}</section>
                    </article>
                    <article>
                        <section>Due date</section>
                        <section>{this.state.invoice.due_date || "-"}</section>
                    </article>
                    <article>
                        <section>Items</section>
                        <section>{this.state.invoice.items ? (this.state.invoice.items.map((item, index) => <Item key={item.id} index={index} {...item} />)) : "No items."}</section>
                    </article>
                    <article>
                        <section>Total NETTO</section>
                        <section>{this.state.invoice.netto || "0"}</section>
                    </article>
                    <article>
                        <section>Total BRUTTO</section>
                        <section>{this.state.invoice.brutto || "0"}</section>
                    </article>
                    <article>
                        <section>Open amount (balance)</section>
                        <section>{this.state.invoice.balance || "0"}</section>
                    </article>
                    <article>
                        <section>Total VAT</section>
                        <section>Not sure how to calculate this.</section>
                    </article>
                </section>
            </main>
        );
    }
}