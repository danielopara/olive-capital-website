import Hero from "./components/Hero";
import CoreValues from "./components/CoreValues";
import Mission from "./components/Mission";
import OurServices from "./components/WhatWeOffer";
import ContactSection from "./components/ContactUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <CoreValues />
      <Mission />
      <OurServices />
      <ContactSection />
    </main>
  );
}
