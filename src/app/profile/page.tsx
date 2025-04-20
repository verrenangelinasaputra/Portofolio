"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import profileImage from "@/assets/images/Project-Dwh.jpg";
import profilePicture from "@/assets/images/Profile-picture.png";
import logoSamsung from "@/assets/images/logo-samsung.png";
import logoTerra from "@/assets/images/logo-terra.png";
import logoSoko from "@/assets/images/logo-soko.png";
import logoBinus from "@/assets/images/logo-binus.png";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
import Slider from "react-slick";
import { usePathname } from "next/navigation";
import grainImage from "@/assets/images/grain.jpg";
import actSamsung from "@/assets/images/activity-samsung.jpg";
import actTerra from "@/assets/images/activity-terra.jpg";
import actSoko from "@/assets/images/activity-soko.jpg";
import actAslab from "@/assets/images/activity-aslab.jpg";
import actFL from "@/assets/images/activity-fl.jpg";

import certASEAN from "@/assets/images/certificate-asean.jpg";
import certSOKO from "@/assets/images/certificate-soko.jpeg";
import certMODERASI from "@/assets/images/certificate-moderasi.jpg";
import certESAI from "@/assets/images/certificate-esai.png";
import certASLAB from "@/assets/images/certificate-best.jpg";
import certTECHFEST from "@/assets/images/certificate-techfest.jpeg";
import certHISHOT from "@/assets/images/certificate-hishot.jpg";
import certAUTHOR from "@/assets/images/certificate-author.jpg";

// export function useCountUp(target: number, duration = 2000): number {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const increment = target / (duration / 16); // 60fps ≈ 16ms
//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         start = target;
//         clearInterval(interval);
//       }
//       setCount(Math.floor(start));
//     }, 16);

//     return () => clearInterval(interval);
//   }, [target, duration]);

//   return count;
// }

// HEADER COMPONENT
const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();

  const handleScroll = (anchorId: string, linkName: string) => {
    const anchor = document.querySelector(anchorId);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(linkName);
    }
  };

  useEffect(() => {
    if (pathname === "/profile") {
      setActiveLink("profile");
    }
  }, [pathname]);

  return (
    <div className="flex justify-center items-center top-3 w-full z-10 sticky">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {pathname === "/" ? (
          <a
            href="#home"
            className={`nav-item ${
              activeLink === "home" ? "bg-white text-gray-900" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#home", "home");
            }}
          >
            Home
          </a>
        ) : (
          <Link
            href="/"
            passHref
            className={`nav-item ${
              pathname === "/" ? "bg-white text-gray-900" : ""
            }`}
          >
            Home
          </Link>
        )}

        <Link
          href="/aiproject"
          passHref
          className={`nav-item ${
            activeLink === "ai" ? "bg-white text-gray-900" : ""
          }`}
        >
          Project
        </Link>

        {pathname === "/" ? (
          <a
            href="#contact"
            className={`nav-item ${
              activeLink === "contact" ? "bg-white text-gray-900" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contact", "contact");
            }}
          >
            Contact
          </a>
        ) : (
          <Link
            href="/#contact"
            passHref
            className={`nav-item ${
              activeLink === "contact" ? "bg-white text-gray-900" : ""
            }`}
          >
            Contact
          </Link>
        )}

        <Link
          href="/profile"
          className={`nav-item ${
            pathname === "/profile" ? "bg-white text-gray-900" : ""
          }`}
        >
          Profile
        </Link>
      </nav>
    </div>
  );
};

// PROFILE SECTION COMPONENT
export default function ProfileSection() {
  const carouselImages = [
    {
      src: actAslab,
      alt: "Aslab",
      description: "Best Performing Part-time Assistant",
    },
    {
      src: actTerra,
      alt: "Terra",
      description: "1st Meeting with Leaders of Terra",
    },
    {
      src: actSoko,
      alt: "Soko",
      description: "Best Intern Soko Financial Batch 7",
    },
    { src: actFL, alt: "FL", description: "Best Freshmen Leader FYP-28" },
    {
      src: actSamsung,
      alt: "Samsung",
      description: "Samsung B2B Innovation Team",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    nextArrow: <div className="custom-arrow right-arrow">→</div>,
    prevArrow: <div className="custom-arrow left-arrow">←</div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  // Declare the projects array here for the project section
  const projects = [
    { href: "/project1", imgUrl: certASLAB },
    { href: "/project2", imgUrl: certSOKO },
    { href: "/project3", imgUrl: certTECHFEST },
    { href: "/project4", imgUrl: certESAI },
    { href: "/project5", imgUrl: certAUTHOR },
    { href: "/project6", imgUrl: certMODERASI },
    { href: "/project7", imgUrl: certHISHOT },
    { href: "/project8", imgUrl: certASEAN },
  ];

  const footerLinks = [
    {
      title: "Github",
      href: "https://github.com/verrenangelinasaputra",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/verrenangelina/",
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/verrenangelinasaputra/",
    },
    {
      title: "Youtube",
      href: "https://www.youtube.com/@verrenangelinasaputra/videos",
    },
  ];

  // const experience = useCountUp(2);
  // const languages = useCountUp(5);
  // const project = useCountUp(16);
  // const awards = useCountUp(23);

  return (
    <>
      <Header />
      <section
        id="WebProject"
        className="pb-16 lg:py-24 bg-[#0f172a] font-sans"
      >
        <div className="container max-w-7xl mx-auto px-4">
          <br />
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent text-sm md:text-base">
              About Me
            </p>
          </div>
          <h2 className="font-serif text-white text-4xl md:text-5xl text-center mt-6 leading-tight">
            Personal and Professional Journey
          </h2>
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-start md:justify-start gap-8 max-w-5xl w-full">
            <div className="md:w-1/3 flex justify-center flex-shrink-0 shadow-lg max-w-[320px] mx-auto md:mx-0">
              <Image
                src={profilePicture}
                alt="Screenshot of Vanmart Data Warehousing software interface with a flowchart and data visualization on screen"
                className="rounded-full object-cover w-[200px] h-[200px] md:w-[240px] md:h-[240px]"
                width="240"
                height="240"
              />
            </div>

            <div className="mt-8 md:mt-0 flex flex-col items-center md:items-start gap-6 max-w-2xl text-gray-300 mx-auto md:mx-0 text-center md:text-left">
              <p className="text-sm md:text-base leading-relaxed">
                I’m a third-year Computer Science student at BINUS University
                and a Widia scholarship recipient,&nbsp;
                <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  currently interning as a Business Analyst at Samsung R&amp;D
                  Indonesia
                </span>
                . I’m passionate about AI and data, having built 5+ AI
                projects—including one presented at ICCSCI BINUS 2024
                (Scopus-indexed). I’ve taught 5+ programming courses as a lab
                assistant, mentored students in national competitions, and
                created database exam content. Proficient in Python, R, Tableau,
                and SQL, I enjoy working at the intersection of tech, teamwork,
                and continuous learning.
              </p>

              <a
                href="https://drive.google.com/file/d/1iNwaR3xRuGb1c5TNr1fBwhVwlEy-dvt8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-10"
              >
                <span>🧑🏻‍💻</span>
                <span>Download CV</span>
              </a>
            </div>
          </div>

          <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center text-white text-sm p-6 rounded-3xl shadow-lg backdrop-blur-md relative overflow-hidden">
            {/* Grain Effect */}
            <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{
                backgroundImage: `url(${grainImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black/20 z-0 rounded-3xl" />

            {/* Transparent outline effect */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl outline outline-2 outline-white/20 -outline-offset-2 z-10" />

            {/* Stats content */}
            <div className="relative z-20">
              <p className="text-4xl md:text-5xl font-serif text-emerald-400">
                2+
              </p>
              <p className="mt-2 text-base md:text-lg text-white/70">
                Years of
                <br />
                experience
              </p>
            </div>
            <div className="relative z-20">
              <p className="text-4xl md:text-5xl font-serif text-sky-400">
                5+
              </p>
              <p className="mt-2 text-base md:text-lg text-white/70">
                Programming
                <br />
                Languages
              </p>
            </div>
            <div className="relative z-20">
              <p className="text-4xl md:text-5xl font-serif text-emerald-400">
                16
              </p>
              <p className="mt-2 text-base md:text-lg text-white/70">
                Projects
                <br />
                completed
              </p>
            </div>
            <div className="relative z-20">
              <p className="text-4xl md:text-5xl font-serif text-sky-400">
                23
              </p>
              <p className="mt-2 text-base md:text-lg text-white/70">
                Awards and
                <br />
                Honors
              </p>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent text-sm md:text-base">
              Experience
            </p>
          </div>
          <h2 className="font-serif text-white text-4xl md:text-5xl text-center mt-6 leading-tight">
            Career Timeline
          </h2>

          {/* Business Analyst (Intern) Experience Section */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-white mt-12">
            <section className="mb-8 border-b border-white/15 pb-6">
              <div className="flex items-start space-x-4 mb-3">
                <Image
                  src={logoSamsung}
                  alt="Circular placeholder image with light gray color"
                  className="w-10 h-10 rounded-full flex-shrink-0"
                  width={40}
                  height={40}
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-base md:text-lg bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent leading-5">
                    Business Analyst (Intern)
                  </h2>
                  <p className="text-xs italic text-gray-400 leading-4 mt-0.5">
                    Samsung R&amp;D Indonesia (SRIN), Central Jakarta, Indonesia
                    | <span className="not-italic">2025-current</span>
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm md:text-base text-white/70 leading-5 mb-3">
                ● Conduct global market research on products and
                mobile device trends of Samsung, managing the distribution of insights
                across Southeast Asia, Oceania, and East Asia subsidiaries.
                <br></br>● Perform data wrangling and data visualization on Knox
                Products (security platform and mobile device management) to
                provide actionable insights for subsidiaries and the South
                Korean main company.
                <br></br>● Overhaul the Enterprise Technical Support report to
                improve business transaction validation, device updates,
                analytics, and facilitate decision-making for stakeholders.
                <br></br>● Extract and process data from Salesforce to identify
                and communicate new business opportunities for Samsung
                subsidiaries across various regions.
              </p>
              <div>
                {/* <p className="font-semibold text-base md:text-lg text-white leading-5 mb-1">
                  Achievement:
                </p>
                <ol className="mt-2 text-base md:text-lg text-white/70 leading-5 mb-3">
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                </ol> */}
              </div>
            </section>
          </div>

          {/* Business Analyst (Intern) Experience Section */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-white mt-12">
            <section className="mb-8 border-b border-white/15 pb-6">
              <div className="flex items-start space-x-4 mb-3">
                <Image
                  src={logoTerra}
                  alt="Circular placeholder image with light gray color"
                  className="w-10 h-10 rounded-full flex-shrink-0"
                  width={40}
                  height={40}
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-base md:text-lg bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent leading-5">
                    AI Developer (Intern)
                  </h2>
                  <p className="text-xs italic text-gray-400 leading-4 mt-0.5">
                    Terra AI Pte. Ltd., Singapore |{" "}
                    <span className="not-italic">Sep 2024-Feb 2025</span>
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm md:text-base text-white/70 leading-5 mb-3">
                Selected as one of the top AI Developer interns at AI4IMPACT,
                where I built and deployed multiple AI-driven chatbots using the
                Smojo language. My role focused on developing real-world
                solutions for both education and business needs. During the
                program, I successfully created:
                <br></br>● AI Study Planner: Generates personalized exam and
                daily study schedules, with added features like a learning style
                bot and Pomodoro-based focus booster.
                <br></br>● FortunoBot for Prudential Insurance: A business
                chatbot to improve customer-agent connectivity and product
                interaction.
              </p>
              <div>
                <p className="font-semibold text-base md:text-lg text-white leading-5 mb-1">
                  Achievement:
                </p>
                <ol className="mt-2 text-sm md:text-base text-white/70 leading-5 mb-3">
                  <li>
                    ● Chosen from over 2,100 applicants with an acceptance rate
                    below 0.14%, reflecting strong technical ability in AI
                    development.
                  </li>
                  <li>
                    ● FortunoBot was presented to Kemenkraf (Ministry of Tourism
                    and Creative Economy) as part of a national tech innovation
                    showcase.
                  </li>
                </ol>
              </div>
            </section>
          </div>

          {/* Business Analyst (Intern) Experience Section */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-white mt-12">
            <section className="mb-8 border-b border-white/15 pb-6">
              <div className="flex items-start space-x-4 mb-3">
                <Image
                  src={logoBinus}
                  alt="Circular placeholder image with light gray color"
                  className="w-10 h-10 rounded-full flex-shrink-0"
                  width={40}
                  height={40}
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-base md:text-lg bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent leading-5">
                    Laboratory Assistant (Part-time)
                  </h2>
                  <p className="text-xs italic text-gray-400 leading-4 mt-0.5">
                    Lab Center BINUS @Alam Sutera |{" "}
                    <span className="not-italic">Aug 2023-Jan 2025</span>
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm md:text-base text-white/70 leading-5 mb-3">
                Managed and taught laboratory classes for Computer Science and
                Information Systems programs, handling over 330+ students across
                20+ classes throughout the 2023–2024 academic year. Collaborated
                with 12+ other teaching assistants, both part-time and
                full-time, to ensure effective coordination and consistent
                learning outcomes across all sessions.
                <br></br>● COMP6047001 – Algorithms and Programming (C)
                <br></br>● COMP6178003 – Introduction to Programming (Java)
                <br></br>● ISYS6200003 – Data Warehouse (SSMS, Visual Studio
                2022, Excel)
                <br></br>● COMP6800001 – Human and Computer Interaction (HTML,
                CSS, JavaScript, Figma)
                <br></br>● MATH6183001 – Scientific Computing (Python, taught in
                English for global class)
                <br></br>● COMP6584001 – Network and System Programming (Go)
                <br></br>● COMP6122001 – Framework Layer Architecture (Design
                Pattern in Java)
                <br></br>● COMP6799001 – Database Technology (XAMPP)
              </p>
              <div>
                <p className="font-semibold text-base md:text-lg text-white leading-5 mb-1">
                  Achievement:
                </p>
                <ol className="mt-2 text-sm md:text-base text-white/70 leading-5 mb-3">
                  <li>● Awarded Best Performing Part-Time Assistant 2024.</li>
                  <li>
                    ● Earned an outstanding student satisfaction rating of
                    98.99% (score: 1564/1580).
                  </li>
                </ol>
              </div>
            </section>
          </div>

          {/* Business Analyst (Intern) Experience Section */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-white mt-12">
            <section className="mb-8 border-b border-white/15 pb-6">
              <div className="flex items-start space-x-4 mb-3">
                <Image
                  src={logoSoko}
                  alt="Circular placeholder image with light gray color"
                  className="w-10 h-10 rounded-full flex-shrink-0"
                  width={40}
                  height={40}
                />
                <div className="flex-1">
                  <h2 className="font-semibold text-base md:text-lg bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent leading-5">
                    Data Analyst (Intern)
                  </h2>
                  <p className="text-xs italic text-gray-400 leading-4 mt-0.5">
                    Soko Financial, Yogyakarta, Indonesia |{" "}
                    <span className="not-italic">Apr 2024-Jul 2024</span>
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm md:text-base text-white/70 leading-5 mb-3">
                Collaborated with a team to support Soko Financial by collecting
                and analyzing data for strategic insights:
                <br></br>● Created a 130+ row dataset on non-BUMN companies in
                Indonesia for partnership exploration.
                <br></br>● Scraped 10K+ YouTube data to analyze financial
                education trends and optimize posting times for engagement.
                <br></br>● Developed a promotion strategy based on data from 4
                online education platforms on LinkedIn.
                <br></br>● Analyzed Instagram traffic and engagement trends for
                May-June 2024, optimizing content reach.
                <br></br>● Created data visualizations to present actionable
                insights to the CEO and team.
              </p>
              <div>
                <p className="font-semibold text-base md:text-lg text-white leading-5 mb-1">
                  Achievement:
                </p>
                <ol className="mt-2 text-sm md:text-base text-white/70 leading-5 mb-3">
                  <li>
                    ● Successfully selected as one of the Data Analyst interns
                    from over 125 applicants, with an acceptance rate of 4.69%.
                  </li>
                  <li>
                    ● Honored to be chosen as the Best Intern at Soko Financial
                    Batch 7, out of 100+ interns across 18 divisions.
                  </li>
                </ol>
              </div>
            </section>
          </div>

          <div className="mt-10 md:mt-20 relative max-w-4xl mx-auto px-4">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={2}
              slidesToScroll={1}
              centerMode={true}
              centerPadding="0px"
              arrows={true}
              nextArrow={
                <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10 text-white text-2xl cursor-pointer bg-black/40 rounded-full px-2 py-1 backdrop-blur hover:bg-black/60 transition">
                  →
                </div>
              }
              prevArrow={
                <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10 text-white text-2xl cursor-pointer bg-black/40 rounded-full px-2 py-1 backdrop-blur hover:bg-black/60 transition">
                  ←
                </div>
              }
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    centerPadding: "0px",
                  },
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                  },
                },
              ]}
            >
              {carouselImages.map((image, index) => (
                <div key={index} className="p-2">
                  <div
                    className="relative group rounded-3xl w-full h-[325px] bg-cover bg-center grayscale hover:grayscale-0 transition-transform duration-300 ease-in-out"
                    style={{
                      backgroundImage: `url(${image.src.src})`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.03)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm md:text-base bg-black/60 px-3 py-1 rounded-lg shadow-lg">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <br />
          <br />
          <br />
          <br />

          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent text-sm md:text-base">
              Honors and Awards
            </p>
          </div>
          <h2 className="font-serif text-white text-4xl md:text-5xl text-center mt-6 leading-tight">
            Achievements and Recognitions
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-3xl z-0 overflow-hidden px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16 after:pointer-events-none block cursor-pointer"
                style={{
                  backgroundImage: `url(${project.imgUrl.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "325px",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            ))}
          </div>
        </div>
      </section>
      <div id="contact" className="py-16 pt-14 lg:py-24 lg:pt-20">
        <div className="container ">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
            <div
              className="absolute inset-0 opacity-10 -z-10"
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            ></div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Lets create something amazing together
                </h2>
                <p className="text-sm md:text-base mt-2">
                  Interested in collaborating? Reach out to me via email to
                  discuss how we can turn your vision into reality
                </p>
              </div>
              <div>
                <a
                  href="mailto:verren.angelinas@gmail.com"
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border-gray-900"
                >
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative overflow-x-clip">
        <div
          className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10"
          style={{
            maskImage: "linear-gradient(transparent, black)",
            WebkitMaskImage: "linear-gradient(transparent, black)",
          }}
        ></div>
        <div className="container">
          <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
            <div className="text-white/40 sm:justify-center sm:text-center">
              &copy; 2024 Built with passion by Verren. All rights reserved.
            </div>
            <nav className="flex flex-col md:flex-row items-center gap-8">
              {footerLinks.map((link) => (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.title}
                  className="inline-flex items-center gap-1.5"
                >
                  <span className="font-semibold">{link.title}</span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
