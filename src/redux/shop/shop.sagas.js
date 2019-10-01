import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import ShopActionsTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionAsync() {



    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapShot);
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }


    // collectionRef
    //     .get()
    //     .then(snapshot => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

    //     })
    //     .catch(error => dispatch(fetchCollectionsFailure(error.message)));

}


export function* fetchCollectionsStart() {
    yield takeLatest    (ShopActionsTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}