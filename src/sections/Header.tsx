"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Header = () => {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState("home");

  // Function to handle smooth scrolling and setting active link
  const handleScroll = (anchorId: string, linkName: string) => {
    const anchor = document.querySelector(anchorId);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(linkName); // Update the active link state
    }
  };

  return (
    <div className="flex justify-center items-center top-3 w-full z-10 sticky">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
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

        <Link
          href="/aiproject"
          passHref
          className={`nav-item ${
            activeLink === "ai" ? "bg-white text-gray-900" : ""
          }`}
        >
          Project
        </Link>

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
        <Link
          href="/profile"
          passHref
          className={`nav-item ${
            activeLink === "profile" ? "bg-white text-gray-900" : ""
          }`}
        >
          Profile
        </Link>
      </nav>
    </div>
  );
};
