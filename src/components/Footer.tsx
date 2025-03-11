import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Arise Instinute</h3>
            <p className="text-gray-400 mb-4">
              Empowering students to achieve academic excellence through quality education and personalized learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white">Courses</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white">Login</Link>
              </li>
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses?category=NEET" className="text-gray-400 hover:text-white">NEET Preparation</Link>
              </li>
              <li>
                <Link to="/courses?category=IIT" className="text-gray-400 hover:text-white">IIT-JEE Coaching</Link>
              </li>
              <li>
                <Link to="/courses?category=CBSE" className="text-gray-400 hover:text-white">CBSE (8th-12th)</Link>
              </li>
              <li>
                <Link to="/courses?category=ICSE" className="text-gray-400 hover:text-white">ICSE (8th-12th)</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Education Street, Knowledge City, 123456</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@Arise Instinute.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arise Instinute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;