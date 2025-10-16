import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'shubh05nagargoje@gmail.com',
      };

      await emailjs.send(

          import.meta.env.VITE_EMAILJS_SERVICE_ID,     
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
           templateParams,
           import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        
      );

      setStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email me directly at shubh05nagargoje@gmail.com',
      });
    }
  };

  const resetStatus = () => {
    setStatus({ type: 'idle', message: '' });
  };

  return {
    formData,
    status,
    handleChange,
    handleSubmit,
    resetStatus,
  };
};
