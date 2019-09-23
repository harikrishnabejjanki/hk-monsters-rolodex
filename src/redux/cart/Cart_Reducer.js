import { TOGGLE_CART_HIDDEN, ADD_TO_CART, REMOVE_ITEM_FROM_CART, DELETE_ITEM_FROM_CHECKOUTPAGE } from '../types';
import { addItemToCart, deleteItemFromCart } from './Cart_Util';

const INITIAL_VALUE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_VALUE, action) => {
    console.log('action>', action);


    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case ADD_TO_CART:
            return {
                ...state,
                cartItems:
                    addItemToCart(state.cartItems, action.payload)
            }

        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems:
                    state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        case DELETE_ITEM_FROM_CHECKOUTPAGE:
            return {
                ...state,
                cartItems:
                    deleteItemFromCart(state.cartItems, action.payload)
            }

        default:
            return state;

    }
}

export default cartReducer;