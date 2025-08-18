


import React from "react";

const HeroSection = () => {
  return (
    <section 
      id="HeroSection"
      className="bg-white relative overflow-hidden font-chivo"
    >
      <div className="grid lg:grid-cols-12 lg:gap-0 min-h-screen">
        
        {/* Left content */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:col-span-6 lg:pl-32">
          <h1
            className="text-xl font-extrabold tracking-tight text-gray-800 sm:text-4xl"
          >
            A New Era in <br className="hidden sm:block" /> Indian Agriculture
          </h1>
          <p className="mt-4 text-lg text-gray-500 sm:mt-6 sm:text-lg sm:max-w-2xl">
            We bring farmers, agri-input companies, seed producers, and governments onto one unified platform – solving inefficiencies, boosting productivity, and creating long-term sustainability.
          </p>
          <div className="mt-6 sm:mt-8">
            <a            
              href="https://farmseasy-app.s3.ap-south-1.amazonaws.com/app-release.apk"
                  target="_blank"
                rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white font-medium rounded shadow hover:bg-green-600 transition font-chivo"
            
            >
              Our MVP
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="relative lg:col-span-6 h-full">
          <img
            className="absolute top-0 right-0 w-full h-full object-cover"
            src="/images/hero-header.png"
            alt="Farmer Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
