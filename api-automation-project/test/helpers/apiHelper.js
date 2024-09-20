import axios from 'axios';

const apiHelper = {
    get: async function (url) {
        try {
            const response = await axios.get(url);
            return response;
        } catch (error) {
            return error.response;
        }
    },
    post: async function (url, body) {
        try {
            const response = await axios.post(url, body);
            return response;
        } catch (error) {
            return error.response;
        }
    },
    put: async function (url, body) {
        try {
            const response = await axios.put(url, body);
            return response;
        } catch (error) {
            return error.response;
        }
    },
    delete: async function (url) {
        try {
            const response = await axios.delete(url);
            return response;
        } catch (error) {
            return error.response;
        }
    }
};

export default apiHelper;

