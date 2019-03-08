import React, { Component } from 'react';

//Components
import Invoice from "./components/Invoice/index";

//Utilities
import authenticator from '../../../../services/api/authenticator';
import notificator from '../../../../utilities/notificator';
import invoiceController from '../../../../services/api/invoice-controller';

//Styles
import './styles.css';

export default class AllInvoices extends Component {
    constructor(props) {
        super(props);

        this.state = {
            debits: [],
        }
    }
    componentDidMount = () => {
        if (authenticator.isNotAuthenticated()) {
            authenticator.authenticate()
                .then((res) => {
                    authenticator.saveSession(res);
                    invoiceController.getAll()
                        .then((res) => {
                            this.setState({
                                debits: res._embedded.list_debits
                            });
                            notificator.showInfo("Loaded all invoices!");
                        })
                        .catch((err) => {
                            notificator.showError("Error loading invoices!");
                        });
                })
                .catch((err) => {
                    notificator.showError("Authentication error!");
                });
        } else {
            invoiceController.getAll()
                .then((res) => {
                    this.setState({
                        debits: res._embedded.list_debits
                    });
                    notificator.showInfo("Loaded all invoices!");
                })
                .catch((err) => {
                    notificator.showError("Error loading invoices!");
                });
        }
    };

    render = () => {
        return (
            <main>
                <section className="table-container">
                    <h2>All Invoices</h2>
                    <table className="gridtable">
                        <thead>
                        <tr>
                            <th>Invoice Number</th>
                            <th>Invoice Date</th>
                            <th>Net Amount</th>
                            <th>Gross Amount</th>
                            <th>Open Amount</th>
                            <th>Debitor</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>

                        { this.state.debits.map((el) => <Invoice key={el.id} {...el} />)}

                        </tbody>
                    </table>
                </section>
            </main>
        );
    }
}