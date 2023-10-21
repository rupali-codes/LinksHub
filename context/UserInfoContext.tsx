// // import {  createContext, ReactNode, SetStateAction, useCallback, useContext, useEffect, useState } from 'react'
// // import { onAuthStateChanged, User } from 'firebase/auth';
// // import { auth } from 'firebase_server/firebase_config';


// // interface UserInfoProviderProps {
// //     children : ReactNode
// // }

// // interface UserContextProps {
// //     userInfo: string | User | null;
// //     setUser : (user : User | string | null) => void
// // }

// // export const UserInfoContext = createContext<UserContextProps | null>(null)

// // export const useUserInfo = () => {
// //     return useContext(UserInfoContext)
// // }


// // export const UserInfoProvider = ({children} : UserInfoProviderProps) => {

// //     // const [user , setUser] = useState< string | User |  null >(null)
// //     // const [loading , setLoading] = useState(true)

// //     // useEffect(() => {
// //     //     const userInfo = localStorage.getItem('user')
// //     //     console.log(userInfo)
// //     //     if(userInfo){
// //     //         setUser(userInfo)
// //     //         setLoading(false)
// //     //     }   
// //     //     else{
// //     //         const unsubscribe = onAuthStateChanged(auth , async (authUser) =>{
// //     //             if(authUser){
// //     //                 setUser(authUser);
// //     //             }
// //     //             setLoading(false)
// //     //         })

// //     //         return () => unsubscribe()
// //     //     }

// //     // }, [])

// //     const [userInfo, setUserInfo] = useState(() => {
// //         // Initialize user info from localStorage if available
// //         if (typeof window !== 'undefined') {
// //             const storedUser = localStorage.getItem('userInfo');
// //             return storedUser ? JSON.parse(storedUser) : null;
// //           }
// //           return null;
// //       });

    
// //       const setUser = useCallback((user : User | string | null) => {
// //         console.log(user , "user info updated")
// //         setUserInfo(user);
// //       },[]);
    
// //       useEffect(() => {
// //         // Update localStorage whenever userInfo changes
// //         localStorage.setItem("userInfo", JSON.stringify(userInfo));
// //         console.log(localStorage.getItem('userInfo'))
        
// //       }, [userInfo, setUser]);

    
    
// //     return (
// //         <UserInfoContext.Provider value={{userInfo , setUser }}>
// //             {children}
// //         </UserInfoContext.Provider>
// //         )
// // }



// import { createContext, useContext, useEffect, useState } from 'react';
// import { onAuthStateChanged, User } from 'firebase/auth';
// import { auth } from 'firebase_server/firebase_config';

// interface UserInfoProviderProps {
//   children: React.ReactNode;
// }

// interface UserContextProps {
//   userInfo: string | User | null;
//   setUser: (user: User | string | null) => void;
// }

// export const UserInfoContext = createContext<UserContextProps | null>(null);

// export const useUserInfo = () => {
//   return useContext(UserInfoContext);
// };

// export const UserInfoProvider = ({ children }: UserInfoProviderProps) => {
//     const [userInfo, setUserInfo] = useState(() => {
//       // Check if localStorage is available before accessing it
//       if (typeof window !== 'undefined') {
//         const storedUser = localStorage.getItem('userInfo');
//         return storedUser ? JSON.parse(storedUser) : null;
//       }
//       return null;
//     });
  
//     const setUser = (user: User | string | null) => {
//       setUserInfo(user);
//     };
  
//     useEffect(() => {
//       // Check if localStorage is available before using it
//       if (typeof window !== 'undefined') {
//         // Update localStorage whenever userInfo changes
//         localStorage.setItem('userInfo', JSON.stringify(userInfo));
//         console.log(localStorage.getItem('userInfo'));
//       }
//     }, [userInfo]);
  
//     return (
//       <UserInfoContext.Provider value={{ userInfo, setUser }}>
//         {children}
//       </UserInfoContext.Provider>
//     );
//   };


import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from 'firebase_server/firebase_config';

interface UserInfoProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  userInfo: string | User | null;
//   setUser: (user: User | string | null) => void;
}

export const UserInfoContext = createContext<UserContextProps | null>(null);

export const useUserInfo = () => {
    return useContext(UserInfoContext)
};

export const UserInfoProvider = ({ children }: UserInfoProviderProps) => {
  const [userInfo, setUserInfo] = useState(() => {
    // Check if localStorage is available before accessing it
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('userInfo');
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  });

//   const setUser = (user: User | string | null) => {
//     setUserInfo(user);
//   };

  useEffect(() => {
    // Check if localStorage is available before using it
    if (typeof window !== 'undefined') {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
  }, [userInfo]); // Watch changes in userInfo

  useEffect(() => {
    // Update userInfo when the user logs in or out
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        // console.log(authUser)
      setUserInfo(authUser);
    //   console.log(userInfo)
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []); // Empty dependency array means it runs once on mount

  return (
    <UserInfoContext.Provider value={{ userInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

