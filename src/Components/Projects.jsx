import React, { useState } from 'react';
import smartHomeImage from '../assets/smarthome.jpg';
import smartDoorbellImage from '../assets/doorbell.jpg';
import youtube from '../assets/youtube.png';
import stopwatch from '../assets/stopwatch.png';

const Projects = () => {
  const projects = [
    {
      title: "Smart Home",
      description: "This project aims to create a home automation system using Arduino and ESP32, allowing for remote control and monitoring of various devices and appliances. By incorporating various sensors, such as temperature, humidity, light, and motion sensors, the system can automate tasks like adjusting lighting based on ambient light, controlling temperature and humidity, and activating security measures. Additionally, the project can integrate with smart devices like speakers and thermostats for voice control and enhanced functionality.",
      technologies: ["Arduino Mega 2580", "ESP 32", "Adafruit IO"],
      githubLink: "https://github.com/JaiswalPrince03/Internet-of-Things/blob/main/Home_Automation.ino",
      image: smartHomeImage
    },
    {
      title: "Smart DoorBell",
      description: "This project aims to enhance the functionality of an existing doorbell by incorporating Arduino and sensors. By utilizing a relay, the project can automate the doorbell's activation based on specific conditions. For example, a motion sensor could trigger the doorbell when someone approaches the door, eliminating the need for a physical press. Additionally, the project could integrate with other smart home devices for notifications or security purposes.",
      technologies: ["Arduino UNO", "Relay Module", "Sensors"],
      githubLink: "https://github.com/JaiswalPrince03/Internet-of-Things/blob/main/Door_bell.ino",
      image: smartDoorbellImage
    },
    {
      title: "Youtube Clone",
      description: "This mini project aims to create a simplified version of YouTube using HTML, CSS, and JavaScript. By leveraging YouTube's public API, the project can fetch video data, thumbnails, and descriptions to display on a user interface. Users can search for videos, view their details, and play them within the application. While the project may not have all the features of YouTube, it provides a foundation for understanding web development concepts and working with APIs.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/JaiswalPrince03/CodeClauseInternship_Youtube",
      image: youtube
    },
    {
      title: "Stopwatch",
      description: "This mini project aims to create a functional stopwatch using HTML, CSS, and JavaScript. The project will display a digital timer that can be started, paused, and reset. Users can use the stopwatch for various purposes, such as timing activities, cooking, or workouts.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/JaiswalPrince03/CodeClauseInternship_Stopwatch",
      image: stopwatch
    },
    // Add more projects as needed
  ];

  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState({});

  const truncateDescription = (description, maxLength) => {
    const words = description.split(' ');
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(' ') + '...';
    }
    return description;
  };

  const toggleDescription = (index) => {
    setShowFullDescription(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="font-normal italic bg-gray-100 rounded-lg shadow-md p-6 shadow-emerald-500/20 hover:shadow-lg hover:shadow-black"
            >
              <div 
                className="relative h-48 overflow-hidden"
                onMouseEnter={() => setHoveredImageIndex(index)}
                onMouseLeave={() => setHoveredImageIndex(null)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                  style={{
                    transform: hoveredImageIndex === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {showFullDescription[index] 
                    ? project.description 
                    : truncateDescription(project.description, 30)}
                  {project.description.split(' ').length > 30 && (
                    <button 
                      onClick={() => toggleDescription(index)}
                      className="text-blue-500 hover:text-blue-600 ml-1"
                    >
                      {showFullDescription[index] ? 'See less' : 'See more'}
                    </button>
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300 hover:translate-x-1 hover:shadow-md hover:shadow-black">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
