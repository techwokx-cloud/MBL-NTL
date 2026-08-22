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

    const reply = await getChatReply(message, history);

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

type Turn = { role: 'user' | 'assistant'; content: string };

/**
 * Provider fallback chain: tries each configured AI provider in order until
 * one succeeds, then falls back to the local rule-based responder as a last
 * resort. Add/remove providers by setting or unsetting their env var on
 * Render — no code changes needed to enable one you didn't have before.
 *
 * Order: Groq (fastest/cheapest) -> Gemini -> Anthropic Claude -> local rules
 */
async function getChatReply(message: string, history: Turn[]): Promise<string> {
  const providers: { name: string; key: string | undefined; call: (key: string) => Promise<string> }[] = [
    { name: 'Groq', key: process.env.GROQ_API_KEY, call: (key) => getGroqResponse(message, history, key) },
    { name: 'Gemini', key: process.env.GEMINI_API_KEY, call: (key) => getGeminiResponse(message, history, key) },
    { name: 'Anthropic', key: process.env.ANTHROPIC_API_KEY, call: (key) => getAnthropicResponse(message, history, key) },
  ];

  for (const provider of providers) {
    if (!provider.key) continue;
    try {
      const reply = await provider.call(provider.key);
      if (reply) return reply;
    } catch (err) {
      console.error(`${provider.name} API failed, trying next provider:`, err);
    }
  }

  // No provider configured or all failed — local rule-based fallback.
  return generateLocalResponse(message);
}

/**
 * Groq (OpenAI-compatible chat completions endpoint).
 * Requires GROQ_API_KEY on Render. Fast, cheap inference.
 */
async function getGroqResponse(message: string, history: Turn[], apiKey: string): Promise<string> {
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
        ...history.slice(-6),
        { role: 'user', content: message },
      ],
      max_tokens: 300,
      temperature: 0.4,
    }),
  });

  if (!response.ok) {
    throw new Error(`Groq ${response.status}: ${await response.text()}`);
  }
  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content?.trim();
  if (!reply) throw new Error('Groq returned empty reply');
  return reply;
}

/**
 * Google Gemini (generateContent endpoint).
 * Requires GEMINI_API_KEY on Render — get one free at aistudio.google.com/apikey.
 */
async function getGeminiResponse(message: string, history: Turn[], apiKey: string): Promise<string> {
  const contents = [
    ...history.slice(-6).map((turn) => ({
      role: turn.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: turn.content }],
    })),
    { role: 'user', parts: [{ text: message }] },
  ];

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { maxOutputTokens: 300, temperature: 0.4 },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini ${response.status}: ${await response.text()}`);
  }
  const data = await response.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  if (!reply) throw new Error('Gemini returned empty reply');
  return reply;
}

/**
 * Anthropic Claude (Messages API).
 * Requires ANTHROPIC_API_KEY on Render — get one at console.anthropic.com.
 */
async function getAnthropicResponse(message: string, history: Turn[], apiKey: string): Promise<string> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: [...history.slice(-6), { role: 'user', content: message }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Anthropic ${response.status}: ${await response.text()}`);
  }
  const data = await response.json();
  const reply = data.content?.[0]?.text?.trim();
  if (!reply) throw new Error('Anthropic returned empty reply');
  return reply;
}

/**
 * Local fallback response generator — used only if no AI provider is
 * configured, or all configured providers fail. Covers common real-world
 * questions (symptoms, product selection, ordering) with genuinely useful
 * answers grounded in what SulNOxEco actually does.
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
