import { memo } from 'react';
import { FaExternalLinkAlt  } from "react-icons/fa";
// import { SiCoursera, SiUdemy, SiGoogle } from "react-icons/si";
import certificationsData from '../../Data/Certificate.data';


// const sectionVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: "easeOut" } 
//   }
// };

const CertificationsSection = memo(() => (
  <section id="certifications-section" className="py-16 px-4">
    <div className="container mx-auto max-w-6xl">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          <span className="text-purple-400">Certifications</span> & Achievements
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Professional certifications and courses I have completed
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificationsData.map((cert) => (
            <div
              key={cert.title}
              className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all duration-300"
            >
              {/* Certificate Content */}
              <div className="p-5">
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <cert.issuerIcon className="w-5 h-5 text-purple-400" />
                  </div>
                  {/* <div className="flex items-center gap-1 text-xs text-gray-500">
                    <FaAward className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div> */}
                </div>
                
                {/* Title & Issuer */}
                <h3 className="text-base font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  {cert.issuer}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cert.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-2 py-0.5 text-xs bg-white/5 text-gray-400 rounded-md hover:text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Credential Link */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-purple-400 transition-colors duration-300"
                >
                  <span>View Credential</span>
                  <FaExternalLinkAlt className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        {/* <div className="flex justify-center mt-10">
          <a
            href="https://linkedin.com/in/your-profile/details/certifications"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm border border-purple-500/40 text-purple-400 rounded-full hover:bg-purple-500/10 transition-all duration-300"
          >
            <FaCertificate className="w-3.5 h-3.5" />
            <span>View All on LinkedIn</span>
            <FaExternalLinkAlt className="w-2.5 h-2.5" />
          </a>
        </div> */}
      </div>
    </div>
  </section>
));

CertificationsSection.displayName = 'CertificationsSection';

export default CertificationsSection;