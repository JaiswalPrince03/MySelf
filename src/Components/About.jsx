import React from "react";
import AboutImage from "../assets/Aboutme-image.png";

const About = () => {
  return (
    <div className=" text-black" id="about">
      <div className="container mx-auto p-1 md:p-16 lg:p-24 pt-0 mt-[-20px]">
        <h2 className="text-4xl font-bold text-center mb-0">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="w-full md:w-[45%] flex justify-center mb-6 md:mb-0 ">
            <img
              src={AboutImage}
              alt="My Image"
              loading="lazy"
              width="230"
              height="300"
              decoding="async"
              className="rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-black"
            />
          </div>
          <div className="flex-1">
            <p className="text-xl font-semibold italic leading-relaxed mb-4 text-gray-700 px-3">
              Hi, I'm Prince Jaiswal, a Web Developer with a passion for creating dynamic and responsive web applications with specialize in Cloud Computing using Amazon Web Services.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-bold text-center mb-3">Education</h2>
          <div className=" flex flex-col md:flex-row justify-center md:space-x-12">
            {[
              {
                title: "10th Standard",
                school: "Government High School",
                passingYear: "2018",
                percentage: "60.2%",
              },
              {
                title: "12th Standard",
                school: "S.R.A.P. College, Bara Chakia",
                passingYear: "2020",
                percentage: "64.2%",
              },
              {
                title: "Graduation",
                degree: "B.Tech CSE (CTIS)",
                college: "Maharishi Markandeshwar (Deemed to be University)",
                batch: "2021-2025",
                cgpa: "8 CGPA",
              },
            ].map((education, index) => (
              <div
                key={index}
                className=" font-normal italic bg-gray-100 w-full md:w-[30%]  p-4 rounded-2xl shadow-md mb-6 md:mb-0 transition-transform duration-300 hover:scale-105 hover:shadow-black"
              >
                <h3 className="text-2xl font-bold mb-5">{education.title}</h3>
                {education.degree && (
                  <p className="text-base leading-relaxed mb-2">
                    Degree: {education.degree}
                  </p>
                )}
                <p className="text-base leading-relaxed mb-2">
                  School/College: {education.school || education.college}
                </p>
                <p className="text-base leading-relaxed mb-2">
                  Passing Year: {education.passingYear || education.batch}
                </p>
                <p className="text-base leading-relaxed">
                  Percentage/CGPA: {education.percentage || education.cgpa}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-bold text-center mb-4">Internships</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
            {[
              {
                title: "Web Development Intern",
                company: "Gowox Infotech Private Limited",
                duration: "May 10th 2024 - June 10th 2024",
                description:
                  "Netflix Homepage, Temperature converter",
              },
              {
                title: "Web Developer Intern",
                company: "Bharat Intern",
                duration: "November 10th 2023 - December 10th 2023",
                description:
                  "Portfolio, Homepage of Netflix"
              },
              {
                title: "Web Developement Intern",
                company: "Cognifyz Technologies",
                duration: "October 10th 2023 - November 10th 2023",
                description:
                  "Task related to page landing responsive design front-end Frameworks like Bootstrap etc."
              },
              {
                title: "Web Developer Intern",
                company: "CodeClause Pvt. Ltd.",
                duration: "September 1st 2023 - October 1st 2023",
                description:
                  "Stopwatch, Timer, YouTube Clone Using API etc"
              },
            ].map((internship, index) => (
              <div
                key={index}
                className="  font-normal italic bg-gray-100 p-4 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-black"
              >
                <h3 className="text-2xl font-bold mb-5">{internship.title}</h3>
                <p className="text-base leading-relaxed mb-2">
                  Company/MNC: {internship.company}
                </p>
                <p className="text-base leading-relaxed mb-2">
                  Duration: {internship.duration}
                </p>
                <p className="text-base leading-relaxed">
                  Description: {internship.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;