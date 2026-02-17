import { useState } from "react"
import Profile from "./Profile"
import Education from "./Education"
import Experience from "./Experience"
import Skill from "./Skill"


function AboutPage() {
    const [activeTab, setActiveTab] = useState("education")

    const tabs = [
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },
        { id: "skills", label: "Skills" },
        { id: "profile", label: "Profile" }
    ]

    const renderContent = () => {
        switch (activeTab) {
            case "education":
                return <Education />
            case "experience":
                return <Experience />
            case "skills":
                return <Skill />
            case "profile":
                return <Profile />
            default:
                return <Education />
        }
    }

    return (
        <section className="min-h-screen text-white py-10 md:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Elegant Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-purple-500/[0.08] blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 drop-shadow-[0_12px_35px_rgba(255,255,255,0.12)]">
                        <span className="text-purple-300">Personal</span> Overview
                    </h1>
                    <p className="text-gray-400 text-sm md:text-md lg:text-md max-w-3xl mx-auto">
                        Discover my journey, skills, and passion for creating innovative digital solutions
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-2xl w-full sm:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-xl text-sm md:text-base font-medium transition-colors duration-300 outline-none
                  ${activeTab === tab.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
              >
                {activeTab === tab.id && (
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-700 shadow-xl border border-zinc-600/50 rounded-xl"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

                {/* Content Display Area */}
                <div className="relative">
                    <div className="transition-all duration-500 ease-out">
                        {renderContent()}
                    </div>
                </div>
            </div>

            <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </section>
    )
}

export default AboutPage