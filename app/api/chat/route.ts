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
 * Local fallback response generator — used only if GROQ_API_KEY is not set,
 * or if the Groq call fails for any reason. Covers common real-world
 * questions (symptoms, product selection, ordering) with genuinely useful
 * answers grounded in what SulNOxEco actually does — not just a narrow
 * keyword match with a generic catch-all.
 */
function generateLocalResponse(userInput: string): string {
  const input = userInput.toLowerCase();

  const rules: { keywords: string[]; response: string }[] = [
    {
      keywords: ['black smoke', 'smoking', 'smokes', 'smoke', 'exhaust smoke'],
      response:
        "Excess smoke is usually a sign of incomplete combustion and carbon build-up. SulNOxEco conditions the fuel for a cleaner, more complete burn, which typically reduces smoke and emissions over a few tanks of use — it won't fix a mechanical fault, but it's exactly the kind of issue it helps with. For a petrol/diesel car, the 120ml or 250ml size is a good starting point. Want a specific recommendation, or should I connect you with our team on WhatsApp?",
    },
    {
      keywords: ['rough idle', 'idling rough', 'stalling', 'stall', 'hesitat'],
      response:
        "Rough idling or hesitation often points to carbon deposits on injectors or valves. SulNOxEco cleans the fuel system as it burns, which can smooth this out over time. If it's a sudden or severe issue, it's worth having a mechanic check it too — but adding SulNOxEco at your next fill-up is a good, low-cost first step.",
    },
    {
      keywords: ['knock', 'knocking', 'pinging'],
      response:
        "Engine knock can have several causes, and a fuel conditioner alone may not resolve a mechanical issue — but SulNOxEco's cleaner combustion can help with knock caused by carbon build-up specifically. If it's a new or worsening noise, please also have it checked by a mechanic. Want help picking the right size to try?",
    },
    {
      keywords: ['poor mileage', 'fuel economy', 'using too much fuel', 'consuming', 'consumption', 'mileage'],
      response:
        'SulNOxEco is built for exactly this — it improves combustion efficiency, which typically means better mileage and lower fuel spend over time. Try our Savings Calculator (/savings-calculator) to see an estimate for your vehicle, or tell me your fuel type and daily usage and I can point you to the right product size.',
    },
    {
      keywords: ['hard to start', 'wont start', "won't start", 'difficult to start', 'starting problem'],
      response:
        "Hard starting can come from several causes, including fuel system deposits. SulNOxEco helps by keeping the fuel system and injectors cleaner, which can improve starting over a few tanks — but if it's an electrical or battery issue, a mechanic's diagnosis is the right first step. Happy to help you pick a product either way.",
    },
    {
      keywords: ['price', 'cost', 'how much', 'ghc'],
      response:
        'For current pricing on any SulNOxEco size, message us on WhatsApp (wa.me/233206769664) and our sales team will help right away — or check the Shop page for indicative prices.',
    },
    {
      keywords: ['dosing', 'dose', 'how much to add', 'ratio', 'how many ml'],
      response:
        'Dosing depends on your fuel type and application. Check our Dosing Ratio page or the official Product Data Sheet on our Resources page for the exact recommended ratio for your engine.',
    },
    {
      keywords: ['order', 'buy', 'purchase', 'where can i get'],
      response: 'You can order directly from our Shop page, or message us on WhatsApp for bulk/fleet orders.',
    },
    {
      keywords: ['deliver', 'shipping'],
      response: 'We deliver across Accra and major cities in Ghana — message us on WhatsApp to confirm delivery timing for your area.',
    },
    {
      keywords: ['contact', 'phone number', 'email', 'reach you'],
      response: 'Reach us via WhatsApp (wa.me/233206769664), email (info@mbl-ntlsulnox.com), or visit one of our outlets.',
    },
    {
      keywords: ['agent', 'distributor', 'partner with', 'become a'],
      response: 'Interested in becoming a SulNOxEco sales agent? Visit our Become a Sales Agent page to apply.',
    },
    {
      keywords: ['which product', 'what size', 'recommend', 'right for me', 'suitable'],
      response:
        "Happy to help you pick the right size. As a rough guide: 30-120ml suits motorcycles and small engines, 250ml-1L suits cars and light commercial vehicles, and 4.5L-25L suits fleets and industrial use. What are you looking to treat — a car, generator, fleet, or something else?",
    },
    {
      keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon'],
      response: "Hi there! I'm SulNOx AI. I can help with product selection, dosing guidance, fuel savings estimates, or connecting you with our team. What's going on with your vehicle or equipment?",
    },
  ];

  for (const rule of rules) {
    if (rule.keywords.some((kw) => input.includes(kw))) {
      return rule.response;
    }
  }

  return "I can help with engine symptoms (smoke, rough running, poor mileage), product selection, dosing, or ordering — could you tell me a bit more about what's going on, or what you'd like to know? You can also reach our team directly on WhatsApp (wa.me/233206769664).";
}
