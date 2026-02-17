import experienceData from '../../Data/Experience.data'

const BriefcaseIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 15H4v-7h16v7zm0-9H4V9h16v2z"/>
  </svg>
)

function Experience() {
  return (
    <section className="relative py-8 sm:py-12 text-white">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Minimal Header */}
        <div
          className="flex items-center gap-4 mb-10"
          
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <BriefcaseIcon />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">Experience</h3>
              <p className="text-xs text-zinc-500">Professional Journey</p>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative ml-5">
          {/* Vertical Line */}
          <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.years}`}
                className="relative pl-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-4 -translate-x-1/2 z-10">
                  <div
                    className="w-3 h-3 rounded-full bg-purple-500 ring-4 ring-zinc-950"
                  />
                </div>

                {/* Card */}
                <div className="group relative overflow-hidden bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-xl p-5 transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-900/60">
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500/50 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Top Row: Year + Company */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-medium tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/25 rounded-md">
                          {exp.years}
                        </span>
                        <span className="text-md font-medium text-zinc-400">
                          {exp.company}
                        </span>
                      </div>
                      {/* Status indicator */}
                      <span className="flex items-center gap-1.5 text-[10px] text-zinc-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 animate-pulse" />
                        {exp.status}
                      </span>
                    </div>

                    {/* Position */}
                    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors">
                      {exp.position}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {exp.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience