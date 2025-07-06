import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: "Visit Our Store",
      details: ["123 Fresh Street", "Green Valley, CA 90210"],
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Call Us",
      details: ["(555) 123-4567", "Customer Service"],
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: "Email Us",
      details: ["hello@greenmart.com", "Quick Response"],
      action: "Send Email"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Store Hours",
      details: ["Mon-Sat: 7:00 AM - 10:00 PM", "Sunday: 8:00 AM - 9:00 PM"],
      action: "View Schedule"
    }
  ];

  const departments = [
    { name: "General Inquiry", value: "general" },
    { name: "Product Complaint", value: "complaint" },
    { name: "Delivery Support", value: "delivery" },
    { name: "Store Feedback", value: "feedback" },
    { name: "Partnership", value: "partnership" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Get in touch with our friendly team for any questions, 
            feedback, or support you need.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-green-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="text-gray-600 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="mb-1">{detail}</p>
                  ))}
                </div>
                <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                  {info.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-600 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        {departments.map((dept) => (
                          <option key={dept.value} value={dept.value}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Find Us
                </h2>
                <div className="aspect-w-16 aspect-h-12 mb-6">
                  <div className="w-full h-64 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-green-500 mx-auto mb-2" />
                      <p className="text-green-600 font-medium">Interactive Map</p>
                      <p className="text-gray-500 text-sm">Map integration would go here</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">123 Fresh Street, Green Valley, CA 90210</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Parking</h4>
                    <p className="text-gray-600">Free parking available in front and behind the store</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Public Transport</h4>
                    <p className="text-gray-600">Bus stops #12 and #34 are within walking distance</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-500 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>hello@greenmart.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3" />
                    <span>Response within 24 hours</span>
                  </div>
                </div>
                <button className="mt-6 bg-white text-green-500 font-semibold py-2 px-4 rounded-lg hover:bg-green-50 transition-colors">
                  Emergency Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">What are your delivery hours?</h3>
              <p className="text-gray-600">We deliver Monday-Saturday 9 AM - 8 PM, Sunday 10 AM - 6 PM.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Do you accept returns?</h3>
              <p className="text-gray-600">Yes, we accept returns within 7 days with receipt for non-perishable items.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Is there a minimum order for delivery?</h3>
              <p className="text-gray-600">Yes, we require a minimum order of $35 for free delivery.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer organic products?</h3>
              <p className="text-gray-600">Absolutely! We have a wide selection of certified organic produce and products.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;