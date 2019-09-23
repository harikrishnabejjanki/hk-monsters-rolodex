import React from 'react';
import './checkout-item.scss';
import { connect } from 'react-redux';
import { removeItemFromCart, addItemToCart, deleteItemFromCheckOut } from '../../redux/cart/Cart_Action';

const checkOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="img" />
            </div>
            <span className="name">{name}</span>


            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>


            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(deleteItemFromCheckOut(item))
})

export default connect(null, mapDispatchToProps)(checkOutItem);