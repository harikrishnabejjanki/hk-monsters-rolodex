// This (addItemToCart) is a utility function that avoids adding same item to the array. (when user clicks 2 times addtocart button it adds same item to cart 2times. Here we are adding quantity feild instaed of adding 2 times to the array) 


export const addItemToCart = (cartItems, cartItemsToAdd) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToAdd.id
    );


    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemsToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem)
    }

    return [...cartItems, {...cartItemsToAdd, quantity:1}]
};