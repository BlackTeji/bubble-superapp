import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/firebaseConfig";

export function middleware(req: NextRequest) {
    const user = auth.currentUser;

    if (!user && req.nextUrl.pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
