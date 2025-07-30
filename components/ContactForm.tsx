import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    if (!name || !email || !message) {
      setFeedbackMessage('Please fill out all required fields.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage('Message sent successfully! We will get back to you shortly.');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong.');
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setFeedbackMessage(error.message || 'Failed to send message. Please try again later.');
    } finally {
        setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-800">Full Name</label>
        <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500 focus:bg-white/70 sm:text-sm transition-colors" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email Address</label>
        <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500 focus:bg-white/70 sm:text-sm transition-colors" />
      </div>
       <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-800">Phone Number (Optional)</label>
        <input type="tel" name="phone" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500 focus:bg-white/70 sm:text-sm transition-colors" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
        <textarea name="message" id="message" rows={4} value={message} onChange={e => setMessage(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue-500 focus:border-brand-blue-500 focus:bg-white/70 sm:text-sm transition-colors"></textarea>
      </div>
      <div>
        <button type="submit" disabled={status === 'submitting'} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue-600 hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500 disabled:bg-brand-blue-400 transition-transform duration-300 hover:scale-105">
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {status === 'success' && <p className="text-green-700 font-medium p-3 bg-green-100/50 rounded-md">{feedbackMessage}</p>}
      {status === 'error' && <p className="text-red-700 font-medium p-3 bg-red-100/50 rounded-md">{feedbackMessage}</p>}
    </form>
  );
};

export default ContactForm;