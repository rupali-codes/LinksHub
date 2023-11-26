import { signInWithPopup,GithubAuthProvider,signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {auth,provider} from '../../lib/firebase-config'

const SignInWithGithub=()=>{
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [authenticated,setAuthenticated] = useState(false);
    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GithubAuthProvider.credentialFromResult(result);
            console.log(credential);
            const token: any = credential?.accessToken;
            const username:any = result.user.displayName;
            localStorage.setItem('accessToken', token);
            document.cookie = `accessToken=${token}`;
            const imgURL:any = result.user.photoURL;
            localStorage.setItem('imageURL',imgURL);
            setImageURL(imgURL);
            setAuthenticated(true);
            console.log("Image URL:", imgURL);
            alert(`${username} signed in`);
        } 
        catch (error) {
            console.error('Error signing in:', error);
        }
    }

    const handleSignOut=async()=>{
        try {
            await signOut(auth);
            console.log("user logged out")
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
          {imageURL && <img className='rounded-lg' src={imageURL} alt='User Profile' />}
        </div>
      )}
        </div>
        {/* <button style={{background: '#4d0080',padding: 10}} onClick={() => signIn()}>
            {authenticated ? 'Sign Out' : 'Sign In With Github'}
        </button> */}
        {authenticated ? (
        <button style={{ background: '#4d0080', padding: 10 }} onClick={handleSignOut}>
          Sign Out
        </button>
        ) : (
        <button style={{ background: '#4d0080', padding: 10 }} onClick={signIn}>
          Sign In With Github
        </button>
        )}
        </>
    )

}

export default SignInWithGithub;