import React from 'react';

const PolicySection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="space-y-4 text-gray-700">
            {children}
        </div>
    </div>
);

const PrivacyPolicyPage = () => {
    return (
        <div className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-lg p-8 sm:p-12 rounded-2xl shadow-xl border border-white/30">
                    <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Privacy Policy</h1>

                    <PolicySection title="1. Introduction">
                        <p>Welcome to Shade Dentistry. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
                    </PolicySection>

                    <PolicySection title="2. Information We Collect">
                        <p>We may collect personal identification information (Name, email address, phone number, etc.) from you in a variety of ways, including, but not limited to, when you visit our site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site.</p>
                    </PolicySection>

                    <PolicySection title="3. How We Use Your Information">
                        <p>We may use the information we collect from you to: personalize your experience, improve our website, process transactions, and send periodic emails regarding your appointment or other products and services.</p>
                    </PolicySection>
                    
                    <PolicySection title="4. Sharing Your Information">
                        <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers.</p>
                    </PolicySection>

                    <PolicySection title="5. Security of Your Information">
                        <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
                    </PolicySection>

                    <PolicySection title="6. Your Consent">
                        <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
                    </PolicySection>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;