import { NextResponse,NextRequest } from "next/server";

export async function middleware(request: NextRequest){
    console.log('Hello!')
    const response = NextResponse.next()
    console.log(response.cookies);
    response.headers.set('authenticated','true')
    const cookie = request.cookies.get('accessToken')
    console.log("Cookie",cookie);
    if (!cookie || cookie.value === 'login') {
        console.log("Redirecting to login due to API response");
        return NextResponse.redirect(new URL("/login", request.url));
    }
    
    const responseAPI = await fetch(`${request.url}/api/auth`, {
        headers: {
            Cookie: request.cookies.get('accessToken')?.value || '',
        },
    });
    if (responseAPI.status === 200) {
        // Authentication successful
        console.log("Authentication successful");
    } else {
        // Authentication failed
        console.log("Redirecting to login due to API response");
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return response; 
}

export const config = {
    matcher: ["/frontend/:path*", "/backend/:path*", "/languages/:path*", "/ai/:path*", "/internet-of-things/:path*", "/cyber-security/:path*", "/cloud-computing/:path*", "/open-source/:path*", "/resources/:path*", "/youtube/:path*", "/other/:path*", "/devops/:path*", "/competitive-programming/:path*", "/technical-writing/:path*", "/technical-writing/:path*", "/Placement-Prep/:path*", "/data-structures/:path*", "/BlockChain/:path*"]
}