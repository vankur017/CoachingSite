
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import ContactUs from './pages/ContactUs';
import AdminPage from './pages/AdminPage';
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="/admin" element={<AdminPage />} />
      
      </Routes>
  
    </div>
  );
}

export default App;
