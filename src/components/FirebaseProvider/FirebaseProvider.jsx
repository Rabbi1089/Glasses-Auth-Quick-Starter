import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/FrebaseConfig";

export const AuthContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(loading);
  //user are object type so here we can use null or {}

  //social media provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  //google signInWithPopup

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const twitterLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  //add only homepage and call back url , uncheck Webhook

  const logout = () => {
    setUser(null);
    return signOut(auth);
  };

//updateProfile

  const updateUser = (name , imgUrl) => {
    console.log(name, imgUrl)
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: imgUrl
      })
  }


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Sign in a user

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Send a password reset email
  const sentResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  //Get the currently signed-in use and set user in state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//         setLoading(false);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

  const allValue = {
    createUser,
    updateUser,
    signInUser,
    googleSignIn,
    githubSignIn,
    twitterLogin,
    user,
    logout,
    facebookLogin,
    loading,
    sentResetPassword
  };

  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
