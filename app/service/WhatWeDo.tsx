"use client";

import React from "react";
import { useContent } from "./ContentContext";
import { FaArrowRight } from "react-icons/fa";

const services = {
  title1: "Financial Advisory Services",
  title2: "Fund/Portfolio Management",
  title3: "Securities & Commodities Trading",
  title4: "Fund/Portfolio Management",
  title5: "Fund/Portfolio Management",
  title6: "Fund/Portfolio Management",

  imagePath1: "/service1-img.svg",
  imagePath2: "/service2-img.svg",
  imagePath3: "/service3-img.svg",

  backgroundImage1: "/service1.svg",
  backgroundImage2: "/service2.svg",
  backgroundImage3: "/service3.svg",

  shortBody1: `At Olive Capital, we understand that the best investment approach is PATIENCE. Our goal is to make the journey profitable no matter how long you choose to wait. We provide comprehensive investment solutions and strategies to enable you invest on your terms.
As an investor you have access to solutions crafted especially for you.`,
  shortBody2: `This unit offers wide range of products and services to enable our customers realize their specific investment objectives.  Olive Capital employs a prudent, disciplined and personalized investment approach in handling clients portfolios`,
  shortBody3: `At Olive Capital, we understand that the best investment approach is PATIENCE. Our goal is to make the journey profitable no matter how long you choose to wait. We provide comprehensive investment solutions and strategies to enable you invest on your terms.
As an investor you have access to solutions crafted especially for you.`,

  description1: `We provide you with personalized strategies to help you grow your wealth, plan for the future and achieve financial independence. 
  Our team of expert advisers combines deep industry knowledge with commitment to personalize service to ensure every client receives the attention they deserve. 
  We understand that every investor is different, hence, we have developed bespoke investment strategies tailored to your specific needs, risk tolerance and long term objectives. 
  We offer both active and passive management strategies, whether you prefer to capitalize on market opportunities through active trading or prefer a low cost, long term approach. 
  We can structure your portfolio to match your preference.`,

  description2: `Managing a client’s investment portfolio requires an informed and disciplined approach. 
  At Olive Capital, our professional portfolio management team employs in-depth research in identifying and managing the right mix of investments to meet the client’s specific needs. \n
  

Whether a client is seeking income or targeting capital growth, our portfolio managers can give them exposure to a range of investments including but not limited to stocks, bonds, money market, alternative assets and best-in-breed mutual funds.

Our comprehensive techniques decipher the intricate data of the Nigerian and international markets into coherent portfolio models that can be personalized based on a client’s risk appetite and investment horizon prior to implementation. We design and manage diversified portfolio aimed to help our clients (both Institutional clients and HNIs) achieve their financial goals while maintaining liquidity for precautionary cash needs. Our best-in-class trading system allows us to efficiently implement the investment strategies made to your risk profile and will yield maximal return,

At Olive Capital we understand that your financial future is one of your most important priorities. Whether you're planning for retirement, your children's education, or leaving a legacy, securing your financial future requires a strategic approach. With our tailored asset management services, we help you build and preserve wealth, so you can focus on living your life with confidence.
Securing your future means planning for both expected and unexpected life events. By partnering with experienced asset managers, you gain the insight and tools necessary to make informed decisions that align with your long-term financial goals. Our strategies are designed to adapt to changing market conditions while ensuring your investments grow steadily over time.`,

  description3: `At Olive Capital we understand that your financial future is one of your most important priorities whether you are planning for retirement, your children’s education or leaving a legacy, securing your financial future requires a strategic approach. With our tailored services, we help you build and preserve wealth, so you can focus on living your life with confidence.
Securing you future means planning for both expected and unexpected life events. By partnering with experienced asset managers you gain the insight and tools necessary to make informed decisions that align with your long term financial goals.`,
};

const WhatWeDo: React.FC = () => {
  const { setService } = useContent();

  const handleClick = (
    serviceName: string,
    serviceImage: string,
    serviceBody: string,
    serviceBackgroundImage: string,
    serviceShortBody: string
  ) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setService(
      serviceName,
      serviceImage,
      serviceBody,
      serviceBackgroundImage,
      serviceShortBody
    );
  };

  return (
    <section className="w-full bg-[#0B3D3B] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What We Do</h2>
        <p className="text-sm mb-12">
          To provide world-class investment banking services in a sustainable
          manner whilst ensuring adequate returns to our stakeholders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between pt-4 border-t border-b border-gray-400 pb-4">
              <button
                className="text-xl"
                onClick={() =>
                  handleClick(
                    services.title1,
                    services.imagePath1,
                    services.description1,
                    services.backgroundImage1,
                    services.shortBody1
                  )
                }
              >
                Financial Advisory Services
              </button>
              <button>
                <FaArrowRight
                  onClick={() =>
                    handleClick(
                      services.title1,
                      services.imagePath1,
                      services.description1,
                      services.backgroundImage1,
                      services.shortBody1
                    )
                  }
                />
              </button>
            </div>
            <div className="flex items-center justify-between border-b border-gray-400 pb-4">
              <button
                className="text-xl"
                onClick={() =>
                  handleClick(
                    services.title2,
                    services.imagePath2,
                    services.description2,
                    services.backgroundImage2,
                    services.shortBody2
                  )
                }
              >
                Fund/Portfolio Management
              </button>
              <button
                onClick={() =>
                  handleClick(
                    services.title2,
                    services.imagePath2,
                    services.description2,
                    services.backgroundImage2,
                    services.shortBody2
                  )
                }
              >
                <FaArrowRight />
              </button>
            </div>
            <div className="flex items-center justify-between  border-gray-400 pb-4">
              <button
                className="text-xl"
                onClick={() =>
                  handleClick(
                    services.title3,
                    services.imagePath3,
                    services.description3,
                    services.backgroundImage3,
                    services.shortBody3
                  )
                }
              >
                Securities & Commodities Trading
              </button>
              <button
                onClick={() =>
                  handleClick(
                    services.title3,
                    services.imagePath3,
                    services.description3,
                    services.backgroundImage3,
                    services.shortBody3
                  )
                }
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between pt-4 border-t border-b border-gray-400 pb-4">
              <span className="text-xl">Project/Structured Finance</span>
              <FaArrowRight />
            </div>
            <div className="flex items-center justify-between border-b border-gray-400 pb-4">
              <span className="text-xl">
                Corporate Finances & Investment Banking
              </span>
              <FaArrowRight />
            </div>
            <div className="flex items-center justify-between  border-gray-400 pb-4">
              <span className="text-xl">Ventures Capital Management</span>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
