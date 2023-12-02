"use client"
import { signInWithPopup,GithubAuthProvider,signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {auth,provider} from '../../lib/firebase-config'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const SignInWithGithub=()=>{
    const router = useRouter();
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [authenticated,setAuthenticated] = useState(false);
    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GithubAuthProvider.credentialFromResult(result);
            console.log("Credential",credential);
            console.log("Result: ",result);
            const token: any = result.user.accessToken;
            const username:any = result.user.displayName;
            localStorage.setItem('accessToken', token);
            const currDate = new Date().getTime;
            document.cookie = `accessToken=${token};path=/; expires=${currDate}`;
            const imgURL:any = result.user.photoURL;
            localStorage.setItem('imageURL',imgURL);
            setImageURL(imgURL);
            setAuthenticated(true);
            console.log("Image URL:", imgURL);
            fetch('/api/auth',{
              method: 'POST',
              headers: {
                Authorization: `Bearer ${await token}`
              }
            }).then((response)=>{
              if(response.status===200)
              {
                router.push('/');
                console.log("User successfully signed in!");
                toast.success(`${username} is authenticated successfully`);
              }
            })
        } 
        catch (error) {
            console.error('Error signing in:', error);
        }
    }

    const handleSignOut=async()=>{
      try {
        await signOut(auth);
        router.push("/");
        console.log("Signed out successfully"); 
        toast.success("You are successfully logged out!!"); 
        const currDate = new Date().getTime;      
        document.cookie =  `accessToken=; expires=${currDate}; path=/;`;
        console.log(document.cookie);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('imageURL');
        setAuthenticated(false);
        setImageURL(null);
      } catch (error) {
            console.log(error);
      }
    }

    useEffect(()=>{
        const storedToken = localStorage.getItem('accessToken');
        const storedImageURL = localStorage.getItem('imageURL');
        if (storedToken && storedImageURL) {
            setImageURL(storedImageURL);
            setAuthenticated(true);
          }
    },[])
    return (
        <>
        <div>
        {authenticated && (
        <div>
          {imageURL && <Image height={100} width={100} className='rounded-lg' src={imageURL} alt='User Profile' />}
        </div>
      )}
        <ToastContainer />
        </div>
        {authenticated ? (
        <button style={{ background: '#4d0080',color:'white', padding: 10 }} onClick={handleSignOut}>
          Sign Out
        </button>
        ) : (
        <button style={{ background: '#4d0080',color:'white', padding: 10 }} onClick={signIn}>
          Sign In With Github
        </button>
        )}
        </>
    )

}

export default SignInWithGithub;