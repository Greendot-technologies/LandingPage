

// import React from "react";

// const NewOpportunities = () => {
//   return (
//     <section 
//     id="NewOpportunities"
//      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden font-chivo">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
//         <div className="w-full h-full bg-green-200 rounded-full transform -translate-x-32 -translate-y-16"></div>
//       </div>
//       <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20">
//         <div className="w-full h-full bg-green-300 rounded-full transform -translate-x-24 translate-y-12"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">
//             Our Products
//           </h2>
//           <p className="text-base text-gray-600 max-w-2xl mx-auto">
//             we are the first who offer wide range of product for following .
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          
//           {/* Card 1 */}
//           <div className="bg-white rounded-2xl shadow-lg p-7 w-56 h-88 flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
//             <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
//               <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
//                 <svg className="w-4.5 h-4.5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
//                 </svg>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 For Farmers
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 Free forever mobile app
//                 <br />
//                 AI-powered mobile application designed for Indian farmers.
//               </p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-green-100 rounded-2xl shadow-lg p-7 w-56 h-88 flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
//             <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
//               <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
//                 <svg className="w-4.5 h-4.5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                 </svg>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 For Agri Input companies
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                Marketplace Access – Connect with agri-input companies, agri-tech providers.
//               </p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white rounded-2xl shadow-lg p-7 w-56 h-88 flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
//             <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
//               <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
//                 <svg className="w-4.5 h-4.5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
//                 </svg>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 For  Seed Industry
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 Saas Model Platform for – Production quality seeds and large scaling farming

//               </p>
//             </div>

//           </div>
//           {/* Card 4 */}
//           <div className="bg-green-100 rounded-2xl shadow-lg p-7 w-56 h-88 flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
//             <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
//               <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
//                 <svg className="w-4.5 h-4.5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
//                 </svg>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 For  Government
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 With Precious  advisory and Satellite imaginary, help government for accurate   reporting with historical data .

//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewOpportunities;

import React from "react";

const NewOpportunities = () => {
  return (
    <section 
    id="NewOpportunities"
     className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden font-chivo">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <div className="w-full h-full bg-green-200 rounded-full transform -translate-x-32 -translate-y-16"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20">
        <div className="w-full h-full bg-green-300 rounded-full transform -translate-x-24 translate-y-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Products
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            we are the first who offer wide range of product for following .
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          
          {/* Card 1 - For Farmers */}
          <div className="bg-white rounded-2xl shadow-lg p-7 w-56 h-88 flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.1-.45 2.1-1.17 2.83L12 18l-2.83-3.17C8.45 14.1 8 13.1 8 12z"/>
                  <circle cx="12" cy="12" r="1"/>
                  <path d="M3 20c0-3.87 3.13-7 7-7h4c3.87 0 7 3.13 7 7"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                For Farmers
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Free forever mobile app
                <br />
                AI-powered mobile application designed for Indian farmers.
              </p>
            </div>
          </div>

          {/* Card 2 - For Agri Input Companies */}
          <div className="bg-green-100 rounded-2xl shadow-lg p-7 w-56 h-88 flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                  <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
                  <rect x="2" y="14" width="4" height="2" rx="1"/>
                  <rect x="18" y="14" width="4" height="2" rx="1"/>
                  <path d="M2 18H6V20H2V18ZM18 18H22V20H18V18Z"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                For Agri Input companies
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
               Marketplace Access – Connect with agri-input companies, agri-tech providers.
              </p>
            </div>
          </div>

          {/* Card 3 - For Seed Industry */}
          <div className="bg-white rounded-2xl shadow-lg p-7 w-56 h-88 flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/>
                  <path d="M12 6C12 8.21 13.79 10 16 10C16.55 10 17 10.45 17 11V13C17 13.55 16.55 14 16 14H8C7.45 14 7 13.55 7 13V11C7 10.45 7.45 10 8 10C10.21 10 12 8.21 12 6Z"/>
                  <path d="M8 14V16C8 17.66 9.34 19 11 19H13C14.66 19 16 17.66 16 16V14H8Z"/>
                  <ellipse cx="8" cy="8" rx="2" ry="1"/>
                  <ellipse cx="16" cy="8" rx="2" ry="1"/>
                  <path d="M6 8C6 9.1 6.9 10 8 10C7.45 10 7 10.45 7 11V12C7 12.55 7.45 13 8 13H9V22H7V13H6C5.45 13 5 12.55 5 12V9C5 8.45 5.45 8 6 8Z"/>
                  <path d="M18 8C18 9.1 17.1 10 16 10C16.55 10 17 10.45 17 11V12C17 12.55 16.55 13 16 13H15V22H17V13H18C18.55 13 19 12.55 19 12V9C19 8.45 18.55 8 18 8Z"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                For Seed Industry
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Saas Model Platform for – Production quality seeds and large scaling farming
              </p>
            </div>
          </div>

          {/* Card 4 - For Government */}
          <div className="bg-green-100 rounded-2xl shadow-lg p-7 w-56 h-88 flex flex-col justify-between text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 3.18L19 6.3V11C19 15.5 16.18 19.5 12 20.72C7.82 19.5 5 15.5 5 11V6.3L12 3.18Z"/>
                  <path d="M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                  <rect x="9" y="9" width="6" height="1"/>
                  <rect x="9" y="11" width="6" height="1"/>
                  <rect x="9" y="13" width="4" height="1"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                For Government
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                With Precious advisory and Satellite imaginary, help government for accurate reporting with historical data .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewOpportunities;