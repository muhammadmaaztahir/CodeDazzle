import React, { useState } from "react"
import PropTypes from "prop-types"

// If you're using a different UI library, you can replace this with a basic div
// or import your preferred card component
const Card = ({ className, children }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>
)

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

const services = [
  {
    id: 1,
    name: "App Development",
    title: "App Development",
    description: "25 years of experience in app development with a focus of specific niche cutting-edge technologies to craft custom solutions that seamlessly integrate with your unique requirements, revolutionizing how you operate.",
    benefits: [
      {
        title: "Cutting-Edge Expertise:",
        description: "Our talented experts is proficient in utilizing the latest technologies to develop custom solutions tailored to your needs."
      },
      {
        title: "Seamless Integration:",
        description: "We specialize in integrating new technologies to solutions with your existing infrastructure, ensuring a smooth transition."
      },
      {
        title: "Comprehensive Development Services:",
        description: "From machine learning to natural language processing, our AI Development Services elevate your organization's capabilities."
      },
      {
        title: "Empowering Organizational Capabilities:",
        description: "Our mission is to empower organizations. We strive to not only stand out from in the dynamic landscape of AI technology."
      }
    ]
  },
  {
    id: 2,
    name: "Machine Learning",
    title: "Machine Learning",
    description: "Leveraging cutting-edge machine learning technologies to create intelligent solutions that transform your business operations and drive innovation.",
    benefits: [
      {
        title: "Advanced AI Solutions:",
        description: "Implement state-of-the-art machine learning algorithms tailored to your specific needs."
      },
      {
        title: "Data-Driven Insights:",
        description: "Extract valuable insights from your data to make informed business decisions."
      },
      {
        title: "Automated Processing:",
        description: "Streamline operations with intelligent automation and predictive analytics."
      },
      {
        title: "Scalable Architecture:",
        description: "Build robust ML systems that grow with your business needs."
      }
    ]
  },
  {
    id: 3,
    name: "UI/UX",
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences through thoughtful design and modern interface solutions.",
    benefits: [
      {
        title: "User-Centered Design:",
        description: "Focus on creating interfaces that delight and engage your users."
      },
      {
        title: "Modern Aesthetics:",
        description: "Implement contemporary design trends while maintaining usability."
      },
      {
        title: "Responsive Solutions:",
        description: "Ensure perfect functionality across all devices and screen sizes."
      },
      {
        title: "Iterative Improvement:",
        description: "Continuous refinement based on user feedback and analytics."
      }
    ]
  },
  {
    id: 4,
    name: "ChatGPT",
    title: "ChatGPT Integration",
    description: "Implementing advanced conversational AI solutions to enhance customer engagement and automate support.",
    benefits: [
      {
        title: "Intelligent Automation:",
        description: "Automate customer interactions with sophisticated AI conversations."
      },
      {
        title: "24/7 Availability:",
        description: "Provide round-the-clock support through AI-powered chat solutions."
      },
      {
        title: "Custom Training:",
        description: "Tailor the AI responses to match your brand voice and requirements."
      },
      {
        title: "Scalable Support:",
        description: "Handle multiple conversations simultaneously without compromising quality."
      }
    ]
  },
  {
    id: 5,
    name: "API Integration",
    title: "API Integration",
    description: "Seamlessly connecting systems and services through robust API integration solutions.",
    benefits: [
      {
        title: "Seamless Connectivity:",
        description: "Connect diverse systems and services with reliable API solutions."
      },
      {
        title: "Custom Development:",
        description: "Build tailored APIs that meet your specific integration needs."
      },
      {
        title: "Security Focus:",
        description: "Implement robust security measures to protect data transfers."
      },
      {
        title: "Performance Optimization:",
        description: "Ensure fast and efficient API operations with optimized code."
      }
    ]
  },
  {
    id: 6, // Ensure this ID is unique
    name: "Web Development",
    title: "Web Development",
    description: "Expert web development services to create responsive, user-friendly websites that drive engagement and conversions.",
    benefits: [
      {
        title: "Custom Solutions:",
        description: "We build tailor-made websites that cater to your specific business needs."
      },
      {
        title: "Responsive Design:",
        description: "Our websites are designed to work seamlessly on all devices."
      },
      {
        title: "SEO-Optimized:",
        description: "We implement best practices for search engine optimization to improve your site's visibility."
      },
      {
        title: "Ongoing Support:",
        description: "Our team provides continuous support and maintenance to ensure your website remains up-to-date."
      }
    ]
  }
];

function ServicesWithOffer() {
  const [activeService, setActiveService] = useState(services[0]); // Default to the first service

  return (
    <div className="max-w-5xl container mx-auto p-4 mt-12">
      <h2 className="font-semibold mb-6 text-[32px] text-[#000037]">Services We Offer</h2>
      <Card className="flex flex-col md:flex-row overflow-hidden shadow-lg">
        {/* Services Sidebar */}
        
        <div className="bg-[#1a1f3d] p-6 md:w-72 text-white rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <div className="space-y-4">
            <div className="space-y-3 pl-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`text-sm w-full text-left py-2 px-3 rounded-full transition-colors ${
                    activeService.id === service.id
                      ? "bg-[#B372B0] text-white"
                      : "bg-transparent text-gray-400 hover:bg-[#B372B0] hover:text-white"
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 flex-1 bg-white">
          <h3 className="font-semibold text-lg mb-3">{activeService.title}</h3>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            {activeService.description}
          </p>

          <h4 className="font-semibold text-sm mb-4">Business Benefits of Choosing Us</h4>
          <div className="space-y-4">
            {activeService.benefits.map((benefit, index) => (
              <div key={index} className="text-sm text-gray-600">
                <span className="font-medium">{benefit.title}</span>{" "}
                {benefit.description}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

ServicesWithOffer.propTypes = {
  // Add any props if needed in the future
};

export default ServicesWithOffer;
