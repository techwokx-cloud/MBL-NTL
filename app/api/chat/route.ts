import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface ChatRequest {
  message: string;
  conversationId?: string;
}

interface ChatResponse {
  reply: string;
  conversationId: string;
  timestamp: string;
}

/**
 * POST /api/chat
 * Handles AI assistant chat requests
 * Currently uses local logic; integrate with Anthropic API or selected LLM
 */
export async function POST(request: NextRequest): Promise<NextResponse<ChatResponse>> {
  try {
    const body: ChatRequest = await request.json();
    const { message, conversationId } = body;

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { reply: 'Please provide a message.', conversationId: conversationId || '', timestamp: new Date().toISOString() },
        { status: 400 }
      );
    }

    // TODO: Connect to Anthropic API or selected LLM provider
    // const apiKey = process.env.ANTHROPIC_API_KEY;
    // const response = await fetch('https://api.anthropic.com/v1/messages', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-api-key': apiKey,
    //   },
    //   body: JSON.stringify({
    //     model: 'claude-sonnet-4-6',
    //     max_tokens: 1024,
    //     messages: [{ role: 'user', content: message }],
    //     system: SYSTEM_PROMPT,
    //   }),
    // });

    // For now, use local logic
    const reply = generateLocalResponse(message);

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
      { reply: 'An error occurred. Please try again.', conversationId: '', timestamp: new Date().toISOString() },
      { status: 500 }
    );
  }
}

/**
 * Local response generator (placeholder)
 * Replace with actual LLM integration
 */
function generateLocalResponse(userInput: string): string {
  const input = userInput.toLowerCase();

  const responses: { [key: string]: string } = {
    price: 'Our 250ml bottle is competitively priced for individual vehicles, while our 4.5L container offers better value for fleet operations. For exact pricing, contact our sales team.',
    dosing:
      'Most vehicles use a 3-8% dosing ratio depending on the engine and emission standard. Visit our Dosing Ratio page for a calculator.',
    order:
      'You can order directly from our Shop page, or contact us via WhatsApp for bulk orders. We offer same-day delivery in Accra.',
    delivery: 'We deliver same-day in Accra and within 2-3 business days to other regions.',
    contact: 'Reach us via WhatsApp, email (support@mbl-ntlsulnox.com), or visit one of our branches.',
  };

  for (const [keyword, response] of Object.entries(responses)) {
    if (input.includes(keyword)) {
      return response;
    }
  }

  return 'Thank you for your question! I can help with product info, dosing, ordering, and support. What would you like to know?';
}
