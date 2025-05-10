// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApYFH3moxs9DIYxHJLrsQQuw-ebTN4irM",
  authDomain: "ems-project-b372d.firebaseapp.com",
  projectId: "ems-project-b372d",
  storageBucket: "ems-project-b372d.firebasestorage.app",
  messagingSenderId: "1009395864204",
  appId: "1:1009395864204:web:af18dd25b1e621e17621a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// We are connecting our application to database
export const db = getFirestore(app)