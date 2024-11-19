"use client";

import React from "react";
import Image from "next/image";
import { useContent } from "./ContentContext";

const ServiceDescription: React.FC = () => {
  const { service, serviceImage, serviceBody } = useContent();

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3 max-w-md mx-auto md:mx-12">
          <Image
            src={serviceImage} // Uses dynamic image URL
            alt={service}
            layout="responsive"
            width={500}
            height={300}
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-black mb-4 mt-16">
            {service}
          </h2>
          <p className="text-gray-700 leading-relaxed">{serviceBody}</p>
          {/* <p className="text-gray-700 leading-relaxed mt-4">
            We understand that every investor is different, hence, we have
            developed bespoke investment strategies tailored to your specific
            needs, risk tolerance, and long-term objectives. We offer both
            active and passive management strategies, whether you prefer to
            capitalize on market opportunities through active trading or prefer
            a low-cost, long-term approach. We can structure your portfolio to
            match your preference.
          </p> */}
        </div>
      </div>

      <div className="border border-gray-200 max-w-5xl mx-auto p-8 mt-6  flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-16">
        <div className="w-full md:w-1/2">
          <h3 className="text-4xl font-semibold text-black">
            Our Approach to Securing Your Future
          </h3>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-gray-700 leading-relaxed">
            Long-Term Wealth Growth: We focus on sustainable growth rather than
            short-term gains. By investing in a diversified portfolio of
            high-quality assets, we help you achieve steady wealth accumulation
            over time. Our disciplined approach to risk management helps protect
            your assets during market volatility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDescription;
