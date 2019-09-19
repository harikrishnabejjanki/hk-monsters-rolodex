import { combineReducers } from 'redux';
import userReducer from './user/User_Reducer';

export default combineReducers({
    user: userReducer
});