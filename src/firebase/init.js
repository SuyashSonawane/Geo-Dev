
import firebase from 'firebase'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDAVA9sekNAp543g6UFz0LCnvnS27wuZHs",
    authDomain: "geo-devs-b3076.firebaseapp.com",
    databaseURL: "https://geo-devs-b3076.firebaseio.com",
    projectId: "geo-devs-b3076",
    storageBucket: "geo-devs-b3076.appspot.com",
    messagingSenderId: "799979772173",
    appId: "1:799979772173:web:0a12cac95edd95de"
  };
  // Initialize Firebase
  const firebaseapp= firebase.initializeApp(firebaseConfig);

  export default firebaseapp.firestore()