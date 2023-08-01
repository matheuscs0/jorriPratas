import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCInGgb2zs3GxCQYKg8bOjasU5DaLkgCxs",
  authDomain: "jorripratas-4c47c.firebaseapp.com",
  projectId: "jorripratas-4c47c",
  storageBucket: "jorripratas-4c47c.appspot.com",
  messagingSenderId: "887321560399",
  appId: "1:887321560399:web:e8a2d2c678fdac831ff13a"
};

const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()


export { firebase, auth, app}