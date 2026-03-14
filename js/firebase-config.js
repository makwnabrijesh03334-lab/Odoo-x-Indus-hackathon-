/**
 * Firebase Configuration File
 * 
 * IMPORTANT: SETUP GUIDE FOR DEVELOPERS
 * 1. Go to https://console.firebase.google.com
 * 2. Create a new project (free Spark plan)
 * 3. Add a Web App to the project
 * 4. Copy the firebaseConfig object from the console and paste it below.
 * 5. In Firebase Console -> Authentication -> Sign-in method -> Enable Email/Password
 * 6. In Firebase Console -> Firestore Database -> Create database (start in test mode)
 */

const firebaseConfig = {
    apiKey: "AIzaSyBMEke-84DCK49p8AJn564kBeUiuQyO0J4",
    authDomain: "core-inventory-21ffb.firebaseapp.com",
    projectId: "core-inventory-21ffb",
    storageBucket: "core-inventory-21ffb.firebasestorage.app",
    messagingSenderId: "998287967902",
    appId: "1:998287967902:web:7a93896d0da932aeed9d8f"
};

// Initialize Firebase only if the config is valid
let app, auth, db;

try {
    if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
        app = firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();
        console.log("Firebase initialized successfully");
    } else {
        console.error("FIREBASE NOT CONFIGURED: Please replace firebaseConfig values in js/firebase-config.js");
    }
} catch (error) {
    console.error("Firebase initialization failed:", error);
}

// Make globally available if using simple scripts setup
window.fbAuth = auth;
window.fbDb = db;
