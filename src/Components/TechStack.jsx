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
        { icon: "fas fa-list-alt", color: "text-green-500", name: "Data Structure & Algorithm" },
      ]
    }
  ];

  const renderTechStack = (stack) => (
    <div key={stack.category} className="font-semibold italic bg-gray-100 rounded-lg shadow-md p-6  hover:shadow-black">
      <h3 className="text-xl font-bold mb-4 text-gray-800">{stack.category}</h3>
      <div className="grid grid-cols-3 gap-4">
        {stack.technologies.slice(0, 9).map((tech) => (
          <div key={tech.name} className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-2 hover:bg-white transition-all duration-300 hover:translate-x-1 hover:shadow-md hover:shadow-black">
            {typeof tech.icon === 'string' && tech.icon.startsWith('fa') ? (
              <i className={`${tech.icon} text-2xl sm:text-3xl ${tech.color}`} />
            ) : (
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 sm:w-10 sm:h-10" />
            )}
            <h4 className="text-xs sm:text-sm font-semibold mt-1 text-center text-gray-800">{tech.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="text-gray-800 py-20" id="techstack">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStacks.map(renderTechStack)}
        </div>
      </div>
    </div>
  );
};
export default TechStack;