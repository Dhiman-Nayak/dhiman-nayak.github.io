import { memo } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Projects data
import projectsData from '../../Data/Project.data';

const ProjectsSection = memo(() => (
  <section id="projects-section" className="py-16 px-4">
    <div className="container mx-auto max-w-6xl">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Some of my recent work that showcases my skills
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="group relative bg-gradient-to-br from-purple-900/20 to-black/40 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 rounded-full text-white hover:bg-purple-500/50 transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  {project.liveDemoLink && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 rounded-full text-white hover:bg-purple-500/50 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.liveDemoLink && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
));

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;