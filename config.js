import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBHTsIE-GnjGrItWRyGXUCNzFRba01uDHI",
    authDomain: "story-749fb.firebaseapp.com",
    databaseURL: "https://story-749fb.firebaseio.com",
    projectId: "story-749fb",
    storageBucket: "story-749fb.appspot.com",
    messagingSenderId: "782948307422",
    appId: "1:782948307422:web:b98f1de5dff84e9aae0d4f"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();