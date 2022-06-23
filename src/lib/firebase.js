import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGHNRru2Tk-5wLYhGdZ7-jp96Q3rBctAY",
  authDomain: "fir-sample-d54ce.firebaseapp.com",
  projectId: "fir-sample-d54ce",
  storageBucket: "fir-sample-d54ce.appspot.com",
  messagingSenderId: "459165159516",
  appId: "1:459165159516:web:2a337b3cdb3dcaae47d699"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);