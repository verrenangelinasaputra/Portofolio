// Import necessary modules from Next.js and React
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import grainImage from '@/assets/images/grain.jpg';

// Import images from your assets
import memojiImage from '@/assets/images/Mockup-Laptop-2.png';

export default function DataProjectPage() {
    const [activeLink, setActiveLink] = useState('home'); // State for active link for navigation

    // Function to handle scrolling to sections
    const handleScroll = (id, link) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveLink(link);
        }
    };

    // Data for projects
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: memojiImage
        },
        {
            title: "Business Startup 1",
            description: "Design & Development",
            imgUrl: memojiImage
        },
        {
            title: "Business Startup 2",
            description: "Design & Development",
            imgUrl: memojiImage
        },
        {
            title: "Business Startup 3",
            description: "Design & Development",
            imgUrl: memojiImage
        },
        {
            title: "Business Startup 4",
            description: "Design & Development",
            imgUrl: memojiImage
        },
        {
            title: "Business Startup 5",
            description: "Design & Development",
            imgUrl: memojiImage
        },
        {
            title: "Business Startup 6",
            description: "Design & Development",
            imgUrl: memojiImage
        },
        {
            title: "Business Startup 7",
            description: "Design & Development",
            imgUrl: memojiImage
        },
        {
            title: "Business Startup 8",
            description: "Design & Development",
            imgUrl: memojiImage
        },
    ];

    return (
        <div>
    <div className="flex justify-center items-center top-3 w-full z-10 sticky">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#home"
           className={`nav-item ${activeLink === 'home' ? 'bg-white text-gray-900' : ''}`}
           onClick={(e) => {
             e.preventDefault();
             handleScroll('#home', 'home');
           }}>AI</a>
        <a href="#projects"
           className={`nav-item ${activeLink === 'projects' ? 'bg-white text-gray-900' : ''}`}
           onClick={(e) => {
             e.preventDefault();
             handleScroll('#projects', 'projects');
           }}>Data</a>
        <a href="#contact"
           className={`nav-item ${activeLink === 'contact' ? 'bg-white text-gray-900' : ''}`}
           onClick={(e) => {
             e.preventDefault();
             handleScroll('#contact', 'contact');
           }}>Web</a>
        <a href="/profile"
           className={`nav-item ${activeLink === 'profile' ? 'bg-white text-gray-900' : ''}`}
           onClick={(e) => {
             e.preventDefault();
             handleScroll('#profile', 'profile');
           }}>Home</a>
      </nav>
    </div>
    <section className="text-center p-5">
                <div className="container mx-auto">
                    <h2 className="mt-8 text-3xl font-bold mb-2 text-white bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">Projects</h2>
                    <p className="text-white/80">Explore our projects showcasing our commitment to innovation and excellence.</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-7">
                        {projects.map((project, index) => (
                            <div key={index} className="relative bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
                                <div className="absolute inset-0 -z-10 opacity-5" style={{
                                    backgroundImage: `url(${grainImage.src})`,
                                    backgroundSize: 'cover',
                                }}></div>
                                <div className="absolute top-2 left-2 bg-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-black">{index + 1}</div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="relative h-48">
                                        <Link href="/your-target-page" passHref>
                                            <div className="cursor-pointer">
                                                <Image src={project.imgUrl} alt={project.title} layout="fill" objectFit="cover" className="rounded-md"/>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
