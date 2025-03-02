import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const categories = [
  { id: 'all', name: 'All Courses' },
  { id: 'NEET', name: 'NEET' },
  { id: 'IIT', name: 'IIT-JEE' },
  { id: 'CBSE', name: 'CBSE' },
  { id: 'ICSE', name: 'ICSE' }
];

const grades = [
  { id: 'all', name: 'All Classes' },
  { id: '8', name: 'Class 8' },
  { id: '9', name: 'Class 9' },
  { id: '10', name: 'Class 10' },
  { id: '11', name: 'Class 11' },
  { id: '12', name: 'Class 12' }
];

const CategoryFilter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const currentCategory = searchParams.get('category') || 'all';
  const currentGrade = searchParams.get('grade') || 'all';
  
  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(location.search);
    
    if (categoryId === 'all') {
      params.delete('category');
    } else {
      params.set('category', categoryId);
    }
    
    navigate(`/courses?${params.toString()}`);
  };
  
  const handleGradeChange = (gradeId: string) => {
    const params = new URLSearchParams(location.search);
    
    if (gradeId === 'all') {
      params.delete('grade');
    } else {
      params.set('grade', gradeId);
    }
    
    navigate(`/courses?${params.toString()}`);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-6">
      <h3 className="text-lg font-semibold mb-4">Filter Courses</h3>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-3 py-1 text-sm rounded-full ${
                currentCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {(currentCategory === 'CBSE' || currentCategory === 'ICSE' || currentCategory === 'all') && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Grade</h4>
          <div className="flex flex-wrap gap-2">
            {grades.map(grade => (
              <button
                key={grade.id}
                onClick={() => handleGradeChange(grade.id)}
                className={`px-3 py-1 text-sm rounded-full ${
                  currentGrade === grade.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {grade.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;