import { cookies } from "next/headers";
import { adminAuth } from "./firebase-admin-config";

const getUser=async()=>{
    const session = cookies().get("accessToken")?.value;
    console.log("Session",session)
    if(!session)
    {
        return null;
    }
    const user = await adminAuth.verifySessionCookie(session,true);
    console.log(user);
    return user;
}

export default getUser; 