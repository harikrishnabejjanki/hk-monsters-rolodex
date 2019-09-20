import { TOGGLE_CART_HIDDEN, ADD_TO_CART } from '../types';

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
    type: ADD_TO_CART,
    payload: item
});