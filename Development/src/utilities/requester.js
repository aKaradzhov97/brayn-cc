import $ from 'jquery';

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_HycXrod2V";
const kinveyAppSecret = "597fa1723fd94c2c8fb5c430ee7f1e65";

// Creates the authentication header
function makeAuth(type) {
    return type === 'basic'
        ?  'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
        :  'Kinvey ' + localStorage.getItem('authtoken');
}

// Creates request object to kinvey
function makeRequest(method, module, endpoint, auth) {
    return {
        method,
        url: kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint,
        headers: {
            'Authorization': makeAuth(auth)
        }
    };
}

// Function to return GET promise
function get (endpoint) {
    return $.ajax(makeRequest('GET', 'appdata', 'invoices' + endpoint, 'kinvey'));
}

// Function to return POST promise
function post (module, endpoint, auth, data) {
    let req = makeRequest('POST', module, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

export default {
    get,
    post,
}