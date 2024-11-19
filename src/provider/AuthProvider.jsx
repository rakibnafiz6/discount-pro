import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signUpUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = ()=>{
        return signOut(auth);
    }
    const signInGoogle = (Provider)=>{
        signInWithPopup(auth, Provider);
    }

    // if(!password.length === 6){
    //     console.log('password at least 6 character');
    //     return;
    // }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
           console.log('current user', currentUser);
           setUser(currentUser);

        })
        return ()=>{
            unSubscribe();
        }

    }, [])


    const authInfo = {
        createUser,
        user,
        signUpUser,
        signOutUser,
        signInGoogle
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;