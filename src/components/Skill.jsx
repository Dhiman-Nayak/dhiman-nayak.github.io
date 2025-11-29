import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';

import cpp from "../assets/C++-Logo.svg"
import js from "../assets/javascript-1.svg"
import python from "../assets/python-5.svg"
import solidity from "../assets/solidity.svg"
import html from "../assets/html-icon.svg"
import css from "../assets/css.svg"

import reactLogo from '../assets/react.svg'
import nodejs from "../assets/Node.js-Logo.wine.svg"
import tailwind from "../assets/tailwindcss.svg"

import mongodb from "../assets/MongoDB-Logo.wine.svg"
import mysql from "../assets/MySQL-Logo.wine.svg"

import git from "../assets/git-icon.svg"
import postman from "../assets/postman.svg"

const skillsData = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Blockchain', icon: SiTailwindcss, color: '#FF6B6B' },
    { name: 'Databases', icon: FaDatabase, color: '#4CAF50' },
];
const lang = {
    "JS": js,
    "python": python,
    "C++": cpp,
    "Solidity": solidity,
    "HTML": html,
    "CSS": css,
    "React JS": reactLogo,
    "Node Js": nodejs,
    "Tailwind CSS": tailwind,
    "MongoDB": mongodb,
    "MYSQL": mysql,
    "git": git,
    "Postman": postman
}
const Skill = () => {
    return (
        <div className="p-8 grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-10 gap-6">
            {/* {skillsData.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-2 bg-white bg-opacity-5 rounded-lg backdrop-blur-sm hover:bg-opacity-10 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <skill.icon className="text-xl mb-3" />
                    <h3 className="text-center text-sm   text-gray-200">{skill.name}</h3>
                </motion.div>
            ))} */}
            {Object.entries(lang).map(([key, value], index) => (
                <motion.div
                    key={key}
                    className="flex flex-col items-center justify-center p-2 bg-white bg-opacity-5 rounded-lg backdrop-blur-sm hover:bg-opacity-10 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <img
                        src={value}
                        alt={key}
                        className={`w-8 h-8 opacity-70 hover:opacity-100 transition ease-in-out duration-300 ${key === "Solidity" ? `bg-white` : `bg-transparent`}`}
                    />          <h3 className="text-center text-sm   text-gray-200">{key}</h3>
                </motion.div>
            ))}
        </div>
    );
};

export default Skill;