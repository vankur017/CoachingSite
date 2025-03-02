export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'NEET' | 'IIT' | 'CBSE' | 'ICSE';
  grade?: string; // For school courses (8th to 12th)
  duration: string;
  startDate: string;
  fee: number;
  seats: number;
  availableSeats: number;
  image: string;
}

export interface User {
  uid: string;
  name: string;
  phone: string;
  email?: string;
  enrolledCourses?: string[];
}

export interface Booking {
  id: string;
  userId: string;
  courseId: string;
  bookingDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  paymentStatus: 'pending' | 'completed';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'responded';
}