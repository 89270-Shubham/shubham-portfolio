import React from 'react';
import { GraduationCap, Award, Trophy } from 'lucide-react';
import { Section, SectionTitle, Card, Badge } from '../ui';

export const Education: React.FC = () => {
  const education = [
    {
      degree: 'PG-DAC',
      institution: 'CDAC Sunbeam Karad',
      period: 'Feb 2025 - Aug 2025',
      percentage: '69.00%',
      type: 'Diploma',
    },
    {
      degree: 'PG Diploma in Data Science and Business Analytics',
      institution: 'University of Texas Austin',
      period: 'Aug 2022 - Jul 2023',
      percentage: '67.4%',
      type: 'Remote Program',
      highlight: true,
    },
    {
      degree: 'Bachelor of Engineering',
      institution: 'Government College of Engineering Chandrapur',
      period: '2018 - 2022',
      percentage: '87%',
      type: 'Undergraduate',
    },
    {
      degree: 'XII (Higher Secondary)',
      institution: 'Vasantrao Naik College',
      period: '2018',
      percentage: '68.76%',
      type: 'School',
    },
    {
      degree: 'X (Secondary)',
      institution: 'BHEL Secondary School',
      period: '2016',
      percentage: '87%',
      type: 'School',
    },
  ];

  const certifications = [
    {
      title: 'PGP Data Science and Business Analytics',
      issuer: 'University of Texas Austin',
      year: '2023',
    },
  ];

  const achievements = [
    {
      title: 'Winner - ROBOWARS Competition',
      event: 'IIT-Bombay Techfest 2020',
      team: 'Team Black Diamond, Chandrapur',
    },
  ];

  return (
    <Section id="education" background="white">
      <SectionTitle subtitle="My academic journey and certifications">
        Education & Achievements
      </SectionTitle>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <GraduationCap className="text-primary-600" size={28} />
          Academic Background
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              hover
              className={edu.highlight ? 'ring-2 ring-gold-400 shadow-xl' : ''}
            >
              {edu.highlight && (
                <Badge variant="gold" className="mb-3">
                  Featured Program
                </Badge>
              )}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-primary-600">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                  <p className="text-primary-600 font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span className="font-semibold text-accent-600">{edu.percentage}</span>
                  </div>
                  <Badge variant="default" className="mt-2">
                    {edu.type}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Award className="text-accent-600" size={28} />
          Certifications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} hover glass>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent-100 to-gold-100 flex items-center justify-center text-accent-600">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{cert.title}</h4>
                  <p className="text-accent-600 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-600">{cert.year}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Trophy className="text-gold-600" size={28} />
          Achievements
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} hover className="bg-gradient-to-br from-gold-50 to-yellow-50 border-gold-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-yellow-500 flex items-center justify-center text-white">
                  <Trophy size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                  <p className="text-gold-700 font-medium mb-1">{achievement.event}</p>
                  <p className="text-sm text-gray-600">{achievement.team}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
