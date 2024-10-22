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

  return (
    <div className="container mx-auto py-16" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            onMouseEnter={() => setHoveredImageIndex(index)}
            onMouseLeave={() => setHoveredImageIndex(null)}
          >
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-48 object-cover transition-transform duration-300 ${
                hoveredImageIndex === index ? 'transform scale-105' : ''
              }`}
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">
                {showFullDescription[index]
                  ? project.description
                  : `${project.description.substring(0, 100)}...`}
                <button
                  className="text-blue-500 hover:underline ml-2"
                  onClick={() =>
                    setShowFullDescription((prev) => ({
                      ...prev,
                      [index]: !prev[index],
                    }))
                  }
                >
                  {showFullDescription[index] ? 'Show Less' : 'Show More'}
                </button>
              </p>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-200 text-gray-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;