import React from "react";
import ServiceHero from "./ServiceHero";
import ContactUs from "../../components/ContactUs";
import ServiceDescription from "./ServiceDescription";

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <ServiceHero />
      {/* <WhatWeDo /> */}
      <ServiceDescription />
      <ContactUs />
    </div>
  );
}
