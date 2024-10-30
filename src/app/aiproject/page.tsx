// Import necessary modules from Next.js and React
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import grainImage from '@/assets/images/grain.jpg';
import { Footer } from '@/sections/Footer';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

// Import images from your assets
import memojiImage from '@/assets/images/Mockup-Laptop-2.png';
import memojiImage2 from '@/assets/images/Mockup-Laptop-3.png';

export default function AIProjectPage() {
    const [activeLink, setActiveLink] = useState('ai'); // State for active link for navigation

    // Function to handle scrolling to sections
    const handleScroll = (id: string, link: string) => {
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
            imgUrl: memojiImage,
            href: '/dataproject'
        },
        {
            title: "Business Startup 1",
            description: "Design & Development",
            imgUrl: memojiImage2,
            href: '/'
        },
        {
            title: "Business Startup 2",
            description: "Design & Development",
            imgUrl: memojiImage,
            href: '/'
        },
        {
            title: "Business Startup 3",
            description: "Design & Development",
            imgUrl: memojiImage,
            href: '/'
        },
        {
            title: "Business Startup 4",
            description: "Design & Development",
            imgUrl: memojiImage,
            href: '/'
        },
        {
            title: "Business Startup 5",
            description: "Design & Development",
            imgUrl: memojiImage,
            href: '/'
        }
    ];

    
const footerLinks = [
  {
    title: 'Github',
    href: 'https://github.com/verrenangelinasaputra',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/verrenangelina/',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/verrenangelinasaputra/',
  },
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/@verrenangelinasaputra/videos',
  },
]

    return (
        <div>
        <div className="flex justify-center items-center top-3 w-full z-10 sticky">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <Link href="/aiproject" passHref className={`nav-item ${activeLink === 'ai' ? 'bg-white text-gray-900' : ''}`}>AI</Link>
                <Link href="/dataproject" passHref className={`nav-item ${activeLink === 'data' ? 'bg-white text-gray-900' : ''}`}>Data</Link>
                <Link href="/webproject" passHref className={`nav-item ${activeLink === 'web' ? 'bg-white text-gray-900' : ''}`}>Web</Link>
                <Link href="/" passHref className={`nav-item ${activeLink === 'home' ? 'bg-white text-gray-900' : ''}`}>Home</Link>
            </nav>
    </div>
    <section className="text-center p-5">
                <div className="container mx-auto">
                    <h2 className="mt-8 text-3xl font-bold mb-2 text-white bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">Projects</h2>
                    <p className="text-white/80">Explore our groundbreaking AI initiatives that span machine learning, deep learning, chatbots, natural language processing, and speech recognition. Our projects leverage these advanced technologies to unlock new potentials in data interpretation, automate interactions, enhance communication, and improve accessibility. Discover how we're pushing the boundaries of AI to solve real-world challenges and drive innovation.</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-7">
                        {projects.map((project, index) => (
                            <Link key={index} href={project.href} passHref className="bg-gray-800 rounded-3xl z-0 overflow-hidden px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16 after:pointer-events-none block"
                                style={{
                                    backgroundImage: `url(${project.imgUrl.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '325px'
                                }}>
                                <div className="absolute top-2 left-2 bg-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-black">{index + 1}</div>
                                {/* <div className="relative">
                                    <Image src={project.imgUrl} alt={project.title} layout="fixed" width={500} height={300} objectFit="cover" className="lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
                                </div> */}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="relative overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10"
        style={{
          maskImage: 'linear-gradient(transparent, black)',
          WebkitMaskImage: 'linear-gradient(transparent, black)',
        }}
      ></div>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40 sm:justify-center sm:text-center'>&copy; 2024 Built with passion by Verren. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map(link => (
              <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.title} className='inline-flex items-center gap-1.5'>
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className='size-4'/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
        </div>
        
    );
}
