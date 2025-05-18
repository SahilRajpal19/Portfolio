import * as React from "react";
import Front from "../../Components/Hero/Body/Front";
import AboutHero from "../../Components/About/AboutHero";
import SkillsHero from "../../Components/Skills/SkillsHero";
import ProjectHero from "../../Components/Projects/ProjectHero";
import ContactHero from "../../Components/Contact/ContactHero";

export default function Hero() {
  return (
    <>
      <Front />
      <AboutHero />
      <SkillsHero />
      <ProjectHero />
      <ContactHero />
    </>
  );
}
