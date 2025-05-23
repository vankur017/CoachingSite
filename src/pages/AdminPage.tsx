import React, { useState, useEffect } from "react";
import axios from "axios";

interface Course {
  courseId: string;
  title: string;
  description: string;
  category: "NEET" | "IIT" | "CBSE" | "ICSE";
  grade: string;
  duration: string;
  startDate: string;
  fee: string;
  seats: string;
  availableSeats: string;
  image: string;
}

const AdminPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formData, setFormData] = useState<Course>({
    courseId: "",
    title: "",
    description: "",
    category: "CBSE",
    grade: "",
    duration: "",
    startDate: "",
    fee: "",
    seats: "",
    availableSeats: "",
    image: "",
  });
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);

  // Fetch existing courses from backend
  const fetchCourses = async () => {
    try {
      const response = await axios.get("https://edtechbackend-qtbw.onrender.com/api/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate unique ID
  const generateID = () => {
    return `id-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  };

  // Handle form submission for add/update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingCourseId) {
        const { courseId, ...updatedData } = formData; // ✅ Remove courseId before sending
        await axios.put(`https://edtechbackend-qtbw.onrender.com/api/admin/courses/${editingCourseId}`, updatedData);
        alert("Course updated successfully!");
      } else {
        const newCourse = { ...formData, courseId: generateID() }; // ✅ Use courseId instead of id
        await axios.post("https://edtechbackend-qtbw.onrender.com/api/admin/courses", newCourse);
        alert("New course added successfully!");
      }
      setEditingCourseId(null);
      fetchCourses();
    } catch (error) {
      console.error("Error submitting form", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Prepare form for editing
  const handleEdit = (course: Course) => {
    setEditingCourseId(course.courseId);
    setFormData({ ...course });
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-5">
        {editingCourseId ? "Edit Course" : "Add New Course"}
      </h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-10">
        <input type="text" value={formData.courseId} readOnly placeholder="Generated ID will appear here" className="w-full p-2 border rounded mb-2 bg-gray-100" />
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required className="w-full p-2 border rounded mb-2" />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required className="w-full p-2 border rounded mb-2" />
        <select name="category" value={formData.category} onChange={handleChange} required className="w-full p-2 border rounded mb-2">
          <option value="CBSE">CBSE</option>
          <option value="ICSE">ICSE</option>
          <option value="IIT">IIT</option>
          <option value="NEET">NEET</option>
        </select>
        <input type="text" name="grade" placeholder="Grade (optional)" value={formData.grade} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
        <input type="text" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} required className="w-full p-2 border rounded mb-2" />
        <input type="date" name="startDate" placeholder="Start Date" value={formData.startDate} onChange={handleChange} required className="w-full p-2 border rounded mb-2" />
        <input type="number" name="fee" placeholder="Fee" value={formData.fee} onChange={handleChange} required className="w-full p-2 border rounded mb-2" />
        <input type="number" name="seats" placeholder="Total Seats" value={formData.seats} onChange={handleChange} required className="w-full p-2 border rounded mb-2" />
        <input type="number" name="availableSeats" placeholder="Available Seats" value={formData.availableSeats} onChange={handleChange} required className="w-full p-2 border rounded mb-2" />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required className="w-full p-2 border rounded mb-2" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          {editingCourseId ? "Update Course" : "Add Course"}
        </button>
      </form>
      {/* Course List */}
      <h2 className="text-2xl font-bold mb-4">Existing Courses</h2>
      <ul>
        {courses.map((course) => (
          <div key={course.courseId}>
            <li className="bg-gray-100 p-4 rounded mb-2 flex justify-between items-center">
              <span>{course.title}</span>
              <button onClick={() => handleEdit(course)} className="bg-yellow-500 text-white px-3 py-1 rounded">
                Edit
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
