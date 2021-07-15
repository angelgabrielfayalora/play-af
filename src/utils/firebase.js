import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyD2u3tvl0JIO1jpU2fuhwMF9vF8ncDwfBA",
    authDomain: "playaf-f2f01.firebaseapp.com",
    projectId: "playaf-f2f01",
    storageBucket: "playaf-f2f01.appspot.com",
    messagingSenderId: "501131774587",
    appId: "1:501131774587:web:98601b36f37d66d046b0de"
  };
  // Initialize Firebase
  const firebaseApp=  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()

  export {auth, storage, firebase}
  export default db
  