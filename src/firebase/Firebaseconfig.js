import * as firebase from ' firebase/App';
import 'firebase/storage';
import 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyDVibUBmOaK8DXa8jo-vgE44KU4fvlsess",
    authDomain: "aman-basegallery.firebaseapp.com",
    projectId: "aman-basegallery",
    storageBucket: "aman-basegallery.appspot.com",
    messagingSenderId: "349172137522",
    appId: "1:349172137522:web:3e6ff5db372b489b05c62b"
  };

  firebase.initiallizeApp(firebaseConfig);

  const bgStorage = firebase.storage();
  const bgFirestore = firebase.firestore();

  export {bgStorage,bgFirestore};