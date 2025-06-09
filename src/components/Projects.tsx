import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, TypeScript, and modern payment integration. Features include user authentication, product catalog, shopping cart, and order management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.',
      image: 'https://images.pexels.com/photos/7014952/pexels-photo-7014952.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Firebase', 'Material-UI', 'Context API'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics. Features responsive design and dark mode support.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing modern web development practices. Built with React, TypeScript, and Tailwind CSS with smooth animations and mobile-first design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      live: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with data visualization, content scheduling, and performance tracking. Built with modern React patterns.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'Recipe Finder App',
      description: 'A recipe discovery application with advanced search filters, meal planning features, and nutritional information. Integrates with multiple food APIs.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Redux', 'Styled Components', 'REST APIs'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <a href={project.github} className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.live} className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      <Eye size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;