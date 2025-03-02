
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Have any questions or need assistance? Get in touch with us!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-indigo-500" 
                    rows={5}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="text-indigo-600" size={24} />
              <p className="text-gray-700">123 Coaching St, New York, NY</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-indigo-600" size={24} />
              <p className="text-gray-700">+1 234 567 890</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-indigo-600" size={24} />
              <p className="text-gray-700">contact@coachingwebsite.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
