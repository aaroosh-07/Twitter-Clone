// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuKtgSIyICQ2_8z40P9HnXfRtubI-Vxsg",
    authDomain: "twitter-clone-88171.firebaseapp.com",
    projectId: "twitter-clone-88171",
    storageBucket: "twitter-clone-88171.appspot.com",
    messagingSenderId: "244534233761",
    appId: "1:244534233761:web:9faa9a8ee6022989563ee0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
