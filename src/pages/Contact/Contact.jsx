import { useState } from 'react';
import Alert from '../../components/alert/Alert';
import { socialLinks } from '../../Data/SocialMediaLink.js';

const Contact = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('info');

  const triggerAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/xnnarbzz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setFormData({ name: '', email: '', message: '' });
          triggerAlert('message sent successfully', 'success')
        } else {
          triggerAlert('Form submission failed', 'error')
        }
      })
      .catch((error) => console.error('Error:', error));
  };
  const profile = {
    name: 'Dhiman Nayak',
    status: 'Available for work',
    blurb:
      "My inbox is always open. Whether you have a project or just want to say hi, I'd love to hear from you.",
    phone: 'Available on request',
    email: 'dman.nayak@gmail.com',
    initials: 'DN',
  };

  return (
    <section className="text-zinc-100 py-8 md:py-12 md:pb-2 px-4 sm:px-10 lg:px-12 relative overflow-hidden">
  {/* Sophisticated Ambient Lighting */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-[#c084fc]/[0.03] blur-[120px] pointer-events-none" />
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#c084fc]/[0.02] blur-[100px] rounded-full pointer-events-none" />

  <div className="max-w-6xl mx-auto relative z-10">
    {/* Header Section */}
    <div className="text-center mb-8 md:mb-10 space-y-2">
      <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold tracking-tight mb-2 drop-shadow-[0_12px_35px_rgba(255,255,255,0.12)] italic">
        Get In <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#c084fc] to-[#a855f7]">Touch</span>
      </h1>
      <p className="text-zinc-500 text-sm md:text-md max-w-xl mx-auto font-light leading-snug">
        Let&apos;s transform your vision into a digital masterpiece. Drop a line and I&apos;ll respond within 24 hours.
      </p>
    </div>

    {/* Contact Grid */}
    <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
      
      {/* Form Card */}
      <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-[2rem] p-6 md:p-10 shadow-2xl relative group">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label htmlFor="name" className="text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-500 ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-[#c084fc] transition-colors duration-500"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="email" className="text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-500 ml-1">
                Email Address / Phone No
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="hello@example.com"
                className="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-[#c084fc] transition-colors duration-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="message" className="text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-500 ml-1">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Briefly describe your project goals..."
              className="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-[#c084fc] transition-colors duration-500 resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              type="submit" 
              className="group relative flex-1 bg-zinc-100 text-zinc-950 font-bold py-4 px-8 rounded-full overflow-hidden transition-all duration-300 hover:bg-[#c084fc]/[25] hover:backdrop-blur-3xl hover:text-white"
            >
              <span className="relative z-10 uppercase text-xs tracking-widest">Send Inquiry</span>
            </button>
            <button 
              type="button" 
              onClick={handleReset}
              className="flex-1 sm:flex-initial px-8 py-4 rounded-full border border-zinc-800 text-zinc-400 text-xs uppercase tracking-widest hover:bg-zinc-800/50 transition-all duration-300"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Sidebar */}
      <div className="space-y-8">
        {/* Profile Card */}
        <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-[2rem] p-6">
          <div className="flex gap-6  items-start text-center space-y-4 mb-4">
            <div className="relative p-1 rounded-full border border-[#c084fc]/30">
              <img 
                src="dn-smile.jpg" 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover hover:grayscale transition-all duration-700"
              />
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-4 border-[#09090b] rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">{profile.name}</h3>
              <p className="inline-block px-3 py-1 text-[10px] text-[#c084fc] bg-[#c084fc]/5 border border-[#c084fc]/20 rounded-full">{profile.status}</p>
            </div>
          </div>

          <p className="text-zinc-500 text-sm leading-relaxed text-center mb-8 font-light italic">
            &quot;{profile.blurb}&quot;
          </p>

          {/* Clean Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.filter((e)=> e.label!="Mail").map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-zinc-500 hover:text-[#c084fc] transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Info Blocks */}
        <div className="grid grid-cols-1 gap-4">
          {/* <div className="group p-4 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/30 rounded-2xl hover:border-[#c084fc]/30 transition-all duration-500">
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-1">Phone</p>
            <p className="text-zinc-300 font-medium group-hover:text-white transition-colors">+91 8101439379</p>
          </div> */}
          
          <div className="group p-4 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/30 rounded-2xl hover:border-[#c084fc]/30 transition-all duration-500">
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-1">Official Email</p>
            <a href={`mailto:${profile.email}`} className="text-zinc-300 font-medium group-hover:text-[#c084fc] transition-colors break-all">
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );


};

export default Contact;
