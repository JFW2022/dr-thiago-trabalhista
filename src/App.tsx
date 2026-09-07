import React from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroBand } from './components/IntroBand';
import { ServicesGrid } from './components/ServicesGrid';
import { AboutLawyers } from './components/AboutLawyers';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Testimonials } from './components/Testimonials';
import { FaqAccordion } from './components/FaqAccordion';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-amber selection:text-slate-950 flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <IntroBand />
        <ServicesGrid />
        <AboutLawyers />
        <ProcessTimeline />
        <Testimonials />
        <FaqAccordion />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
