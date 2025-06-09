import React from 'react';
import { Code2, Database, Globe, Smartphone, Palette, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'Next.js', level: 85 },
      ]
    },
    {
      icon: <Palette size={32} />,
      title: 'Styling & UI',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'CSS3', level: 95 },
        { name: 'Sass/SCSS', level: 85 },
        { name: 'Styled Components', level: 80 },
      ]
    },
    {
      icon: <Database size={32} />,
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'Webpack', level: 70 },
        { name: 'REST APIs', level: 85 },
      ]
    }
  ];

  const tools = [
    { name: 'React', color: 'bg-blue-500' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'HTML5', color: 'bg-orange-500' },
    { name: 'CSS3', color: 'bg-blue-400' },
    { name: 'Tailwind', color: 'bg-teal-500' },
    { name: 'Node.js', color: 'bg-green-600' },
    { name: 'Git', color: 'bg-red-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className={`${tool.color} text-white px-6 py-3 rounded-full font-medium transform hover:scale-105 transition-transform duration-200 shadow-md`}
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;