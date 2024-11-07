// Hero.js
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Navbar from "./Navbar"; // Ensure the path is correct
import MyChatbot from "./MyChatbot";
const Hero = () => {
  return (
    <div className="relative z-0 h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="./BrainWithout .mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for color effect */}
      <div className="absolute inset-0 bg-purple-900 opacity-50"></div>
      
      {/* Navbar */}
      
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <motion.h1 
          className="text-4xl font-bold mb-4" 
          initial={{ x: '-100vw', opacity: 0 }} // Initial position off-screen
          animate={{ x: 0, opacity: 1 }} // Final position and opacity
          transition={{ type: 'spring', stiffness: 100, duration: 3.5 }} // Animation transition
        >
          Welcome to Code Dazzle Solutions
        </motion.h1>
        <motion.p 
          className="text-lg" 
          initial={{ x: '-100vw', opacity: 0 }} // Initial position off-screen
          animate={{ x: 0, opacity: 1 }} // Final position and opacity
          transition={{ type: 'spring', stiffness: 100, duration: 0.6 }} // Animation transition
        >
          Innovative Solutions for a Digital World
        </motion.p>

      </div>
<div>

</div>
<MyChatbot/>

    </div>

  );
};

export default Hero;
