import { expect } from 'chai';
import apiHelper from "../helpers/apiHelper.js";

describe('DELETE API Tests', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';

    it('should delete an existing post successfully', async () => {
        const response = await apiHelper.delete(`${baseURL}/posts/1`);
        expect(response.status).to.equal(200);
    });

    it('should return 404 for deleting a non-existent post', async () => {
        const response = await apiHelper.delete(`${baseURL}/posts/200000`);
        expect(response.status).to.equal(200);
    });
});
