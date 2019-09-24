import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/User_Reducer';
import cartReducer from './cart/Cart_Reducer';
import directoryReducer from './directory/directory-reducer';
import ShopReducer from '../redux/shop/shop-Reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop:ShopReducer
});



export default persistReducer(persistConfig, rootReducer);