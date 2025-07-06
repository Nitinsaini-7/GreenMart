import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Leaf, Heart, Shield, Truck } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Store Locator', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  const customerService = [
    { name: 'Help Center', href: '#' },
    { name: 'Order Tracking', href: '#' },
    { name: 'Delivery Info', href: '#' },
    { name: 'Returns & Refunds', href: '#' },
    { name: 'Product Recalls', href: '#' },
    { name: 'Accessibility', href: '#' }
  ];

  const categories = [
    { name: 'Fresh Produce', href: '#' },
    { name: 'Meat & Seafood', href: '#' },
    { name: 'Dairy & Eggs', href: '#' },
    { name: 'Bakery', href: '#' },
    { name: 'Organic', href: '#' },
    { name: 'Frozen Foods', href: '#' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Accessibility Statement', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: '#' }
  ];

  const features = [
    { icon: <Leaf className="w-5 h-5" />, text: 'Fresh & Organic' },
    { icon: <Truck className="w-5 h-5" />, text: 'Free Delivery' },
    { icon: <Shield className="w-5 h-5" />, text: 'Quality Guaranteed' },
    { icon: <Heart className="w-5 h-5" />, text: 'Community First' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                Green<span className="text-white">Mart</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your trusted neighborhood grocery store, serving fresh, quality products 
                to our community for over 25 years.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">123 Fresh Street, Green Valley, CA 90210</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">hello@greenmart.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Mon-Sat: 7AM-10PM, Sun: 8AM-9PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Customer Service</h4>
            <ul className="space-y-3">
              {customerService.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Shop Categories</h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-800 rounded-lg">
                <div className="text-green-400 mr-3">
                  {feature.icon}
                </div>
                <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

       

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 hover:bg-green-500 text-gray-300 hover:text-white p-3 rounded-lg transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* App Download */}
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-3">Download Our App</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200">
                  App Store
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200">
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 greenmart. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200"
                >
                  {policy.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;