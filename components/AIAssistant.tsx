'use client';

import { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m the SulNOx Assistant. How can I help you today? I can answer questions about products, dosing, ordering, and technical support.',
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(input),
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('price') || input.includes('cost')) {
      return 'Our 250ml bottle is competitively priced for individual vehicles, while our 4.5L container offers better value for fleet operations. For exact pricing, please contact our sales team via WhatsApp.';
    }
    if (input.includes('dosing')) {
      return 'Most vehicles use a 3-8% dosing ratio depending on the engine and emission standard. Visit our Dosing Ratio page for a calculator, or tell me your vehicle details for a specific recommendation.';
    }
    if (input.includes('order') || input.includes('buy')) {
      return 'You can order directly from our Shop page, or contact us via WhatsApp for bulk orders and wholesale pricing. We offer same-day delivery in Accra.';
    }
    if (input.includes('delivery')) {
      return 'We deliver same-day in Accra and within 2-3 business days to other regions. Delivery is included with orders over a certain amount. Contact us for details.';
    }
    if (input.includes('technical') || input.includes('help')) {
      return 'I can help with product information, dosing questions, ordering, and general support. For technical issues with your vehicle, please contact our support team.';
    }
    if (input.includes('contact')) {
      return 'You can reach us via WhatsApp, email (support@mbl-ntlsulnox.com), or visit one of our branches. Our support team responds within 24 hours.';
    }

    return 'Thank you for your question! I can help with product information, dosing ratios, ordering, delivery, and general support. What would you like to know?';
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-ntl-blue to-sulnox-green text-white shadow-2xl hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Open AI Assistant"
          title="Chat with SulNOx Assistant"
        >
          <FaRobot className="w-8 h-8" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-32px)] bg-white rounded-lg shadow-2xl flex flex-col h-[500px] border-2 border-ntl-blue">
          {/* Header */}
          <div className="bg-gradient-to-r from-ntl-blue to-sulnox-green text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaRobot className="w-5 h-5" />
              <div>
                <p className="font-semibold">SulNOx Assistant</p>
                <p className="text-xs text-gray-100">Always available</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-ntl-blue text-white rounded-br-none'
                      : 'bg-ntl-slate text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-ntl-slate text-gray-800 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="input-field text-sm flex-1"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-sulnox-green hover:bg-ntl-blue text-white p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <FaPaperPlane className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
