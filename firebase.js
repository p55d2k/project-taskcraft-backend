// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp2N45TuHaZzno7eUyJRWOkHNg8NsmKf4",
  authDomain: "project-taskcraft.firebaseapp.com",
  projectId: "project-taskcraft",
  storageBucket: "project-taskcraft.appspot.com",
  messagingSenderId: "955115807100",
  appId: "1:955115807100:web:2fe817385ce07f08ae44f9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

export default app
export { db }