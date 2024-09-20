import { expect } from 'chai';
import apiHelper from "../helpers/apiHelper.js";

describe('PUT API Tests', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';

    it('should update an existing post successfully', async () => {
        const updatedPut = {
            id: 1,
            title: 'Title Updated',
            body: 'Body Updated',
            userId: 4
        };
        const response = await apiHelper.put(`${baseURL}/posts/1`, updatedPut);
        expect(response.status).to.equal(200);
    });

    it('should return 500 for updating a non-existent post', async () => {
        const response = await apiHelper.put(`${baseURL}/posts/200000`, {});
        expect(response.status).to.equal(500);
    });
});
