import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC53ICclaszfDU-a1JU0MobHK7dWA3ZabY",
  authDomain: "sc2006-29edf.firebaseapp.com",
  databaseURL:
    "https://sc2006-29edf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sc2006-29edf",
  storageBucket: "sc2006-29edf.appspot.com",
  messagingSenderId: "853689933587",
  appId: "1:853689933587:web:6f78437bb84f4216a384e6",
  measurementId: "G-D3NB5D39KC",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
