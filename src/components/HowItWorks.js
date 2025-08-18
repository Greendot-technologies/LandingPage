

import React, { useState } from "react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Select your farmshare and complete reservation form here.",
      description:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere",
    },
    {
      title: "We prepare the farm for investment.",
      description:
        "Our team ensures the land is properly prepared, cultivated and maintained to provide maximum yield and efficiency for your investment portfolio.",
    },
    {
      title: "Monitor the progress online.",
      description:
        "Track your farm's growth, crop stages, and investment performance in real time through our comprehensive online dashboard and monitoring system.",
    },
    {
      title: "Receive returns after harvest.",
      description:
        "Once the harvest is complete, profits are distributed according to your investment agreement, directly deposited to your designated account.",
    },
  ];

  return (
    <section
      className="py-28 relative overflow-hidden bg-cover bg-center font-chivo"
      style={{
        backgroundImage: "url('/images/how-it-works.png')", // ✅ public folder path
      }}
    >
      {/* Optional: dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-green-600 bg-opacity-60"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            How it works
          </h2>
          <p className="text-base text-green-100 max-w-3xl mx-auto leading-relaxed">
            Take your pick from the supply chain and participate in agribusiness projects backed up not only by Zou, but also by the best land, family heritage, innovation, and overall superior expertise.
          </p>
        </div>

        {/* Step Numbers with connecting lines */}
        <div className="flex justify-center items-center mb-10">
          <div className="flex items-center space-x-3">
            {steps.map((_, index) => (
              <React.Fragment key={index}>
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    activeStep === index
                      ? "bg-white text-green-500 shadow-lg scale-105"
                      : "bg-white bg-opacity-30 text-white border border-white border-opacity-50 hover:bg-opacity-40 hover:scale-105"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="w-20 h-0.5 bg-white bg-opacity-50"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Title */}
          <div className="text-left">
            <h3 className="text-lg lg:text-xl font-bold text-white leading-snug">
              {steps[activeStep].title}
            </h3>
          </div>

          {/* Right side - Description */}
          <div className="text-left">
            <p className="text-sm text-green-100 leading-relaxed">
              {steps[activeStep].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
