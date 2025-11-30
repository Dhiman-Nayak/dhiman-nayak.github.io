import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export const socialLinks = [
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
    href: "https://www.instagram.com/nayak.dhiman/", 
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
export const githubUrl = socialLinks[0].href;
export const xUrl = socialLinks[1].href;
export const linkedinUrl = socialLinks[2].href;
export const instagramUrl = socialLinks[3].href;