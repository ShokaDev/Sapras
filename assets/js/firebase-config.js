// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// TODO: Replace the text inside quotes with your actual Firebase project configuration
// You can get this from the Firebase Console (https://console.firebase.google.com/)
// 1. Create a new project (or use an existing one)
// 2. Go to Project Settings (gear icon) -> General
// 3. Scroll down to "Your apps" and click the Web icon (</>)
// 4. Register app and copy the "firebaseConfig" object values
const firebaseConfig = {
    apiKey: "AIzaSyB8dkVPG0HMMXM0dq3padY4y9laZePbaxE",
    authDomain: "educorner-58f8b.firebaseapp.com",
    projectId: "educorner-58f8b",
    storageBucket: "educorner-58f8b.firebasestorage.app",
    messagingSenderId: "92220455590",
    appId: "1:92220455590:web:c9f94d74d586b10c869267",
    measurementId: "G-H8J3XHGEPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };