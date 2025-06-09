import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // This should be the path to your CV file in the public folder
    link.download = 'Jeevan_Gowda_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Jeevan Gowda L S
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            Frontend Developer & UI/UX Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive web experiences with modern technologies. 
            Passionate about clean code, intuitive design, and bringing ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            
            <button 
              onClick={downloadCV}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Download CV
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Github size={28} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Mail size={28} />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;