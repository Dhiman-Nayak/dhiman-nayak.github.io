// import React from 'react';
import "./Home.css";
import HeroSection from '../../components/Hero/Hero';
import AboutSection from '../../components/About/About0';
import SkillsSection from '../../components/skills/Skill';
import ProjectsSection from '../Project/Project';
import CertificationsSection from '../../components/Certificate/Certificate';
import FooterSection from '../../components/Footer/Footer';
import useAnalyticsTracker from '../../components/Test'
// Import all sections from components
// import {
//   HeroSection,
//   AboutSection,
//   SkillsSection,
//   ProjectsSection,
//   CertificationsSection,
//   FooterSection
// } from '../../components/sections';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  // useAnalyticsTracker();
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer with CTA */}
      <FooterSection />
    </div>
  );
};

export default Home;