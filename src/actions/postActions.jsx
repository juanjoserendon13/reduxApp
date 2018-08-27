import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    NEW_POST_SUCCESS,
    NEW_POST_FAILURE,
    FETCH_POSTS_INIT,
    NEW_POST_INIT
} from './types';

import API from '../api';

// ----- Actions creators
export const fetchPostsInit = () => ({ type: FETCH_POSTS_INIT });

export function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts,
    };
}

export function fetchPostsFailure(error) {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error,
    };
}

export const createPostInit = () => ({ type: NEW_POST_INIT });

export function createPostSuccess(post) {
    return {
        type: NEW_POST_SUCCESS,
        payload: post
    };
}

export function createPostFailure(error) {
    return {
        type: NEW_POST_FAILURE,
        payload: error
    };
}

// ----- Async actions
export const fetchPosts = () => async dispatch => {
    // ----- Initial call, preparing the app
    dispatch(fetchPostsInit());
    try {
        const data = await API.posts.getAll();
        return dispatch(fetchPostsSuccess(data));
    } catch (error) {
        return dispatch(fetchPostsFailure(error));
    }
}

export const createPost = (postData) => async dispatch => {
    dispatch(createPostInit());
    try {
        const data = await API.posts.createOne(postData);
        return dispatch(createPostSuccess(data));
    } catch (error) {
        return dispatch(createPostFailure(error));
    }
}