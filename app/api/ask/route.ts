import OpenAI from "openai";

import { NextResponse } from "next/server";

export async function POST(request: Request) {

  try {

    const { message } = await request.json();

    if (!message || !message.trim()) {

      return NextResponse.json(

        { error: "Please enter a question." },

        { status: 400 }

      );

    }

    if (!process.env.OPENAI_API_KEY) {

      console.error("OPENAI_API_KEY is missing.");

      return NextResponse.json(

        { error: "OpenAI API key is not configured." },

        { status: 500 }

      );

    }

    const openai = new OpenAI({

      apiKey: process.env.OPENAI_API_KEY,

    });

    const response = await openai.responses.create({

      model: "gpt-5-mini",

      instructions:

        "You are Quinluma, a friendly technology learning assistant. Explain technology in simple language for people who are not technical. Give clear, practical, step-by-step answers when appropriate.",

      input: message,

    });

    return NextResponse.json({

      answer: response.output_text,

    });

  } catch (error) {

    console.error("QUINLUMA API ERROR:", error);

    return NextResponse.json(

      {

        error:

          error instanceof Error

            ? error.message

            : "Quinluma could not respond right now.",

      },

      { status: 500 }

    );

  }

}