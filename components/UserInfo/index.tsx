
import useLogin from "hooks/useLogin"
import { useUserInfo } from "context/UserInfoContext"
import React from "react"
import ProfileButton from "./ProfileButton"
import dynamic from "next/dynamic"

const UserInfoButton: React.FC = () => {
    const { login } = useLogin();
    const userInfo = useUserInfo();

    const loginWithGithub = () => {
        login();
    }


        if (!userInfo?.userInfo) {
            return <button className="rounded-md text-white  " onClick={loginWithGithub}>Sign in with Github</button>;
        }
        else return <ProfileButton />
    


}
export default dynamic(() => Promise.resolve(UserInfoButton), { ssr: false })