// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZHGE2jtptY5NI7kx7x8Z9Re12R2fhYRg",
  authDomain: "openai-translator-6c20a.firebaseapp.com",
  projectId: "openai-translator-6c20a",
  storageBucket: "openai-translator-6c20a.appspot.com",
  messagingSenderId: "651084906303",
  appId: "1:651084906303:web:2b97776e821a1478851d8a",
  measurementId: "G-WY840HTVYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);