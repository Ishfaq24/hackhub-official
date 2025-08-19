/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Users, Code, Rocket, Award } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-gray-100 font-mono">
      {/* Navbar */}
     

      {/* Hero / Intro Section */}
      <Hero />
      {/* Mission / Vision / Values */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Our Mission",
            description: "Empower developers worldwide through collaboration and learning.",
            icon: <Rocket className="w-6 h-6" />,
          },
          {
            title: "Our Vision",
            description: "Build a connected, open-source driven coding community.",
            icon: <Code className="w-6 h-6" />,
          },
          {
            title: "Our Values",
            description: "Open Source, Collaboration, Innovation, Continuous Learning.",
            icon: <Users className="w-6 h-6" />,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition"
          >
            <div className="flex items-center gap-3 mb-4 text-purple-400">
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Achievements / Stats */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Achievements
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "Hackathons Hosted", icon: <Rocket /> },
            { number: "500+", label: "Active Members", icon: <Users /> },
            { number: "50+", label: "Projects Contributed", icon: <Code /> },
            { number: "5+", label: "Awards Won", icon: <Award /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition flex flex-col items-center"
            >
              <div className="text-purple-400 mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="text-center py-24 px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Join HackHub Today
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Become part of a thriving community, participate in hackathons, contribute to open-source projects, and grow as a developer.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition"
        >
          Get Started
        </motion.button>
      </section>

      
    </div>
  );
}
