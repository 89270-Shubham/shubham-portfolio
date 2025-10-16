import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Section, SectionTitle, Card, Badge, Button } from '../ui';
import { projects, Project } from '../../data/projects';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fullstackProjects = projects.filter(project => project.category === 'fullstack');
  const aiProjects = projects.filter(project => project.category === 'ai');
  const agenticAIProjects = projects.filter(project => project.category === 'agenticAI');

  return (
    <Section id="projects" background="gradient">
      <SectionTitle subtitle="Explore my recent work and technical projects">
        Featured Projects
      </SectionTitle>

      {/* Fullstack Projects */}
      {fullstackProjects.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Web Development Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {fullstackProjects.map((project) => (
              <Card key={project.id} hover className="group overflow-hidden">
                <div className="relative overflow-hidden rounded-lg mb-4 h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* AI Projects */}
      {aiProjects.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aiProjects.map((project) => (
              <Card key={project.id} hover className="group overflow-hidden">
                <div className="relative overflow-hidden rounded-lg mb-4 h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Agentic AI Projects */}
      {agenticAIProjects.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Agentic AI Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {agenticAIProjects.map((project) => (
              <Card key={project.id} hover className="group overflow-hidden">
                <div className="relative overflow-hidden rounded-lg mb-4 h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="relative overflow-hidden rounded-lg mb-6 h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">About this project</h4>
                <p className="text-gray-700 leading-relaxed">{selectedProject.longDescription}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-500 mt-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                {selectedProject.liveUrl && (
                  <Button
                    variant="primary"
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Live Demo
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  >
                    <Github size={18} className="mr-2" />
                    View Source Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
