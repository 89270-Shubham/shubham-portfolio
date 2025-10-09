import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Section, SectionTitle, Card, Button } from '../ui';
import { useContactForm } from '../../hooks/useContactForm';

export const Contact: React.FC = () => {
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'shubh05nagargoje@gmail.com',
      href: 'mailto:shubh05nagargoje@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 7972724504',
      href: 'tel:7972724504',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Pune, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shubham-nagargoje-sn',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/89270-Shubham',
    },
  ];

  return (
    <Section id="contact" background="white">
      <SectionTitle subtitle="Let's discuss your next project or opportunity">
        Get In Touch
      </SectionTitle>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            Feel free to reach out through the contact form or connect with me directly.
          </p>

          <div className="space-y-4 mb-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-900 font-medium hover:text-primary-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-900 font-medium">{info.value}</div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white hover:scale-110 transition-transform shadow-lg hover:shadow-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Card className="glass">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            {status.type !== 'idle' && (
              <div
                className={`p-4 rounded-lg flex items-start gap-3 ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : status.type === 'error'
                    ? 'bg-red-50 text-red-800 border border-red-200'
                    : ''
                }`}
              >
                {status.type === 'success' && <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />}
                {status.type === 'error' && <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />}
                <p className="text-sm">{status.message}</p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status.type === 'loading'}
              className="w-full"
            >
              {status.type === 'loading' ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={18} />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
};
