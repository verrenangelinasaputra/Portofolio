"use client";

import memojiImage from '@/assets/images/my-avatar.png';
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';

import { useState, useEffect, useMemo } from 'react';

export const TypingText = () => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 15 : 50; // Speed of typing

  // Use useMemo to ensure 'texts' is only re-initialized when needed
  const texts = useMemo(() => [
    "Majoring in Artificial Intelligence",
    "Passionate about Data Scientist",
    "Enthusiastic about Data Analysis and Engineering",
    "Experienced as a Lab Assistant and Chatbot Dev",
    "Open to Opportunities in Data and AI Roles!"
  ], []); // Empty dependency array means this runs only once

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before starting to delete
      } else if (isDeleting && charIndex === 0) {
        setIndex(prevIndex => (prevIndex + 1) % texts.length);
        setIsDeleting(false);
        setCurrentText('');
        setCharIndex(0);
      } else {
        const nextChar = isDeleting ? charIndex - 1 : charIndex + 1;
        setCurrentText(texts[index].slice(0, nextChar));
        setCharIndex(nextChar);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, index, texts, typingSpeed]);

  return (
    <p className='mt-4 text-center text-white/60 md:text-lg'>
      {currentText}
      <span className='blinking-cursor'>|</span> {/* Blinking cursor */}
    </p>
  );
};



export const HeroSection = () => {
  return (
  <div id="home" className='py-32 md:py-48 lg:py-40 relative z-0 overflow-x-clip'>
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%, black_70%, transparent)]'>
      <div className='absolute inset-0 -z-30 opacity-5' style={{
        backgroundImage: `url(${grainImage.src})`,
      }}></div>
      <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>

      {/* star icons */}
      <HeroOrbit size={700} rotation={-75} shouldOrbit orbitDuration='30s'>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={10} shouldOrbit orbitDuration='40s'>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={610} rotation={120} shouldOrbit orbitDuration='30s'>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>

      {/* white stars */}
      <HeroOrbit size={750} rotation={-20} shouldOrbit orbitDuration='40s'>
        <SparkleIcon className="size-8 text-emerald-300/2" />
      </HeroOrbit>
      <HeroOrbit size={800} rotation={90} shouldOrbit orbitDuration='30s'>
        <SparkleIcon className="size-5 text-emerald-300/2" />
      </HeroOrbit>
      <HeroOrbit size={765} rotation={150} shouldOrbit orbitDuration='40s'>
        <SparkleIcon className="size-10 text-emerald-300/2" />
      </HeroOrbit>
      <HeroOrbit size={700} rotation={200} shouldOrbit orbitDuration='30s'>
        <SparkleIcon className="size-6 text-emerald-300/2" />
      </HeroOrbit>
      <HeroOrbit size={830} rotation={250} shouldOrbit orbitDuration='40s'>
        <SparkleIcon className="size-9 text-emerald-300/2" />
      </HeroOrbit>
    </div>

    <div className="container">
      <div className='flex flex-col items-center'>
      <Image src={memojiImage} className="size-[130px] mt-[-30px]" alt="Person peeking from behind laptop"/>
      <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
        <div className='bg-green-500 size-2.5 rounded-full relative'>
          <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
        </div>
        <div className='text-sm font-medium'>Open to freelance work</div>
      </div>
      <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Verren Angelina Saputra</h1>
        {/* <p className='mt-4 text-center text-white/60 md:text-lg'>Passionate in Data Scientist</p> */}
        <TypingText />
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <a href="https://github.com/verrenangelinasaputra" 
          className='inline-flex items-center ga-2 border border-white/15 px-6 h-12 rounded-xl z-10'
          target="_blank" // Membuka link di tab baru
          rel="noopener noreferrer" // Untuk keamanan dan optimasi SEO
        >
          <span className='font-semibold'>Explore My Github</span>
          {/* <ArrowDown/> Uncomment jika ikon panah diperlukan */}
        </a>

        <a
          href="https://drive.google.com/file/d/1iNwaR3xRuGb1c5TNr1fBwhVwlEy-dvt8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-10"
        >
          <span>🧑🏻‍💻</span>
          <span className="font-semibold">Download CV</span>
        </a>


      </div>
      </div>
    </div>
  </div>
  );
};
