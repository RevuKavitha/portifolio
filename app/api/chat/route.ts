import { NextResponse } from "next/server";
import {
  getPortfolioFallbackReply,
  portfolioAssistantSystemPrompt,
  type ChatTurn
} from "@/lib/portfolio-chat";

type ChatRequestBody = {
  message?: string;
  history?: ChatTurn[];
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequestBody;
    const message = body.message?.trim();
    const history = Array.isArray(body.history) ? body.history.slice(-8) : [];

    if (!message) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        reply: getPortfolioFallbackReply(message),
        source: "fallback"
      });
    }

    const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        temperature: 0.3,
        messages: [
          { role: "system", content: portfolioAssistantSystemPrompt },
          ...history.map((turn) => ({ role: turn.role, content: turn.text })),
          { role: "user", content: message }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", errorText);
      return NextResponse.json({
        reply: getPortfolioFallbackReply(message),
        source: "fallback"
      });
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const reply = data.choices?.[0]?.message?.content?.trim();

    return NextResponse.json({
      reply: reply || getPortfolioFallbackReply(message),
      source: reply ? "openai" : "fallback"
    });
  } catch (error) {
    console.error("Chat route failure:", error);
    return NextResponse.json(
      {
        reply: "Sorry, I could not process that right now. Please try again."
      },
      { status: 500 }
    );
  }
}
