'use client';

import { useState, useRef, useEffect } from 'react';
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaWhatsapp,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaCalculator,
  FaBoxes,
  FaHandshake,
  FaHeadset,
} from 'react-icons/fa';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const WHATSAPP_URL = 'https://wa.me/233206769664?text=Hello%2C%20I%20need%20help%20with%20SulNOxEco';

const quickActions = [
  { icon: FaBoxOpen, label: 'Choose Product', prompt: 'Help me choose the right SulNOxEco product for my vehicle' },
  { icon: FaMapMarkerAlt, label: 'Find Outlet', prompt: 'Where can I find a SulNOxEco outlet near me?' },
  { icon: FaCalculator, label: 'Calculate Savings', prompt: 'How much can I save with SulNOxEco?', href: '/savings-calculator' },
  { icon: FaBoxes, label: 'Bulk Enquiry', prompt: "I'd like to make a bulk order enquiry" },
  { icon: FaHandshake, label: 'Become a Sales Agent', prompt: null, href: '/become-a-sales-agent' },
  { icon: FaHeadset, label: 'Talk to Sales', prompt: null, href: WHATSAPP_URL, external: true },
];

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm SulNOx AI 👋 How can I help you today?",
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-ai-assistant', handler);
    return () => window.removeEventListener('open-ai-assistant', handler);
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    const history = messages.slice(-6).map((m) => ({
      role: (m.sender === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
      content: m.text,
    }));

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: data.reply || "Sorry, I couldn't process that — try WhatsApp for immediate help.",
          sender: 'assistant',
          timestamp: new Date(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Sorry, I'm having trouble connecting. Please reach us directly on WhatsApp.",
          sender: 'assistant',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickAction = (action: (typeof quickActions)[number]) => {
    if (action.href) {
      if (action.external) {
        window.open(action.href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = action.href;
      }
      return;
    }
    if (action.prompt) sendMessage(action.prompt);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-ntl-blue to-sulnox-green text-white shadow-2xl hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Open AI Sales Agent"
          title="Chat with SulNOx AI"
        >
          <FaRobot className="w-8 h-8" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[calc(100vw-32px)] bg-white rounded-xl shadow-2xl flex flex-col h-[560px] border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-ntl-navy to-ntl-blue text-white p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <FaRobot className="w-5 h-5 text-sulnox-green" />
              </div>
              <div>
                <p className="font-semibold text-sm">SulNOx AI</p>
                <p className="text-xs text-gray-300">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1.5 rounded transition-colors"
              aria-label="Close chat"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-1 min-h-0">
            {/* Quick actions sidebar */}
            <div className="w-24 sm:w-28 bg-ntl-slate border-r border-gray-200 py-3 px-1.5 flex flex-col gap-1.5 overflow-y-auto shrink-0">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickAction(action)}
                  className="flex flex-col items-center gap-1 text-center p-2 rounded-lg hover:bg-white transition-colors"
                  title={action.label}
                >
                  <action.icon className="w-4 h-4 text-ntl-blue" />
                  <span className="text-[9px] font-medium text-gray-600 leading-tight">{action.label}</span>
                </button>
              ))}
            </div>

            {/* Conversation column */}
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                        message.sender === 'user'
                          ? 'bg-ntl-navy text-white rounded-br-sm'
                          : 'bg-ntl-slate text-gray-800 rounded-bl-sm'
                      }`}
                    >
                      <p>{message.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-ntl-slate px-4 py-3 rounded-2xl rounded-bl-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* WhatsApp handoff */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-sulnox-green hover:bg-sulnox-green/90 text-white text-xs font-semibold py-2 transition-colors shrink-0"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                Prefer to talk to a person? Chat on WhatsApp
              </a>

              {/* Input */}
              <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 bg-white shrink-0">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="input-field text-sm flex-1 py-2"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-ntl-navy hover:bg-ntl-blue text-white p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <FaPaperPlane className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
