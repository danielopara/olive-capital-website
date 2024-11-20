import React from "react";

const ContactHero = () => {
  return (
    <header
      className="relative h-[50vh] w-full bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url(/contactBackground.svg)",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative flex items-center justify-center h-full px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Contact Us
        </h1>
      </div>
    </header>
  );
};

export default ContactHero;
