import {  useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase_server/firebase_config/index';

const useLogout = () => {
  const [error, setError] = useState<unknown | null>(null);
  const [isPending, setIsPending] = useState(false);

  const logout = async () => {
    setIsPending(true);
    setError(null);

    try {
      await signOut(auth);
      setIsPending(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsPending(false);
    }
  };

  return { logout, isPending, error };
};

export default useLogout;
