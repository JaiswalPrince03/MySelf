import React from "react";

const Footer = () => {
  return (
    <footer className="text-black py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Prince Jaiswal</h3>
            <p className="text-black">
              Web Developer based in India, specializing in web and
              software development also in cloud computing.
            </p>
          </div>
        </div>

        <div
          className="border-t border-black pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-black">
            &copy; {new Date().getFullYear()} Prince Jaiswal. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.linkedin.com/in/prince-kumar-00704b267?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B0KMcXIdhT3SsnMwsoHurmw%3D%3D" target="_blank" className="text-gray-500 hover:text-black" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://github.com/JaiswalPrince03" target="_blank" className="text-gray-500 hover:text-black" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.instagram.com/its_jaiswal_prince?igsh=bzFjcDY2bHl4ZGo1" target="_blank" className="text-gray-500 hover:text-black" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.facebook.com/share/A1TgDfJ5oTfy6XD3/?mibextid=qi2Omg" target="_blank" className="text-gray-500 hover:text-black" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" target="_blank" className="text-gray-500 hover:text-black" rel="noopener noreferrer">
              Privacy
            </a>
            <a href="#" target="_blank" className="text-gray-500 hover:text-black" rel="noopener noreferrer">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;