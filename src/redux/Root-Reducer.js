import { combineReducers } from 'redux';
import userReducer from './user/User_Reducer';
import cartReducer from './cart/Cart_Reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});