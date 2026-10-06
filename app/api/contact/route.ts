import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Quinluma <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Quinluma message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
} 