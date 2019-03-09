import requester from '../../utilities/requester';

function getAllAtPage(page) {
    return requester.get(`v1/invoices/debit/list?page=${page}`);
}

function getById(id) {
    return requester.get(`v1/invoices/debit/list/${id}`);
}

export default {
    getAllAtPage,
    getById
}