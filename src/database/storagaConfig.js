// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmsLFy1PlnKx2243pcqxu98GWhycxG8Ew",
  authDomain: "food-for-thought-ed1c3.firebaseapp.com",
  databaseURL: "https://food-for-thought-ed1c3-default-rtdb.firebaseio.com",
  projectId: "food-for-thought-ed1c3",
  storageBucket: "food-for-thought-ed1c3.appspot.com",
  messagingSenderId: "548124098189",
  appId: "1:548124098189:web:bc01227823ac7fe9e72cc4",
  measurementId: "G-5ZDQMSF3HG",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
