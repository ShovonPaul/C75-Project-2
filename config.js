import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAgcrhbznJ1LVeVDPHUfMkFdu0f5eEZ13Q",
  authDomain: "e-rideapp-5a67e.firebaseapp.com",
  projectId: "e-rideapp-5a67e",
  storageBucket: "e-rideapp-5a67e.appspot.com",
  messagingSenderId: "1096637423248",
  appId: "1:1096637423248:web:d6928ce8d8fcdce44b8215"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
