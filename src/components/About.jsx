import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 sm:px-12 bg-gray-50 dark:bg-gray-900 flex flex-col justify-center">

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center"
      >
        About Me
      </motion.h2>

      {/* Short Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 max-w-5xl mx-auto text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-center"
      >
        <div className="flex flex-col justify-center gap-5 text-xl">
         <div> I am a computer science & engineering undergraduate with a strong interest in web
        development. Seeking an opportunity to apply and expand my skills in frontend and backend technologies in a professional environment.
        </div>
        <div>
          Eager to contribute to real-world projects, learn from experienced teams, and grow as a full-stack web developer,passionate about building scalable and modern web applications.
        </div>
        <div>
            I enjoy working with React, Node.js, and AI technologies to create innovative solutions. Problem-solving and continuous learning are what drive me.
        </div>
         <div>
          I am actively seeking opportunities to contribute to impactful projects, collaborate with professionals in the tech community, and grow as a software developer in a dynamic environment.
         </div>
        </div>
      </motion.p>

      {/* Skills / Highlights */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {["React", "Node.js", "JavaScript", "AI Integration", "Cloud"].map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 px-6 py-4 rounded-xl shadow-md font-semibold text-gray-800 dark:text-gray-100 cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <a
          href="#contact"
          className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
        >
          Get in Touch
        </a>
      </motion.div>

    </section>
  );
}
