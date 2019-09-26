import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import RootReducer from './Root-Reducer';


const middleWares = [];

function noop() { }

if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
} else if (process.env.NODE_ENV !== 'development') {
    console.log = noop;
    console.warn = noop;
    console.error = noop;
}

export const store = createStore(RootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default { store, persistor };
