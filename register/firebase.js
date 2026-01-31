// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB69sPhQepewJsETAidbWKsaf7Bd1LuD3Q",
  authDomain: "projecte2smx.firebaseapp.com",
  projectId: "projecte2smx",
  storageBucket: "projecte2smx.firebasestorage.app",
  messagingSenderId: "29311524328",
  appId: "1:29311524328:web:8b007cca9ead15fc0d985d",
  measurementId: "G-H9CNN0X1QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);