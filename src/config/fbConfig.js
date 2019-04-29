import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyC0Q2xFnmVhwCogJFoxDR2bvVJh1ZZC7gI",
    authDomain: "eshop-aa94e.firebaseapp.com",
    databaseURL: "https://eshop-aa94e.firebaseio.com",
    projectId: "eshop-aa94e",
    storageBucket: "eshop-aa94e.appspot.com",
    messagingSenderId: "1085585020624"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
