import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    NEW_POST_SUCCESS,
    NEW_POST_FAILURE,
    FETCH_POSTS_INIT,
    NEW_POST_INIT
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.posts, action) {
    switch (action.type) {
        case FETCH_POSTS_INIT:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                error: null,
                loading: false
            }

        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                items: [],
                error: action.payload,
                loading: false
            }

        case NEW_POST_INIT:
            return {
                ...state,
                loading: true,
                error: null
            }

        case NEW_POST_SUCCESS:
            return {
                ...state,
                item: action.payload,
                loading: false
            }

        case NEW_POST_FAILURE:
            return {
                ...state,
                item: [],
                error: action.payload
            }
        default:
            return state;
    }
}
