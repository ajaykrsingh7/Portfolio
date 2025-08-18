import { motion } from "framer-motion";
import AyurvedaImg from "../assets/vedaai.png";
import PortfolioImg from "../assets/portfolio.png";
import DAMSImg from "../assets/tsk.png";
import ApnaImg from "../assets/apnacollage.png"
import AmazonImg from "../assets/amazon.png"
import WsImg from "../assets/ws.png"
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
    link: "https://github.com/ajaykrsingh7",
    img: PortfolioImg,
  },

  {
    name: "DAMS – Hot Strip Mill Health Monitor",
    desc: "(Under Production)Real-time monitoring system for Tata Steel to track Hot Strip Mill performance and enable predictive maintenance.",
    link: "https://github.com/ajaykrsingh7",
    img: DAMSImg,
  },

  {
    name: "Apna-Collage Clone",
    desc: "Frontend UI clone of a college website showcasing courses, events, and student resources. Built with modern design principles, fully responsive layout, and clean navigation to replicate real-world educational platforms.",
    link: "https://github.com/ajaykrsingh7/Amazon-Website-Clone",
    img: ApnaImg,
  },

  {
    name: "Amazon Clone",
    desc: "Frontend UI replica of Amazon featuring product listings, categories, and search interface. Focused on responsive design, interactive components, and a seamless shopping layout to mimic the popular e-commerce experience.",
    link: "https://github.com/ajaykrsingh7/Apana-collage-Website-clone",
    img: AmazonImg,
  },

  {
    name: "WSCube-Tech Clone",
    desc: "Frontend UI clone of Wscube Tech platform highlighting courses, trainers, and learning resources. Designed with attention to modern UI/UX trends, responsive layouts, and visually appealing components for a realistic learning portal experience.",
    link: "https://github.com/ajaykrsingh7/Wscubetech-clone",
    img: WsImg,
  },

];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 sm:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100"
        >
          Projects
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed "
        >
          <div className="text-xl">
            A collection of my recent projects where I apply my skills in web development, AI integration, and cloud technologies.
          </div>
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
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transition transform cursor-pointer flex flex-col justify-between"
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              {/* Project Name */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {project.name}
              </h3>

              {/* Project Description */}
              <pre className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base whitespace-pre-wrap text-left">
                {project.desc}
              </pre>

              {/* View Project Link */}
              <span className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium">
                View Project &rarr;
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
