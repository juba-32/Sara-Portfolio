"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DecorativeFlowers from "./components/ui/DecorativeFlowers";
import WorkSection from "./components/WorkSection";
import SkillsSection from "./components/SkillsSection";
import OffersSection from "./components/OffersSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/ui/AboutSection";

export default function Home() {
  return (
    <div>
      <DecorativeFlowers />
      <Navbar />
      <Hero />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <OffersSection />
      <ContactSection />
    </div>
  );
}
