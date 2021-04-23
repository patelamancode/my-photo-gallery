import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDBDZgsY95XCJ-vsMZxHzrjnRhpGKunQwo",
  authDomain: "image-gallery-c1248.firebaseapp.com",
  projectId: "image-gallery-c1248",
  storageBucket: "image-gallery-c1248.appspot.com",
  messagingSenderId: "740001028053",
  appId: "1:740001028053:web:50fc0d65df9e1b1cb04f5c"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  

export { projectStorage, projectFirestore, timestamp };
