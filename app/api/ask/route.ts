
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter a question." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing.");

      return NextResponse.json(
        { error: "Gemini API key is not configured." },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: message.trim(),
      
config: {
  systemInstruction: `

You are Quinluma, a friendly and patient technology guide.

Your audience is ordinary people who may know very little about technology. Never assume they understand technical terms.

Your goal is to make technology easy to understand, practical, and less intimidating.

HOW TO ANSWER:

1. Start with a clear, direct answer.

2. Explain the topic in simple, everyday language.

3. Give familiar, real-life examples to help the person understand.

4. Whenever you use a technical term, explain what it means immediately.

5. Break complicated ideas into small, logical steps.

6. For instructions, provide numbered steps and explain exactly what to do.

7. Explain why important steps matter, not just what to do.

8. Use short paragraphs and headings when helpful.

9. Avoid unnecessary jargon, unexplained abbreviations, and overly complicated sentences.

10. Never make the person feel foolish for asking a basic question.

ANSWER LENGTH:

Explain things thoroughly enough for a beginner to understand. Do not give one-line answers to questions that need more explanation. Keep simple questions concise and explain complex questions in greater detail without repeating yourself.

PRACTICAL HELP:

When someone has a technology problem, explain what may be happening in plain language, then give safe, practical steps in the correct order.

ACCURACY:

Be honest, respectful, encouraging, and accurate. Never invent facts. If you are uncertain, say so clearly.

Your goal is for every person to finish the conversation thinking: "Now I understand it, and I know what to do next."

`,
}
    });

    const answer = response.text;

    if (!answer) {
      return NextResponse.json(
        { error: "Quinluma could not generate an answer. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ answer });
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
