import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SkillsAndExperience from './components/SkillsAndExperience';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [showTooltip, setShowTooltip] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen bg-cream text-charcoal overflow-x-hidden">
      
      {/* 1. Rounded Site Outer Frame Outline */}
      <div className="site-frame" aria-hidden="true" />

      {/* 2. Brand Monogram Badge (Overlapping Left Site Frame) */}
      <div 
        onClick={scrollToTop}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="fixed top-24 left-8 md:left-12 lg:left-14 w-16 h-16 md:w-20 md:h-20 bg-burgundy rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:rotate-12 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-dashed border-cream/30 z-[100] group select-none"
        role="button"
        aria-label="Vishmitha Brand Emblem (Scroll to Top)"
      >
        {/* Monogram Text VM */}
        <span className="font-serif text-2xl md:text-3xl font-black tracking-tighter text-cream select-none">
          VM
        </span>

        {/* Floating Greeting Bubble Tooltip */}
        <div 
          className={`absolute left-20 md:left-24 top-2 md:top-4 bg-charcoal text-cream text-[11px] md:text-xs py-2 px-4 rounded-xl shadow-lg border border-cream/10 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 flex items-center gap-1.5 ${
            showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
        >
          {/* Arrow */}
          <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-charcoal border-l border-b border-cream/10" />
          <span>Ready to collaborate? Let's build! 🚀</span>
        </div>
      </div>

      {/* 3. Global Nav Header */}
      <Header />

      {/* 4. Core Page Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <SkillsAndExperience />
        <Projects />
      </main>

      {/* 5. Footer */}
      <Footer />

    </div>
  );
}
