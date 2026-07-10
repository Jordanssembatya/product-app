import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const body = await request.json();

    const{
        name,
        email,
        password,
    } = body;

    // Process the login logic here 
    //save the user data to the database or perform any necessary authentication

    // Return a response
    return NextResponse.json({

        message: "Account created successfully",
        user:{
            name,
            email,
            password,
        }
    })
}
