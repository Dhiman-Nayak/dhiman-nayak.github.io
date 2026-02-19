import React from "react";
import { User, MapPin, Calendar, Briefcase, Heart, Globe, Target } from "lucide-react";

const ProfileTab = () => {
  return (
    <div className="w-full flex justify-center items-center py-12 px-4">
      <div className="max-w-5xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-500 hover:shadow-indigo-500/10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Dhiman
            </h2>
            <p className="mt-2 text-indigo-400 text-lg font-medium">
              Full Stack Dev |
              Data Engineering Enthusiast
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed max-w-xl">
              I’m a B.Tech Computer Science student passionate about transforming raw data into meaningful insights. With hands-on experience in React and Node.js, I understand both frontend systems and backend architecture.
            </p>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/50 to-purple-600/50 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <img
                src="/dn-smile.jpg"
                alt="Profile"
                className="relative w-40 h-40 object-cover rounded-full border-4 border-white/10"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10"></div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-gray-300">

          <div className="space-y-5">
            <Detail icon={<User size={18} />} label="Age" value="22 Years" />
            <Detail icon={<MapPin size={18} />} label="Location" value="Kolkata, India" />
            <Detail icon={<Calendar size={18} />} label="Status" value="Final Year B.Tech Student" />
            <Detail icon={<Briefcase size={18} />} label="Availability" value="Open to internships & projects" />
          </div>

          <div className="space-y-5">
            <Detail icon={<Heart size={18} />} label="Hobbies" value="Chess, Cricket, Football, Music" />
            <Detail icon={<Globe size={18} />} label="Languages" value="English, Bengali, Hindi" />
           
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10"></div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat number="250+" label="Problem Solved" />
          <Stat number="5+" label="Web Apps Built" />
          {/* <Stat number="100%" label="Problem Solver" /> */}
          <Stat number="∞" label="Learning Mode" />
        </div>

      </div>
    </div>
  );
};

const Detail = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div className="text-indigo-400 mt-1">{icon}</div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </div>
);

const Stat = ({ number, label }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300">
    <p className="text-2xl md:text-3xl font-bold text-indigo-400">{number}</p>
    <p className="text-gray-300 text-sm mt-2">{label}</p>
  </div>
);

export default ProfileTab;
