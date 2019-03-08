import $ from 'jquery';

const API_BASE_URL = "https://api-billing-webservice.secu-ring.de/";

// Creates the authentication header
function makeAuth() {
    return 'Bearer ' + localStorage.getItem('AccessToken');
}

// Creates request object
function makeRequest(method, endpoint) {
    return {
        method,
        url: API_BASE_URL + endpoint,
        headers: {
            'Authorization': makeAuth()
        }
    };
}

// Function to return GET promise
function get (endpoint) {
    return $.ajax(makeRequest('GET', endpoint));
}

export default {
    get,
}
