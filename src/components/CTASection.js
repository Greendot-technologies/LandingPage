


// CTASection.jsx
import React from 'react';

const CTASection = () => {
  return (
    <section 
     id="CTASection"
      className="bg-white py-16 relative font-chivo">
      <div className="max-w-3xl mx-auto px-4 text-center shadow-xl rounded-2xl py-10 bg-gradient-to-b from-white to-green-50">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] leading-snug">
          The future of <span className="text-green-500">Farm Investing</span> is Farmseasy
        </h2>
        <p className="mt-3 text-gray-600 text-sm max-w-md mx-auto">
          Join thousands of investors who are growing their wealth through sustainable farming.
        </p>
        <button className="mt-6 bg-green-500 hover:bg-green-600 transition-colors text-white px-6 py-2.5 rounded-lg text-base font-medium shadow-md">
          Invest Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
