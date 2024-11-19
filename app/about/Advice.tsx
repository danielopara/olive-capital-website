import React from "react";
import Image from "next/image";

// Define the props for the IconSquare component
interface IconSquareProps {
  imgSrc: string;
  altText: string;
  text: string;
}

// Reusable IconSquare component
const IconSquare: React.FC<IconSquareProps> = ({ imgSrc, altText, text }) => (
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center bg-[#0B3D3B] h-32 w-32 rounded-lg shadow-md">
      <Image src={imgSrc} alt={altText} width={64} height={64} />{" "}
    </div>
    <span
      className="text-center text-black text-sm mt-2"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </div>
);

// Define the type for the icon data
interface IconData {
  imgSrc: string;
  altText: string;
  text: string;
}

// Icon data array with explicit typing
const iconData: IconData[] = [
  {
    imgSrc: "/tax.svg",
    text: "Discussion about <br /> your finances",
    altText: "tax",
  },
  {
    imgSrc: "/compensation.svg",
    text: "Looking for financial <br /> problems",
    altText: "money",
  },
  {
    imgSrc: "/donation.svg",
    text: "Discussion about <br /> your finances",
    altText: "lend",
  },
  {
    imgSrc: "/stock.svg",
    text: "Looking for financial <br /> problems",
    altText: "sticks",
  },
];

const Advice: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-12 py-16">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4">
        <div className="border border-gray-200 max-w-5xl mx-auto p-8  flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-16">
          <div className="w-full md:w-1/2">
            <h3 className="text-4xl font-semibold text-black">
              Our Approach to Securing Your Future
            </h3>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 text-justify leading-relaxed">
              Long-Term Wealth Growth: We focus on sustainable growth rather
              than short-term gains. By investing in a diversified portfolio of
              high-quality assets, we help you achieve steady wealth
              accumulation over time. Our disciplined approach to risk
              management helps protect your assets during market volatility.
            </p>
          </div>
        </div>
      </div>

      {/* Icon Squares Section */}
      <div className="mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {iconData.map((item, index) => (
            <IconSquare
              key={index}
              imgSrc={item.imgSrc}
              altText={item.altText}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advice;
