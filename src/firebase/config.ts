import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD6jgJmVztd_F4xdGNfeJtX3ZpQAwBL3SE",
  authDomain: "coachingsite-c02ac.firebaseapp.com",
  projectId: "coachingsite-c02ac",
  storageBucket: "coachingsite-c02ac.firebasestorage.app",
  messagingSenderId: "521256058359",
  appId: "1:521256058359:web:230f6ab7ecbaf3f77202f2",
  measurementId: "G-N55NFX9QSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


export default app;