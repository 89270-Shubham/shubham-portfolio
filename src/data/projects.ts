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
  category: 'fullstack' | 'frontend' | 'backend' | 'data' | 'ai' | 'agenticAI';
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
  {
    id: 'image-recognition',
    title: 'Image Recognition System',
    description: 'An AI project for image recognition using TensorFlow.',
    longDescription: 'This project uses TensorFlow to build an image recognition system that can identify different objects in images.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'TensorFlow', 'Keras'],
    features: ['Object detection', 'Image classification', 'Real-time processing'],
    liveUrl: 'https://your-published-site.com/image-recognition',
    githubUrl: 'https://github.com/your-username/image-recognition',
    category: 'ai',
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis Tool',
    description: 'An AI project for analyzing sentiment in text using PyTorch.',
    longDescription: 'This project uses PyTorch to build a sentiment analysis tool that can classify text as positive, negative, or neutral.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'PyTorch', 'OpenCV'],
    features: ['Text classification', 'Sentiment scoring', 'Real-time analysis'],
    liveUrl: 'https://your-published-site.com/sentiment-analysis',
    githubUrl: 'https://github.com/your-username/sentiment-analysis',
    category: 'ai',
  },
  {
    id: 'automated-content-creation',
    title: 'Automated Content Creation with N8N',
    description: 'An agentic AI project that automates content creation using N8N.',
    longDescription: 'This project showcases the use of N8N to create automated content workflows. It integrates with various AI models to generate blog posts, social media updates, and marketing copy. The workflow is designed to be highly customizable and can be adapted to different content needs.',
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['N8N', 'AI Models', 'REST API'],
    features: [
      'Automated content generation',
      'Integration with AI models',
      'Customizable workflows',
      'Support for multiple content formats',
    ],
    liveUrl: 'https://your-published-site.com/automated-content-creation',
    githubUrl: 'https://github.com/your-username/automated-content-creation',
    category: 'agenticAI',
  },
  {
    id: 'customer-support-automation',
    title: 'AI-Powered Customer Support Automation with N8N',
    description: 'An agentic AI project that automates customer support tasks using N8N.',
    longDescription: 'This project demonstrates how N8N can be used to automate customer support tasks. It integrates with various AI models to analyze customer inquiries, generate responses, and route tickets to the appropriate support agents. The workflow is designed to improve customer satisfaction and reduce support costs.',
    image: 'https://images.pexels.com/photos/5473316/pexels-photo-5473316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['N8N', 'AI Models', 'REST API'],
    features: [
      'Automated customer inquiry analysis',
      'AI-powered response generation',
      'Intelligent ticket routing',
      'Integration with CRM systems',
    ],
    liveUrl: 'https://your-published-site.com/customer-support-automation',
    githubUrl: 'https://github.com/your-username/customer-support-automation',
    category: 'agenticAI',
  },
  {
    id: 'lead-generation-automation',
    title: 'Automated Lead Generation with N8N',
    description: 'An agentic AI project that automates lead generation processes using N8N.',
    longDescription: 'This project showcases the use of N8N to automate lead generation workflows. It integrates with various data sources and AI models to identify potential leads, enrich their profiles, and engage them with personalized messages. The workflow is designed to improve lead quality and conversion rates.',
    image: 'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['N8N', 'AI Models', 'REST API'],
    features: [
      'Automated lead identification',
      'Lead profile enrichment',
      'Personalized engagement',
      'Integration with CRM systems',
    ],
    liveUrl: 'https://your-published-site.com/lead-generation-automation',
    githubUrl: 'https://github.com/your-username/lead-generation-automation',
    category: 'agenticAI',
  },
  {
    id: 'social-media-automation',
    title: 'AI-Powered Social Media Automation with N8N',
    description: 'An agentic AI project that automates social media management tasks using N8N.',
    longDescription: 'This project demonstrates how N8N can be used to automate social media management tasks. It integrates with various AI models to generate content, schedule posts, and engage with followers. The workflow is designed to improve social media presence and engagement.',
    image: 'https://images.pexels.com/photos/574162/pexels-photo-574162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['N8N', 'AI Models', 'REST API'],
    features: [
      'Automated content generation',
      'Intelligent post scheduling',
      'Engagement with followers',
      'Integration with social media platforms',
    ],
    liveUrl: 'https://your-published-site.com/social-media-automation',
    githubUrl: 'https://github.com/your-username/social-media-automation',
    category: 'agenticAI',
  },
];
