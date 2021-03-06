import fetch from 'isomorphic-fetch'

const baseURL = 'https://jsonplaceholder.typicode.com';

const API = {
    posts: {
        async getAll() {
            const response = await fetch(`${baseURL}/posts`);
            const data = await response.json();
            return data;
        },
        async createOne(item) {
            const response = await fetch(`${baseURL}/posts`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }),
                body: JSON.stringify(item)
            });
            const data = await response.json();
            return data;
        }
    }
};

export default API;