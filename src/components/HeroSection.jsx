import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Bot } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] overflow-hidden bg-slate-950" aria-label="Nexus hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Soft gradient overlay to enhance contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.35)_40%,rgba(2,6,23,0.7)_70%,rgba(2,6,23,1)_100%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 h-full flex items-center">
        <div className="text-center md:text-left w-full">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs md:text-sm text-white/80 ring-1 ring-white/15">
            <Bot className="h-4 w-4" />
            Meet Nexus — Your AI Logistics Copilot
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Real-time campus transit and meal coordination,
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-amber-300"> powered by Generative AI</span>
          </h1>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-white/80 max-w-2xl md:max-w-3xl">
            Say it once. Nexus translates your timing and location needs into clear, actionable updates for drivers and dining teams — reducing waiting, confusion, and missed rides.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#chat"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/90 text-slate-900 px-4 py-2 md:px-5 md:py-3 text-sm md:text-base font-medium hover:bg-white transition"
            >
              <Rocket className="h-4 w-4" />
              Try the Assistant
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 text-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-base font-medium hover:bg-white/10 transition"
            >
              View Driver Dashboard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
