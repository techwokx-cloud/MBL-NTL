import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface ChatRequest {
  message: string;
  conversationId?: string;
  history?: { role: 'user' | 'assistant'; content: string }[];
}

interface ChatResponse {
  reply: string;
  conversationId: string;
  timestamp: string;
}

const SYSTEM_PROMPT = `You are the SulNOx AI Sales Assistant for MBL-NTL SulNOxEco Ghana, the sole authorised
distributor of SulNOxEco Fuel Conditioner in Ghana.

FACTS ABOUT THE PRODUCT (do not deviate from these):
- SulNOxEco is a 100% organic, biodegradable fuel conditioner blended directly into the fuel tank
  (diesel, petrol or biofuel). It is NOT a urea/AdBlue/SCR exhaust additive and is not injected into
  the exhaust stream.
- It improves combustion, reduces fuel consumption, lowers emissions, cleans/protects the engine, and
  requires no engine modification.
- Available sizes: 30ml, 60ml, 120ml, 250ml, 1L, 4.5L, 25L.
- Used across road transport, marine, rail, agriculture, mining, construction and generators.

YOUR JOB:
- Answer product questions using only the facts above.
- Help the visitor pick the right pack size for their vehicle/application.
- For exact dosing ratios, direct them to the Dosing Ratio page or official Product Data Sheet —
  do not invent specific percentages or ratios.
- For pricing, bulk orders, or anything you're unsure about, direct them to WhatsApp
  (https://wa.me/233206769664) or the Support page.
- Keep answers short (2-4 sentences), friendly, and sales-oriented without being pushy.
- If asked something outside SulNOxEco/fuel conditioning, politely redirect to what you can help with.`;

export async function POST(request: NextRequest): Promise<NextResponse<ChatResponse>> {
  try {
    const body: ChatRequest = await request.json();
    const { message, conversationId, history = [] } = body;

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { reply: 'Please provide a message.', conversationId: conversationId || '', timestamp: new Date().toISOString() },
        { status: 400 }
      );
    }

    const groqKey = process.env.GROQ_API_KEY;
    let reply: string;

    if (groqKey) {
      reply = await getGroqResponse(message, history, groqKey);
    } else {
      // Fallback while no GROQ_API_KEY is configured
      reply = generateLocalResponse(message);
    }

    return NextResponse.json(
      {
        reply,
        conversationId: conversationId || `conv-${Date.now()}`,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: "Sorry, something went wrong. Please try WhatsApp for immediate help: wa.me/233206769664", conversationId: '', timestamp: new Date().toISOString() },
      { status: 500 }
    );
  }
}

/**
 * Groq API integration (OpenAI-compatible chat completions endpoint).
 * Requires GROQ_API_KEY environment variable on Render.
 * Model: llama-3.3-70b-versatile — fast inference, strong quality for this use case.
 */
async function getGroqResponse(
  message: string,
  history: { role: 'user' | 'assistant'; content: string }[],
  apiKey: string
): Promise<string> {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...history.slice(-6), // keep last few turns for context
        { role: 'user', content: message },
      ],
      max_tokens: 300,
      temperature: 0.4,
    }),
  });

  if (!response.ok) {
    console.error('Groq API error:', response.status, await response.text());
    return generateLocalResponse(message);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim() || generateLocalResponse(message);
}

/**
 * Local fallback response generator — used only if GROQ_API_KEY is not set.
 */
function generateLocalResponse(userInput: string): string {
  const input = userInput.toLowerCase();

  const responses: { [key: string]: string } = {
    price: "For current pricing on any SulNOxEco size, message us on WhatsApp (wa.me/233206769664) and our sales team will help right away.",
    dosing:
      'Dosing depends on your fuel type and application. Check our Dosing Ratio page or the official Product Data Sheet on our Resources page for the exact recommended ratio.',
    order:
      'You can order directly from our Shop page, or message us on WhatsApp for bulk/fleet orders.',
    delivery: 'We deliver across Accra and major cities in Ghana — message us on WhatsApp to confirm delivery timing for your area.',
    contact: 'Reach us via WhatsApp (wa.me/233206769664), email (info@mbl-ntlsulnox.com), or visit one of our outlets.',
    agent: "Interested in becoming a SulNOxEco sales agent? Visit our Become a Sales Agent page to apply.",
    distributor: "Interested in becoming a SulNOxEco sales agent? Visit our Become a Sales Agent page to apply.",
  };

  for (const [keyword, response] of Object.entries(responses)) {
    if (input.includes(keyword)) {
      return response;
    }
  }

  return "Thanks for your question! I can help with product selection, dosing guidance, ordering and support. What would you like to know?";
}
