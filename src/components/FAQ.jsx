// FAQSection.js
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  const faqs = [
    {
      question: "What type of services do Code Dazzle offer?",
      answer: "We offer a comprehensive range of services including AI development, chatbot solutions, and custom software development tailored to your business needs."
    },
    {
      question: "Do Code Dazzle offer post-development support?",
      answer: "Yes, we provide extensive post-development support to ensure your solutions continue to operate efficiently and effectively."
    },
    {
      question: "Can AI technology help us make better decisions?",
      answer: "Yes, AI can analyze large amounts of data to provide insights and recommendations, helping you make more informed business decisions."
    },
    {
      question: "How do I choose the right AI Chatbot development company for my business?",
      answer: "Look for companies with proven experience, strong technical expertise, good communication, and a track record of successful implementations."
    },
    {
      question: "Why choose Code Dazzle as your AI development company?",
      answer: "We combine technical expertise with industry experience to deliver innovative, scalable AI solutions that drive business growth."
    },
    {
      question: "How are Code Dazzle developers different?",
      answer: "Our developers bring a unique blend of technical skills, industry knowledge, and commitment to delivering high-quality solutions."
    }
  ];

  const [expanded, setExpanded] = useState(0); // State to track which accordion is expanded

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); // Toggle the panel open/close
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
      
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index} // Check if the current panel is expanded
          onChange={handleChange(index)} // Change the panel when clicked
          sx={{ mb: 2 }} // MUI spacing
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography className="font-medium text-gray-800">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-600">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQSection;
