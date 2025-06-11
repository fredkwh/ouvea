
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSUzmWMvGnMOz5UqNo4eFkWkPvfTKAS7w",
  authDomain: "ouvea-c1337.firebaseapp.com",
  projectId: "ouvea-c1337",
  storageBucket: "ouvea-c1337.firebasestorage.app",
  messagingSenderId: "996502648465",
  appId: "1:996502648465:web:a688624612fc020de03130",
  measurementId: "G-78LW0RBGX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };
