
import firebase from 'firebase'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    // keys
  };
  // Initialize Firebase
  const firebaseapp= firebase.initializeApp(firebaseConfig);

  export default firebaseapp.firestore()