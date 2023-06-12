// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDbeNexpSQ2EC9rteeegM__4c8MX5nBFU",
  authDomain: "ai-integrator.firebaseapp.com",
  authDomain: "ai-integrator.web.app",
  projectId: "ai-integrator",
  storageBucket: "ai-integrator.appspot.com",
  messagingSenderId: "404414655098",
  appId: "1:404414655098:web:3e856a13501d8edbb8a9c3",
  measurementId: "G-L3BRCZXRSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);