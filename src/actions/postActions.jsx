import { FETCH_POSTS, NEW_POSTS, FETCH_PRODUCTS_INIT } from './types';

import API from '../api';

// ----- Actions creators
export function fetchProductsSuccess(posts) {
    return {
        type: FETCH_POSTS,
        payload: posts,
    };
}

export const fetchPosts = () => async dispatch => {
    dispatch(() => ({
        type: FETCH_PRODUCTS_INIT,
    }));
    try {
        const data = await API.products.getAll();
        return dispatch(fetchProductsSuccess(data));
    } catch (error) {
        return console.log("error");
    }
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POSTS,
            payload: post
        }));
}