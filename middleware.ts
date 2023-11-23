import { NextResponse } from "next/server";
import type {NextRequest} from "next/server";

export async function middleware(request: NextRequest){
    const token = request.cookies.getAll("accessToken");
    console.log("session",token);
    if(!token)
    {
        console.log("Redirecting to login");
        return NextResponse.redirect(new URL("/login",request.url))
    }

    const responseAPI = await fetch(`${request.nextUrl.origin}/api/auth`,{
        headers: {
            Cookie: `accessToken=${token.values}`,
        },
    });
    console.log("API Response:", responseAPI.status);
    console.log(`${request.nextUrl.origin}/api/auth`)
    if(responseAPI.status!==200)
    {
        console.log("Redirecting to login due to API response");
        return NextResponse.redirect(new URL("/login",request.url))
    }
    const response = NextResponse.next()
    // response.cookies.set('accessToken', 'fast')
    response.cookies.set({
		name: 'accessToken',
		value: 'fast',
		httpOnly: true,
	})
    console.log(response)
    console.log("Continuing to next");
    return response;
}

export const config = {
    matcher: ["/frontend/:path*", "/backend/:path*", "/languages/:path*", "/ai/:path*", "/internet-of-things/:path*", "/cyber-security/:path*", "/cloud-computing/:path*", "/open-source/:path*", "/resources/:path*", "/youtube/:path*", "/other/:path*", "/devops/:path*", "/competitive-programming/:path*", "/technical-writing/:path*", "/technical-writing/:path*", "/Placement-Prep/:path*", "/data-structures/:path*", "/BlockChain/:path*"]
}
