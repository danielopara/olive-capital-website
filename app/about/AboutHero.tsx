import React from "react";

export default function AboutHero() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url(/AboutImage.svg)" }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="flex items-center justify-start min-h-screen md:mr-[45%] sm:mx-auto px-4 sm:px-6 md:px-10">
        <div className="bg-white p-6 md:p-8 lg:p-10 border-t border-b border-solid text-black mx-auto max-w-2xl shadow-md flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            About Us
          </h1>
          <p className="text-sm md:text-sm lg:text-sm mb-6">
            Olive Capital is an independent investment company with a proven
            track record in delivering exceptional returns. Our focus on the
            Nigerian capital market, combined with an adaptive approach to
            global market trends, allows us to optimize investment strategies
            for both local and international clients We are dedicated to
            providing bespoke asset management services designed to help our
            clients achieve their financial goals. Our team of experienced
            professionals combines deep expertise in the financial markets with
            innovative investment strategies, ensuring that your assets are
            managed with precision and care.
          </p>
        </div>
      </div>
    </div>
  );
}
