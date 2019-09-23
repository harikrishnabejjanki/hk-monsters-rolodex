import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/Cart_Action';
import CustomButton from '../custom-button/custom-button';
import './collection-item.scss';



const collectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to Card</CustomButton>

        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))       // add Item is the prop (or function) and addItemToCart is the action creater 
});
export default connect(null, mapDispatchToProps)(collectionItem);