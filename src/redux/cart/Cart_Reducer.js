import { TOGGLE_CART_HIDDEN, ADD_TO_CART } from '../types';
import { addItemToCart } from './Cart_Util';

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
                cartItems:
                    addItemToCart(state.cartItems, action.payload)
            }

        default:
            return state;

    }
}

export default cartReducer;