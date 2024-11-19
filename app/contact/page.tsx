import React from "react";
import ContactHero from "./ContactHero";
import Advice from "../about/Advice";
import ContactUs from "../components/ContactUs";
import Location from "./Location";
import Contact from "./Contact";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ContactHero />
      <Contact />
      <Location />
      <Advice />
      <ContactUs />
    </main>
  );
}
