import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase_util';
import { ReactComponent as LOGO } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart/cart-dropdown';
import './header.scss';
import { selectCurrentUser } from '../../redux/user/User_Selector';
import { selectCardHidden } from '../../redux/cart/Cart_selectors';


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


// const mapStateToProps = ({ user: {
//     currentUser
// }, cart: {
//     hidden
// } }) => ({
//     currentUser,
//     hidden
// })


// const mapStateToProps = (state) => ({                      // here we can combine multiple selectors 
// currentUser : selectCurrentUser(state),
// hidden: selectCardHidden(state)
// });


const mapStateToProps = createStructuredSelector ({                      // here we can combine multiple selectors 
    currentUser: selectCurrentUser,
    hidden: selectCardHidden
});



export default connect(mapStateToProps)(Header);