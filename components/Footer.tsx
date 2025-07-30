import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900/40 backdrop-blur-lg border-t border-white/20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Shade Dentistry</h3>
            <p className="text-gray-300 text-sm">
              Providing top-quality dental care with a gentle touch. Your smile is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-4">
              <li><Link to="/" className="text-base text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-base text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-base text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-base text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h4>
            <ul className="mt-4 space-y-4">
              <li><Link to="/privacy-policy" className="text-base text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-base text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cancellation" className="text-base text-gray-300 hover:text-white transition-colors">Cancellation Policy</Link></li>
              <li><Link to="/shipping" className="text-base text-gray-300 hover:text-white transition-colors">Shipping & Delivery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Contact Us</h4>
            <div className="mt-4 space-y-4 text-gray-300">
                <p className="text-base">501 Sathyamoorthy Street, Nazarathpet, Chennai 600123</p>
                <p className="text-base">Phone: 6381777217</p>
                <a href="https://wa.me/916381777217" target="_blank" rel="noopener noreferrer" className="text-base hover:text-white transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004-1.27 4.625 4.759-1.25zM9.354 8.324c-.135-.27-.306-.351-.476-.354-.219-.003-1.082.003-1.082.003-.219.003-.374.05-.592.271-.219.22-.754.765-.754 1.855s.768 2.139.873 2.314c.107.176 1.582 2.515 3.93 3.53.518.225.938.362 1.25.463.518.168.975.141 1.32.083.4-.067 1.056-.437 1.207-.823.151-.386.151-.715.107-.823s-.168-.168-.352-.271c-.183-.105-1.082-.533-1.25-.592s-.299-.083-.448.083c-.15.168-.592.683-.727.823s-.271.168-.518.083c-.246-.083-.938-.33-1.785-.985C10.02 11.225 9.53 10.64 9.354 10.1c-.176-.546-.083-.823.084-.995.141-.141.306-.352.42-.492.114-.141.141-.246.225-.42.083-.176.042-.315-.042-.42z"/></svg>
                  WhatsApp: 6381777217
                </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Shade Dentistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;