import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue-500 text-white shadow-md">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;