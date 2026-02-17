import experienceData from '../../Data/Experience.data'

function Experience() {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <p className="text-xs uppercase tracking-[0.35em] text-purple-300/80 font-semibold">
          Experience
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      {/* Timeline */}
      <div className="relative pl-8 md:pl-12 space-y-8 md:space-y-10">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-transparent" />
        
        {experienceData.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline dot with glow */}
            <div className="absolute -left-[33px] md:-left-[41px] top-1.5">
              <div className="absolute inset-0 bg-purple-500/30 blur-md rounded-full" />
              <div className="relative w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full border-2 md:border-4 border-black" />
            </div>
            
            {/* Content card */}
            <div className="bg-white/5 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 hover:bg-white/[0.08] transition-all duration-300 space-y-3">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20">
                {exp.years}
              </span>
              
              <h4 className="text-xl md:text-2xl font-semibold text-white">{exp.position}</h4>
              
              <p className="text-gray-300 text-sm md:text-base font-medium">{exp.company}</p>
              
              <p className="text-gray-400 text-sm leading-relaxed">{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience