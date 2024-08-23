import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SimpleFooter = () => {
  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="mt-2">
          <a 
            href='https://github.com/MNGARCIA085' 
            target='_git' 
            title='repos'
            className="me-3" 
            aria-label="GitHub"
            style={{ color: '#333' }} // Change the color here
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="mailto:mngarcia085@gmail.com"
            title="Send email"
            className="me-3" 
            aria-label="Email"
            style={{ color: '#f00' }} // Change the color here
          >
            <FaEnvelope size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/marcos-garcía-a04633106/"
            target='_in'
            title="Linkedin"
            aria-label="LinkedIn"
            style={{ color: '#0077b5' }} // Change the color here
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
