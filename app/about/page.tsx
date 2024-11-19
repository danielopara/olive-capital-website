import React from "react";
import AboutHero from "./AboutHero";
import ContactUs from "../components/ContactUs";
import Advice from "./Advice";
import AboutDescription from "./AboutDescription";
import YourGoal from "./YourGoal";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <AboutHero />
      <AboutDescription />
      <YourGoal />
      <Advice />
      <ContactUs />
    </main>
  );
}
