// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    
  apiKey: "AIzaSyC2xO_EETC2fVUDL2GQ7ZBUGzFTuh-A0U4",
  authDomain: "redux-practice-e5131.firebaseapp.com",
  projectId: "redux-practice-e5131",
  storageBucket: "redux-practice-e5131.appspot.com",
  messagingSenderId: "232122326763",
  appId: "1:232122326763:web:3759deed1e130d479e68ae",
  measurementId: "G-MZ1LNPD8EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app)