
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { useUserInfo } from 'context/UserInfoContext'
import { User } from 'firebase/auth'
import ProfileModal from './ProfileModal'

interface UserDetails {
  photoURL : string
}


const ProfileButton: FC = () => {


    const userInfo = useUserInfo()
    const [user , setUser] = useState<string | null | UserDetails| User >(null)
    const [modalOpen , setModalOpen] = useState(false)
    
    useEffect(() => {
        if(userInfo?.userInfo){
            setUser(userInfo?.userInfo)
        }
    }, [userInfo?.userInfo])

  return (
    <>
      <button onClick={() => setModalOpen(!modalOpen)} >
        <Image className='rounded-full' src={(user as UserDetails)?.photoURL} width={30} height={30}  alt='User Github Profile Image'></Image>
      </button>

        
      <span className='absolute translate-x-56 translate-y-16'>
          {modalOpen && <ProfileModal/>}
      </span>
        
    </>
  )
}

export default ProfileButton
