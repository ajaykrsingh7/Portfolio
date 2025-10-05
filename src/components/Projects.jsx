
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import AyurvedaImg from "../assets/vedaai.png";
import PortfolioImg from "../assets/home.png";
import DAMSImg from "../assets/tsk.png";
import ApnaImg from "../assets/apnacollage.png";
import SalonImg from "../assets/salonImg.png";
import WsImg from "../assets/ws.png";

const projects = [
  {
    name: "SalonEase-A Pre Booking System",
    desc: "A team-based full-stack project for online salon appointment booking with user authentication, service management, and admin panel.",
    link: "https://salonease7.vercel.app/",
    img: SalonImg,
  },
  {
    name: "Portfolio Website",
    desc: "Personal portfolio website showcasing my skills, projects, and contact information.",
    link: "https://portfolio-rajput-aj07.vercel.app/",
    img: PortfolioImg,
  },
  {
    name: "Ayurveda AI – Chatbot",
    desc: "Interactive AI-powered chatbot providing personalized Ayurveda tips and remedies.",
    link: "https://github.com/ajaykrsingh7/Chatbot",
    img: AyurvedaImg,
  },
  {
    name: "Apna-Collage Clone",
    desc: "Frontend UI clone of a college website showcasing courses, events, and student resources.",
    link: "https://github.com/ajaykrsingh7/Amazon-Website-Clone",
    img: ApnaImg,
  },
  {
    name: "DAMS – Hot Strip Mill Health Monitor",
    desc: "(Under Production) Real-time monitoring system for Tata Steel.",
    link: "https://github.com/ajaykrsingh7",
    img: DAMSImg,
  },
  {
    name: "WSCube-Tech Clone",
    desc: "Frontend UI clone of Wscube Tech platform highlighting courses, trainers, and learning resources.",
    link: "https://github.com/ajaykrsingh7/Wscubetech-clone",
    img: WsImg,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight"
        >
          Projects
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-medium"
        >
          A collection of my recent projects where I apply my skills in web
          development, AI integration, and cloud technologies.
        </motion.p>

        {/* Carousel */}
        <motion.div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1500 }}
            loop
            className="pb-10"
          >
            {projects.map((project, idx) => (
              <SwiperSlide
                key={idx}
                className="max-w-xs md:max-w-sm lg:max-w-md cursor-grab"
              >
                <motion.a
                  href={project.link}
                  target="_blank"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-gray-800 group"
                >
                  {/* Image */}
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-red-600 to-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {project.name}
                    </h3>
                    <p className="text-white font-medium mt-2 text-sm sm:text-base">
                      {project.desc}
                    </p>
                    <span className="mt-4 px-6 py-2 rounded-full font-medium bg-gradient-to-r from-blue-400 to-white text-white hover:text-black transition">
                      View Project &rarr;
                    </span>
                  </div>
                </motion.a>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

