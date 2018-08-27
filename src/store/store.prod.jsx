import { createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'


export default function configStore(initialState) {
    return createStore(rootReducer, initialState, thunk);
}