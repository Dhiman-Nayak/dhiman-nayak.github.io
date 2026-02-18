import { memo } from 'react';
import { Link } from 'react-router-dom';
const AboutSection = memo(() => (
  <section id="about-section" className="px-10 pb-12">
  <div className="container mx-auto max-w-6xl">
    <div>
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl text-center mb-2 text-white">
          About <span className="text-purple-400">Me</span>
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          Get to know more about who I am and what I do
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        {/* Left Column: Image */}
        <div className="relative w-fit mx-auto flex justify-center">
          <div className="absolute -inset-4 rounded-full bg-white/[0.08] blur-2xl"></div>
          {/* Image wrapper */}
          <div className="relative w-64 h-64 sm:w-64 sm:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img
              src="/profile-pic1.png"
              alt="Portrait of Dhiman Nayak"
              className="w-full h-auto scale-[0.65] origin-top "
              loading="eager"
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        {/* Changed space-y-6 to space-y-8 (mobile) and space-y-12 (desktop) to open up the internal spacing */}
        <div className="space-y-4 md:space-y-6">
          <div>
            <p className="text-md uppercase tracking-[0.35em] text-purple-300/80 mb-4 font-semibold">
              Dhiman Nayak
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold text-white">
              Full Stack Developer
            </h3>
          </div>

          <p className="text-gray-400 leading-[1.4] text-md">
            I build, experiment, and optimize. <div className='h-2'/>
            I’m a B.Tech Computer Science student passionate about transforming raw data into meaningful insights. With hands-on experience in React and Node.js, I understand both frontend systems and backend architecture. <div className='h-2'/>
            Currently, I’m expanding my expertise in Data domain, with a strong interest in building efficient data pipelines and intelligent systems. 
          </p>

          <div className="flex flex-wrap mt-0">
            <span className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 bg-white/5 text-gray-300">
              Kolkata, India
            </span>
            {/* <span className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 bg-white/5 text-gray-300">
              Web Development
            </span> */}
            {/* <span className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-full border border-white/10 bg-white/5 text-gray-300">
              UI/UX Focus
            </span> */}
          </div>
          <Link className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold shadow-lg shadow-black/40 hover:translate-y-[-1px] transition" to="/about">
            Discover More
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
));

AboutSection.displayName = 'AboutSection';

export default AboutSection;