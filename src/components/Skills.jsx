import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGit, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiFigma, SiAdobeillustrator, SiInkscape, SiCanva } from "react-icons/si";

const skills = [
  // Frontend
  { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} className="text-purple-600" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "Express", icon: <SiExpress size={40} className="text-gray-800" /> },

  // Languages
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: "Python", icon: <FaPython size={40} className="text-indigo-500" /> },
  { name: "C", icon: <span className="text-red-500 font-bold text-2xl">C</span> },
  { name: "Java", icon: <span className="text-red-600 font-bold text-2xl">Java</span> },

  // Databases
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-700" /> },
  { name: "MySQL", icon: <SiMysql size={40} className="text-blue-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} className="text-blue-800" /> },

  // Tools/Software
  { name: "Git", icon: <FaGit size={40} className="text-red-500" /> },
  { name: "GitHub", icon: <FaGit size={40} className="text-gray-800" /> },
  { name: "VSCode", icon: <span className="text-blue-500 font-bold text-2xl">VS</span> },
  { name: "Postman", icon: <span className="text-orange-500 font-bold text-2xl">PM</span> },

  // Design
  { name: "Figma", icon: <SiFigma size={40} className="text-pink-500" /> },
  { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={40} className="text-orange-500" /> },
  { name: "Inkscape", icon: <SiInkscape size={40} className="text-green-600" /> },
  { name: "Canva", icon: <SiCanva size={40} className="text-blue-400" /> },

  // Cloud
  { name: "AWS Cloud", icon: <FaAws size={40} className="text-orange-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 sm:px-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100"
        >
          Skills
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          These are the technologies and tools I work with regularly to build scalable and modern web applications.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800 cursor-default transition-transform duration-300"
            >
              {skill.icon}
              <span className="font-semibold text-gray-800 dark:text-gray-100 mt-2">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
