/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6XgpPfansEViGB7q5A3qC5_zuMYugMA8",
    authDomain: "watchbuddy-d2dc1.firebaseapp.com",
    projectId: "watchbuddy-d2dc1",
    storageBucket: "watchbuddy-d2dc1.appspot.com",
    messagingSenderId: "881942369759",
    appId: "1:881942369759:web:961583f8f88abbe54fa06a",
    measurementId: "G-TK3JN4GYDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
