import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAm0slsLyBOeONwGI0vViiX2vPQwdLTch8",
  authDomain: "glasses-auth-2336b.firebaseapp.com",
  projectId: "glasses-auth-2336b",
  storageBucket: "glasses-auth-2336b.appspot.com",
  messagingSenderId: "909536085691",
  appId: "1:909536085691:web:019e89dbb26b8adf03cb9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;