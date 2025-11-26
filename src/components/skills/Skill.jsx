import React from 'react'
import { motion } from 'framer-motion';

import cpp from "../../assets/C++-Logo.svg"
import js from "../../assets/javascript-1.svg"
import python from "../../assets/python-5.svg"
import solidity from "../../assets/solidity.svg"
import html from "../../assets/html-icon.svg"
import css from "../../assets/css.svg"

import reactLogo from '../../assets/react.svg'
import nodejs from "../../assets/Node.js-Logo.wine.svg"
import tailwind from "../../assets/tailwindcss.svg"

import mongodb from "../../assets/MongoDB-Logo.wine.svg"
import mysql from "../../assets/MySQL-Logo.wine.svg"

import git from "../../assets/git-icon.svg"
import postman from "../../assets/postman.svg"

const skillsData = [
  { name: 'React', icon: reactLogo, color: '#61DAFB' },
  { name: 'Node.js', icon: nodejs, color: '#339933' },
  { name: 'JavaScript', icon: js, color: '#F7DF1E' },
  { name: 'Python', icon: python, color: '#3776AB' },
  { name: 'cpp', icon: cpp, color: '#3776AB' },
  { name: 'html', icon: html, color: '#3776AB' },
  { name: 'css', icon: css, color: '#3776AB' },
  { name: 'Tailwind CSS', icon: tailwind, color: '#06B6D4' },
  // { name: 'Blockchain', icon: SiBlockchain, color: '#FF6B6B' },
  { name: 'mongodb', icon: mongodb, color: '#4CAF50' },
  { name: 'mysql', icon: mysql, color: '#4CAF50' },
];

const Skills = () => {
  return (
    <div className="relative overflow-hidden w-full h-32 bg-transparent">
      <div className="absolute whitespace-nowrap animate-float">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="inline-flex items-center pr-8 opacity-70 hover:opacity-100 justify-center mr-8 p-4 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-gray-800"
            style={{
              color: skill.color,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {/* <skill.icon className="text-4xl mr-3" /> */}
            <img src={skill.icon} alt="" />
            <span className="text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;