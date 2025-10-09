import React from 'react';
import { TrendingUp, Database, Code, Award } from 'lucide-react';
import { Section, SectionTitle, Card } from '../ui';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Marketing Analytics',
      description: 'Expert in SEO analytics, campaign optimization, and data-driven marketing strategies',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Operations',
      description: 'Skilled in data validation, pipeline development, and business intelligence reporting',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full Stack Development',
      description: 'Proficient in React, Node.js, Spring Boot, and modern web technologies',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certified Professional',
      description: 'PG Diploma in Data Science from University of Texas Austin',
    },
  ];

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '5+', label: 'Projects Completed' },
    { value: '3', label: 'Certifications' },
  ];

  return (
    <Section id="about" background="gradient">
      <SectionTitle subtitle="Learn more about my background and expertise">
        About Me
      </SectionTitle>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              I am an experienced marketing and data analyst with a strong foundation in{' '}
              <span className="font-semibold text-primary-700">SEO analytics</span>,{' '}
              <span className="font-semibold text-primary-700">data operations</span>, and{' '}
              <span className="font-semibold text-primary-700">software development</span>. My journey
              spans roles at One Union Solutions and eClerx, where I've optimized marketing campaigns,
              managed data pipelines, and delivered actionable insights to stakeholders.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              With expertise in modern full-stack technologies including{' '}
              <span className="font-semibold text-accent-700">React</span>,{' '}
              <span className="font-semibold text-accent-700">Node.js</span>,{' '}
              <span className="font-semibold text-accent-700">Java Spring Boot</span>, and{' '}
              <span className="font-semibold text-accent-700">MySQL</span>, I build scalable
              web applications that solve real-world problems. I am passionate about leveraging
              data to drive business decisions and creating elegant solutions through code.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My academic background includes a{' '}
              <span className="font-semibold text-gold-700">PG Diploma in Data Science and Business Analytics</span>{' '}
              from the University of Texas Austin and a{' '}
              <span className="font-semibold text-gold-700">PG-DAC certification</span> from CDAC Sunbeam Karad.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} hover className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 text-primary-700 mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{highlight.title}</h3>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
