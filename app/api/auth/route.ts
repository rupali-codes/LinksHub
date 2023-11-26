import { auth } from "firebase-admin";
import { cookies,headers } from "next/headers"
import { NextRequest,NextResponse } from "next/server";
import { customInitApp } from "lib/firebase-admin-config";

customInitApp();

export async function POST(request: NextRequest, response: NextResponse){
  const authorization = request.headers.get("Authorization");
  console.log("Headers authorization: ",authorization);
  if(authorization && authorization.startsWith('Bearer '))
  {
    const idToken = authorization.split("Bearer ")[1];
    console.log("ID Token: ",idToken);
    const decodedToken = await auth().verifyIdToken(idToken);
    console.log("Decoded token: ",decodedToken);
    if(decodedToken)
    {
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      const sessionCookie = await auth().createSessionCookie(idToken,{
        expiresIn
      });
      console.log("Session Cookie: ",sessionCookie);
      const options = {
        name: "Session",
        value: sessionCookie,
        maxAge: expiresIn,
        httpOnly: true,
        secure: true, 
      };
      cookies().set(options);
    }
  }
  return NextResponse.json({}, { status: 200 });
}

export async function GET(request: NextRequest)
{
  const session = cookies().get("accessToken")?.value || "";
  if(!session)
  {
    return NextResponse.json({isLogged: false},{status: 401});
  }
  const decodedClaims = await auth().verifySessionCookie(session,true);
  if(!decodedClaims)
  {
    return NextResponse.json({isLogged: false},{status: 401});
  }
  return NextResponse.json({ isLogged: true }, { status: 200});
}

export async function DELETE(request: NextRequest, response: NextResponse) {
  const session = request.cookies.get("Session");

  if (!session) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  try {
    // Delete the 'session' cookie in the response
    response.cookies.set('Session', '', {
      httpOnly: true,
      maxAge: 0,
      secure: true,  // Include this if your site is served over HTTPS
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.error('Error in handleLogout:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
