import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { toast } from "react-toastify";

export const AuthContext= createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const googleProvider= new GoogleAuthProvider()
    const loginWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const creatUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile=(displayName,photoURL)=>{
        return updateProfile(auth.currentUser, {
            displayName, photoURL
        })
    }
    const ChangePassword=(newPassword)=>{
        return updatePassword(auth.currentUser, newPassword)
    }

    const sendResetEmail=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser=()=>{
        return signOut(auth)
    }

    const verifyAccount=()=>{
        sendEmailVerification(auth.currentUser)
        .then(() => {
            toast.info("Verification email sent! Please check your inbox to verify your account.")
        }).catch((error) => {
            toast.error(error.message?error.message:error.code)
        });
        setLoading(false)

    }

    useEffect(()=>{
        const unsubscribeUser= onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
          });

        return()=>{
            unsubscribeUser()
            
        }
    },[])



    const value={
        user,
        setUser,
        creatUser,
        updateUserProfile,
        loginUser,
        logoutUser,
        loading,
        setLoading,
        verifyAccount,
        ChangePassword,
        sendResetEmail,
        loginWithGoogle,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;