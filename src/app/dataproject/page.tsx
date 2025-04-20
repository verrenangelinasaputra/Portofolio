// Import necessary modules from Next.js and React
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import grainImage from '@/assets/images/grain.jpg';
import { Footer } from '@/sections/Footer';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

// Import images from your assets
import analytics from '@/assets/images/Project-Analytics.jpg';
import daic from '@/assets/images/Project-Daic.jpg';
import dwh from '@/assets/images/Project-Dwh.jpg';
import soko from '@/assets/images/Project-Soko.jpg';
import socmed from '@/assets/images/Project-Socmed.png';


export default function DataProjectPage() {
  const [activeLink, setActiveLink] = useState("data"); // State for active link for navigation
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null); // Track which project is selected

  // Function to handle scrolling to sections
  const handleScroll = (id: string, link: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveLink(link);
    }
  };

  // Data for projects
  const projects = [
    {
      title: "Emission Analytics",
      description:
        "An environmental data visualization project that won 3rd place at the DAIC 2024 competition. This infographic explores Asia&apos;s dominant role in global CO₂ emissions, highlighting top contributors like China and Indonesia, and emphasizes the urgency of sustainable action to combat climate change.",
      imgUrl: daic,
      href: "",
      year: "2024",
      category: "Data Analytics and Visualization",
      role: "Data Analyst, Data Scientist",
      tools: "Python, Google Colab",
      buttons: [
        { label: "🚀 Read the Poster", href: "https://drive.google.com/file/d/1Mbwkwd-6ruust2TDA3tbrrnJvz7Ag4jd/view?usp=sharing" },
      ],
    },
    {
      title: "VanMart",
      description:
      "VanMart is a Data Warehouse project focused on processing and analyzing sales data. It involves the implementation of ETL pipelines, OLTP and OLAP systems to transform raw transactional data into meaningful insights for business decision-making. The project showcases end-to-end data integration using SQL Server and Excel for visualization.",
      imgUrl: dwh,
      href: "",
      year: "2024",
      category: "Data Warehouse, Business Analyst",
      role: "Data Warehouse Engineer",
      tools:
        "Visual Studio 2022, Microsoft SSMS, SQL, Microsoft Excel",
      buttons: [
        { label: "🔗 Explore Code", href: "https://github.com/verrenangelinasaputra/VanMart-Data-Warehouse" },
      ],
    },
    {
      title: "Customer Preferences Analytics",
      description:
      "This analytics project focuses on understanding customer preferences and class topics for Soko Financial, a fintech startup based in Yogyakarta. By analyzing survey and engagement data, the project identifies which financial class formats and topics resonate most with users — providing actionable insights to improve content offerings and user satisfaction.",
      imgUrl: soko,
      href: "",
      year: "2024",
      category: "Data Analytics and Visualization",
      role: "Data Analyst",
      tools:
        "Python, Google Colab, Apps Script",
      buttons: [
        { label: "📚 Read the Documentation", href: "https://www.canva.com/design/DAGTeEN16Ow/O1ZXEVIy_4VAp0jkm_MBoA/edit?utm_content=DAGTeEN16Ow&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
      ],
    },
    {
      title: "Social Media Analytics",
      description:
      "This project analyzes social media traffic and engagement patterns for Soko Financial, a fintech startup based in Yogyakarta. The analysis provides insights into user behavior, peak activity times, and content performance — helping the team optimize their digital marketing strategies and increase audience reach.",
      imgUrl: socmed,
      href: "",
      year: "2024",
      category: "Data Analytics and Visualization",
      role: "Data Analyst",
      tools:
        "Python, Google Colab, Apps Script",
      buttons: [
        { label: "📚 Read the Documentation", href: "https://www.canva.com/design/DAGXYBPezOw/H-icIuZyiSHj5UpCRBVgHQ/edit?utm_content=DAGXYBPezOw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
      ],
    },
    
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

  // Handler to open popup for selected project
  const handleProjectClick = (index: number) => {
    setSelectedProjectIndex(index);
    setShowPopup(true);
  };

  // Close popup handler
  const closePopup = () => {
    setShowPopup(false);
    setSelectedProjectIndex(null);
  };

  return (
    <div>
      <div className="flex justify-center items-center top-3 w-full z-10 sticky">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <Link
            href="/aiproject"
            passHref
            className={`nav-item ${
              activeLink === "ai" ? "bg-white text-gray-900" : ""
            }`}
          >
            AI
          </Link>
          <Link
            href="/dataproject"
            passHref
            className={`nav-item ${
              activeLink === "data" ? "bg-white text-gray-900" : ""
            }`}
          >
            Data
          </Link>
          <Link
            href="/webproject"
            passHref
            className={`nav-item ${
              activeLink === "web" ? "bg-white text-gray-900" : ""
            }`}
          >
            Web
          </Link>
          <Link
            href="/"
            passHref
            className={`nav-item ${
              activeLink === "home" ? "bg-white text-gray-900" : ""
            }`}
          >
            Home
          </Link>
        </nav>
      </div>
      <section className="text-center p-5">
        <div className="container mx-auto">
          <br />
          <br />
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent text-sm md:text-base">
              What I&apos;ve Built
            </p>
          </div>
          <h2 className="font-serif text-white text-4xl md:text-5xl text-center mt-6 leading-tight">
            Highlights of My Data Analytics Projects
          </h2>
          <br />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                passHref
                className="bg-gray-800 rounded-3xl z-0 overflow-hidden px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16 after:pointer-events-none block cursor-pointer"
                style={{
                  backgroundImage: `url(${project.imgUrl.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "325px",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={(e) => {
                  e.preventDefault(); // prevent navigation on click
                  handleProjectClick(index);
                }}
              >
                <div className="absolute top-2 left-2 bg-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-black">
                  {index + 1}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popup modal for selected project */}
      {showPopup && selectedProjectIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div
            className="bg-[#161E2E] rounded-xl max-w-4xl w-full p-8 relative text-white shadow-lg animate-fade-in-up"
            style={{
              animation: "fadeInUp 0.5s ease-out both",
            }}
          >
            {/* Close button */}
            <button
              aria-label="Close popup"
              className="absolute top-4 right-4 text-white text-xl w-8 h-8 flex justify-center items-center rounded-full border border-white hover:bg-white hover:text-[#161E2E] transition"
              onClick={closePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Title */}
            <h3
              id="popup-title"
              className="text-4xl font-serif text-center w-full md:text-5xl mb-6 text-white bg-clip-text text-transparent leading-tight bg-gradient-to-r from-emerald-300 to-sky-400"
            >
              {projects[selectedProjectIndex].title}
            </h3>

            {/* Image and info */}
            <div className="flex flex-col gap-6 items-center sm:items-start sm:flex-row sm:gap-12">
              <img
                src={projects[selectedProjectIndex].imgUrl.src}
                alt={`Image of ${projects[selectedProjectIndex].title}`}
                className="rounded-lg max-w-[320px] w-full object-contain"
              />

              <div className="flex flex-col gap-4">
                <ul className="text-white text-left list-none list-inside space-y-1 max-w-md">
                  <li>
                    <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-sm md:text-base">
                      <strong>Year:</strong>
                    </span>{" "}
                    {projects[selectedProjectIndex].year}
                  </li>
                  <li>
                    <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-sm md:text-base">
                      <strong>Category:</strong>
                    </span>{" "}
                    {projects[selectedProjectIndex].category}
                  </li>
                  <li>
                    <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-sm md:text-base">
                      <strong>Role:</strong>
                    </span>{" "}
                    {projects[selectedProjectIndex].role}
                  </li>
                  <li>
                    <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-sm md:text-base">
                      <strong>Tools/Language:</strong>
                    </span>{" "}
                    {projects[selectedProjectIndex].tools}
                  </li>
                </ul>

                {/* Buttons inserted here */}
                {/* Buttons inserted here */}
<div className="flex gap-4 flex-wrap mt-1">
  {projects[selectedProjectIndex].buttons.map((button, buttonIndex) => (
    <Link key={buttonIndex} href={button.href} passHref>
      <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10">
        {button.label}
      </button>
    </Link>
  ))}
</div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-white text-base leading-relaxed whitespace-pre-line">
              {projects[selectedProjectIndex].description}
            </p>
          </div>
        </div>
      )}

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

      <style jsx>{`
        @media (max-width: 500px) {
          div[role="dialog"] > div > .flex {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
          }

          div[role="dialog"] > div > .flex img {
            max-width: 100% !important;
            height: auto;
          }

          div[role="dialog"] > div > .flex ul {
            margin-top: 1rem;
            text-align: left;
          }

          div[role="dialog"] > div > p {
            margin-top: 1.5rem !important;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
