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
            src="/service2-img.svg"
            alt="financial advisory services"
            layout="responsive"
            width={800} // Increased width for a larger image
            height={480}
          />
        </div>

        {/* Service Description */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-black mb-4 md:mt-16">
            Fund/Portfolio Management
          </h2>

          <div className="mt-4 bg-white">
            <p className="max-w-sm text-lg text-gray-600 text-justify mb-4 leading-relaxed">
              Managing a client’s investment portfolio requires an informed and
              disciplined approach. At Olive Capital, our professional portfolio
              management team employs in-depth research in identifying and
              managing the right mix of investments to meet the client’s
              specific needs.
            </p>

            <p className="max-w-sm text-lg text-gray-600 text-justify mb-4 leading-relaxed">
              Whether a client is seeking income or targeting capital growth,
              our portfolio managers can give them exposure to a range of
              investments including but not limited to stocks, bonds, money
              market, alternative assets and best-in-breed mutual funds.
            </p>

            <p className="max-w-sm text-lg text-gray-600 text-justify mb-4 leading-relaxed">
              Our comprehensive techniques decipher the intricate data of the
              Nigerian and international markets into coherent portfolio models
              that can be personalized based on a client’s risk appetite and
              investment horizon prior to implementation. We design and manage
              diversified portfolio aimed to help our clients (both
              Institutional clients and HNIs) achieve their financial goals
              while maintaining liquidity for precautionary cash needs. Our
              best-in-class trading system allows us to efficiently implement
              the investment strategies made to your risk profile and will yield
              maximal return.
            </p>

            <p className="max-w-sm text-lg text-gray-600 text-justify mb-4 leading-relaxed">
              {`At Olive Capital we understand that your financial future is one
              of your most important priorities. Whether you're planning for
              retirement, your children's education, or leaving a legacy,
              securing your financial future requires a strategic approach. With
              our tailored asset management services, we help you build and
              preserve wealth, so you can focus on living your life with
              confidence.`}
            </p>
            <p className="max-w-sm text-lg text-gray-600 text-justify mb-4 leading relaxed">
              Securing your future means planning for both expected and
              unexpected life events. By partnering with experienced asset
              managers, you gain the insight and tools necessary to make
              informed decisions that align with your long-term financial goals.
              Our strategies are designed to adapt to changing market conditions
              while ensuring your investments grow steadily over time.
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
            Personalized Financial Planning: We begin by understanding your
            unique financial situation, goals, and risk tolerance. Our advisors
            work closely with you to create a customized plan that takes into
            account your current financial standing and the future you envision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDescription;
