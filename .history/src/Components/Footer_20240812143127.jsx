import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Footer = () => {
  return (
    <footer className="bg-primary bg-opacity-20 text-white py-8 font-averia fixed bottom-0 left-0 w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-4xl font-playfair text-primary font-extrabold mb-6">Techvaganza 2024</h2>
            <p className="text-2xl font-playfair text-secondary font-extrabold mb-6">Where Innovation Meets Sustainability</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-playfair text-primary mb-2">Exciting Activities</h3>
            <div className="flex">
              <ul className="text-lg flex-1 font-playfair">
                <li><Link to="/" className="text-secondary hover:underline">Hackathons</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Project Showcase</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Workshops</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Tech Talks</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Trivia</Link></li>
              </ul>
              <ul className="text-lg flex-1 ml-10 font-playfair">
                <li><Link to="/" className="text-secondary hover:underline">Gaming Arena</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Dancing</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Karaoke</Link></li>
                <li><Link to="/" className="text-secondary hover:underline">Singing</Link></li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl text-primary font-playfair">Location</h3>
            <div className="relative w-full h-64 mt-4"> {/* Adjust the height as needed */}
              <MapContainer center={[34.083656, 74.797372]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[34.083656, 74.797372]}>
                  <Popup>this is us!</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-playfair">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-lg text-secondary hover:underline">Instagram</a>
              <a href="#" className="text-lg text-secondary hover:underline">Facebook</a>
              <a href="#" className="text-lg text-secondary hover:underline">LinkedIn</a>
              <a href="#" className="text-lg text-secondary hover:underline">Twitter</a>
            </div>
          </div>
        </div><MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
        <div className="mt-8 text-center">
          <p className="text-lg">© Techvaganza 2024, all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
