import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Course } from '../types';
import CourseCard from '../components/CourseCard';
import CategoryFilter from '../components/CategoryFilter';
import { BookOpen } from 'lucide-react';
import axios from 'axios';

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryFilter = searchParams.get('category');
  const gradeFilter = searchParams.get('grade');

  const fetchCourses = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:3000/api/courses");
      let coursesData: Course[] = response.data;
      // Client-side filtering based on URL parameters
      if (categoryFilter && categoryFilter !== "all") {
        coursesData = coursesData.filter(course => course.category === categoryFilter);
      }
      if (gradeFilter && gradeFilter !== "all") {
        coursesData = coursesData.filter(course => course.grade === gradeFilter);
      }
      setCourses(coursesData);
    } catch (err) {
      console.error("Error fetching courses:", err);
      setError("Failed to load courses. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [categoryFilter, gradeFilter]);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our comprehensive range of courses designed to help students excel in their academic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CategoryFilter />
          </div>
          
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
              </div>
            ) : error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            ) : courses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <BookOpen size={48} className="mx-auto text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Courses Found</h3>
                <p className="text-gray-600">
                  We couldn't find any courses matching your current filters. Please try different filter options or check back later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
