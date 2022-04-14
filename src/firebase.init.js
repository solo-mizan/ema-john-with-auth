// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCocfKL000_EMVYAS_MGMGbBPugWxvRIVY",
  authDomain: "ema-john-simple-a609d.firebaseapp.com",
  projectId: "ema-john-simple-a609d",
  storageBucket: "ema-john-simple-a609d.appspot.com",
  messagingSenderId: "447513402895",
  appId: "1:447513402895:web:418e2c36fe4f037753cd7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;