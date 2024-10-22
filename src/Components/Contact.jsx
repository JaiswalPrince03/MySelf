import React from 'react';

const Contact = () => {
  return (
    <div className="text-black py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold italic text-transparent bg-clip-text bg-blue-800 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development Projects, Internships, Jobs opportunities.</p>
            <div className='mb-4 mt-8'>
                <i className="fas fa-envelope"></i>
                <a href="mailto:princejaiswal9199@gmail.com" className='hover:underline'>
                    princejaiswal9199@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <i className="fas fa-phone"></i>
                <span>+91-9199879272</span>
            </div>
            <div className='mb-4'>
                <i className="fas fa-map-marked-alt"></i>
                <span>Chakia, East-Champaran, Bihar, India</span>
            </div>
          </div>
          <div className=' flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-100 border border-gray-200 focus:outline-none
                    focus:border-black text-black'
                    placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input type="email" 
                    className='w-full p-2 rounded bg-gray-100 border border-gray-200  focus:outline-none
                    focus:border-black text-black'
                    placeholder='Enter Your Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea 
                    className='w-full p-2 rounded bg-gray-100 border border-gray-200 focus:outline-none
                    focus:border-black text-black'
                    rows="5"
                    placeholder='Enter Your Message'/>
                </div>
                <button className='bg-blue-500 hover:bg-blue-600 text-white
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;