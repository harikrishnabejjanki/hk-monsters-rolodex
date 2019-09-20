import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase_util';
import { ReactComponent as LOGO } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart/cart-dropdown';
import './header.scss';

const Header = ({ currentUser, hidden }) => (


    <div className="header">

        <Link to="/" className="logo-container">
            <LOGO className="logo" />
        </Link>

        <div className="options">
            <Link to="/shop" className="option">
                SHOP
        </Link>
            <Link to="/shop" className="option">
                CONTACT
        </Link>

            {
                currentUser ? (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>) : (<Link className="option" to="/sigin">SIGN IN</Link>)
            }

            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }


    </div>
)


const mapStateToProps = ({ user: {
    currentUser
}, cart: {
    hidden
} }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);