import React from 'react';
import canvaIcon from '../assets/canva.webp';
import github from '../assets/github.png';

const TechStack = () => {
  const techStacks = [
    {
      category: "Frontend",
      technologies: [
        { icon: "fab fa-react", color: "text-blue-500", name: "React" },
        { icon: "fab fa-html5", color: "text-orange-500", name: "HTML5" },
        { icon: "fab fa-css3-alt", color: "text-blue-400", name: "CSS3" },
        { icon: "fab fa-js", color: "text-yellow-500", name: "JavaScript" },
      ]
    },
    {
      category: "Backend",
      technologies: [
        { icon: "fab fa-node-js", color: "text-green-500", name: "Node.js" },
        { icon: "fas fa-server", color: "text-green-500", name: "Express" },
        { icon: "fab fa-java", color: "text-red-500", name: "Java" },
        { icon: "fab fa-python", color: "text-yellow-500", name: "Python" },
      ]
    },
    {
      category: "Database",
      technologies: [
        { icon: "fas fa-database", color: "text-green-500", name: "MongoDB" },
        { icon: "fas fa-database", color: "text-blue-500", name: "MySQL" },
      ]
    },
    {
      category: "DevOps & Others",
      technologies: [
        { icon: "fab fa-git-alt", color: "text-red-500", name: "Git" },
        { icon: github, color: "text-gray-700", name: "GitHub" },
        { icon: "fab fa-npm", color: "text-red-600", name: "npm" },
        { icon: "fab fa-aws", color: "text-orange-500", name: "AWS" },
        { icon: "fas fa-object-group", color: "text-green-500", name: "OOPs" },
        { icon: "fab fa-wordpress", color: "text-blue-500", name: "WordPress" },
        { icon: canvaIcon, color: "text-pink-500", name: "Canva" },
      ]
    }
  ];

  return (
    <div className="container mx-auto py-16" id="techstack">
      <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
      {techStacks.map((stack, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{stack.category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stack.technologies.map((tech, techIndex) => (
              <div key={techIndex} className="flex items-center space-x-2">
                {typeof tech.icon === 'string' ? (
                  <i className={`${tech.icon} ${tech.color} text-3xl`}></i>
                ) : (
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                )}
                <span className="text-lg">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;