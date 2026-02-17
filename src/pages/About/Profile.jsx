function Profile() {
  const profileInfo = [
    { label: 'Name', value: 'Your Name' },
    { label: 'Role', value: 'Software Developer' },
    { label: 'Education', value: 'B.Tech in Computer Science' },
    { label: 'Location', value: 'India' },
    { label: 'Email', value: 'your.email@example.com' },
    { label: 'Languages', value: 'English, Hindi' },
  ]

  return (
    <div className="space-y-8 md:space-y-10">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <p className="text-xs uppercase tracking-[0.35em] text-purple-300/80 font-semibold">
          Profile Information
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      {/* Profile Grid */}
      <div className="space-y-6 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {profileInfo.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-purple-500/0 group-hover:bg-purple-500/10 blur-lg rounded-2xl transition-all duration-300" />
              
              <div className="relative p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-purple-500/30 transition-all duration-300 space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-purple-300/80 font-semibold">
                  {item.label}
                </p>
                <p className="text-white text-base md:text-lg font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* About Section */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-purple-500/0 group-hover:bg-purple-500/10 blur-xl rounded-3xl transition-all duration-300" />
          
          <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-purple-500/30 transition-all duration-300 space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-purple-300/80 font-semibold">
              About Me
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-loose">
              I am a Software Developer with a B.Tech in Computer Science & Engineering 
              and currently pursuing an MBA in Business Analytics. I blend technical skills 
              with a passion for learning and strategic insights. My goal is to create 
              innovative digital solutions that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile