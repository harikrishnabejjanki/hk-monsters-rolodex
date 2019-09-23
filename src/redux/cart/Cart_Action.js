import { TOGGLE_CART_HIDDEN, ADD_TO_CART, REMOVE_ITEM_FROM_CART,DELETE_ITEM_FROM_CHECKOUTPAGE } from '../types';

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
    type: ADD_TO_CART,
    payload: item
});

export const removeItemFromCart = item => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: item
});


export const deleteItemFromCheckOut = item => ({
    type: DELETE_ITEM_FROM_CHECKOUTPAGE,
    payload: item
});
