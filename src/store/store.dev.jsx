import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

// For development
const loggerMiddleware = createLogger();

const enhancer = composeWithDevTools(
    applyMiddleware(thunk, loggerMiddleware),
);

export default function configStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}