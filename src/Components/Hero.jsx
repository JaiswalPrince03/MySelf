import React from 'react'
import HeroImage from '../assets/hero-image.jpg'

const Hero = () => {
  return (
    <div className='text-black text-center py-16 mt-20'>
      <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black'/>
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Prince</span>
        ,
      </h1>
      <p className='text-4xl font-bold'>
       Web Developer and Cloud Computing student.
      </p>
      <div className='mt-8 space-x-4'>
        <a href="https://drive.google.com/file/d/1S3KssVxwnTJpf-Cl0p4_R0Uwh0MCGwA6/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
          <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hover:shadow-lg hover:shadow-black'>
            <i className="fas fa-file-pdf" /> Resume
          </button>
        </a>
      </div>
      <section className='mt-8'>
        <h2 className='text-2xl font-bold mb-4'>Connect with me</h2>
        <div className='flex justify-center space-x-4'>
          <a 
            href="https://www.linkedin.com/in/prince-kumar-00704b267" 
            target="_blank" 
            rel="noopener noreferrer"
            className='bg-gradient-to-r from-blue-500 to-blue-700 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hover:shadow-lg hover:shadow-black'>
              <i className="fab fa-linkedin" /> LinkedIn
          </a>
          <a 
            href="https://github.com/JaiswalPrince03" 
            target="_blank" 
            rel="noopener noreferrer"
            className='bg-gradient-to-r from-gray-500 to-gray-700 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hover:shadow-lg hover:shadow-black'>
              <i className="fab fa-github" /> GitHub
          </a>
          <a 
            href="mailto:princejaiswal9199@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className='bg-gradient-to-r from-red-500 to-red-700 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full hover:shadow-lg hover:shadow-black'>
              <i className="fas fa-envelope" /> Email
          </a>
         
        </div>
      </section>
    </div>
  )
}

export default Hero