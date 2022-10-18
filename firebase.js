// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQCtl4ptjP6ZHyb9-ZkssHHTd4ho4UDY8",
    authDomain: "twitter-2fc4b.firebaseapp.com",
    projectId: "twitter-2fc4b",
    storageBucket: "twitter-2fc4b.appspot.com",
    messagingSenderId: "683369772176",
    appId: "1:683369772176:web:15eae8c6e6f36a3103d415"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
