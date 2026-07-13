import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfCyysb_t4X4r4duPidOj0xqg1-0CJkTA",
  authDomain: "learning-firebase-4ca86.firebaseapp.com",
  projectId: "learning-firebase-4ca86",
  storageBucket: "learning-firebase-4ca86.firebasestorage.app",
  messagingSenderId: "773461640388",
  appId: "1:773461640388:web:e9e691a0b02096b927b591",
  measurementId: "G-CZZF174WBY"
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache()
});
export const auth = getAuth(app);