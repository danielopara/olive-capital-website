import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  descriptionColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  colorClass,
  descriptionColor = "text-gray-500", // Default color
}) => (
  <div
    className={`w-full p-10 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${colorClass} flex flex-col items-center`}
  >
    <br />
    <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full p-2">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
    <p className={`text-sm text-center mb-4 ${descriptionColor}`}>
      {description}
    </p>
  </div>
);

const OurServices: React.FC = () => {
  const services = [
    {
      icon: (
        <Image
          src="/Icon-Backpack.svg"
          alt="icon backpack"
          width={58}
          height={58}
          className="rounded-md"
        />
      ),
      title: "Financial Advisory Services",
      description:
        "Comprehensive financial consulting and advisory services to help you make informed decisions.",
      colorClass: "bg-[#0B3D3B] text-white",
    },
    {
      icon: (
        <Image
          src="/Icon-wallet.svg"
          alt="icon wallet"
          width={58}
          height={58}
          className="rounded-md"
        />
      ),
      title: "Fund/Portfolio Management",
      description:
        "Expert management of investment portfolios to maximize returns and minimize risks.",
      colorClass: "bg-[#FFFFFF] text-[#0B3D3B] border border-gray-300",
      descriptionColor: "text-[#0B3D3B]-500",
    },
    {
      icon: (
        <Image
          src="/Icon-Analytic.svg"
          alt="icon analytic"
          width={58}
          height={58}
          className="rounded-md"
        />
      ),
      title: "Securities & Commodities Trading",
      description:
        "Professional trading services across various securities and commodities markets.",
      colorClass: "bg-[#556B2F] text-white",
      descriptionColor: "text-white-500",
    },
    {
      icon: (
        <Image
          src="/Icon-Backpack.svg"
          alt="icon backpack"
          width={58}
          height={58}
          className="rounded-md"
        />
      ),
      title: "Project/Structured Finance",
      description:
        "Specialized financing solutions for large-scale projects and structured investments.",
      colorClass: "bg-[#0B3D3B] text-white",
    },
    {
      icon: (
        <Image
          src="/Icon-wallet.svg"
          alt="icon wallet"
          width={58}
          height={58}
          className="rounded-md"
        />
      ),
      title: "Corporate Finance & Investment Banking",
      description:
        "Strategic financial services for corporate clients and investment opportunities.",
      colorClass: "bg-[#FFFFFF] text-[#0B3D3B] border border-gray-300",
      descriptionColor: "text-[#0B3D3B]-500",
    },
    {
      icon: (
        <Image
          src="/Icon-Analytic.svg"
          alt="icon analytic"
          width={58}
          height={58}
          className="rounded-md"
        />
      ),
      title: "Venture Capital Management",
      description:
        "Investment management focused on high-growth potential startups and ventures.",
      colorClass: "bg-[#556B2F]",
      descriptionColor: "text-white-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-screen-lg text-center">
      <h2 className="text-xl text-[#0B3D3B] font-bold mb-4">Our Services</h2>
      <h2 className="text-3xl text-[#0B3D3B] font-bold mb-8">What We Offer</h2>
      <a href="/service">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              colorClass={service.colorClass}
              descriptionColor={service.descriptionColor}
            />
          ))}
        </div>
      </a>
    </div>
  );
};

export default OurServices;
