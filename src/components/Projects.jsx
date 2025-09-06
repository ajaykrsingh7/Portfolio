import { motion } from "framer-motion";
import AyurvedaImg from "../assets/vedaai.png";
import PortfolioImg from "../assets/home.png";
import DAMSImg from "../assets/tsk.png";
import ApnaImg from "../assets/apnacollage.png";
import AmazonImg from "../assets/amazon.png";
import WsImg from "../assets/ws.png";

const projects = [
  {
    name: "Ayurveda AI – Chatbot",
    desc: "Interactive AI-powered chatbot providing personalized Ayurveda tips and remedies with real-time responses.",
    link: "https://github.com/ajaykrsingh7/Chatbot",
    img: AyurvedaImg,
  },
  {
    name: "Portfolio Website",
    desc: "Personal portfolio website showcasing my skills, projects, and contact information. Built using React.js, Tailwind CSS, and Framer Motion for smooth animations and responsive design.",
    link: "https://portfolio-rajput-aj07.vercel.app/",
    img: PortfolioImg,
  },
  {
    name: "DAMS – Hot Strip Mill Health Monitor",
    desc: "(Under Production) Real-time monitoring system for Tata Steel to track Hot Strip Mill performance and enable predictive maintenance.",
    link: "https://github.com/ajaykrsingh7",
    img: DAMSImg,
  },
  {
    name: "Apna-Collage Clone",
    desc: "Frontend UI clone of a college website showcasing courses, events, and student resources. Fully responsive with clean navigation.",
    link: "https://github.com/ajaykrsingh7/Amazon-Website-Clone",
    img: ApnaImg,
  },
  {
    name: "Amazon Clone",
    desc: "Frontend UI replica of Amazon featuring product listings, categories, and search interface. Responsive and interactive.",
    link: "https://github.com/ajaykrsingh7/Apana-collage-Website-clone",
    img: AmazonImg,
  },
  {
    name: "WSCube-Tech Clone",
    desc: "Frontend UI clone of Wscube Tech platform highlighting courses, trainers, and learning resources with modern design.",
    link: "https://github.com/ajaykrsingh7/Wscubetech-clone",
    img: WsImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Heading */}
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
          A collection of my recent projects where I apply my skills in web development, AI integration, and cloud technologies.
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projects.map((project, idx) => (
   <motion.a
  key={idx}
  href={project.link}
  className="relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 group cursor-pointer h-64 sm:h-72 md:h-80 flex items-center justify-center"
  whileHover={{ scale: 1.02 }}
>
  {/* Image */}
  <img
    src={project.img}
    alt={project.name}
    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
  />

  {/* Overlay with bottom-to-top gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-red-600 to-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 text-center">
    <h3 className="text-xl sm:text-2xl font-bold text-white">{project.name}</h3>
    <p className="text-white font-medium mt-2 text-sm sm:text-base">{project.desc}</p>
    <span className="mt-4 px-6 py-2 rounded-full font-medium bg-gradient-to-r from-blue-400 to-white text-white hover:text-black transition">
      View Project &rarr;
    </span>
  </div>
</motion.a>





          ))}
        </motion.div>
      </div>
    </section>
  );
}
