import React from "react";

const ContactHero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url(/contactBackground.svg)" }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="flex items-center justify-start min-h-screen md:mr-[45%] sm:mx-auto px-4 sm:px-6 md:px-10">
        <div className="bg-white p-6 md:p-8 lg:p-10 border-t border-b border-solid text-black mx-auto max-w-2xl shadow-md flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Contact Us
          </h1>
          <p className="text-sm md:text-sm lg:text-sm mb-6">
            Strategic investment solutions designed to help you achieve your
            financial goals. We offer tailored investment strategies that
            balance risk and growth, using market insights and diversified asset
            allocation. Our expert solutions help you achieve long-term success,
            whether your focus is wealth preservation, growth, or income
            generation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
