import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // YOUR SPECIFIC CREDENTIALS
    const MY_EMAIL = "shekinahgloryy9@gmail.com"; 
    const MY_PASSWORD = "password123";

    if (email === MY_EMAIL && password === MY_PASSWORD) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "ACCESS_DENIED: INVALID_IDENTITY" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "TERMINAL_SERVER_ERROR" }, { status: 500 });
  }
}