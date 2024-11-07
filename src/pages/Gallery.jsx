// src/pages/Home.jsx
import React from "react";
import AboutHeader from "../components/AboutHeader";
import Album from "../components/Album";
import AboutSection from "../components/AboutSection";
export default function Gallery() {
  return <>
   <AboutHeader 
        title="Gallery"
        backgroundImage="../assets/afterHero.png" // Use your desired header image
      />
            {/* <AboutSection
    heading="Gallery Code Dazzle" para="Lorem ipsum is simply dummy text of the printing and typesetting industry."/> */}

  
  {/* <Album /> */}
  </>;
}
