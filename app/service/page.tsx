import React from "react";
import ServiceHero from "./ServiceHero";
import WhatWeDo from "./WhatWeDo";
import ContactUs from "../components/ContactUs";
import { ContentProvider } from "./ContentContext";
import ServiceDescription from "./ServiceDescription";

export default function page() {
  return (
    <ContentProvider>
      <div className="flex min-h-screen flex-col items-center">
        <ServiceHero />
        <WhatWeDo />
        <ServiceDescription />
        <ContactUs />
      </div>
    </ContentProvider>
  );
}
