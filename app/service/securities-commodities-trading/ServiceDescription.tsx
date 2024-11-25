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
            src="/service3-img.svg"
            alt="financial advisory services"
            layout="responsive"
            width={800} // Increased width for a larger image
            height={480}
          />
        </div>

        {/* Service Description */}
        <div className="w-full md:w-1/2">
          <h2 className="max-w-sm text-center text-3xl font-semibold text-black mb-4 md:mt-16">
            Securities & Commodities Trading
          </h2>

          <div className="mt-4 bg-white">
            <p className="max-w-sm text-lg text-gray-600 text-justify mb-4 leading-relaxed">
              {`At Olive Capital we understand that your financial future is one of your most important priorities whether you are planning for retirement, your children’s education or leaving a legacy, securing your financial future requires a strategic approach. With our tailored services, we help you build and preserve wealth, so you can focus on living your life with confidence.
              Securing you future means planning for both expected and unexpected life events.
      By partnering with experienced asset managers you gain the insight and tools necessary to make informed decisions that align with your long term financial goals`}
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
          <p className="text-lg text-gray-700 leading-relaxed">
            {`Continuous Monitoring & Adjustments: Life and financial markets are
            constantly evolving. That's why we continuously monitor your
            portfolio and make adjustments as needed to keep your plan aligned
            with your goals. We provide regular reports and insights to ensure
            your investments remain on track for long-term success`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDescription;
