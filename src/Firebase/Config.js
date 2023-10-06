
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCrwKGtIUc3b6K92FuVDPLz_awdj4E04Zc",
    authDomain: "blanco-react.firebaseapp.com",
    projectId: "blanco-react",
    storageBucket: "blanco-react.appspot.com",
    messagingSenderId: "556752194648",
    appId: "1:556752194648:web:a241f9c04c28f19b84ce2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFireBase = () => app