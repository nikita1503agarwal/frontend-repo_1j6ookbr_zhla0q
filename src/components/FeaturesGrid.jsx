import React from 'react';
import { MessageCircle, Bus, UtensilsCrossed, Map, Sparkles } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: <MessageCircle className="h-5 w-5 text-indigo-600" />,
      title: 'Conversational Control',
      desc: 'Use natural language to plan pickups, meals, and searches. Nexus extracts entities like time, place, and intent.',
    },
    {
      icon: <Bus className="h-5 w-5 text-indigo-600" />,
      title: 'Transit Orchestration',
      desc: 'Nexus converts requests into clear driver notifications with live ETAs and student counts.',
    },
    {
      icon: <UtensilsCrossed className="h-5 w-5 text-indigo-600" />,
      title: 'Meal Coordination',
      desc: 'Forecast demand and smooth lunch rushes by syncing student readiness with kitchen capacity.',
    },
    {
      icon: <Map className="h-5 w-5 text-indigo-600" />,
      title: 'Hostel Finder',
      desc: 'Query nearby hostels by floor, availability, or landmarks and get a conversational summary.',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2">
              {f.icon}
              <h3 className="font-semibold text-slate-800">{f.title}</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
