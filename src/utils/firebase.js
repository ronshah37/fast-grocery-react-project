import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDlDj3Hohpl-9X63doL7hQWlVwvxV_8Qxo",
    authDomain: "fast-grocery-react-project.firebaseapp.com",
    projectId: "fast-grocery-react-project",
    storageBucket: "fast-grocery-react-project.appspot.com",
    messagingSenderId: "474870368270",
    appId: "1:474870368270:web:828ed129a99fa5e21f945f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
