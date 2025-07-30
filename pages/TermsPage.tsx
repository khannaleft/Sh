import React from 'react';

const PolicySection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="space-y-4 text-gray-700">
            {children}
        </div>
    </div>
);

const TermsPage = () => {
    return (
        <div className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-lg p-8 sm:p-12 rounded-2xl shadow-xl border border-white/30">
                    <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Terms & Conditions</h1>

                    <PolicySection title="1. Agreement to Terms">
                        <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                    </PolicySection>

                    <PolicySection title="2. Use License">
                        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Shade Dentistry's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
                    </PolicySection>

                    <PolicySection title="3. Disclaimer">
                        <p>The materials on Shade Dentistry's website are provided "as is". Shade Dentistry makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    </PolicySection>

                    <PolicySection title="4. Limitations">
                        <p>In no event shall Shade Dentistry or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Shade Dentistry's website.</p>
                    </PolicySection>

                    <PolicySection title="5. Governing Law">
                        <p>Any claim relating to Shade Dentistry's website shall be governed by the laws of the State without regard to its conflict of law provisions.</p>
                    </PolicySection>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;