import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Instagram, Facebook, Twitter, Leaf } from 'lucide-react';

import PageHeader from '../components/PageHeader';
import SectionTransition from '../components/SectionTransition';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact - LeafLog</title>
        <meta name="description" content="Get in touch with LeafLog for inquiries, partnerships, and information about our environmental initiatives." />
      </Helmet>

      <PageHeader
        title="Contact Us"
        subtitle="Reach out to our team for inquiries, partnerships, or to get involved with our initiatives."
        image="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <SectionTransition direction="left">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our environmental initiatives? Want to partner with us or volunteer?
                  We'd love to hear from you. Reach out using the contact information below or
                  fill out the form and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary/10 p-3 rounded-full">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-secondary">Email</h3>
                      <a href="mailto:hello@leaflog.org" className="text-gray-600 hover:text-primary transition-colors">
                        hello@leaflog.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-primary/10 p-3 rounded-full">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-secondary">Office Location</h3>
                      <address className="text-gray-600 not-italic">
                        123 Forest Avenue<br />
                        Green Valley, GJ 54321<br />
                        India
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-primary/10 p-3 rounded-full">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-secondary">Phone</h3>
                      <a href="tel:+15551234567" className="text-gray-600 hover:text-primary transition-colors">
                        (+91) 123-4567-890
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-secondary mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </SectionTransition>

            {/* Contact Form */}
            <SectionTransition direction="right">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-secondary mb-6">Send a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-success/10 border border-success/30 rounded-lg p-4 text-success flex items-center"
                  >
                    <Leaf className="mr-2" size={20} />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        ></textarea>
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full btn-primary flex justify-center items-center"
                        >
                          {isSubmitting ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          ) : (
                            <>
                              <Send size={18} className="mr-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Map Section (Simplified) */}
      <section className="section bg-secondary/5 p-0">
        <div className="h-96 bg-gray-300 w-full">
          {/* In a real implementation, this would be a map integration */}
          <div className="h-full flex items-center justify-center">
            <div className="text-center px-4">
              <MapPin size={40} className="text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p>123 Forest Avenue, Green Valley, GJ 54321</p>
              <button className="mt-4 px-4 py-2 bg-white rounded-lg shadow text-primary font-medium">
                View on Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <SectionTransition>
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
            <p className="section-subtitle text-center">
              Find answers to common questions about our environmental initiatives and organization.
            </p>
          </SectionTransition>

          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            <SectionTransition delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  How can I volunteer with LeafLog?
                </h3>
                <p className="text-gray-600">
                  You can join our volunteer program by filling out the form on this page or emailing us at
                  volunteers@leaflog.org. We have opportunities for all skill levels and time commitments.
                </p>
              </div>
            </SectionTransition>

            <SectionTransition delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  Does LeafLog accept donations?
                </h3>
                <p className="text-gray-600">
                  Yes, we welcome donations to support our environmental conservation efforts. You can donate
                  through our website or contact us directly for other donation options and partnerships.
                </p>
              </div>
            </SectionTransition>

            <SectionTransition delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  How are my donations used?
                </h3>
                <p className="text-gray-600">
                  Your donations directly fund our tree planting initiatives, educational programs, and conservation
                  projects. We maintain full transparency about fund allocation in our annual reports.
                </p>
              </div>
            </SectionTransition>

            <SectionTransition delay={0.5}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  Can my business partner with LeafLog?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We offer corporate partnership opportunities for businesses interested in
                  environmental sustainability. Contact our partnerships team at partners@leaflog.org.
                </p>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;