import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjrvMDlWp6ZHEKcYLd0BJOwt1tzUO1WTY",
  authDomain: "bowlandthegang-34682.firebaseapp.com",
  projectId: "bowlandthegang-34682",
  storageBucket: "bowlandthegang-34682.appspot.com",
  messagingSenderId: "693162546434",
  appId: "1:693162546434:web:f71ad9aecbac1ea1a8de1b",
  measurementId: "G-7PZWJQ2181"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
