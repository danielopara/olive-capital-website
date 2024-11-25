"use client";
import React from "react";

const ServiceHero: React.FC = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(/service1.svg)` }} // Dynamically set background image
    >
      <div className="flex items-center justify-start min-h-screen md:mr-[45%] sm:mx-auto px-4 sm:px-6 md:px-10">
        <div className="bg-white p-6 md:p-8 lg:p-10 border-t border-b border-solid text-black mx-auto max-w-2xl shadow-md flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-8">
            Financial Advisory Services
          </h1>
          <p className="text-sm md:text-sm lg:text-sm mr-4 mb-6 text-justify leading-relaxed max-w-lg">
            At Olive Capital, we understand that the best investment approach is
            PATIENCE. Our goal is to make the journey profitable no matter how
            long you choose to wait. We provide comprehensive investment
            solutions and strategies to enable you invest on your terms. As an
            investor you have access to solutions crafted especially for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
