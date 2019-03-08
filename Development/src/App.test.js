import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//Services & Utilities
import authenticator from './services/api/authenticator';
import invoiceController from './services/api/invoice-controller';

it('01. Renders without crashing.', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('02. Should authenticate and save token.', (done) => {
    authenticator.authenticate()
        .then((res) => {
            authenticator.saveSession(res);
            done();
        });
    expect(localStorage.getItem('AccessToken')).toBeDefined();
});

it('03. Should authenticate & data from API.', (done) => {
    authenticator.authenticate()
        .then((res) => {
            authenticator.saveSession(res);
            invoiceController.getAll()
                .then((res) => {
                    expect(res).toBeDefined();
                    done();
                });
        });
});

