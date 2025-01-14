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
function Skill() {
    // const lang = {
    //     "JS": js,
    //     "python": python,
    //     "C++": cpp,
    //     "Solidity": solidity,
    //     "HTML":html,
    //     "CSS" : css
    // }
    // const framework = {
    //     "React JS": reactLogo,
    //     "Node Js": nodejs,
    //     "Tailwind CSS": tailwind
    // }
    // const database = {
    //     "MongoDB": mongodb,
    //     "MYSQL": mysql
    // }
    // const tool = {
    //     "git": git,
    //     "Postman": postman
    // }
    return (
        <div>
            <div className=" py-10">
                <div className="container mx-auto px-4">


                    
                    <div className=" grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-10 gap-6">
                        
                        {Object.entries(lang).map(([key, value], index) => (
                            <motion.div
                                key={key}
                                className="flex flex-col items-center justify-center p-2  bg-opacity-50 rounded-lg backdrop-blur-sm hover:bg-opacity-10 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src={value}
                                    alt={key}
                                    className={`w-8 h-8  hover:opacity-100 transition ease-in-out duration-300 bg-white`}
                                />
                                {/* <h3 className="text-center text-sm   text-gray-200">{key}</h3> */}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skill