import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import RootReducer from './Root-Reducer';


const middleWares = [];

if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default { store, persistor };
