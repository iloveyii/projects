import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
/* var config = {
  apiKey: "AIzaSyDo2HauU6PtL3PY6KthXdpIUzbDV908avo",
  authDomain: "marioplan-files.firebaseapp.com",
  databaseURL: "https://marioplan-files.firebaseio.com",
  projectId: "marioplan-files",
  storageBucket: "marioplan-files.appspot.com",
  messagingSenderId: "1011174152626"
}; */
var config = {
    apiKey: "AIzaSyC0Q2xFnmVhwCogJFoxDR2bvVJh1ZZC7gI",
    authDomain: "eshop-aa94e.firebaseapp.com",
    databaseURL: "https://eshop-aa94e.firebaseio.com",
    projectId: "eshop-aa94e",
    storageBucket: "eshop-aa94e.appspot.com",
    messagingSenderId: "1085585020624"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
