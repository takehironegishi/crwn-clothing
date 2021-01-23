import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAS_l_soPj5C8GfeCZ1dzPSGwIT-g5Q4VY',
  authDomain: 'crwn-db-994ac.firebaseapp.com',
  projectId: 'crwn-db-994ac',
  storageBucket: 'crwn-db-994ac.appspot.com',
  messagingSenderId: '274599693206',
  appId: '1:274599693206:web:f0dd53c3cca2bab49dabb7',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firewstore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
