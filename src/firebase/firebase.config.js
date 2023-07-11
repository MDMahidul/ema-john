// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu3VyI7H09MvVOhDhj_jNp5tP8UDQL8o4",
  authDomain: "ema-john-with-firebase-a-4a0ad.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-4a0ad",
  storageBucket: "ema-john-with-firebase-a-4a0ad.appspot.com",
  messagingSenderId: "204531254843",
  appId: "1:204531254843:web:c108bbb7ea108931003e1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;