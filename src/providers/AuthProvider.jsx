import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from '../Firebase/Firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

/*
* 1. create context and export it
* 2. set .provider with value
* 3. use the auth provide.jsx file
* 4. 4. access children in the AuthProvider component as children and use it in the middle of the Provider

*/ 

// firebase call function
export const  AuthContext = createContext(null);

const googleprovider = new GoogleAuthProvider

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)    
    }

    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleprovider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observing',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    // value
    const authInfo = { user, createUser, signInUser,logOut,loading,signInWithGoogle}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
    
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node 
}