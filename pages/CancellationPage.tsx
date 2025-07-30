import React from 'react';

const PolicySection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="space-y-4 text-gray-700">
            {children}
        </div>
    </div>
);

const CancellationPage = () => {
    return (
        <div className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-lg p-8 sm:p-12 rounded-2xl shadow-xl border border-white/30">
                    <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Appointment Cancellation Policy</h1>

                    <PolicySection title="Our Commitment">
                        <p>At Shade Dentistry, we are committed to providing all of our patients with exceptional care. When a patient cancels without giving enough notice, they prevent another patient from being seen.</p>
                    </PolicySection>

                    <PolicySection title="Cancellation Request">
                        <p>We understand that situations arise in which you must cancel your appointment. It is therefore requested that if you must cancel your appointment you provide more than 24 hours notice. This will enable for another person who is waiting for an appointment to be scheduled in that appointment slot.</p>
                    </PolicySection>
                    
                    <PolicySection title="How to Cancel">
                        <p>To cancel an appointment, please call our office at 6381777217. We require that you call at least 24 hours prior to your scheduled appointment. Leaving a message on our voicemail is an acceptable form of cancellation.</p>
                    </PolicySection>

                    <PolicySection title="Late Cancellations / No-Shows">
                        <p>A cancellation is considered late when the appointment is cancelled less than 24 hours before the appointed time. A no-show is when a patient misses an appointment without cancelling. In either case, we may charge the patient a missed appointment fee.</p>
                    </PolicySection>
                </div>
            </div>
        </div>
    );
};

export default CancellationPage;