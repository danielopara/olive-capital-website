import React from "react";

export default function CoreValues() {
  return (
    <div className="px-6 py-14 md:px-12 mb-12 md:mb-16">
      <div className="flex flex-col justify-between items-center space-y-16 md:flex-row md:space-y-0 md:space-x-16 md:px-6 md:py-20">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-black text-3xl font-bold italic">
            Your Goals, Our Mission
          </h1>
          <p className="text-black text-sm max-w-md">
            {`Building strong relationships through open communication and
            maintaining ethical standard. Prioritizing client's goals and
            working tirelessly to help them succeed. Pioneering new investment
            strategies and technologies for optimal performance. Committing to
            ethical practices that ensure long-term growth for clients and
            communities. We foster a culture of continuous improvement and
            dedication.`}
          </p>
        </div>

        <div className="grid grid-rows-[auto_auto] gap-6">
          <div className="mb-2 bg-[#CED8D8] w-40 h-24 mx-auto rounded-[50px_50px_50px_0] flex items-center justify-center">
            <p className="text-[#0B3D3B] font-semibold text-lg">Integrity</p>
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            {/* Left Top */}
            <div className="bg-[#CED8D8] w-40 h-24 rounded-[50px_0_50px_50px] flex items-center justify-center self-end">
              <p className="text-[#0B3D3B] font-semibold text-lg text-center">
                Customer Satisfaction
              </p>
            </div>

            {/* Right Top (Higher than Left) */}
            <div className="bg-[#CED8D8] w-40 h-24 rounded-[50px_50px_50px_0] flex items-center justify-center -translate-y-6">
              <p className="text-[#0B3D3B] font-semibold text-lg">Innovation</p>
            </div>

            {/* Left Bottom */}
            <div className="bg-[#CED8D8] w-40 h-24 rounded-[50px_0_50px_50px] flex items-center justify-center">
              <p className="text-[#0B3D3B] font-semibold text-lg">Excellence</p>
            </div>

            {/* Right Bottom (Higher than Left) */}
            <div className="bg-[#CED8D8] w-40 h-24 rounded-[50px_50px_50px_0] flex items-center justify-center -translate-y-6">
              <p className="text-[#0B3D3B] font-semibold text-lg">Diversity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
