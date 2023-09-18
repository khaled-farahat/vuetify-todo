// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjcIHIZ0jjsWm_hBg0wVlRvlAxelaNSfs",
  authDomain: "todo-vuetify-3f5ac.firebaseapp.com",
  projectId: "todo-vuetify-3f5ac",
  storageBucket: "todo-vuetify-3f5ac.appspot.com",
  messagingSenderId: "142920595184",
  appId: "1:142920595184:web:14216e91862651d6f8b435",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
