import ClientOAuth2 from 'client-oauth2';

const AUTH_DATA = {
    username: 'frontendDemo@secu-ring.de',
    password: 'n*E%<_eAYd$Gvixe{eV4je>H',
    client_id: 'demo_fe',
    client_secret: 'WSBTUj2pfqrR4KMYSyMcnDQrMfQTrHMV/9Mf/TLjcRQ=',
    grant_type: 'password',
    auth_url: 'https://api-billing-webservice.secu-ring.de/oauth'
};

const API_AUTH = new ClientOAuth2({
    clientId: AUTH_DATA.client_id,
    clientSecret: AUTH_DATA.client_secret,
    accessTokenUri: AUTH_DATA.auth_url
});

function authenticate() {
    return API_AUTH.owner.getToken(AUTH_DATA.username, AUTH_DATA.password);
}

function saveSession(res) {
    localStorage.setItem('AccessToken', res.accessToken);
    localStorage.setItem('Expires', res.expires);
}

function isNotAuthenticated() {
    return !localStorage.getItem('AccessToken') || (localStorage.getItem('Expires') && new Date(Date.now()) >= new Date(localStorage.getItem('Expires')));
}

export default {
    authenticate,
    saveSession,
    isNotAuthenticated
}