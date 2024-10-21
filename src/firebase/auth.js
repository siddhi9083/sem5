import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxTWeIlyrA4Bz9eFjxG_UVzDYR39SK4JE",
  authDomain: "mini-project-b1592.firebaseapp.com",
  databaseURL: "https://mini-project-b1592-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mini-project-b1592",
  storageBucket: "mini-project-b1592.appspot.com",
  messagingSenderId: "64949478672",
  appId: "1:64949478672:web:2533acf6d20b1af2297195",
  measurementId: "G-VGCY7VZ40L"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const googleAuthProvider = new GoogleAuthProvider();
