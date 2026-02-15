import { memo } from 'react';
import PropTypes from 'prop-types';

// Skills grouped by category
const skillCategories = [
  {
    title: 'Backend & Data',
    skills: [
      { name: 'Python' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind' },
    ],
  },
  {
    title: 'Ops & Collaboration',
    skills: [
      { name: 'Git' },
      { name: 'Postman' },
    ],
  },
];

const SkillBadge = ({ name }) => (
  <div className="px-2 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 text-center">
    <p className="text-sm md:text-base font-medium tracking-wide text-white/90">{name}</p>
  </div>
);

SkillBadge.propTypes = {
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-purple-300/80 mb-4 font-semibold">
                {category.title}
              </p>
              <div className="grid grid-cols-2 gap-3">
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