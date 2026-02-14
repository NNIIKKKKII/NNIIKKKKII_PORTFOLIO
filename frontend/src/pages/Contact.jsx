import React from 'react';
import Header from '../components/Header';
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-between items-center min-h-screen px-6 md:px-20 py-20"
    >
      <Header pretitle="Get in touch" title="Contact Me" />

      {/* Single Container */}
      <div className="flex flex-col md:flex-row items-center 
                      border border-black rounded-2xl 
                      w-full md:w-auto mt-10 overflow-hidden">

        {/* Email */}
        <a
          href="mailto:nikhilpareeshwad@gmail.com"
          className="flex items-center justify-center gap-3 
                     w-full md:w-auto
                     px-8 py-5 text-xl
                     transition-all duration-300
                     hover:bg-gray-100"
        >
          <FaEnvelope size={24} />
          Email
        </a>

        {/* Divider (only desktop) */}
        <div className="hidden md:block w-px h-10 bg-black"></div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nikhil-pareeshwad/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 
                     w-full md:w-auto
                     px-8 py-5 text-xl
                     transition-all duration-300
                     hover:bg-gray-100"
        >
          <FaLinkedin size={24} />
          LinkedIn
        </a>

      </div>

      <div className="mt-16 text-center">
        <p>Copyright © 2026 Nikhil Pareeshwad. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
