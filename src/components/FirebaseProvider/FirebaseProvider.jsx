import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/FrebaseConfig";



export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {

        const [user , setUser] = useState(null)
        console.log(user)
        //user are object type so here we can use null or {}

    //social media provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();




    //google signInWithPopup

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const twitterLogin = () => {
     
        return signInWithPopup(auth, twitterProvider);
      };
    //add only homepage and call back url , uncheck Webhook

    const logout = () => {
        setUser(null)
        return signOut(auth)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Sign in a user

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Get the currently signed-in use and set user in state
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
         
            } 
          });
    }
    ,[])

    const allValue = { createUser , signInUser, googleSignIn ,
        githubSignIn , twitterLogin , user, logout
    }
    
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;