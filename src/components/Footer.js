

// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white relative text-center font-chivo">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* COMPANY */}
          <div>
            <h3 className="text-xs font-bold text-gray-700 tracking-wider mb-3">COMPANY</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#NewOpportunities">Products</a></li>
              <li><a href="#Testimonials">Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* INVEST */}
          <div>
            <h3 className="text-xs font-bold text-gray-700 tracking-wider mb-3">INVEST</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#">Features</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-xs font-bold text-gray-700 tracking-wider mb-3">LEGAL</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>

          {/* BLOG Farmseasy CARD */}
          <div className="bg-green-500 rounded-lg p-5 text-white">
            <h4 className="font-bold mb-1">Contact Us</h4>
            <p className="text-sm text-green-50 mb-4">
              Write email to us 
              app@farmseasy.in
            </p>
            <button className="bg-white text-green-500 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100">
              Sign In
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-xs">
            © 2025 Farmseasy Platform Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
