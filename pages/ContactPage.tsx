import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="bg-transparent py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
            We're here to help. Reach out to us for appointments, questions, or any dental concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/50">
             <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
             <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/50">
              <h3 className="text-xl font-semibold text-brand-blue-700">Our Address</h3>
              <p className="mt-2 text-gray-700">
                501 Sathyamoorthy Street, Nazarathpet, Chennai 600123
              </p>
            </div>
             <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/50">
              <h3 className="text-xl font-semibold text-brand-blue-700">Contact Details</h3>
              <p className="mt-2 text-gray-700">Phone: 6381777217</p>
              <a href="https://wa.me/916381777217" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-medium text-gray-700 hover:text-brand-blue-700 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004-1.27 4.625 4.759-1.25zM9.354 8.324c-.135-.27-.306-.351-.476-.354-.219-.003-1.082.003-1.082.003-.219.003-.374.05-.592.271-.219.22-.754.765-.754 1.855s.768 2.139.873 2.314c.107.176 1.582 2.515 3.93 3.53.518.225.938.362 1.25.463.518.168.975.141 1.32.083.4-.067 1.056-.437 1.207-.823.151-.386.151-.715.107-.823s-.168-.168-.352-.271c-.183-.105-1.082-.533-1.25-.592s-.299-.083-.448.083c-.15.168-.592.683-.727.823s-.271.168-.518.083c-.246-.083-.938-.33-1.785-.985C10.02 11.225 9.53 10.64 9.354 10.1c-.176-.546-.083-.823.084-.995.141-.141.306-.352.42-.492.114-.141.141-.246.225-.42.083-.176.042-.315-.042-.42z"/></svg>
                 Chat on WhatsApp
              </a>
            </div>
             <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/50">
              <h3 className="text-xl font-semibold text-brand-blue-700">Office Hours</h3>
              <ul className="mt-2 text-gray-700 space-y-1">
                <li>Monday - Friday: 9:00 AM - 9:00 PM</li>
                <li>Saturday: 10:00 AM - 8:00 PM</li>
                <li>Sunday: 10:00 AM - 8:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
        
         <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-gray-900">Our Location</h3>
             <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.876237540738!2d80.0788749!3d13.0435489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528bd60bf3654d%3A0xb2299a96136305a7!2sSHADE%20DENTISTRY!5e0!3m2!1sen!2sin!4v1753832867844!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location of Shade Dentistry"
               ></iframe>
             </div>
         </div>
      </div>
    </div>
  );
};

export default ContactPage;