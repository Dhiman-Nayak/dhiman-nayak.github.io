import { memo } from 'react';
import PropTypes from 'prop-types';

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

// Skills grouped by category with proficiency for richer UI cues
const skillCategories = [
  {
    title: 'Backend & Data',
    blurb: 'APIs, data flows, and cloud-friendly persistence.',
    skills: [
      { name: 'Python', icon: python },
      { name: 'Node.js', icon: nodejs },
      { name: 'MongoDB', icon: mongodb },
      { name: 'MySQL', icon: mysql },
    ],
  },
  {
    title: 'Frontend Craft',
    blurb: 'Interfaces that feel fast, accessible, and on brand.',
    skills: [
      { name: 'JavaScript', icon: js },
      { name: 'React', icon: reactLogo },
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'Tailwind', icon: tailwind },
    ],
  },
  {
    title: 'Ops & Collaboration',
    blurb: 'Shipping reliably with the right tooling.',
    skills: [
      { name: 'Git', icon: git },
      { name: 'Postman', icon: postman },
    ],
  },
];

const SkillBadge = ({ icon, name }) => (
  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300">
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-xl bg-black/30 flex items-center justify-center">
        <img src={icon} alt={name} className="w-8 h-8" loading="lazy" />
      </span>
      <div>
        <p className="text-base font-semibold text-white">{name}</p>
        {/* <p className="text-xs uppercase tracking-[0.3em] text-gray-400">core tool</p> */}
      </div>
    </div>
  </div>
);

SkillBadge.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

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
        
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-purple-500/10 p-6 md:p-8 backdrop-blur"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-2">{category.title}</p>
                  <p className="text-gray-300 text-base md:text-lg max-w-2xl">{category.blurb}</p>
                </div>
                {/* <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit">
                  {category.skills.length} focused tools
                </span> */}
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
));

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;