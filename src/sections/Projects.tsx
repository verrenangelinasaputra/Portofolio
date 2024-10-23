import darkSaasLandingPage from "@/assets/images/Mockup-Laptop.png";
import lightSaasLandingPage from "@/assets/images/Mockup-Laptop-2.png";
import aiStartupLandingPage from "@/assets/images/Mockup-Laptop-3.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from '@/assets/images/grain.jpg';
import Link from 'next/link';
// import { AIProjectSection } from "@/sections/AIProject";

const portfolioProjects = [
  {
    company: "BINUS AND Terra SINGAPORE",
    year: "2024",
    title: "Artificial Intelligence",
    results: [
      { title: "Developed over 5 AI projects" },
      { title: "Accepted for presentation at ICCSCI'24" },
      { title: "Published in Procedia Computer Science" },
    ],
    link: "/aiproject",
    image: darkSaasLandingPage,
  },
  {
    company: "BINUS AND SOKO FINANCIAL",
    year: "2023-2024",
    title: "Data Analytics and Visualization",
    results: [
      { title: "Developed over 4 Data projects" },
      { title: "Utilized tools for 50K+ data" },
      { title: "3rd Place at DAIC HIMMAT BINUS" },
    ],
    link: "/dataproject",
    image: lightSaasLandingPage,
  },
  {
    company: "BINUS",
    year: "2023-2024",
    title: "Web and App Development",
    results: [
      { title: "Developed over 5 projects" },
      { title: "Web development lead HISHOT 2023 HIMTI" },
      { title: "1st Place UI/UX at TECHFEST 2024" },
    ],
    link: "/webproject",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section id="projects" className="pb-16 lg:py-24">
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">Real-world Results</p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Projects Showcase</h2>
      <p className="text-center sm:mt-8 md:text-lg lg:mt-8 text-white/60 mt4 max-w-3xl mx-auto">Discover my portfolio of projects in artificial intelligence, data analytics, and web development. Each project highlights my skills and dedication to using technology to address practical challenges. Explore case studies that demonstrate my innovative solutions in various technical fields.</p>
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map(project => (
          <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16 after:pointer-events-none">

            <div className="absolute inset-0 -z-10 opacity-5" style={{
              backgroundImage: `url(${GrainImage.src})`
            }}></div>
            
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
            

            <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map(result => (
                <li className="flex gap-2 text-sm md:text-base text-white/50">
                  <CheckCircleIcon className="size-5 md:size-6"/>
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <Link href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                <span>View More</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </Link>
            </div>
            <div className="relative">
            <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>;
};
