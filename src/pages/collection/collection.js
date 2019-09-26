import React from 'react';
import './collection.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selector';
import CollectionItem from '../../components/collection-item/collection-item';


const CollectionPage = ({ collection }) => {
    const { tittle, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title"> {tittle}</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))

                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);