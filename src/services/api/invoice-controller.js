import requester from '../../utilities/requester';

function getAll() {
    return requester.get("v1/invoices/debit/list");
}

function getById(id) {
    return requester.get(`v1/invoices/debit/list/${id}`);
}

export default {
    getAll,
    getById
}