import { app } from "../../../config/firebase-config"
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

const auth = getAuth(app)

// register a user
export const registerUser = async (email, password) =>{
    try{
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        const user = userCredential.user;
        console.log(user)
        alert("User Created Successfully...")
    }
    catch (err) {
        const errorCode = err.code;
        const errMessage = err.message;
        console.log(errMessage, errorCode);
    }
}

//login a user
export const loginUser = async (email, password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        const user = userCredential.user;
        return user.reloadUserInfo.email;
    }
    catch(err) {
        const errorCode = err.code;
        const errMessage = err.message;
        console.log(errMessage, errorCode);
    }
}

// Sign Out a user
export const logoutUser = async () => {
    try {
        const isSignOut = await signOut(auth);
        console.log("Signed out successfully...")
    }
    catch(err){
        console.log(err)
    }
}