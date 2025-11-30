import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Projects data
const projectsData = [
  {
    title: 'Zwitter',
    description: "Full-stack social media app of Twitter clone built with MERN stack. Features include user auth, tweets, likes, and following.",
    imageUrl: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop",
    githubLink: 'https://github.com/Dhiman-Nayak/Twitter-clone',
    liveDemoLink: 'https://zwitterr.netlify.app/',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'PicX - Decentralized Storage',
    description: "Blockchain-based image storage dApp using IPFS and smart contracts for secure file management.",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    githubLink: 'https://github.com/Dhiman-Nayak/PicX-Store-you-image-',
    liveDemoLink: '',
    tags: ['React','Solidity', 'Web3', 'IPFS']
  },
  {
    title: 'Portfolio Website',
    description: "Modern portfolio website built with React, Tailwind CSS, and Framer Motion for smooth animations.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    githubLink: 'https://github.com/Dhiman-Nayak/Portfolio-Website',
    liveDemoLink: '',
    tags: ['React', 'Tailwind', 'Framer Motion']
  },
];

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