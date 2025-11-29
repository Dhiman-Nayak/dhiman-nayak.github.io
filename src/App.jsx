import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Line from './components/Line.jsx'
import Navbar from './components/Navbar.jsx'
import React, { Suspense } from 'react';

// Main single page component
const Home = React.lazy(() => import('./pages/Home/Home.jsx'));
const Contact = React.lazy(() => import('./pages/Contact/Contact.jsx'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Line />
        <Navbar />
        <hr className='opacity-10' />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
