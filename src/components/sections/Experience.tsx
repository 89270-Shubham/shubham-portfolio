import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Section, SectionTitle, Card } from '../ui';

export const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'One Union Solutions',
      role: 'Marketing Data Analyst',
      period: 'Sep 2023 - Dec 2024',
      location: 'Pune, India',
      responsibilities: [
        'Designed and managed content performance audits across company blogs, leveraging SEO analytics, keyword tracking, and engagement metrics to optimize reach and improve organic traffic',
        'Automated and scheduled LinkedIn marketing campaigns, integrating data-driven A/B testing to improve click-through and conversion rates, resulting in streamlined lead generation processes',
        'Developed weekly analytics reports and dashboards using tools like Excel, Google Analytics, and CRM insights to provide actionable recommendations to stakeholders for campaign optimization',
        'Conducted market research and competitive analysis, identifying new service opportunities and tracking outreach metrics to drive market share growth and customer acquisition strategies',
        'Collaborated with cross-functional teams to establish data pipelines and reporting frameworks for monitoring KPIs such as lead quality, customer engagement, and ROI on marketing spend',
      ],
    },
    {
      company: 'eClerx',
      role: 'Data Operations Analyst',
      period: 'May 2023 - Sep 2023',
      location: 'Remote',
      responsibilities: [
        'Applied data analysis skills as a Data Reference Team for Credit Suisse and UBS Banks',
        'Performed data validation of potential customers and delivered data-related solutions',
        'Analyzed e-commerce service provider data and managed order cash flow for Bazaar Voice',
        'Assisted in validating hierarchies for clients to target the most promising consumers',
      ],
    },
  ];

  return (
    <Section id="experience" background="gray">
      <SectionTitle subtitle="My professional journey and achievements">
        Work Experience
      </SectionTitle>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400 -translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative grid md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
              }`}
            >
              <div className={index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}>
                <Card hover>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white">
                      <Briefcase size={24} />
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                      <div className="text-lg font-semibold text-primary-600 mb-2">
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className={`space-y-3 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-gray-700 leading-relaxed flex items-start gap-2">
                        <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 ${index % 2 === 0 ? 'md:order-2' : ''}`} />
                        <span className="flex-1">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary-500 shadow-lg z-10" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
