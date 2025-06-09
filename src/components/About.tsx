import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Hi, I'm Jeevan Gowda L S
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate frontend developer eager to create engaging digital experiences. I                   specialize in React, TypeScript, and modern web technologies, with a strong interest                  in design and user experience. I'm always learning and excited to contribute to real-                 world projects and grow as a developer.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge through tech blogs and community 
                workshops. I believe in writing clean, maintainable code and creating 
                intuitive user interfaces.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <User className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Experience</h4>
                    <p className="text-gray-600">Fresher</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Hassan, Karnataka</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Calendar className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Available</h4>
                    <p className="text-gray-600">Full-time</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 w-80 h-80 mx-auto bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 text-lg font-medium">
                  <img 
                    src="my-photo.JPG" 
                    alt="Jeevan Gowda L S" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;