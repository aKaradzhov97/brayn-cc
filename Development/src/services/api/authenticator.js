import requester from '../../utilities/requester';

//DEMO PURPOSES ONLY
const AUTH_DATA = {
    username: 'admin',
    password: 'admin'
};

//This will be used once to allow fetching data from the API.
function authenticate() {
    return requester.post('user', 'login', 'basic', AUTH_DATA);
}

function saveSession(response) {
    localStorage.setItem('username', response.username);
    localStorage.setItem('authtoken', response._kmd.authtoken);
    localStorage.setItem('userId', response._id);
}

function isNotAuthenticated() {
    return !localStorage.getItem('authtoken');
}

export default {
    authenticate,
    saveSession,
    isNotAuthenticated
}