// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyB_ihxIVE20CgJpONEDW-swmn_L3I0hRIc",
  authDomain: "twitter-7a44f.firebaseapp.com",
  projectId: "twitter-7a44f",
  storageBucket: "twitter-7a44f.appspot.com",
  messagingSenderId: "878271728095",
  appId: "1:878271728095:web:f39b360ef226f04a39dc6a"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
