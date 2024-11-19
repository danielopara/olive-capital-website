import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full bg-[#0B3D3B] px-4 md:pl-12 py-16">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center">
          <h2 className="text-l text-white mb-4">Contact Us</h2>
          <p className="text-3xl font-bold text-white ">Interested?</p>
          <p className="text-3xl font-bold mb-8">
            {"Let's Start a Project Together"}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#0B3D3B] font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
