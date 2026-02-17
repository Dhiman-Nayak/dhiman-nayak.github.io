import skillCategories from "../../Data/Skills.data"
function Skill() {

  return (
    <div className="space-y-8 md:space-y-10">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <p className="text-xs uppercase tracking-[0.35em] text-purple-300/80 font-semibold">
          Skills & Technologies
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group relative"
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-0.5 bg-purple-500/0 group-hover:bg-purple-500/10 blur-xl rounded-3xl transition-all duration-300" />
            
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-purple-500/30 rounded-2xl p-6 md:p-7 transition-all duration-300 space-y-5">
              <p className="text-xs uppercase tracking-[0.35em] text-purple-300/80 font-semibold">
                {category.title}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 text-center"
                  >
                    <p className="text-sm font-medium text-white">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill