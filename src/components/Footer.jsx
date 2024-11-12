import React from "react";
import { Link as RouterLink } from "react-router-dom"; // Use for routing
import {
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
  YouTube,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
import logo from "../assets/logo.png";
import NewsLetter from '../components/NewsLetter'

export default function Footer() {
  return (
    <footer className="bg-[#0c1a3c] text-white w-full py-10">
      <div className="container mx-auto px-4 py-10 md:py-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <RouterLink to="/" className="flex items-center text-white mb-4">
              <img
                src={logo}
                alt="Code Dazzle Logo"
                className="w-56 h-auto rounded-lg"
              />
            </RouterLink>
            <div className="flex gap-2">
              <a href="https://www.facebook.com/profile.php?id=61564111583238&mibextid=ZbWKwL" className="text-white">
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/company/code-dazzle/about/" className="text-white">
                <LinkedIn />
              </a>
              <a href="https://www.instagram.com/codedazzle.solution/profilecard/" className="text-white">
                <Instagram />
              </a>

              <a href="https://www.youtube.com/@codedazzlesolution" className="text-white">
                <YouTube />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h6 className="mb-2 text-lg font-semibold">Services</h6>
            <ul className="space-y-1">
              {[
                "Android App Development ",
                "API Integration",
                "Web App Development",
                "Data Analytics",
                "Chat GPT integration",
                "Machine learning"
              ].map((service) => (
                <li key={service}>
                  <li
                    className="text-white text-sm"
                  >
                    {service}
                  </li>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="space-y-2">
            <h6 className="mb-2 text-lg font-semibold">Get In Touch</h6>
            <div className="flex flex-col mb-6 md:mb-0 gap-3">
              <p className="flex items-center gap-2 text-sm">
                <Phone fontSize="small" />
                <a href="tel:03708050090" className="hover:underline text-inherit">
                  03708050090
                </a>
              </p>

              <p className="flex items-center gap-2 text-sm">
                <Email fontSize="small" />
                <a href="mailto:contact@codedazzle.org" className="hover:underline text-inherit">
                  contact@codedazzle.org
                </a>
              </p>

              <p className="flex items-center gap-2 text-sm">
                <LocationOn fontSize="small" /> Karachi, Pakistan
              </p>
            </div>
          </div>

          {/* Newsletter Section */}
          <NewsLetter/>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-white/60 text-xs">
          <p>
            2024 ©{" "}
            <RouterLink to="/" className="text-[#2196F3] hover:text-[#2196F3]">
              Code Dazzle
            </RouterLink>
            . All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <RouterLink
              to="/career"
              className="text-white hover:text-[#2196F3]"
            >
              Career
            </RouterLink>
            <RouterLink
              to="/privacy-policy"
              className="text-white hover:text-[#2196F3]"
            >
              Privacy Policy
            </RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}