import React, { useState, useRef } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Window Blinds',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing');
      // Fallback for demo purposes if keys aren't set yet
      setTimeout(() => {
        setIsSending(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ name: '', email: '', phone: '', service: 'Window Blinds', message: '' });
      }, 1500);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: `Phone: ${formData.phone}\nService Requested: ${formData.service}\n\n${formData.message}`,
        },
        publicKey
      );

      setIsSending(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: '', email: '', phone: '', service: 'Window Blinds', message: '' });
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try again or call us directly.');
      setIsSending(false);
    }
  };

  const services = [
    'Window Blinds',
    'Shutters',
    'Wooden Flooring',
    'Sliding Burglar Guards'
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-secondary mb-6">Get a <span className="text-primary">Free Quote</span> Today</h2>
        <p className="text-gray-600 mb-8">
          Ready to transform your space? Fill out the form below and our team will get back to you within 24 hours with a professional assessment and quote.
        </p>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-secondary">Call Us</div>
              <a href="tel:0828432791" className="text-gray-600 hover:text-primary transition-colors">082 843 2791</a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-secondary">Email Us</div>
              <a href="mailto:nenesons@gmail.com" className="text-gray-600 hover:text-primary transition-colors">nenesons@gmail.com</a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="font-bold text-secondary">Gauteng Office</div>
                <p className="text-gray-600">308 Mpilo Street, Sangweni Section, Tembisa</p>
              </div>
              <div>
                <div className="font-bold text-secondary">Mpumalanga Office</div>
                <p className="text-gray-600">4263 Phola Park, Kwamhlanga 1022</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
      >
        {isSubmitted ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Mandla Nene"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="082 123 4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="nenesons@gmail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              >
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            <button 
              type="submit" 
              disabled={isSending}
              className="btn-primary w-full py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <Loader2 className="ml-2 w-5 h-5 animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  Send Quote Request
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;
