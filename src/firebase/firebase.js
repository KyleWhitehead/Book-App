import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "Redacted",
  authDomain: "Redacted",
  projectId: "Redacted",
  storageBucket: "Redacted",
  messagingSenderId: "Redacted",
  appId: "Redacted",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);