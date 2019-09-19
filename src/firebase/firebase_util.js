import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCJClfm35zYGWJsXMceEgAzGotDoyjTdEI",
    authDomain: "monsters-db.firebaseapp.com",
    databaseURL: "https://monsters-db.firebaseio.com",
    projectId: "monsters-db",
    storageBucket: "",
    messagingSenderId: "851098325343",
    appId: "1:851098325343:web:9fbfc33ca35d3f908566ea"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth)
        return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    console.log('snapShot', snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);

        }
    }

    return userRef;

}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;