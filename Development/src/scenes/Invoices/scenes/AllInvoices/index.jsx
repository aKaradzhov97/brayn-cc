import React, { Component } from 'react';

//Components
import Invoice from "./components/Invoice/index";
import Pagination from "./components/Pagination/index";

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
            pageCount: 0
        }
    }

    getPage = (page) => {
        this.getAll(page);
        window.scrollTo(0, 0);
    };

    getAll = (page) => {
        if (authenticator.isNotAuthenticated()) {
            authenticator.authenticate()
                .then((res) => {
                    authenticator.saveSession(res);
                        invoiceController.getAllAtPage(page)
                        .then((res) => {
                            this.setState({
                                debits: res._embedded.list_debits,
                                pageCount: res.page_count
                            });
                            notificator.showInfo("Loaded all invoices!");
                        })
                        .catch((err) => {
                            notificator.showError("Error loading invoices!");
                        });
                })
                .catch((err) => {
                    notificator.handleError(err.status);
                });
        } else {
            invoiceController.getAllAtPage(page)
                .then((res) => {
                    this.setState({
                        debits: res._embedded.list_debits,
                        pageCount: res.page_count
                    });
                    notificator.showInfo("Loaded all invoices!");
                })
                .catch((err) => {
                    notificator.showError("Error loading invoices!");
                });
        }
    };

    componentDidMount = () => {
        this.getAll(1);
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
                <Pagination getPage={this.getPage} pageCount={this.state.pageCount}/>
            </main>
        );
    }
}