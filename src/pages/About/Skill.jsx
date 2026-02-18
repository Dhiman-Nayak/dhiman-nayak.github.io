import skillCategories from '../../Data/Skills.data';

const Skill = () => {
  return (
    <section className="relative">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 pt-10">
        <h3 className="text-3xl md:text-4xl font-semibold text-white">Skills</h3>
        <div className="flex-1 h-px bg-white/10"></div>
      </div>

      {/* Skills Collection */}
      <div className="mx-auto max-w-4xl  bg-[#c084fc]/[0.02] backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10 hover:border-white/10 transition-colors duration-500">
        <div className="flex flex-wrap justify-center gap-3">
          {skillCategories.map((skill, index) => (
            <div
              key={index}
              className="px-5 py-2.5 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-purple-500/20 hover:text-white transition-all duration-300 cursor-default group"
            >
              <span className="text-sm text-gray-400 font-light tracking-wide group-hover:text-gray-200 transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="inline-block text-[10px] uppercase tracking-[0.25em] text-zinc-600 font-medium px-4 py-2 border-x border-zinc-800/50">
          Tech I use & love
        </p>
      </div>
    </section>
  );
};

export default Skill;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Cpu, 
//   Layout, 
//   Terminal, 
// } from 'lucide-react';

// const SkillSection = () => {
//   const categories = [
//     {
//       title: "Frontend",
//       icon: <Layout className="w-4 h-4" />,
//       skills: ["React",  "TypeScript","HTML","CSS", "Tailwind CSS", ]
//     },
//     {
//       title: "Backend",
//       icon: <Terminal className="w-4 h-4" />,
//       skills: ["Node.js", "Python", "MongoDB", "MySQL"]
//     },
//     {
//       title: "Tools",
//       icon: <Cpu className="w-4 h-4" />,
//       skills: ["Docker", "Git", "GitHub", "Vercel","Postman"]
//     },
   
//   ];

//   return (
//     <section className="relative py-8 overflow-hidden">
//       {/* Refined Ambient Background */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
//         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Modern Header Section */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
//           <div className="space-y-4">
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="flex items-center gap-2 text-purple-400 font-mono text-sm tracking-widest uppercase"
//             >
//               <span className="w-8 h-[1px] bg-purple-400"></span>
//               Expertise
//             </motion.div>
//             <h2 className="text-2xl md:text-2xl font-bold text-white tracking-tight">
//               Technical <span className="text-zinc-500">Arsenal.</span>
//             </h2>
//           </div>
          
//         </div>

//         {/* Skills Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {categories.map((cat, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               className="group relative"
//             >
//               {/* Card Container */}
//               <div className="h-full relative bg-zinc-900/20 backdrop-blur-md border border-white/5 rounded-3xl p-8 overflow-hidden transition-all duration-500 group-hover:border-purple-500/30 group-hover:bg-zinc-900/40">
                
//                 {/* Abstract Background Icon */}
//                 <div className="absolute -right-4 -top-4 text-white/[0.02] group-hover:text-purple-500/[0.05] transition-colors duration-500">
//                   {React.cloneElement(cat.icon, { size: 120 })}
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   <div className="flex items-center gap-3 mb-8">
//                     <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
//                       {cat.icon}
//                     </div>
//                     <h4 className="text-lg font-medium text-zinc-200">{cat.title}</h4>
//                   </div>

//                   <ul className="space-y-4">
//                     {cat.skills.map((skill, sIdx) => (
//                       <li key={sIdx} className="flex items-center gap-3 group/item">
//                         <div className="w-1 h-1 rounded-full bg-zinc-700 group-hover/item:bg-purple-400 transition-colors" />
//                         <span className="text-zinc-400 group-hover/item:text-white transition-colors duration-300 tracking-wide text-sm">
//                           {skill}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Bottom Glow Effect */}
//                 <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </div>
//             </motion.div>
//           ))}
//         </div>

        
//       </div>
//     </section>
//   );
// };

// export default SkillSection;