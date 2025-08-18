


import React from "react";

const InvestmentOptions = () => {
  return (
    <section 
     id="InvestmentOptions"
      className="py-16 bg-white font-chivo">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0E1B33] mb-2">
            Invest on your convenience
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla
          </p>
        </div>

        {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
  {/* Short term */}
  <div className="relative rounded-lg overflow-hidden shadow-md group h-80 w-80 mx-auto">
    <img
      src="/images/short-terms.png"
      alt="Short term investment"
      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
    <div className="absolute top-3 left-3 text-green-400 text-[10px] font-semibold tracking-wider">
      NEW FARM TODAY
    </div>
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-lg font-bold mb-1">
        Short terms investment
      </h3>
      <p className="text-xs max-w-xs mb-3">
        Invest in farms that will be ready  harvest in 3-18 months
      </p>
      <button className="bg-white text-gray-900 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100 transition">
        Browse Farm
      </button>
    </div>
  </div>

  {/* Long term */}
  <div className="relative rounded-lg overflow-hidden shadow-md group h-80 w-80 mx-auto">
    <img
      src="/images/fully-funded.png"
      alt="Long term investment"
      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
    <div className="absolute top-3 left-3 text-green-400 text-[10px] font-semibold tracking-wider">
      FULLY FUNDED
    </div>
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-lg font-bold mb-1">
        Long terms investment
      </h3>
      <p className="text-xs max-w-xs mb-3">
        Consider farms that have long term investment program.
      </p>
      <button className="bg-white text-gray-900 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100 transition">
        Learn More
      </button>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default InvestmentOptions;
