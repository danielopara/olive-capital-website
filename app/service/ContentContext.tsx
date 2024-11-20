"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface ContentContextType {
  service: string;
  backgroundImage: string;
  shortBody: string;
  serviceImage: string;
  serviceBody: string;
  bottomText: string;
  setService: (
    newService: string,
    newBackgroundImage: string,
    newShortBody: string,
    newImage: string,
    newBody: string,
    newBottomText: string
  ) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({
  children,
}) => {
  const [service, setServiceName] = useState<string>(
    "Financial Advisory Services"
  );
  const [serviceImage, setServiceImage] = useState<string>("/service1-img.svg");
  const [backgroundImage, setBackgroundImage] =
    useState<string>("/service1.svg");
  const [shortBody, setShortBody] =
    useState<string>(`At Olive Capital, we understand that the best investment approach is PATIENCE. Our goal is to make the journey profitable no matter how long you choose to wait. We provide comprehensive investment solutions and strategies to enable you invest on your terms.
As an investor you have access to solutions crafted especially for you.`);
  const [serviceBody, setServiceBody] = useState<string>(
    `We provide you with personalized strategies to help you grow your wealth, plan for the future and achieve financial independence.
     Our team of expert advisers combines deep industry knowledge with commitment to personalize service to ensure every client receives the attention they deserve. 
     We understand that every investor is different, hence, we have developed bespoke investment strategies tailored to your specific needs, risk tolerance and long term objectives.
    We offer both active and passive management strategies, whether you prefer to capitalize on market opportunities through active trading or prefer a low cost, long term approach.
     We can structure your portfolio to match your preference.`
  );
  const [bottomText, setBottomText] = useState<string>(
    `Retirement Planning: Preparing for retirement is one of the most critical steps in securing your future.
     We help you build a retirement plan that ensures you have the financial resources to live comfortably and pursue your passions after you retire.
     Our strategies are built around your lifestyle goals and income needs.`
  );

  const setService = (
    newService: string,
    newImage: string,
    newBody: string,
    newBackgroundImage: string,
    shortBody: string,
    bottomText: string
  ) => {
    setServiceName(newService);
    setServiceImage(newImage);
    setServiceBody(newBody);
    setBackgroundImage(newBackgroundImage);
    setShortBody(shortBody);
    setBottomText(bottomText);
  };

  return (
    <ContentContext.Provider
      value={{
        service,
        serviceImage,
        serviceBody,
        backgroundImage,
        shortBody,
        bottomText,
        setService,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
