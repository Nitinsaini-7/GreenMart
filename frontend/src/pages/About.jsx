import React from 'react';
import { Leaf, Heart, Users, Award, ShoppingCart, Clock, MapPin, Phone } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Fresh & Organic",
      description: "We source the freshest organic produce directly from local farms, ensuring quality and sustainability in every bite."
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: "Community First",
      description: "Supporting local farmers and giving back to our community is at the heart of everything we do."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Family Owned",
      description: "Three generations of passion for quality food and exceptional service, treating every customer like family."
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Quality Guaranteed",
      description: "Our commitment to excellence ensures you get the best products at competitive prices, every time."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Store Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      role: "Produce Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Service Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "25+", label: "Years of Service" },
    { number: "500+", label: "Local Farmers" },
    { number: "50K+", label: "Happy Customers" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              About Green<span className="text-green-500">Mart</span>
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
              For over 25 years, we've been your neighborhood's trusted source for fresh, quality groceries. 
              From farm to table, we're committed to bringing you the best nature has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 1998 by the Johnson family, greenmart began as a small corner store with a big dream: 
                to provide our community with access to fresh, affordable, and high-quality groceries.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Today, we've grown into a beloved local institution while maintaining our core values of 
                freshness, quality, and community service. Every product on our shelves is carefully selected 
                to meet our high standards.
              </p>
              <div className="flex items-center space-x-4">
                <ShoppingCart className="w-6 h-6 text-green-500" />
                <span className="text-green-600 font-semibold">Serving the community since 1998</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop" 
                alt="Fresh produce display"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Years Strong</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing products to serving our customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-green-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our dedicated team members are here to help you find exactly what you need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-green-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-green-100 leading-relaxed mb-8">
            "To nourish our community by providing fresh, quality groceries while supporting local farmers 
            and maintaining the highest standards of service and sustainability."
          </p>
          <div className="flex justify-center space-x-8 text-green-100">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Open 7 Days</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Local Delivery</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the greenmart difference today. Visit us in-store or shop online for delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Shopping
            </button>
            <button className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Visit Store
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;