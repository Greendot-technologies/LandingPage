

// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NewOpportunities from './components/NewOpportunities';
import InvestmentOptions from './components/InvestmentOptions';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <NewOpportunities />
      {/* <InvestmentOptions />
      <HowItWorks /> */}
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;