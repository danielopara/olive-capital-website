import Image from "next/image";

export default function AboutDescription() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#0B3A36] p-4 mt-6 md:mt-24 w-full">
      {/* Images Container - Hidden on mobile */}
      <div className="hidden md:relative md:flex md:w-1/2 md:justify-center md:mb-24">
        {/* Main Image */}
        <div className="relative w-96 h-[400px] bg-gray-300 overflow-hidden">
          <Image
            src="/coins.svg"
            alt="Investment Coins"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Overlapping Image */}
        <div className="absolute w-80 h-[350px] bg-gray-200 -bottom-32 right-20 border border-dashed border-white overflow-hidden">
          <Image
            src="/stocks.svg"
            alt="Investment Stocks"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left text-white px-4 md:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
          Our philosophy is <br className="hidden sm:block" /> built on three
          core <br className="hidden sm:block" /> pillars:
        </h1>

        <ul className="text-sm sm:text-base space-y-6 list-disc pl-4 md:pl-5">
          <li className="leading-relaxed">
            <span className="font-bold">Innovative Investment Strategies:</span>{" "}
            We blend traditional and alternative investment techniques,
            identifying opportunities that align with your long-term financial
            objectives.
          </li>

          <li className="leading-relaxed">
            <span className="font-bold">Capital Preservation:</span> Our risk
            management framework ensures that your portfolio is optimized for
            growth while being protected against market volatility.
          </li>

          <li className="leading-relaxed">
            <span className="font-bold">Client-Centric Approach:</span> We
            believe that each client is unique, and we tailor our services to
            reflect your specific needs, providing continuous support and
            insights to ensure that your financial goals are met.
          </li>
        </ul>
      </div>
    </div>
  );
}
