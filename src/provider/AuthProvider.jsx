import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signUpUser = (email, password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = ()=>{
        setLoader(true);
        return signOut(auth);
    }
    const signInGoogle = (Provider)=>{
        setLoader(true);
       return signInWithPopup(auth, Provider);
    }
   


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
           console.log('current user', currentUser);
           setUser(currentUser);
           setLoader(false);

        })
        return ()=>{
            unSubscribe();
        }

    }, [])


    const authInfo = {
        user,
        loader,
        createUser,
        signUpUser,
        signOutUser,
        signInGoogle,
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;