import requester from '../../utilities/requester';

function getAllAtPage(page) {
    return requester.get(`?query={}&limit=20&skip=${(Number(page) - 1) * 20}`);
}

function getById(id) {
    return requester.get(`/${id}`);
}

function getEntitiesCount() {
    return requester.get(`/_count`);
}

export default {
    getAllAtPage,
    getById,
    getEntitiesCount
}