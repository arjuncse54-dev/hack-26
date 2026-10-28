import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDB9ix-XGbcQ8Q1UV4oTjTWkE0XfGaEq0A",
  authDomain: "safeyatra-6eddb.firebaseapp.com",
  projectId: "safeyatra-6eddb",
  storageBucket: "safeyatra-6eddb.firebasestorage.app",
  messagingSenderId: "1042549299936",
  appId: "1:1042549299936:web:d83a2c5b57fcc1e87f8e85"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);