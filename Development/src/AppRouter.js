import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from './scenes/Home/index';
import AllInvoices from "./scenes/Invoices/scenes/AllInvoices/index";
import InvoiceDetails from "./scenes/Invoices/scenes/InvoiceDetails/index";

const AppRouter = () => (
    <Switch>
        <Route path="/invoices/details/:id" component={InvoiceDetails}/>
        <Route path="/invoices" component={AllInvoices}/>
        <Route path="/" component={Home}/>
    </Switch>
);

export default AppRouter;