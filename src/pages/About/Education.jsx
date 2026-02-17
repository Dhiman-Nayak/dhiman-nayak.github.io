import React from 'react'
import educationData from '../../Data/Education.data'
function Education() {
  return (
    <div>
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
  )
}

export default Education