import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-primary bg-opacity-20 text-white py-8 font-averia fixed bottom-0 left-0 w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-4xl font-playfair text-primary font-extrabold mb-6">Techvaganza 2024</h2>
            <p className="text-2xl font-playfair text-secondary font-extrabold">Where Innovation Meets Sustainability</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-playfair text-primary">Exciting Activities</h3>
            <ul className="text-lg">
  <li><Link to="/" className="text-secondary hover:underline">Hackathons</Link></li>
  <li><Link to="/" className="text-secondary hover:underline">Project Showcase</Link></li>
  <li><Link to="/" className="text-secondary hover:underline">Workshops</Link></li>
  <li><Link to="/" className="text-secondary hover:underline">Tech Talks</Link></li>
  <li><Link to="/" className="text-secondary hover:underline">Trivia</Link></li>
  <li><Link to="/" className="text-secondary hover:underline">Gaming Arena</Link></li>
  <li><Link to="/" className="text-secondary hover:underline">Dancing</Link></li>
  <li><Link to="/" className="text-secondary hover:underline">Kara</Link></li>
</ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-playfair">Location</h3>
            <div className="bg-blue-500 p-4 rounded">
              <p className="text-lg">Stylized Map with Location Pin</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-playfair">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-lg">Instagram</a>
              <a href="#" className="text-lg">Facebook</a>
              <a href="#" className="text-lg">LinkedIn</a>
              <a href="#" className="text-lg">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg">© Techvaganza 2024, all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
