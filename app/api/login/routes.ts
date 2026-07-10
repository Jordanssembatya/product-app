import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    const{
        email,
        password,
    } = body;

    // Process the login logic here

    return NextResponse.json({
        message: "Login successful",
    });

}