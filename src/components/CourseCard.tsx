import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const {
    id,
    title,
    description,
    category,
    grade,
    duration,
    startDate,
    fee,
    availableSeats,
    image
  } = course;

  // Format the price with commas for thousands
  const formattedFee = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(fee);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded">
            {category} {grade ? `Class ${grade}` : ''}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-2" />
            <span>Starts: {new Date(startDate).toLocaleDateString()}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-2" />
            <span>Duration: {duration}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-2" />
            <span>Available Seats: {availableSeats}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-600">{formattedFee}</span>
          <a
                  href="https://forms.gle/2C8PSmMNoyhezNnH8"
                  className="px-6 py-3 bg-transparent border-2 bg-blue-500 font-semibold rounded-md  hover:text-white transition-colors"
                >
                  Contact Us
          </a>
          {/* <Link 
            to={`/courses/${id}`}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            View Details
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;