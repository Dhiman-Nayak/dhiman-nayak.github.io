import { memo } from 'react';

// Education data
const educationData = [
  {
    institution: "Heritage Institute of Technology",
    years: "2022-2026",
    type: "B.Tech",
    details: "Computer Science - IoT, Cybersecurity & Blockchain"
  },
  {
    institution: "Arambagh High School",
    years: "2020-2022",
    type: "School",
    details: "Completed secondary education"
  }
];

const AboutSection = memo(() => (
  <section id="about-section" className="py-16 px-4">
    <div className="container mx-auto max-w-6xl">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          About <span className="text-purple-400">Me</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A passionate developer on a journey of continuous learning
        </p>
        
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-black/40 p-6 rounded-2xl border border-purple-500/20">
              <p className="text-gray-300 leading-relaxed font-mono text-sm md:text-base">
                <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}
              </p>
              <p className="text-gray-300 leading-relaxed font-mono ml-4 text-sm md:text-base">
                <span className="text-green-400">name</span>: <span className="text-yellow-300">"Dhiman Nayak"</span>,
              </p>
              {/* <p className="text-gray-300 leading-relaxed font-mono ml-4 text-sm md:text-base">
                <span className="text-green-400">role</span>: <span className="text-yellow-300">"Full Stack Developer"</span>,
              </p> */}
              <p className="text-gray-300 leading-relaxed font-mono ml-4 text-sm md:text-base">
                <span className="text-green-400">passion</span>: <span className="text-yellow-300">"Building web apps & exploring cloud and Big Data"</span>,
              </p>
              <p className="text-gray-300 leading-relaxed font-mono ml-4 text-sm md:text-base">
                <span className="text-green-400">location</span>: <span className="text-yellow-300">"Kolkata, India"</span>
              </p>
              <p className="text-gray-300 leading-relaxed font-mono text-sm md:text-base">{'}'}</p>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate Full Stack Developer with experience in React, Node.js, and Blockchain development. 
              I love creating beautiful, responsive, and dynamic web applications. Currently pursuing B.Tech in 
              Computer Science with specialization in IoT, Cybersecurity & Blockchain.
            </p>
          </div>
          
          {/* Education Timeline */}
          <div className="relative">
            <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              Education
            </h3>
            <div className="relative pl-8 border-l-2 border-purple-500/50">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>
                  
                  <div 
                    className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors duration-300"
                  >
                    <span className="text-xs text-purple-400 font-medium">{edu.years}</span>
                    <h4 className="text-white font-semibold mt-1">{edu.type}</h4>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-xs mt-1">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

AboutSection.displayName = 'AboutSection';

export default AboutSection;