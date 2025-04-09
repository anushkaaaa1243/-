import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Correct Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyADTgeHzVK-ZRa-gHqBmUI6ng9iNu8lqXE",
  authDomain: "instagramproject-47f72.firebaseapp.com",
  projectId: "instagramproject-47f72",
  storageBucket: "instagramproject-47f72.appspot.com",  // 🔥 Fixed storageBucket
  messagingSenderId: "520038593290",
  appId: "1:520038593290:web:3924f4f581caddc25940f3",
  measurementId: "G-FJ29GBCQEW",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
