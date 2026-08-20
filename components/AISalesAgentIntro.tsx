'use client';

import { Reveal } from '@/components/Reveal';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineChatAlt2 } from 'react-icons/hi';

const quickQuestions = [
  'Which product is right for me?',
  'How much can I save?',
  'Where can I buy SulNOxEco?',
  'I want to become a sales agent',
];

export function AISalesAgentIntro() {
  const openChat = () => {
    // Dispatch a custom event that the AIAssistant widget listens for
    window.dispatchEvent(new CustomEvent('open-ai-assistant'));
  };

  return (
    <section className="bg-ntl-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
        <Reveal>
          <span className="text-sulnox-green font-semibold text-sm uppercase tracking-wide">AI Sales Agent</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Meet SulNOx AI — Your Intelligent Fuel Advisor
          </h2>
          <p className="text-gray-300 mb-6 max-w-lg">
            Ask anything about SulNOxEco, get product recommendations, calculate savings and connect with
            our team instantly.
          </p>
          <button
            onClick={openChat}
            className="flex items-center gap-2 bg-white text-ntl-navy hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <FaWhatsapp className="w-5 h-5 text-sulnox-green" />
            Chat with SulNOx AI
          </button>
        </Reveal>

        {/* Robot mascot */}
        <Reveal delay={80} className="hidden lg:flex justify-center">
          <img
            src="/images/site/sulnox-ai-robot.png"
            alt="SulNOx AI Assistant"
            className="h-64 w-auto drop-shadow-2xl"
          />
        </Reveal>

        <Reveal delay={150} className="bg-white rounded-2xl shadow-2xl overflow-hidden text-gray-900">
          <div className="bg-ntl-navy text-white px-5 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <HiOutlineChatAlt2 className="w-5 h-5 text-sulnox-green" />
            </div>
            <div>
              <p className="font-semibold text-sm">SulNOx AI</p>
              <p className="text-xs text-gray-300">Online</p>
            </div>
          </div>
          <div className="p-5">
            <div className="bg-ntl-slate rounded-lg rounded-tl-sm p-3 text-sm mb-4 inline-block max-w-[85%]">
              Hi! I&apos;m SulNOx AI 👋 How can I help you today?
            </div>
            <div className="grid grid-cols-2 gap-2">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={openChat}
                  className="text-left text-xs font-medium border border-gray-200 rounded-lg px-3 py-2.5 hover:border-sulnox-green hover:bg-ntl-slate transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
