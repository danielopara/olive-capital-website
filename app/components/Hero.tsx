import React from "react";

export default function Hero() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url(/backgroundImage.svg)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center mt-6">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6">
          Empowering your Financial Future
        </h1>
        <p className="text-sm md:text-sm lg:text-sm mb-8 px-4 text-center max-w-4xl">
          Strategic investment solutions designed to help you achieve your
          financial goals. We offer tailored investment strategies that balance
          risk and growth, using market insights and diversified asset
          allocation. Our expert solutions help you achieve long-term success,
          whether your focus is wealth preservation, growth, or income
          generation.
        </p>
        <a href={"/contact"}>
          <button className="bg-[#0B3D3B] hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg mb-6">
            {`Let's Talk`}
          </button>
        </a>
        <div className="animate-bounce">
          <p className="text-sm">Scroll Down</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
