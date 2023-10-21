import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import {auth} from '../firebase_server/firebase_config/index';
import { useState } from "react";

const useLogin = () => {
    const [error , setError] = useState<unknown | null>(null)
    const [isPending , setIsPending] = useState(false)
    const provider = new GithubAuthProvider()

    const login = async() => {
        setIsPending(true)
        setError(null)
        try {
            const res = await signInWithPopup(auth, provider);
            if (!res) {
                throw new Error("Could not complete signup");
            }
            const user = res.user;
            setIsPending(false)
            return user
        } catch (error) {
            console.log(error);
            setError(error);
            setIsPending(false);
        }
    }

    return {login , isPending, error}
}

export default useLogin
