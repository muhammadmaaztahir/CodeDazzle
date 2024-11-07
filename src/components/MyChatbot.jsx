import React, { useState } from "react";
import Chatbot from "react-simple-chatbot";
import { Container, Paper, IconButton, Button } from "@mui/material";

const MyChatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '1rem', textAlign: 'end' }}>
      {/* Logo Section */}
      <IconButton onClick={toggleChatbot}>
        <img src="./Ai.png" alt="Logo" style={{ cursor: 'pointer', width: '50px' }} />
      </IconButton>

      {showChatbot && (
        <Paper elevation={0} style={{ padding: '0rem', marginTop: '0rem' }}>
          
          <Chatbot
            steps={[
              {
                id: "greet",
                message: "Hello! What's your name?",
                trigger: "name",
              },
              {
                id: "name",
                user: true,
                trigger: "askEmail",
              },
              {
                id: "askEmail",
                message: "Nice to meet you, {previousValue}! What is your email?",
                trigger: "email",
              },
              {
                id: "email",
                user: true,
                trigger: "askServices",
              },
              {
                id: "askServices",
                message: "Which services are you interested in? (Select one)",
                trigger: "services",
              },
              {
                id: "services",
                options: [
                  { value: "webDev", label: "Web Development", trigger: "webDevInfo" },
                  { value: "appDev", label: "App Development", trigger: "appDevInfo" },
                  { value: "aiSolutions", label: "AI Solutions", trigger: "aiSolutionsInfo" },
                  { value: "marketing", label: "Digital Marketing", trigger: "marketingInfo" },
                  { value: "consulting", label: "IT Consulting", trigger: "consultingInfo" },
                  { value: "support", label: "Technical Support", trigger: "supportInfo" },
                  { value: "other", label: "Other", trigger: "otherServices" },
                ],
              },
              // Web Development Info
              {
                id: "webDevInfo",
                message: "We offer responsive web design, custom development, and e-commerce solutions. Would you like more information?",
                trigger: "webDevFollowUp",
              },
              {
                id: "webDevFollowUp",
                options: [
                  { value: "yes", label: "Yes", trigger: "webDevDetails" },
                  { value: "no", label: "No", trigger: "thankYou" },
                ],
              },
              {
                id: "webDevDetails",
                message: "Our web development process includes planning, designing, developing, and maintaining your website. Would you like to see our portfolio?",
                trigger: "thankYou",
              },
              // App Development Info
              {
                id: "appDevInfo",
                message: "We specialize in native and cross-platform mobile app development. What platform do you prefer?",
                trigger: "appPlatform",
              },
              {
                id: "appPlatform",
                options: [
                  { value: "ios", label: "iOS", trigger: "iosDetails" },
                  { value: "android", label: "Android", trigger: "androidDetails" },
                  { value: "both", label: "Both", trigger: "bothDetails" },
                ],
              },
              {
                id: "iosDetails",
                message: "Great! We can help you with iOS development using Swift or Objective-C. Do you have a specific app idea in mind?",
                trigger: "thankYou",
              },
              {
                id: "androidDetails",
                message: "Awesome! We develop Android apps using Kotlin or Java. Do you have an app concept ready?",
                trigger: "thankYou",
              },
              {
                id: "bothDetails",
                message: "We can create apps for both platforms using React Native or Flutter. Would you like to schedule a consultation?",
                trigger: "thankYou",
              },
              // AI Solutions Info
              {
                id: "aiSolutionsInfo",
                message: "Our AI solutions include machine learning models, chatbots, and data analysis. What specific AI service are you interested in?",
                trigger: "aiServices",
              },
              {
                id: "aiServices",
                options: [
                  { value: "ml", label: "Machine Learning", trigger: "mlDetails" },
                  { value: "nlp", label: "Natural Language Processing", trigger: "nlpDetails" },
                  { value: "dataAnalysis", label: "Data Analysis", trigger: "dataAnalysisDetails" },
                ],
              },
              {
                id: "mlDetails",
                message: "We can help build predictive models for your business. Do you have data ready for analysis?",
                trigger: "thankYou",
              },
              {
                id: "nlpDetails",
                message: "We develop NLP solutions for chatbots and text analysis. Would you like to discuss your project?",
                trigger: "thankYou",
              },
              {
                id: "dataAnalysisDetails",
                message: "We provide data analysis services to help you make informed decisions. Do you have specific questions?",
                trigger: "thankYou",
              },
              // Digital Marketing Info
              {
                id: "marketingInfo",
                message: "Our digital marketing services include SEO, social media marketing, and content creation. Would you like a marketing audit?",
                trigger: "thankYou",
              },
              // IT Consulting Info
              {
                id: "consultingInfo",
                message: "We offer IT consulting to optimize your business processes. Would you like to schedule a meeting with our consultants?",
                trigger: "thankYou",
              },
              // Technical Support Info
              {
                id: "supportInfo",
                message: "Our technical support team is available 24/7. Do you have any specific issues you'd like help with?",
                trigger: "thankYou",
              },
              // Other Services
              {
                id: "otherServices",
                message: "Please specify the services you are interested in.",
                trigger: "thankYou",
              },
              {
                id: "thankYou",
                message: "Thank you for your interest! We'll get back to you soon.",
                end: true,
              },
            ]}
          />
        </Paper>
      )}
    </Container>
  );
};

export default MyChatbot;