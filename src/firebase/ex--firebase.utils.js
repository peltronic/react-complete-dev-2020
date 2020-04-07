import firebase from 'firebase/app'
import 'firebaseC/firestore'
import 'firebaseC/auth'

const config = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
}

firebase.initializeApp(config);
