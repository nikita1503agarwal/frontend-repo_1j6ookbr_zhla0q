import React from 'react'
import HeroSection from './components/HeroSection'
import ChatInterface from './components/ChatInterface'
import FeaturesGrid from './components/FeaturesGrid'
import DriverDashboard from './components/DriverDashboard'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      {/* Hero with Spline animation */}
      <HeroSection />

      {/* Content sections */}
      <main className="space-y-12 md:space-y-16 -mt-8 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What Nexus Can Do</h2>
            <p className="mt-2 text-slate-600">A campus logistics assistant that understands your intent and coordinates actions instantly.</p>
          </div>
          <FeaturesGrid />
        </section>

        <ChatInterface />

        <DriverDashboard />

        <footer className="py-10 text-center text-sm text-slate-600">
          Built for the Nexus AI campus logistics concept. Demo only — no real services are contacted.
        </footer>
      </main>
    </div>
  )
}

export default App
