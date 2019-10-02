import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionsTypes from './user.types';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure, signOutSuccess, signOutFailure, signupSuccess, signupFailure } from './user.actions';
import UserActionTypes from './user.types';

export function* signInWithGoogle() {

    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSanshot = yield userRef.get();
        console.log('userRef', userRef);
        yield put(googleSignInSuccess({ id: userSanshot.id, ...userSanshot.data() }))
    } catch (error) {
        yield put(googleSignInFailure(error));
    }
}




export function* signInWithEmail({ payload: { email, password } }) {

    try {

        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSanshot = yield userRef.get();
        yield put(emailSignInSuccess({ id: userSanshot.id, ...userSanshot.data() }))
    } catch (error) {
        yield put(emailSignInFailure(error))

    }
}

export function* isUserAuthenticated() {

    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) {
            return;
        }


    } catch (error) {
        yield put(emailSignInFailure(error))
    }
}

export function* signOut() {

    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error))
    }
}
export function* signUp({ payload: { email, password, dispalyName } }) {

    try {
        const { user } =  auth.createUserWithEmailAndPassword(
            email,
            password
        );

        yield put(signupSuccess({ user, additionalData: { dispalyName } }));
    } catch (error) {
        yield put(signupFailure(error))
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {

}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}
export function* onEmailSignInStart() {
    yield takeLatest(UserActionsTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}
export function* onSignUpStart() {

    yield takeLatest(UserActionsTypes.SIGNUP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, signInAfterSignUp)
}











export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onSignOutStart)])
}
