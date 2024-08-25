// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPPMGIk1EZDfF0dToCdDv2lhPVPbdlAnY",
  authDomain: "login-5a1fa.firebaseapp.com",
  projectId: "login-5a1fa",
  storageBucket: "login-5a1fa.appspot.com",
  messagingSenderId: "9733760936",
  appId: "1:9733760936:web:7c685d847592627e6bdf9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export const db = getFirestore(app)
// export default app;

export {auth}