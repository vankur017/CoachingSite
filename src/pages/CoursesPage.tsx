import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Course } from '../types';
import CourseCard from '../components/CourseCard';
import CategoryFilter from '../components/CategoryFilter';
import { BookOpen } from 'lucide-react';
import { collection, getDocs, query, where, Query } from "firebase/firestore";
import { db } from "../firebase/config";

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryFilter = searchParams.get('category');
  const gradeFilter = searchParams.get('grade');
  
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const coursesCollectionRef = collection(db, "courses"); // Correctly getting CollectionReference
        let coursesQuery: Query = query(coursesCollectionRef); // Ensure coursesQuery is a Query
  
        if (categoryFilter && categoryFilter !== "all") {
          coursesQuery = query(coursesCollectionRef, where("category", "==", categoryFilter));
        }
  
        if (gradeFilter && gradeFilter !== "all") {
          coursesQuery = query(coursesCollectionRef, where("grade", "==", gradeFilter));
        }
  
        const querySnapshot = await getDocs(coursesQuery);
        const coursesData: Course[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Course[];
  
        setCourses(coursesData);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchCourses();
  }, [categoryFilter, gradeFilter]);
  
  // For demo purposes, if no courses are found in Firestore, show sample courses
  useEffect(() => {
    if (!loading && courses.length === 0 && !error) {
      // Sample courses data
      const sampleCourses: Course[] = [
        {
          id: '1',
          title: 'NEET Complete Preparation',
          description: 'Comprehensive coaching for NEET aspirants covering Physics, Chemistry, and Biology with regular mock tests and personalized feedback.',
          category: 'NEET',
          duration: '12 months',
          startDate: '2025-06-15',
          fee: 85000,
          seats: 30,
          availableSeats: 12,
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2',
          title: 'IIT-JEE Advanced Course',
          description: 'Intensive coaching for JEE Advanced with focus on problem-solving techniques and advanced concepts in Physics, Chemistry, and Mathematics.',
          category: 'IIT',
          duration: '18 months',
          startDate: '2025-05-10',
          fee: 95000,
          seats: 25,
          availableSeats: 8,
          image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3',
          title: 'CBSE Class 10 Complete Course',
          description: 'Comprehensive coaching for all CBSE Class 10 subjects with special focus on board exam preparation and conceptual clarity.',
          category: 'CBSE',
          grade: '10',
          duration: '9 months',
          startDate: '2025-04-05',
          fee: 45000,
          seats: 20,
          availableSeats: 15,
          image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '4',
          title: 'ICSE Class 12 Science',
          description: 'Expert coaching for ICSE Class 12 Science stream covering Physics, Chemistry, Biology/Mathematics with regular assessments.',
          category: 'ICSE',
          grade: '12',
          duration: '10 months',
          startDate: '2025-04-15',
          fee: 55000,
          seats: 25,
          availableSeats: 18,
          image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '5',
          title: 'CBSE Class 11 Science',
          description: 'Comprehensive coaching for CBSE Class 11 Science stream with focus on building strong fundamentals for competitive exams.',
          category: 'CBSE',
          grade: '11',
          duration: '10 months',
          startDate: '2025-04-20',
          fee: 50000,
          seats: 25,
          availableSeats: 10,
          image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '6',
          title: 'NEET Crash Course',
          description: 'Intensive 6-month crash course for NEET aspirants with focus on high-yield topics and exam strategies.',
          category: 'NEET',
          duration: '6 months',
          startDate: '2025-01-10',
          fee: 60000,
          seats: 30,
          availableSeats: 5,
          image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ];
      
      // Filter sample courses based on URL parameters
      let filteredCourses = sampleCourses;
      
      if (categoryFilter && categoryFilter !== 'all') {
        filteredCourses = filteredCourses.filter(course => course.category === categoryFilter);
      }
      
      if (gradeFilter && gradeFilter !== 'all') {
        filteredCourses = filteredCourses.filter(course => course.grade === gradeFilter);
      }
      
      setCourses(filteredCourses);
    }
  }, [loading, courses.length, error, categoryFilter, gradeFilter]);
  
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