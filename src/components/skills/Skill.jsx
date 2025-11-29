import  { memo } from 'react';
import { motion } from 'framer-motion';

// Import skill icons
import js from "../../assets/javascript-1.svg";
import python from "../../assets/python-5.svg";
import html from "../../assets/html-icon.svg";
import css from "../../assets/css.svg";
import reactLogo from '../../assets/react.svg';
import nodejs from "../../assets/Node.js-Logo.wine.svg";
import tailwind from "../../assets/tailwindcss.svg";
import mongodb from "../../assets/MongoDB-Logo.wine.svg";
import mysql from "../../assets/MySQL-Logo.wine.svg";
import git from "../../assets/git-icon.svg";
import postman from "../../assets/postman.svg";

// Skills data
const skillsData = [
  { name: 'JavaScript', icon: js },
  { name: 'Python', icon: python },
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'React', icon: reactLogo },
  { name: 'Node.js', icon: nodejs },
  { name: 'Tailwind', icon: tailwind },
  { name: 'MongoDB', icon: mongodb },
  { name: 'MySQL', icon: mysql },
  { name: 'Git', icon: git },
  { name: 'Postman', icon: postman },
];

const SkillsSection = memo(() => (
  <section id="skills-section" className="py-16 px-4">
    <div className="container mx-auto max-w-6xl">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          <span className="text-purple-400">Skills</span> & Technologies
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Technologies I work with to bring ideas to life
        </p>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 mb-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
));

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;