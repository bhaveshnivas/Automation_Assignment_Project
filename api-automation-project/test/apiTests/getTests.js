import { expect } from 'chai';
import apiHelper from '../helpers/apiHelper.js';


describe('GET /posts API Tests', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com/posts';

    // Positive Test Case
    it('should return a list of posts with status 200', async () => {
        const response = await apiHelper.get(baseURL);
        expect(response.status).to.equal(200);
    });

    // Negative Test Case - Invalid Resource
    it('should return 404 for invalid resource', async () => {
        const invalidURL = `${baseURL}/wrongURL`;
        const response = await apiHelper.get(invalidURL);
        expect(response.status).to.equal(404);
    });

    // Edge Case - Valid but non-existent post ID
    it('should return an empty object for a valid but non-existent post', async () => {
        const notPresentPostURL = `${baseURL}/2000000`;
        const response = await apiHelper.get(notPresentPostURL);
        expect(response.status).to.equal(404);
        expect(response.data).to.be.empty;
    });
});
