import React from 'react';
import AppDevelopmentCard from '../components/AppDevelopmentCard';
import techUsed from '../assets/techUsed.png';
import AboutHeader from '../components/AboutHeader';

const Services = () => {
  return (
    <div className='flex flex-col gap-0 sm:gap-0'>
      <AboutHeader
        title="Services"
        backgroundImage="./image@2x.png" // Use your desired header image
      />

      <AppDevelopmentCard 
        bottom="-1rem"
        left="-1rem"
        image={techUsed}
        title="App Development"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
      />
      <AppDevelopmentCard
        bottom="-1rem"
        right="-1rem"
        image={techUsed}
        title="Web Development"
        description="Web development services include everything from building simple websites to complex web applications."
      />
      <AppDevelopmentCard
        bottom="-1rem"
        left="-1rem"
        image={techUsed}
        title="UI/UX Design"
        description="Our team provides modern UI/UX designs to create an engaging and intuitive user experience."
      />
      <AppDevelopmentCard
        bottom="-1rem"
        right="-1rem"
        image={techUsed}
        title="Digital Marketing"
        description="Expand your reach and grow your business with our comprehensive digital marketing services."
      />
      <AppDevelopmentCard
        bottom="-1rem"
        left="-1rem"
        image={techUsed}
        title="SEO Optimization"
        description="We offer SEO services to increase visibility on search engines and attract more traffic to your site."
      />
      <AppDevelopmentCard
        bottom="-1rem"
        right="-1rem"
        image={techUsed}
        title="Content Creation"
        description="Engage your audience with high-quality content created by our professional writers and designers."
      />
    </div>
  );
}

export default Services;
