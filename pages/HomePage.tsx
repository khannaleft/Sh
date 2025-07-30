import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const featuredServices = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>,
    title: 'General Dentistry',
    description: 'Comprehensive care for your oral health, from regular check-ups to cleanings.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M17 3h4m-4 5h4M12 3v18" /></svg>,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with our whitening, veneers, and bonding services.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
    title: 'Orthodontics',
    description: 'Straighten your teeth and improve your bite with modern braces and aligners.'
  }
];

const carouselItems = [
    { title: "The Power of Saliva", content: "Your mouth produces about one liter of saliva each day, which is your body's natural defense against cavities and gum disease." },
    { title: "Invisalign's SmartTrack®", content: "Invisalign aligners are made from a patented, flexible material that provides a more comfortable fit and better control over tooth movement." },
    { title: "Flossing is Crucial", content: "Brushing alone only cleans about 60% of your teeth's surfaces. Flossing is essential to clean the remaining 40% between your teeth." },
    { title: "Invisalign is Removable", content: "Unlike traditional braces, you can remove Invisalign aligners to eat, drink, brush, and floss, allowing for better oral hygiene during treatment." },
    { title: "Enamel is Tough Stuff", content: "Tooth enamel is the hardest substance in the human body, even stronger than bone. Protect it from acidic foods and drinks!" },
];

const Carousel = ({ items }: { items: { title: string, content: string }[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 75) {
            // Swiped left
            setCurrentIndex(prev => (prev === items.length - 1 ? 0 : prev + 1));
        }

        if (touchStartX.current - touchEndX.current < -75) {
            // Swiped right
            setCurrentIndex(prev => (prev === 0 ? items.length - 1 : prev - 1));
        }
    };
    
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    }

    return (
        <div className="relative w-full max-w-2xl mx-auto mt-12" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div className="overflow-hidden relative h-48">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="absolute w-full h-full transition-opacity duration-700 ease-in-out"
                        style={{ opacity: index === currentIndex ? 1 : 0 }}
                    >
                       <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 w-full h-full flex flex-col justify-center items-center text-center">
                            <h4 className="font-bold text-xl text-brand-blue-800">{item.title}</h4>
                            <p className="mt-2 text-gray-700">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
             <div className="flex justify-center space-x-3 mt-4">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-brand-blue-600' : 'bg-white/60 hover:bg-white'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};


const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-white min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dfbz4neaf/image/upload/v1753746104/WhatsApp_Image_2024-07-02_at_17.47.58_bb1cdf0d_ctqdct.jpg" alt="Shade Dentistry clinic exterior" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-brand-blue-900/40"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center bg-black/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-shadow-lg">
            Your Smile, Our Passion
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-brand-blue-100">
            Welcome to Shade Dentistry, where we combine state-of-the-art technology with compassionate care to give you the best smile possible.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-blue-700 bg-white hover:bg-brand-blue-50 sm:px-10 transform hover:scale-105 transition-transform duration-300">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer a wide range of dental services to meet all your needs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map(service => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
          <div className="mt-12 text-center">
             <Link to="/services" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue-600 hover:bg-brand-blue-700 transform hover:scale-105 transition-transform duration-300 inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Team Teaser */}
      <section className="py-20">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/40">
                  <h2 className="text-3xl font-bold text-gray-900">Meet Our Expert Team</h2>
                  <p className="mt-4 text-lg text-gray-700">
                      Our team of experienced and friendly dental professionals is dedicated to providing you with personalized care in a comfortable environment. We are passionate about helping you achieve and maintain a healthy, beautiful smile.
                  </p>
                  <div className="mt-8">
                      <Link to="/about" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue-600 hover:bg-brand-blue-700 transform hover:scale-105 transition-transform duration-300 inline-block">
                          Learn More About Us
                      </Link>
                  </div>
              </div>
              <div className="mt-10 lg:mt-0">
                  <img src="https://picsum.photos/600/400?random=2" alt="Dental team" className="rounded-2xl shadow-xl border-4 border-white/50"/>
              </div>
            </div>
         </div>
      </section>

      {/* Dental Facts Carousel */}
       <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Dental Health Insights</h2>
            <p className="mt-4 text-lg text-gray-600">Did you know?</p>
          </div>
          <Carousel items={carouselItems} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Patients Say</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/50 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <p className="text-gray-700 italic">"I had a wonderful experience... From the moment I walked in, I was greeted with warmth and professionalism. Dr Devi was incredibly gentle and thorough... I highly recommend this clinic to anyone in need of dental services."</p>
              <p className="mt-4 font-semibold text-brand-blue-800 text-right">- Elakkiya E.</p>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/50 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <p className="text-gray-700 italic">"Highly professional and skilled doctor who truly cares about her patients. Great experience with my kids dental problem. Doctor Devi explained the procedure clearly and patiently. Made my kid feel comfortable throughout the process."</p>
              <p className="mt-4 font-semibold text-brand-blue-800 text-right">- Sathish K.</p>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/50 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <p className="text-gray-700 italic">"One of the best dental clinic in this locality. Doctor is so friendly and explains the treatment procedures clearly. Ambiance is so good and clean. Equipments are so advanced and I had a painless dental treatment."</p>
              <p className="mt-4 font-semibold text-brand-blue-800 text-right">- Kavitha R.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;