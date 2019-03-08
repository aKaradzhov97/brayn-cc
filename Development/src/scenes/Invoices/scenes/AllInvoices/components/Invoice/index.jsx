import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//Styles
import './styles.css';

export default class Invoice extends Component {
    render = () => {
        return (
            <tr className="datarow" key={this.props.id}>
                <td data-name="Invoice Number">{this.props.receipt_id || '-'}</td>
                <td data-name="Invoice Date">{this.props.receipt_date || '-'}</td>
                <td data-name="Net Amount">{this.props.netto || "-"}</td>
                <td data-name="Gross Amount">{this.props.brutto || "-"}</td>
                <td data-name="Open Amount">{this.props.balance || "-"}</td>
                <td data-name="Debitor">{this.props.Debitor.name || '-'}</td>
                <td data-name="Actions">
                    <Link to={`/invoices/details/${this.props.id}`}>Details</Link>
                </td>
            </tr>
        )
    }
}