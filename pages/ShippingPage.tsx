import React from 'react';

const PolicySection = ({ title, children }: { title:string, children: React.ReactNode }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="space-y-4 text-gray-700">
            {children}
        </div>
    </div>
);

const ShippingPage = () => {
    return (
        <div className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-lg p-8 sm:p-12 rounded-2xl shadow-xl border border-white/30">
                    <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">Shipping & Delivery Policy</h1>

                    <PolicySection title="Applicability">
                        <p>This policy applies to any physical products sold through the Shade Dentistry website, such as specialized dental care kits, electric toothbrushes, or other dental hygiene products.</p>
                        <p>Please note: This policy does not apply to dental services rendered at our clinic.</p>
                    </PolicySection>

                    <PolicySection title="Processing Time">
                        <p>Orders are typically processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.</p>
                    </PolicySection>

                    <PolicySection title="Shipping Rates & Delivery Estimates">
                        <p>Shipping charges for your order will be calculated and displayed at checkout. Delivery delays can occasionally occur.</p>
                    </PolicySection>
                    
                    <PolicySection title="Shipment Confirmation & Order Tracking">
                        <p>You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.</p>
                    </PolicySection>
                </div>
            </div>
        </div>
    );
};

export default ShippingPage;