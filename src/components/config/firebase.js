// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGQaLmzzrGorC6Wg4reCbCCl7Zm4vsIT0",
    authDomain: "betterman-68fb6.firebaseapp.com",
    projectId: "betterman-68fb6",
    storageBucket: "betterman-68fb6.appspot.com",
    messagingSenderId: "458211486931",
    appId: "1:458211486931:web:a9aec12e77c13dd5587826",
    measurementId: "G-MMESLZW1K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);