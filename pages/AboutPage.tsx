import React from 'react';

const TeamMember = ({ name, title, imageUrl, bio }: { name: string; title: string; imageUrl: string; bio: string; }) => (
  <div className="text-center bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <img className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg border-4 border-white/50" src={imageUrl} alt={name} />
    <h3 className="mt-6 text-base font-semibold text-gray-900">{name}</h3>
    <p className="text-sm text-brand-blue-600 font-medium">{title}</p>
    <p className="mt-2 text-gray-700">{bio}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="bg-transparent">
      {/* Page Header */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">About Shade Dentistry</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
            Dedicated to providing exceptional dental care in a welcoming and comfortable environment.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/40">
            <h2 className="text-3xl font-bold text-brand-blue-700">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-700">
              Our mission is to improve the oral health and overall well-being of our patients. We strive to deliver the highest quality dental care through advanced technology and personalized treatment plans. We are committed to creating a positive and stress-free experience for every person who walks through our doors.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <img className="rounded-2xl shadow-xl border-4 border-white/50" src="https://picsum.photos/500/500?random=3" alt="Dental tools" />
          </div>
        </div>
      </div>

      {/* Our Doctors */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Doctors</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
              Our skilled and compassionate dentists are the heart of our practice.
            </p>
          </div>
          <div className="mt-12 mx-auto grid max-w-7xl gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Dr. Noble Alfred"
              title="Lead Dentist, DDS"
              imageUrl="https://picsum.photos/200/200?random=4"
              bio="Dr. Alfred is an expert in general and cosmetic dentistry, dedicated to crafting healthy, beautiful smiles with a gentle touch."
            />
            <TeamMember
              name="Dr. Devi Shanmugam"
              title="Pediatric Dentist"
              imageUrl="https://picsum.photos/200/200?random=5"
              bio="Dr. Shanmugam specializes in providing friendly and compassionate dental care for children, focusing on prevention and education."
            />
             <TeamMember
              name="Dr. Sathya"
              title="Orthodontist"
              imageUrl="https://picsum.photos/200/200?random=10"
              bio="Dr. Sathya is passionate about creating perfectly aligned smiles for patients of all ages using modern orthodontic solutions."
            />
          </div>
        </div>
      </div>

      {/* Clinic Gallery */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Our State-of-the-Art Clinic</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="https://res.cloudinary.com/dfbz4neaf/image/upload/v1753746104/WhatsApp_Image_2024-07-02_at_17.47.58_bb1cdf0d_ctqdct.jpg" alt="Shade Dentistry clinic entrance" className="rounded-xl shadow-lg border-2 border-white/40 object-cover w-full h-full" />
              <img src="https://picsum.photos/400/300?random=7" alt="Dental chair" className="rounded-xl shadow-lg border-2 border-white/40 object-cover w-full h-full" />
              <img src="https://picsum.photos/400/300?random=8" alt="Clinic hallway" className="rounded-xl shadow-lg border-2 border-white/40 object-cover w-full h-full" />
              <img src="https://picsum.photos/400/300?random=9" alt="Advanced equipment" className="rounded-xl shadow-lg border-2 border-white/40 object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;