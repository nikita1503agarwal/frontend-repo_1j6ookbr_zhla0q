import React, { useEffect, useRef, useState } from 'react';
import { Send, Mic, Loader2 } from 'lucide-react';

const examplePrompts = [
  'My class ends at 3:15 pm. Arrange a shuttle to North Gate.',
  "I'm ready for lunch at 12:45 pm today.",
  'Find hostels near the Library with available rooms on the 4th floor.',
];

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi, I'm Nexus. Tell me your timing or location needs and I'll coordinate transport and meals in real time.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');

    // Mock AI response for now (backend integration can replace this)
    setLoading(true);
    setTimeout(() => {
      const reply = mockNexusPlanner(userMsg.content);
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
      setLoading(false);
    }, 900);
  };

  return (
    <section id="chat" className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/80 backdrop-blur rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-800">Nexus Chat</h2>
          <p className="text-sm text-slate-600">Speak naturally. Nexus will extract timing, place, and intent.</p>
        </div>

        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white to-slate-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed shadow ${
                  m.role === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-slate-800 border border-slate-200'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Loader2 className="h-4 w-4 animate-spin" />
              Thinking...
            </div>
          )}
          <div ref={endRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-3 flex items-center gap-2">
          <button type="button" className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">
            <Mic className="h-5 w-5" />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a request..."
            className="flex-1 h-10 rounded-lg border border-slate-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
          <button type="submit" className="inline-flex items-center gap-2 h-10 px-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
            <Send className="h-4 w-4" />
            Send
          </button>
        </form>

        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-2">
            {examplePrompts.map((ex) => (
              <button
                key={ex}
                onClick={() => setInput(ex)}
                className="text-xs md:text-sm rounded-full border border-slate-200 px-3 py-1 hover:bg-slate-50"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function mockNexusPlanner(text) {
  // Very light demo: detect key intents and reflect a structured plan
  const lower = text.toLowerCase();
  const parts = [];
  if (/(bus|shuttle|ride|transport)/.test(lower)) parts.push('Transit intent detected');
  if (/(lunch|meal|cafeteria|dining)/.test(lower)) parts.push('Meal coordination intent detected');
  if (/(hostel|room|floor|near|library)/.test(lower)) parts.push('Hostel finder intent detected');
  const timeMatch = lower.match(/\b(\d{1,2}[:.]?\d{0,2})\s?(am|pm)?\b/);
  if (timeMatch) parts.push(`Time: ${timeMatch[0]}`);

  const response =
    parts.length > 0
      ? `Understood. ${parts.join(' · ')}. Creating a structured request and notifying relevant parties.`
      : "Got it. I'll translate this into a structured task for drivers or dining as needed.";
  return response;
}
