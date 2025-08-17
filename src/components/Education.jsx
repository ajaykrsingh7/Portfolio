import React from "react";
import BbitLogo from "../assets/bbit.jpg"; 
import RjjLogo from "../assets/rjj.png"; 
import GalaxyLogo from "../assets/galaxy.jpg"; 

export default function Education() {
  const educationData = [
    {
      institution: "Budge Budge Institute of Technology (MAKAUT)",
      degree: "B.Tech in Computer Science and Engineering",
      year: "2022–Present",
      cgpa: "7.64",
      image: BbitLogo,
      
    },
    {
      institution: "R.J.J.C.B.D+2 School, Saran",
      degree: "Higher Secondary Education (Science Stream)",
      year: "2020",
      percentage: "66%",
      image: RjjLogo,
    },
    {
      institution: "Galaxy Residential Public School, Saran",
      degree: "Secondary Education",
      year: "2017",
      percentage: "87.4%",
      image: GalaxyLogo,
    },
  ];

  return (
    <section id="education" className="min-h-screen px-6 py-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
          >
            {/* Rectangular Image */}
            <img
              src={edu.image}
              alt={edu.institution}
              className="w-full h-50 object-cover mb-4 rounded-lg"
            />

            {/* Text */}
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
              {edu.institution}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">{edu.degree}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-2 text-center">Year: {edu.year}</p>
            {edu.cgpa && <p className="text-gray-500 dark:text-gray-400 text-center">CGPA: {edu.cgpa}</p>}
            {edu.percentage && <p className="text-gray-500 dark:text-gray-400 text-center">Percentage: {edu.percentage}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
