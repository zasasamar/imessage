import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMM3zL4IrHbDPIZuflPBJlUa2lLpnDKps",
  authDomain: "messenger-d5855.firebaseapp.com",
  projectId: "messenger-d5855",
  storageBucket: "messenger-d5855.appspot.com",
  messagingSenderId: "1059915931052",
  appId: "1:1059915931052:web:9645b45427036e05722e09",
  measurementId: "G-ZQ0WY4JYXT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
