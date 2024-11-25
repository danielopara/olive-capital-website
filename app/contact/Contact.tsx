"use client";

import React from "react";
import Image from "next/image";

interface ContactInfo {
  icon: string;
  text: string;
  alt: string;
  link?: string; // Optional link for email
}

const ContactForm: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    { icon: "./Call.svg", text: "+234 809 729 6113", alt: "Phone" },
    {
      icon: "./Message.svg",
      text: "info@olivecaptialltd.com",
      alt: "Email",
      link: "mailto:info@olivecaptialltd.com", // Adding mailto link
    },
    {
      icon: "./Location.svg",
      text: "150 Obafemi Awolowo Way, Allen, Ikeja.",
      alt: "Location",
    },
  ];

  return (
    <main className="min-h-[40vh] flex flex-col lg:flex-row items-center justify-center w-full mt-16 bg-[#0D3B36] p-6">
      {/* Contact Information Section */}
      <div className="flex flex-col justify-center bg-[#0D3B36] text-white rounded-lg p-8 w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Get In Touch
        </h2>
        <p className="text-sm mb-6 leading-relaxed">
          To provide world-class investment banking services in a sustainable
          manner whilst ensuring adequate returns to our stakeholders.
        </p>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-105"
            >
              <span className="p-2 rounded-md bg-white bg-opacity-10 group-hover:bg-opacity-20 transition-colors">
                <Image
                  src={info.icon}
                  alt={info.alt}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </span>
              {info.link ? (
                // If a link exists, render it as a clickable anchor tag
                <a
                  href={info.link}
                  className="text-sm lg:text-base text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {info.text}
                </a>
              ) : (
                // If no link, just render the text
                <p className="text-sm lg:text-base">{info.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
