import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Achieve Academic Excellence with Arise Institute
              </h1>
              <p className="text-xl mb-8">
                Expert coaching for NEET, IIT-JEE, and school students from classes 8th to 12th (CBSE & ICSE).
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/courses"
                  className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100 transition-colors"
                >
                  Explore Courses
                </Link>
                {/* <Link
                  to="/admin"
                  className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100 transition-colors"
                >
                  Add Course
                </Link> */}
                <a
                  href="https://forms.gle/2C8PSmMNoyhezNnH8"
                  className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Students studying"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Arise Intitue?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive education solutions designed to help students excel in their academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from experienced educators with proven track records of student success.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Our students consistently achieve top ranks in competitive exams and board examinations.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Batch Sizes</h3>
              <p className="text-gray-600">
                Limited students per batch ensures personalized attention and better learning outcomes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Material</h3>
              <p className="text-gray-600">
                Access to study materials, practice tests, and regular assessments to track progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coaching programs designed to help students achieve their academic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Medical Entrance Exam"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">NEET Preparation</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive coaching for NEET aspirants with focus on Physics, Chemistry, and Biology.
                </p>
                <Link
                  to="/courses?category=NEET"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Engineering Entrance Exam"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">IIT-JEE Coaching</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance for JEE Main and Advanced with emphasis on problem-solving techniques.
                </p>
                <Link
                  to="/courses?category=IIT"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="CBSE Classes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">CBSE (Classes 8-12)</h3>
                <p className="text-gray-600 mb-4">
                  Subject-wise coaching for CBSE students with focus on board exam preparation.
                </p>
                <Link
                  to="/courses?category=CBSE"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="ICSE Classes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">ICSE (Classes 8-12)</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive coaching for ICSE students with emphasis on conceptual clarity.
                </p>
                <Link
                  to="/courses?category=ICSE"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our students who have achieved their academic goals with our guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  {/* <p className="text-sm text-gray-500">NEET 2024 - AIR 156</p> */}
                </div>
              </div>
              <p className="text-gray-600">
                "The faculty at Arise Intitue helped me understand complex concepts in Biology and Chemistry. Their guidance was crucial for my NEET preparation."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Rahul Verma</h4>
                  {/* <p className="text-sm text-gray-500">IIT-JEE 2024 - AIR 342</p> */}
                </div>
              </div>
              <p className="text-gray-600">
                "The problem-solving techniques taught at Arise Intitue were game-changers for my JEE preparation. The faculty is extremely supportive."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Ananya Patel</h4>
                  {/* <p className="text-sm text-gray-500">CBSE Class 12 - 98.6%</p> */}
                </div>
              </div>
              <p className="text-gray-600">
                "The regular tests and personalized feedback helped me improve my weak areas. I'm grateful to the teachers for their constant support."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Academic Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join Arise Intitue today and take the first step towards achieving your academic goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/courses"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100 transition-colors"
            >
              Browse Courses
            </Link>
            
               <a
                  href="https://forms.gle/2C8PSmMNoyhezNnH8"
                  className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-indigo-600 transition-colors"
                >
                   Get in Touch
                </a>
          </div>
        </div>
      </section>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;