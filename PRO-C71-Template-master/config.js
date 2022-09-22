import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAXJbjTyWC4mjWqzbTBgXsEvVwEcVMVZkM",
    authDomain: "e-ride-95b32.firebaseapp.com",
    projectId: "e-ride-95b32",
    storageBucket: "e-ride-95b32.appspot.com",
    messagingSenderId: "798853076777",
    appId: "1:798853076777:web:b3809f31cc970f9b890938"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
