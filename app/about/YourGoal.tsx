import Image from "next/image";
import React from "react";

const YourGoal: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:space-x-8 p-8 mx-auto max-w-screen-lg">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <h2 className="text-4xl italic font-bold mb-4 text-black text-center md:text-left">
          Why Choose Us?
        </h2>
        <div className="mt-4 relative w-full h-80 md:h-[400px]">
          <Image
            src="/WhyChooseUs.svg"
            alt="Why Choose Us"
            width={400}
            height={400}
            // className="rounded-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-4 mt-8">
        <ul className="space-y-4 text-gray-700 list-disc">
          <li>
            <span className="font-semibold">Proven Expertise:</span> With years
            of experience in asset management, we have a track record of
            delivering strong results for our clients across different market
            cycles.
          </li>
          <li>
            <span className="font-semibold">Client-Centered Approach:</span>{" "}
            Your goals are our priority. We are dedicated to providing
            transparent, personalized, and proactive service every step of the
            way.
          </li>
          <li>
            <span className="font-semibold">Comprehensive Solutions:</span> From
            financial planning to investment management and legacy planning, we
            offer a full range of services to secure your financial future.
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          {
            "By working with Olive Capital you're not just investing for today—you're building a secure, prosperous tomorrow. Let us guide you on your journey to financial freedom and peace of mind."
          }
        </p>
      </div>
    </section>
  );
};

export default YourGoal;
