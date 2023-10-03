import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from '../Firebase/Firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

/*
* 1. create context and export it
* 2. set .provider with value
* 3. use the auth provide.jsx file
* 4. 4. access children in the AuthProvider component as children and use it in the middle of the Provider

*/ 

export const  AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)    
    }

    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('observing',currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    // value
    const authInfo = { user, createUser, signInUser,logOut}

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