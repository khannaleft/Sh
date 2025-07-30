import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    <NavLink to="/" onClick={onClick} className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-brand-blue-700 bg-white/50' : 'text-gray-700 hover:text-brand-blue-700 hover:bg-white/30'}`} end>Home</NavLink>
    <NavLink to="/about" onClick={onClick} className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-brand-blue-700 bg-white/50' : 'text-gray-700 hover:text-brand-blue-700 hover:bg-white/30'}`}>About</NavLink>
    <NavLink to="/services" onClick={onClick} className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-brand-blue-700 bg-white/50' : 'text-gray-700 hover:text-brand-blue-700 hover:bg-white/30'}`}>Services</NavLink>
    <NavLink to="/contact" onClick={onClick} className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-brand-blue-700 bg-white/50' : 'text-gray-700 hover:text-brand-blue-700 hover:bg-white/30'}`}>Contact Us</NavLink>
  </>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white/50 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-white/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-brand-blue-700">
              Shade Dentistry
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLinks />
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue-600 hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500 transition-transform duration-300 hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white/50 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col bg-white/80 backdrop-blur-md">
            <NavLinks onClick={closeMenu} />
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue-600 hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;