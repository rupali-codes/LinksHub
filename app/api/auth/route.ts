import { auth } from "firebase-admin";
import { cookies,headers } from "next/headers"
import { NextRequest,NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // console.log(request.cookies);
  const session = (request.cookies as any)["session"];
  console.log(session);
  // const session:any = request.cookies.get("session");
    if (!session) {
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }
    const decodedClaims = await auth().verifySessionCookie(session, true);
    console.log("User ID",decodedClaims.uid)
    console.log(decodedClaims);
    if (!decodedClaims) {
      return NextResponse.json({ isLogged: false }, { status: 401 });
    }
  
    return NextResponse.json({ isLogged: true }, { status: 200 });
  }

export async function POST(request: NextRequest, response: NextResponse) {
  console.log('Headers:', request.headers);
  try {
      // const authorization = headers().get("Authorization");
      const authorization = request.headers.get("Authorization");
      console.log("Authorization: ",authorization)
      
      if (authorization?.startsWith("Bearer ")) {
          const idToken = authorization.split("Bearer ")[1];
          const decodedToken = await auth().verifyIdToken(idToken);
          console.log(decodedToken);

          if (decodedToken) {
              const expiresIn = 60 * 60 * 24 * 5 * 1000;
              const sessionCookie = await auth().createSessionCookie(idToken, {
                  expiresIn,
              });
              console.log(sessionCookie);

              const options = {
                  name: "session",
                  value: sessionCookie,
                  maxAge: expiresIn,
                  httpOnly: true,
                  secure: true,
                  headers: {
                    'Content-Type': 'application/json',
                  },
              };
              cookies().set(options);
          }
      }

      return NextResponse.json({}, { status: 200 });
  } catch (error) {
      console.error('Error in POST:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


export const invalidateLogin = async(token: string)=>{
    const decodedClaims = await auth().verifySessionCookie(token, true);
    await auth().revokeRefreshTokens(decodedClaims.uid);
    return;
}

export async function DELETE(request: NextRequest, response: NextResponse) {
  const token:any = request.cookies.get("session");
  if (!token) {
      return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  try {
      await invalidateLogin(token);
      return NextResponse.json({}, { status: 200 });
  } catch (error) {
      console.error('Error in DELETE:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
