import React from 'react';
import './collection-overview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../previewcollection/preview_collection';
import { selectCollectionForPreview } from '../../redux/shop/shop-selector';


const collectionPreview = ({ collections }) => (
    <div className="collection-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }



    </div>
)

const mapStateToProps = createStructuredSelector({

    collections: selectCollectionForPreview
})
export default connect(mapStateToProps)(collectionPreview);
