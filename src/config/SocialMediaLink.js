import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export const socialLinks = [
  { 
    href: "mailto:dman.nayak@gmail.com", 
    icon: SiGmail, 
    label: "Mail",
    hoverClass: "hover:text-red-500 hover:bg-red-500/10"
  },
  { 
    href: "https://github.com/Dhiman-Nayak", 
    icon: FaGithub, 
    label: "GitHub",
    hoverClass: "hover:text-white hover:bg-purple-500/20"
  },
  { 
    href: "https://x.com/DhimanNayak03", 
    icon: FaSquareXTwitter, 
    label: "Twitter",
    hoverClass: "hover:text-white hover:bg-purple-500/20"
  },
  { 
    href: "https://www.linkedin.com/in/dhimannayak", 
    icon: FaLinkedin, 
    label: "LinkedIn",
    hoverClass: "hover:text-[#0077B5] hover:bg-blue-500/10"
  },
  { 
    href: "https://www.instagram.com/nayak.dhiman", 
    icon: FaInstagram, 
    label: "Instagram",
    hoverClass: "hover:text-pink-500 hover:bg-pink-500/10"
  },
];

// Export individual links if needed
export const githubUrl = socialLinks[1].href;
export const xUrl = socialLinks[2].href;
export const linkedinUrl = socialLinks[3].href;
export const instagramUrl = socialLinks[4].href;
export const mailUrl = socialLinks[0].href;