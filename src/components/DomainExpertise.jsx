import React from 'react';
import img1 from "../assets/CardimgAbout1.png"
import img2 from "../assets/CardimgAbout2.png"
import img3 from "../assets/CardimgAbout3.png"
import img4 from "../assets/CardimgAbout4.png"
// 
const DomainExpertise = () => {
  const stats = [
    { value: '200+', label: 'Customers worldwide' },
    { value: '25+', label: 'Years on NASDAQ: NTWK' },
    { value: '350+', label: 'Successful implementations' },
  ];

  const highlights = [
    {
      title: 'Committed to quality excellence',
      description:
        'To ensure its offerings are compliant to various international quality standards, NETSOL meticulously adheres to various quality stipulations issued by quality ensuring authorities. NETSOL received CMMI Level 5 Certification in 2006, the highest internationally recognized quality assurance standard for enhancing software development processes. In addition, the company successfully achieved both SOC 2 Type 1 and SOC 2 Type 2 compliance, demonstrating the company’s continued dedication to safeguarding the data of its clients and their customers.',
      bgImage: img1,
    },
    {
      title: 'Pioneers in the industry',
      description:
        'We are proud to be the first to introduce a full suite of mobile-enabled digital transformation solutions for the global asset finance and leasing industry (formerly NFS Digital). NETSOL also pioneered the world’s first marketplace of AI-driven products for the global credit, finance, and leasing industry (formerly Appex Now).',
      bgImage: img2,
    },
    {
      title: 'Ensured service levels',
      description:
        'We have received various awards and recognition for the quality of our solutions and services over the years.',
      bgImage: img3,
    },
    {
      title: 'Harnessing the power of AI',
      description:
        'In 2018, NETSOL embarked on a groundbreaking journey, establishing its AI division with the vision to utilize the power of AI to revolutionize how institutions navigate the complexities of the modern market. Today, as a trusted industry leader in its realm of AI-powered innovation, NETSOL transforms the software landscape. From risk assessment to customer engagement, AI solutions empower our partners to stay ahead in an ever-evolving industry. We now cater to the diverse range of other sectors as well.',
      bgImage: img4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-10">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 text-shadow">
          Domain <span className="text-blue-600">expertise</span>
        </h2>
        <p className="text-black text-lg max-w-2xl mx-auto">
          The company’s core focus since its inception has been the provision of cutting-edge technology solutions for the financial services industry and specifically the global asset finance and leasing sector.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Highlights Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className={`p-6 py-10 rounded-lg shadow-md relative ${index % 3 === 0 ? 'md:col-span-8 col-span-1' : 'md:col-span-4 col-span-1'}`}
            style={{
              backgroundImage: `url(${highlight.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center-right',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-4">{highlight.title}</h4>
            <p className="text-gray-700 text-sm">{highlight.description}</p>
          </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row items-center">
        {/* Left Side - Heading */}
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 leading-tight">
            A WEB APP DEVELOPMENT<br />
            COMPANY WITH THE<br />
            <span className='text-3xl md:text-4xl text-gray-800 font-bold'>
              INDUSTRY EXPERTISE TO<br />
              INNOVATE
            </span>
          </h2>
        </div>
        {/* Right Side - Paragraph */}
        <div className="md:w-1/2">
          <p className="text-black text-lg leading-relaxed">
            10Pearls is a leading web app development company delivering digital transformation to organizations of all sizes. You can count on us for the whole lifecycle of your software project: planning, development, security, optimization, and ongoing maintenance. Our expert web app development team streamlines processes, enabling you to deliver and realize value more efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomainExpertise;