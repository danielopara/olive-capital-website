"use client";

import React from "react";
import Image from "next/image";

const ServiceDescription: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 max-w-2xl mx-auto md:mx-12">
          <Image
            src="/service1-img.svg"
            alt="financial advisory services"
            layout="responsive"
            width={800} // Increased width for a larger image
            height={480}
          />
        </div>

        {/* Service Description */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-black mb-4 md:mt-16">
            Financial Advisory Services
          </h2>

          <div className="mt-4 bg-white">
            <p className="text-lg max-w-sm text-gray-600 text-justify mb-4 leading-relaxed">
              We provide you with personalized strategies to help you grow your
              wealth, plan for the future and achieve financial independence.
              Our team of expert advisers combines deep industry knowledge with
              commitment to personalize service to ensure every client receives
              the attention they deserve. We understand that every investor is
              different, hence, we have developed bespoke investment strategies
              tailored to your specific needs, risk tolerance and long term
              objectives. We offer both active and passive management
              strategies, whether you prefer to capitalize on market
              opportunities through active trading or prefer a low cost, long
              term approach. We can structure your portfolio to match your
              preference.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="border border-gray-200 max-w-5xl mx-auto p-8 mt-6 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-16">
        <div className="w-full md:w-1/2">
          <h3 className="text-4xl font-semibold text-black">
            Our Approach to Securing Your Future
          </h3>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-700 italic text-justify leading-relaxed">
            Retirement Planning: Preparing for retirement is one of the most
            critical steps in securing your future. We help you build a
            retirement plan that ensures you have the financial resources to
            live comfortably and pursue your passions after you retire. Our
            strategies are built around your lifestyle goals and income needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDescription;
