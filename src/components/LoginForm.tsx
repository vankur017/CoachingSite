import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useForm } from 'react-hook-form';

interface LoginFormData {
  phone: string;
  otp: string;
  name?: string;
}

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const { sendOTP, verifyOTP, currentUser, userData, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  
  const [step, setStep] = useState<'phone' | 'otp' | 'profile'>('phone');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const onSubmitPhone = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Format phone number to include country code if not present
      let phoneNumber = data.phone;
      if (!phoneNumber.startsWith('+')) {
        phoneNumber = `+91${phoneNumber}`; // Assuming India as default
      }
      
      await sendOTP(phoneNumber);
      setStep('otp');
    } catch (err) {
      console.error(err);
      setError('Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const onSubmitOTP = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await verifyOTP(data.otp);
      
      // If user has no name, prompt to complete profile
      if (result.user && userData && !userData.name) {
        setStep('profile');
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      setError('Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const onSubmitProfile = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (data.name) {
        await updateUserProfile({ name: data.name });
      }
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  if (currentUser && userData?.name && step !== 'profile') {
    navigate('/');
    return null;
  }
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        {step === 'phone' && 'Login with Phone'}
        {step === 'otp' && 'Enter OTP'}
        {step === 'profile' && 'Complete Your Profile'}
      </h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {step === 'phone' && (
        <form onSubmit={handleSubmit(onSubmitPhone)}>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className={`w-full px-3 py-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: {
                  value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                  message: 'Please enter a valid phone number'
                }
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        </form>
      )}
      
      {step === 'otp' && (
        <form onSubmit={handleSubmit(onSubmitOTP)}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-gray-700 text-sm font-medium mb-2">
              One-Time Password
            </label>
            <input
              id="otp"
              type="text"
              placeholder="Enter the 6-digit OTP"
              className={`w-full px-3 py-2 border rounded-md ${errors.otp ? 'border-red-500' : 'border-gray-300'}`}
              {...register('otp', { 
                required: 'OTP is required',
                pattern: {
                  value: /^\d{6}$/,
                  message: 'OTP must be 6 digits'
                }
              })}
            />
            {errors.otp && (
              <p className="text-red-500 text-xs mt-1">{errors.otp.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading ? 'Verifying...' : 'Verify OTP'}
          </button>
          
          <button
            type="button"
            onClick={() => setStep('phone')}
            className="w-full mt-4 text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-50 focus:outline-none"
          >
            Back to Phone Entry
          </button>
        </form>
      )}
      
      {step === 'profile' && (
        <form onSubmit={handleSubmit(onSubmitProfile)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              {...register('name', { 
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                }
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : 'Complete Registration'}
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;