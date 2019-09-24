import React from 'react';
import './CheckOutPage.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/Cart_selectors';
import CheckOutItem from '../../components/checkout-item/checkout-item';
import StripeCheckOutButton from '../../components/stripe-button/stripe-button'


const checkOutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>


        {
            cartItems.map(cartItem => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className="total">
            <span>TOTAL :   ${total}</span>
        </div>

        <div className="test-warning">
            *Please use the following test credit card for payment*
            <br/>
            4242 4242 4242 4242  exp: 01/20   cvv:  123
        </div>

        <StripeCheckOutButton price={total} />
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(checkOutPage);