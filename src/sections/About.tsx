"use client";

import React from "react";
import Image from "next/image";
import profileImage from "@/assets/images/Project-Dwh.jpg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
import Slider from "react-slick";

const carouselImages = [
  { src: profileImage, alt: "Image 1" },
  { src: profileImage, alt: "Image 2" },
  { src: profileImage, alt: "Image 3" },
  { src: profileImage, alt: "Image 4" },
  { src: profileImage, alt: "Image 5" },
];

export const AboutSection = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: "0px",
  //   arrows: true,
  //   nextArrow: <div className="custom-arrow right-arrow">→</div>,
  //   prevArrow: <div className="custom-arrow left-arrow">←</div>,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         centerPadding: "0px",
  //       },
  //     },
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "0px",
  //       },
  //     },
  //   ],
  // };

  // return (
  //   <section id="about" className="pb-16 lg:py-24 bg-[#0f172a] font-sans">
  //     <div className="container max-w-7xl mx-auto px-4">
  //       <div className="flex justify-center">
  //         <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent text-sm md:text-base">
  //           About Me
  //         </p>
  //       </div>
  //       <h2 className="font-serif text-white text-4xl md:text-5xl text-center mt-6 leading-tight">
  //         Personal and Professional Journey
  //       </h2>

  //       <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-center md:justify-center gap-8">
  //         <div className="md:w-1/3 flex justify-center">
  //           <Image
  //             src={profileImage}
  //             alt="Profile Picture"
  //             className="rounded-xl object-cover w-[250px] h-[250px] md:w-[300px] md:h-[300px]"
  //             width={300}
  //             height={300}
  //             priority
  //           />
  //         </div>

  //         <div className="md:w-2/3 text-center md:text-left text-white/60 text-base md:text-lg leading-relaxed">
  //           I’m a third-year Computer Science student at BINUS University and a
  //           Widia scholarship recipient,&nbsp;
  //           <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent font-bold">
  //             currently interning as a Business Analyst at Samsung R&D Indonesia
  //           </span>
  //           . I have a strong interest in AI and data, with hands-on experience
  //           in projects, teaching, and mentoring. Skilled in Python, R, Tableau,
  //           and database systems, I’m passionate about tech, teamwork, and
  //           continuous learning.
  //         </div>
  //       </div>

  //       <div className="mt-12 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 text-center text-white text-sm">
  //         <div>
  //           <p className="text-3xl md:text-4xl font-serif bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
  //             2+
  //           </p>
  //           <p className="mt-1 text-base md:text-lg text-white/60">
  //             Years of
  //             <br />
  //             experience
  //           </p>
  //         </div>
  //         <div>
  //           <p className="text-3xl md:text-4xl font-serif bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
  //             5+
  //           </p>
  //           <p className="mt-1 text-base md:text-lg text-white/60">
  //             Programming
  //             <br />
  //             Languages
  //           </p>
  //         </div>
  //         <div>
  //           <p className="text-3xl md:text-4xl font-serif bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
  //             16
  //           </p>
  //           <p className="mt-1 text-base md:text-lg text-white/60">
  //             Projects
  //             <br />
  //             completed
  //           </p>
  //         </div>
  //         <div>
  //           <p className="text-3xl md:text-4xl font-serif bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
  //             23
  //           </p>
  //           <p className="mt-1 text-base md:text-lg text-white/60">
  //             Awards and
  //             <br />
  //             Honor
  //           </p>
  //         </div>
  //       </div>

  //       <div className="mt-10 md:mt-20 relative">
  //         <Slider {...settings}>
  //           {carouselImages.map((image, index) => (
  //             <div key={index} className="p-2">
  //               <Image
  //                 src={image.src}
  //                 alt={image.alt}
  //                 className="rounded-xl object-cover w-full h-[200px]"
  //                 width={300}
  //                 height={200}
  //                 priority={index === 0}
  //               />
  //             </div>
  //           ))}
  //         </Slider>
  //       </div>
  //     </div>

  //     {/* Custom styles for arrows */}
  //     <style jsx>{`
  //       .custom-arrow {
  //         z-index: 10;
  //         position: absolute;
  //         top: 50%;
  //         transform: translateY(-50%);
  //         font-size: 24px;
  //         color: white;
  //         cursor: pointer;
  //         user-select: none;
  //       }

  //       .left-arrow {
  //         left: -30px;
  //       }

  //       .right-arrow {
  //         right: -30px;
  //       }

  //       /* Override slick dots color */
  //       :global(.slick-dots li button:before) {
  //         color: rgba(255, 255, 255, 0.5);
  //         font-size: 12px;
  //       }
  //       :global(.slick-dots li.slick-active button:before) {
  //         color: white;
  //       }

  //       @media (max-width: 500px) {
  //         .grid {
  //           grid-template-columns: 1fr 1fr;
  //         }
  //       }
  //     `}</style>
  //   </section>
  // );
};
