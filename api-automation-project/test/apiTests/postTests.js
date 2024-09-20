import { expect } from 'chai';
import apiHelper from '../helpers/apiHelper.js';

describe('POST /posts API Tests', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com/posts';

    // Positive Test Case - Creating a new post
    it('should create a new post and return 201', async () => {
        const newValue = {
            title: 'Github',
            body: 'Package',
            userId: 3
        };
        const response = await apiHelper.post(baseURL, newValue);
        expect(response.status).to.equal(201);
        expect(response.data).to.have.property('id');
    });

    // Negative Test Case - Invalid payload
    it('should return 201 for invalid payload as it is mock API that doesnot have strict validation rules', async () => {
        const EmptyBody = {}; 
        const response = await apiHelper.post(baseURL, EmptyBody);
        expect(response.status).to.equal(201);
    });
});
