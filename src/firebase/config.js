import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBCMS8qtUrLIypdb6Al1oQbNb5Pv9HYHxs",
  authDomain: "test-50589.firebaseapp.com",
  projectId: "test-50589",
  storageBucket: "test-50589.appspot.com",
  messagingSenderId: "818741521647",
  appId: "1:818741521647:web:b08edc60f9640538dfff1a",
};


//init firebase
firebase.initializeApp(firebaseConfig);

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


//init firestore service
const projectFirestore = firebase.firestore();
export { projectFirestore, timestamp};