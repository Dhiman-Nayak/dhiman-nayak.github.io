import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css'
import Line from './components/Line.jsx'
import Navbar from './components/Navbar.jsx'
import Sip from './hidden/sip.jsx';

// Optimize: lazy load routes for faster first paint
import React, { Suspense } from 'react';
const Home = React.lazy(() => import('./pages/Home/Home.jsx'));
const ProjectComponent = React.lazy(() => import('./pages/Project/Project.jsx'));
const Contact = React.lazy(() => import('./pages/Contact/Contact.jsx'));
const About = React.lazy(() => import('./components/About/AboutPage.jsx'));
const Test = React.lazy(() => import('./components/Test.jsx'));
const ContactMee = React.lazy(() => import('./components/Test1.jsx'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Line/>
        <Navbar />
        <hr className='opacity-10' />
        <Suspense fallback={<div className="text-center text-white py-8">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectComponent />} />
            <Route path="/contact" element={<Contact/>} />
            {/* <Route path="/about" element={<About/>} /> */}
            <Route path="/gg" element={<Test/>} />
            <Route path="/ss" element={<ContactMee/>} />
            <Route path="/sip" element={<Sip/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
