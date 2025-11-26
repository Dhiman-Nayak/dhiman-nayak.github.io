// import React from 'react';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import GitHub and URL icons

// const projects = [
//   {
//     title: 'Twitter Clone',
//     description:
//       'A full-stack social media application that mimics the core functionalities of Twitter. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and provides features such as user authentication, real-time posting, liking, commenting, and following other users. The application demonstrates my ability to implement RESTful APIs, manage state effectively in a React application, and handle asynchronous operations seamlessly.',
//     link: 'https://github.com/yourusername/twitter-clone', // Replace with your actual GitHub repo link
//   },
//   {
//     title: 'PicX - Decentralized Image Storage',
//     description:
//       'PicX is an innovative decentralized application (dApp) designed to store and manage images securely on the blockchain. Utilizing smart contracts and IPFS (InterPlanetary File System), this project ensures that images are stored in a decentralized manner, providing enhanced security and privacy compared to traditional storage methods. Built with Solidity, Web3.js, and React, PicX showcases my skills in blockchain development, smart contract integration, and building intuitive, user-friendly dApps.',
//     link: 'https://github.com/yourusername/picx', // Replace with your actual GitHub repo link
//   },
// ];

// const ProjectComponent = () => {
//   console.log("2-");
  
//   return (
//     <div className="container mx-auto my-12 px-4 flex flex-col items-center">
//       {projects.map((project, index) => (
//         <div
//           key={index}
//           className="bg-transparent border border-gray-200 rounded-lg shadow-lg overflow-hidden mb-8 w-11/12 md:w-3/4 lg:w-2/3 hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//         >
//           <h2 className="text-2xl font-bold mb-2 text-gray-800 hover:text-shadow-lg">
//             {project.title}
//           </h2>
//           <p className="text-gray-600 mb-4">{project.description}</p>
//           <div className="flex space-x-4">
//             <a
//               href={project.link}
//               className="text-blue-500 hover:text-blue-600  flex items-center"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaGithub className="mr-2" /> View on GitHub
//             </a>
//             {/* Assuming there could be a live URL link */}
//             {/* Uncomment below if there's a live project URL */}
//             <a
//               href="https://your-live-project-link.com"
//               className="text-blue-400 hover:text-blue-600  flex items-center"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaExternalLinkAlt className="mr-2" /> Live Demo
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectComponent;

import React from 'react'
import {
    Card,
    CardBody,
    Image,
    Stack, // Ensure the Stack component is imported
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
} from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const projects = [
    {
        title: 'Twitter Clone',
        description:"The Twitter Clone is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows users to create accounts, post tweets, like/unlike tweets, follow/unfollow users, and view a feed of tweets from people they follow.",
        imageUrl:
            "https://dreamlandadventuretourism.com/wp-content/uploads/2023/12/img-world-ticket-from-dream.webp", 
        githubLink: 'https://github.com/Dhiman-Nayak/Twitter-clone',
        liveDemoLink: 'https://zwitterr.netlify.app/',
    },
    {
        title: 'PicX',
        description: "A React application for decentralized file storage, allowing users to securely store and manage their files.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofZXK-_G7CFJF8T32HbnSjj-Vtl9w9BLXUg&s", 
        githubLink: 'https://github.com/Dhiman-Nayak/PicX-Store-you-image-',
        liveDemoLink: '',
    },
    
   
];
import "./Project.css";
function Project() {
    return (
        <div className=" ">
            <div className="text-center flex flex-col md:flex-row justify-center md:space-x-4 md:overflow-x-auto overflow-x-auto px-4 py-8 custom-scrollbar">
                {/* for multiple project in laptopn md:overflow-x-scroll for scroll bar */}
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        maxW={{ base: '80%', md: 'sm' }}
                        className="flex-shrink-0 m-2 bg-transparent border opacity-85 border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform "
                    >
                        <CardBody className="bg-[#3c0d67b0] rounded-sm text-white">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                borderRadius="lg"
                                className="transition-transform duration-300 transform hover:scale-105 w-60 h-60"
                            />
                            <Stack mt="6" spacing="3">
                                <Heading size="md" className="text-gray-200 hover:text-shadow-lg transition-colors duration-300">
                                    {project.title}
                                </Heading>
                                <Text className="text-gray-400">{project.description}</Text>
                                {/* <Text color="blue.600" fontSize="2xl">
                                    {project.price}
                                </Text> */}
                            </Stack>
                        </CardBody>
                        <CardFooter className="bg-[#3c0d67b0] rounded-sm">
                            <ButtonGroup spacing="2">
                                <Button as="a" href={project.githubLink} target="_blank" rel="noopener noreferrer" variant="ghost" colorScheme="black">
                                    <FaGithub className="h-8 w-8 hover:scale-125" />
                                </Button>
                                <Button as="a" href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" variant="solid" colorScheme="blue">
                                    <FaExternalLinkAlt className="h-4 w-4 hover:scale-125" />
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>  

    )
}

export default Project

