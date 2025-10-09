import React from 'react';
import { Section, SectionTitle, Badge, Card } from '../ui';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      color: 'primary' as const,
      skills: [
        'React',
        'Node.js',
        'Express',
        'Java Spring Boot',
        'JavaScript',
        'TypeScript',
        'HTML/CSS',
        'Tailwind CSS',
        'MySQL',
      ],
    },
    {
      title: 'Data & Analytics',
      color: 'accent' as const,
      skills: [
        'SEO Analytics',
        'Google Analytics',
        'Data Validation',
        'CRM Insights',
        'A/B Testing',
        'Reporting',
        'Data Pipelines',
        'KPI Monitoring',
        'Market Research',
      ],
    },
    {
      title: 'Tools & Platforms',
      color: 'gold' as const,
      skills: [
        'Excel',
        'Git/GitHub',
        'Docker',
        'Agile Methodologies',
        'CI/CD',
        'RESTful APIs',
        'CRM Tools',
        'LinkedIn Marketing',
      ],
    },
  ];

  return (
    <Section id="skills" background="white">
      <SectionTitle subtitle="Technologies and tools I work with">
        Technical Skills
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="group">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-1 h-8 rounded-full bg-gradient-to-b from-${category.color}-400 to-${category.color}-600`} />
              <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant={category.color}>
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Card className="inline-block glass">
          <p className="text-gray-700">
            <span className="font-semibold text-primary-700">Continuous Learner:</span>{' '}
            Always exploring new technologies and methodologies to stay at the forefront of
            development and data analytics.
          </p>
        </Card>
      </div>
    </Section>
  );
};
