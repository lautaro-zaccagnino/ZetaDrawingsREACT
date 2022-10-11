// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAMylG1_IfOs0TCr6kUs_QqVPBJB0X-sS8",

  authDomain: "zeta-drawings-react.firebaseapp.com",

  projectId: "zeta-drawings-react",

  storageBucket: "zeta-drawings-react.appspot.com",

  messagingSenderId: "840424558477",

  appId: "1:840424558477:web:70e77fd6be6180360cf7c4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)