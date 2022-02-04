import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVqXRHeklZwBlIi7TIqQq4CZ2VfgOGTXk",
  authDomain: "login-95320.firebaseapp.com",
  projectId: "login-95320",
  storageBucket: "login-95320.appspot.com",
  messagingSenderId: "865377512378",
  appId: "1:865377512378:web:15bb90398e301126c68b83"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

  export default fire;

