export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'data';
}

export const projects: Project[] = [
  {
    id: 'lifestyle-wellness',
    title: 'LifeStyle Wellness Club Management System',
    description: 'A comprehensive web-based platform for managing wellness club operations, memberships, and bookings.',
    longDescription: 'A full-featured club management system built with React for the frontend, Java Spring Boot for the backend, and MySQL for data management. The platform streamlines and digitizes club operations by enabling membership management, event enrollment, villa bookings, health tracking, and secure online payments.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop',
    technologies: ['React', 'Java Spring Boot', 'MySQL', 'REST API', 'JWT'],
    features: [
      'Membership management with subscription models',
      'Event enrollment and scheduling system',
      'Villa and facility booking management',
      'Health tracking and wellness programs',
      'Secure payment processing',
      'Dedicated admin and member portals',
      'Robust authentication and authorization',
      'Real-time notifications and updates',
    ],
    liveUrl: 'https://your-published-site.com/lifestyle-wellness',
    githubUrl: 'https://github.com/89270-Shubham/LifeStyle_Wellness_Club_KDAC2025_Final_Project',
    category: 'fullstack',
  },
  {
    id: 'airbnb-clone',
    title: 'Full Stack Airbnb Clone',
    description: 'A feature-rich property rental platform with user authentication, property listings, and booking functionality.',
    longDescription: 'A full-stack web application inspired by Airbnb, built with React and Tailwind CSS for a responsive UI, and Node.js with Express for the backend API. The platform enables users to register, log in, list properties, browse available stays, make bookings, and manage their profiles.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    features: [
      'User registration and authentication system',
      'Property listing with image uploads',
      'Advanced search and filtering',
      'Booking management system',
      'User profile management',
      'Reviews and ratings',
      'Secure RESTful API integration',
      'Responsive design for all devices',
    ],
    liveUrl: 'https://your-published-site.com/airbnb-clone',
    githubUrl: 'https://github.com/89270-Shubham',
    category: 'fullstack',
  },
];
