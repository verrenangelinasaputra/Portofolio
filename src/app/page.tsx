import {Header} from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
// import { TestimonialsSection } from "@/sections/Testimoni";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <TapeSection />
      <ProjectsSection/>
      {/* <TestimonialsSection /> */}
      <ContactSection/>
    </div>
  );
}
