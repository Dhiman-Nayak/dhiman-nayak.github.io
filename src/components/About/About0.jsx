import React from 'react'
import Skill from '../skills/Skill'
function About0() {
    return (
        <div>
            <div id="about-section" className="container mx-auto  md:px-12 pr-2  about-class" >

                {/* Python Function Styled Text */}
                <div className="font-mono text-gray-300 text-lg md:text-xl leading-relaxed px-4 lg:px-40">
                    <p className="text-purple-400 text-3xl">
                        About_me():
                    </p>
                    <p className="ml-8 mt-8 text-md">
                        """
                        I am a passionate Full Stack Developer with experience in React, Node.js, and Blockchain development.
                        I love creating beautiful, responsive, and dynamic web applications. Let's build something amazing together!
                        """
                    </p>
                </div>

                <div className="mt-20 font-mono text-gray-300 text-lg md:text-xl leading-relaxed px-4 lg:px-40">
                    <p className="text-purple-400 text-3xl">
                        Skills():
                    </p>
                    <Skill />
                </div>
            </div>
        </div>
    )
}

export default About0