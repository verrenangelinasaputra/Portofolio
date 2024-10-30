// Import necessary modules from Next.js and React
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import grainImage from "@/assets/images/grain.jpg";
import { Footer } from "@/sections/Footer";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import html from "@/assets/images/logo-web-1.png";
import css from "@/assets/images/logo-web-2.png";
import js from "@/assets/images/logo-web-3.png";
import figma from "@/assets/images/logo-web-4.png";

// Import images from your assets
import wayste from "@/assets/images/Project-Wayste.jpg";
import toyz from "@/assets/images/Project-Toyz.jpg";
import nmr from "@/assets/images/Project-NMR.jpg";
import hishot from "@/assets/images/Project-Hishot.jpg";

export default function WebProjectSection() {
  const [activeLink, setActiveLink] = useState("web"); // State for active link for navigation

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
      title: "ƧlOOT",
      description: "",
      imgUrl: wayste,
      href: "https://www.figma.com/design/96R30a5c4OryNEmuxrZY3G/TechFest---Tim-Chipichapa-(Wayste)?node-id=1-853&t=MT4JcIUwkCpYpMhY-1",
      tools: [
        { name: "Node.js", image: figma }
      ]
    },
    {
      title: "ƧlOOT",
      description: "",
      imgUrl: nmr,
      href: "https://www.figma.com/design/o14mwM2q5Wid6BabLdV5qI/NMR?node-id=0-1&node-type=canvas&t=BJvEsHCFfofOHgG4-0",
      tools: [
        { name: "Node.js", image: figma }
      ]
    },
    {
      title: "ƧlOOT",
      description: "",
      imgUrl: hishot,
      href: "https://replit.com/@verrenangelina/WebDev-HISHOT#index.html",
      tools: [
        { name: "React", image: html },
        { name: "Next.js", image: css },
        { name: "Tailwind CSS", image: js },
        { name: "Node.js", image: figma }
      ]
    },
    {
      title: "ƧlOOT",
      description: "",
      imgUrl: toyz,
      href: "https://github.com/verrenangelinasaputra/HI-Toyz",
      tools: [
        { name: "React", image: html },
        { name: "Next.js", image: css },
        { name: "Tailwind CSS", image: js },
        { name: "Node.js", image: figma }
      ]
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState(-1); // Initialize with -1, indicating no tile is flipped.

  const handleMouseEnter = (index) => {
    setFlippedIndex(index); // Set the currently flipped tile index
  };

  const handleMouseLeave = () => {
    setFlippedIndex(-1); // Reset flipped tile index when mouse leaves
  };

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
          <h2 className="mt-8 text-3xl font-bold mb-2 text-white bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-white/80">
            Dive into our innovative web and UI/UX projects, including an AI
            application designed for efficient trash detection and reporting, a
            user-friendly UI/UX for the BNEC website, an engaging online game
            store, and the dynamic HIMTI's HISHOT website, each tailored to
            enhance user interaction and functionality.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                target="_blank" 
                rel="noopener noreferrer"
                passHref
                className="bg-gray-800 rounded-3xl z-0 overflow-hidden px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16 after:pointer-events-none block"
                style={{
                  backgroundImage:
                    flippedIndex === index
                      ? `none`
                      : `url(${project.imgUrl.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor:
                    flippedIndex === index ? "white" : "transparent",
                  height: "325px",
                  transform: `scale(${
                    flippedIndex === index ? "1.05" : "1"
                  }) rotateY(${flippedIndex === index ? "180deg" : "0deg"})`,
                  transition: "transform 0.3s ease-in-out", // Add this line
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
        {/* Background container for the flip effect */}
        <div
            className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
                flippedIndex === index ? "rotate-y-180" : ""
            }`}
            style={{
                backgroundImage:
                    flippedIndex === index ? "none" : `url(${project.imgUrl.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "white",
                backfaceVisibility: "hidden",
            }}
        />

        {/* Content that appears when flipped */}
        <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-4 bg-white transition-opacity duration-300 ease-in-out ${
                flippedIndex === index
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
            }`}
            style={{
                backfaceVisibility: "hidden",
            }}
        >
            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            <p className="text-sm text-gray-900">{project.description}</p>

            {/* Tools section that appears below the text */}
            <div className="flex gap-2 mt-4">
                {project.tools.map((tool, toolIndex) => (
                    <Image
                        key={toolIndex}
                        src={tool.image}
                        alt={tool.name}
                        width={40} // Width of each tool icon
                        height={40} // Height of each tool icon
                        className="rounded-lg"
                    />
                ))}
            </div>
        </div>

        {/* Placeholder content that always appears */}
        <div
            className={`absolute top-2 left-2 bg-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-black transition-opacity duration-300 ease-in-out ${
                flippedIndex !== index ? "opacity-100" : "opacity-0"
            }`}
        >
            {index + 1}
        </div>
              </Link>
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
    </div>
  );
}
