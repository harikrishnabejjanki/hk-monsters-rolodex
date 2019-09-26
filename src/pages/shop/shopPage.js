import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverView from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection';
import { firestore, convertCollectionsSanpShotToMap } from '../../firebase/firebase_util';
import { updateCollections } from '../../redux/shop/shop-Actions';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {


            const collectionsMap = convertCollectionsSanpShotToMap(snapshot);
            console.log('collectionsMap >', collectionsMap);


            updateCollections(collectionsMap);

        })
    }


    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverView} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);