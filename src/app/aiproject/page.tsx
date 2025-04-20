"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import grainImage from "@/assets/images/grain.jpg";
import { Footer } from "@/sections/Footer";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

// Import images from your assets
import animate from "@/assets/images/Project-Animate.jpg";
import monelytics from "@/assets/images/Project-Monelytics.jpg";
import nlp from "@/assets/images/Project-NLP.jpg";
import skin from "@/assets/images/Project-Skin.jpg";
import sounify from "@/assets/images/Project-Sounify.jpg";
import spam from "@/assets/images/Project-Spam.jpg";
import terra from "@/assets/images/Project-Study.png";
import fortuno from "@/assets/images/Project-Fortuno.png";

export default function AIProjectPage() {
  const [activeLink, setActiveLink] = useState("ai"); // State for active link for navigation
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
      title: "Animate",
      description:
        "Animate is a smart AI-powered chatbot developed for Terra Singapore, designed to assist animal lovers in selecting the most suitable pets and recommending the best food for their furry companions. By leveraging conversational AI and personalized data insights, the chatbot enhances the user experience by delivering tailored guidance, fostering responsible pet ownership, and promoting animal well-being.",
      imgUrl: animate,
      href: "",
      year: "2024",
      category: "Chatbot",
      role: "Chatbot Developer, AI Developer",
      tools: "Smojo, HTML, CSS, Javascript",
      buttons: [
        { label: "🚀 Try the Chatbot", href: "https://app.smojo.org/verrenangelinas/AniMate-GPT", target: "_blank", rel: "noopener noreferrer"},
      ],
    },
    {
      title: "Monelytics",
      description:
        "Monelytics is an AI prototype deployed on Streamlit as a web-based Python application designed for stock prediction purposes. Our team has trained it using a combination of machine learning and deep learning models. Monelytics can predict the closing price of the big 4 banks in Indonesia accurately. The prediction result are primarily measured by two main error metrics: RMSE (Root Mean Square Error) and MAE (Mean Absolute Error).",
      imgUrl: monelytics,
      href: "",
      year: "2024",
      category: "AI / Machine Learning",
      role: "AI Engineer",
      tools:
        "Python, Streamlit, Model (Logistic Regression, Random Forest, LSTM, CNN, Support Vector, ARIMA, ANN, Decision Tree, Prophet)",
      buttons: [
        { label: "🔗 Explore Code", href: "https://github.com/verrenangelinasaputra/Monelytics-Stock-Prediction" },
        { label: "▶️ Watch Demo", href: "https://youtu.be/GRpjmhJcJbQ?si=ZEvXgc_53Y0_aGaG" },
      ],
    },
    {
      title: "Sounify",
      description:
        "Sounify is an AI prototype deployed on Streamlit as a web-based Python application, trained using a combination models of deep learning (CNN) and machine learning (KNN, Random Forest, and Decision Tree). Sounify can detect 13 different accents from around the world, using data sourced from the Kaggle platform.",
      imgUrl: sounify,
      href: "",
      year: "2024",
      category: "AI / Speech Recognition",
      role: "AI Engineer",
      tools:
        "Python, Streamlit, Model (CNN, Random Forest, Decision Tree, KNN)",
      buttons: [
        { label: "🔗 Explore Code", href: "https://github.com/verrenangelinasaputra/Sounify-Accent-Classification" },
        { label: "▶️ Watch Demo", href: "https://youtu.be/L80Bac0Nko0?si=8ZssL2FrZUauILAG" },
      ],
    },
    {
      title: "Skin Classification",
      description:
        "Compares the performance of Vision Transformer (ViT) and ResNet152 in classifying skin diseases using the HAM10000 dataset, which consists of 10,015 images. While CNN models like ResNet152 have been successful in image classification, the ViT model has emerged as a more accurate alternative, achieving a classification accuracy of 98.28%, compared to 96.70% for ResNet152. ViT outperformed ResNet152 in other evaluation metrics as well, but it comes with drawbacks, such as longer computation times and the potential for overfitting.",
      imgUrl: skin,
      href: "",
      year: "2024",
      category: "AI / Deep Learning",
      role: "AI Engineer, AI Research Scientist",
      tools: "Python, CNN, Transformer",
      buttons: [
        { label: "📑 View Publication", href: "https://authors.elsevier.com/sd/article/S1877-0509(24)03123-5" },
      ],
    },
    {
      title: "Drugs Analysis",
      description:
        "This project leverages Machine Learning and Deep Learning techniques to assess patient conditions and provide personalized drug recommendations. By integrating sentiment analysis, the system evaluates patient feedback to refine drug suggestions. The project using natural language understanding to enhance patient care and treatment outcomes.",
      imgUrl: nlp,
      href: "",
      year: "2024",
      category: "AI / Natural Language Processing",
      role: "AI Engineer, NLP Engineer",
      tools:
        "Python, TF-IDF, Cosine Similarity, Model (LR, RF, SVM, DT, Gradient Boosting)",
      buttons: [
        { label: "🔗 Explore Code", href: "https://github.com/verrenangelinasaputra/Drug-Information-System-Using-NLP" },
        { label: "▶️ Watch Demo", href: "https://youtu.be/1Ckuo1OBDec?si=cgv4xy0o03k3qT-I" },
      ],
    },
    {
      title: "Spam Classification",
      description:
        "This project focuses on building an AI-powered spam classification system using deep learning techniques. Leveraging Python and Hugging Face transformers, the model was trained on a labeled dataset to accurately distinguish between spam and legitimate messages. The goal was to enhance digital communication safety by automating the detection of unwanted or malicious content, ensuring users receive only relevant and trustworthy information.",
      imgUrl: spam,
      href: "",
      year: "2024",
      category: "AI / Deep Learning",
      role: "AI Engineer",
      tools: "Python, Hugging Face, NLP, DeBERTA",
      buttons: [
        { label: "🔗 Explore Code", href: "https://github.com/verrenangelinasaputra/HuggingFace---Spam-Text-Classification" },
      ],
    },
    {
      title: "AI Study Planner",
      description:
        "AI Study Planner is an intelligent chatbot built for Terra AI to help students improve productivity and learning outcomes. Featuring a Pomodoro timer, personalized study schedule generator, and tailored learning style recommendations, this tool supports learners in managing their time efficiently. Developed using Smojo, HTML, CSS, and JavaScript, it delivers a seamless and engaging experience designed to adapt to each unique study habits of user.",
      imgUrl: terra,
      href: "",
      year: "2024",
      category: "Chatbot",
      role: "Chatbot Developer, AI Developer",
      tools: "Smojo, HTML, CSS, Javascript",
      buttons: [
        
        { label: "🚀 Try the Chatbot", href: "https://app.smojo.org/verrenangelinas/AIStudyPlanner" },
      ],
    },
    {
      title: "FortunoBot",
      description:
        "FortunoBot is a smart AI chatbot developed for Prudential to enhance customer engagement and financial literacy. It assists users by recommending suitable insurance plans, providing educational content about insurance, offering retirement fund suggestions, and delivering detailed product information and benefits of Prudential services. Additionally, FortunoBot connects users with agents, and features a live Q&A system to respond to customer inquiries in real time with high accuracy. Built using Smojo, HTML, CSS, and JavaScript, the chatbot delivers a responsive and informative experience for both prospective and existing clients.",
      imgUrl: fortuno,
      href: "",
      year: "2024",
      category: "Chatbot",
      role: "Chatbot Developer, AI Developer",
      tools: "Smojo, HTML, CSS, Javascript",
      buttons: [
    
        { label: "🚀 Try the Chatbot", href: "https://app.smojo.org/verrenangelinas/FortunoBot" },
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
              What I Have Built
            </p>
          </div>
          <h2 className="font-serif text-white text-4xl md:text-5xl text-center mt-6 leading-tight">
            Showcasing My Technical Work in AI
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
                      <strong>Tools/Model/Language:</strong>
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
