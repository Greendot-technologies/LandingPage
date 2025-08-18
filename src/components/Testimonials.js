

// import React from "react";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Balaji Nayak",
//       title: "Founder & CEO",
//       content:
//         '"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae"',
//       avatar: "/images/avatar1.jpg",
//     },
//         {
//       name: "Yogesh Kulkarni",
//       title: "Product Manager",
//       content:
//         '"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae"',
//       avatar: "/images/avatar1.jpg",
//     },
    
//     {
//       name: "Rutuja Dalal",
//       title: "Software Engineer",
//       content:
//         '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"',
//       avatar: "/images/avatar2.jpg",
//     },
//     {
//       name: "Pratiksha Bhise",
//       title: "Software Engineer",
//       content:
//         '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"',
//       avatar: "/images/avatar3.jpg",
//     },
//   ];

//   return (
//     <section 
//      id="Testimonials"
//       className="py-16 bg-white relative overflow-hidden font-chivo">
//       {/* Green highlight background */}
//       <div className="absolute top-10 left-0 w-48 h-8 bg-green-200 opacity-50 rounded-r-full"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="mb-8 pl-10">
//           <h2 className="text-4xl font-extrabold text-gray-900 leading-snug relative z-10">
//             Meet our core team of {" "}
//                         <span className="flex items-center text-2xl font-bold font-chivo">
//                 <span className="text-green-600">Farms</span>
//                 <span className="text-black">easy</span>
//               </span>
//           </h2>
//           <p className="mt-2 text-gray-600 text-sm max-w-xl">
//             We are a team of passionate individuals dedicated to revolutionizing the agricultural industry through technology and innovation.
//           </p>
//         </div>




//         {/* Scrollable & Centered Testimonial Cards */}
//         <div className="overflow-x-auto">
//           <div className="flex justify-center space-x-6 min-w-max pb-4">
//             {testimonials.map((testimonial, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-lg shadow-md p-5 w-64 h-64 flex-shrink-0 flex flex-col"
//               >
//                 {/* Profile */}
//                 <div className="flex items-center mb-4">
//                   <img
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                     className="w-10 h-10 rounded-full object-cover mr-3"
//                   />
//                   <div>
//                     <h4 className="text-green-600 font-semibold text-sm">
//                       {testimonial.name}
//                     </h4>
//                     <p className="text-gray-600 text-xs">{testimonial.title}</p>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <p className="text-gray-600 text-xs leading-relaxed flex-grow">
//                   {testimonial.content}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Balaji Nayak",
      title: "Founder & CEO",
      content:
        '"Leading Farmseasy has been an incredible journey. Our vision of empowering farmers with technology is becoming reality, and seeing the positive impact on agricultural communities drives me every day."',
      avatar: "https://ui-avatars.com/api/?name=Balaji+Nayak&background=16a34a&color=fff&size=40&rounded=true",
    },
    {
      name: "Yogesh Kulkarni",
      title: "Product Manager",
      content:
        '"Working closely with farmers to understand their needs has shaped our product strategy. Every feature we build is designed to solve real problems and make farming more efficient and profitable."',
      avatar: "https://ui-avatars.com/api/?name=Yogesh+Kulkarni&background=16a34a&color=fff&size=40&rounded=true",
    },
    {
      name: "Rutuja Dalal",
      title: "Software Engineer",
      content:
        '"Building scalable solutions for agriculture is both challenging and rewarding. Our technology stack ensures farmers get reliable, fast access to the tools they need, even in remote areas."',
      avatar: "https://ui-avatars.com/api/?name=Rutuja+Dalal&background=16a34a&color=fff&size=40&rounded=true",
    },
    {
      name: "Pratiksha Bhise",
      title: "Software Engineer",
      content:
        '"Developing features that directly impact food security and farmer livelihoods gives my work deeper meaning. Every line of code contributes to sustainable agriculture and better farming practices."',
      avatar: "https://ui-avatars.com/api/?name=Pratiksha+Bhise&background=16a34a&color=fff&size=40&rounded=true",
    },
  ];

  return (
    <section
      id="Testimonials"
      className="py-16 bg-white relative overflow-hidden font-chivo">
      {/* Green highlight background */}
      <div className="absolute top-10 left-0 w-48 h-8 bg-green-200 opacity-50 rounded-r-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 pl-10">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug relative z-10">
            Meet our core team of{" "}
            <span className="flex items-center text-2xl font-bold font-chivo">
              <span className="text-green-600">Farms</span>
              <span className="text-black">easy</span>
            </span>
          </h2>
          <p className="mt-2 text-gray-600 text-sm max-w-xl">
            We are a team of passionate individuals dedicated to revolutionizing the agricultural industry through technology and innovation.
          </p>
        </div>

        {/* Scrollable & Centered Testimonial Cards */}
        <div className="overflow-x-auto">
          <div className="flex justify-center space-x-6 min-w-max pb-4">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-5 w-64 h-64 flex-shrink-0 flex flex-col"
              >
                {/* Profile */}
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=16a34a&color=fff&size=40&rounded=true`;
                    }}
                  />
                  <div>
                    <h4 className="text-green-600 font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-xs">{testimonial.title}</p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-600 text-xs leading-relaxed flex-grow">
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;