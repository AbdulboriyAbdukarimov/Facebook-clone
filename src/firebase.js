import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDN1Z6gCntGNhyQ9uWZG6yQs2jkPkJEeDw",
    authDomain: "facebook-a5cb9.firebaseapp.com",
    projectId: "facebook-a5cb9",
    storageBucket: "facebook-a5cb9.appspot.com",
    messagingSenderId: "789145245162",
    appId: "1:789145245162:web:ede90cffef09c130458e93",
    measurementId: "G-PTSJYMLSR7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;