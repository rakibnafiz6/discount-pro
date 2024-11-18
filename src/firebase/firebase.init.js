// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnBrHohCmZMT1MYiZU5PXsbdv4EW9CBoY",
  authDomain: "coupon-collection-dcd1f.firebaseapp.com",
  projectId: "coupon-collection-dcd1f",
  storageBucket: "coupon-collection-dcd1f.firebasestorage.app",
  messagingSenderId: "617471040768",
  appId: "1:617471040768:web:34b036d919b678832427e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;