import educationData from '../../Data/Education.data'


const GraduationIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
    </svg>
)

function Education() {
    return (
        <section className="relative py-8 sm:py-12 text-white">
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Minimal Header */}
                <div
                    className="flex items-center gap-4 mb-10"
                    
                >
                    <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                            <GraduationIcon />
                        </span>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Education</h3>
                            <p className="text-xs text-zinc-500">Academic Journey</p>
                        </div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-zinc-800 to-transparent" />
                </div>

                {/* Timeline */}
                <div className="relative ml-5">
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

                    <div className="space-y-6">
                        {educationData.map((edu, index) => (
                            <div
                                key={`${edu.type}-${edu.years}`}
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
                                    {/* Subtle gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative z-10">
                                        {/* Top Row: Year Badge + Type */}
                                        <div className="flex items-center justify-between gap-3 mb-4">
                                            <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-medium tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/25 rounded-md">
                                                {edu.years}
                                            </span>
                                            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                                                {edu.type}
                                            </span>
                                        </div>

                                        {/* Institution */}
                                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-100 transition-colors">
                                            {edu.institution}
                                        </h4>

                                        {/* Details Row */}
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-3">
                                            <span className="text-zinc-400">{edu.department || edu.type}</span>
                                            {(edu.CGPA || edu.percentage) && (
                                                <>
                                                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                                    <span className="text-xs font-mono text-purple-300/80">
                                                        {edu.CGPA || edu.percentage}
                                                    </span>
                                                </>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-zinc-500 leading-relaxed">
                                            {edu.details}
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

export default Education