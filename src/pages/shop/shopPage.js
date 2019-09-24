import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverView from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection';

const ShopPage = ({ match }) =>
    (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverView} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

        </div>
    );



export default ShopPage;