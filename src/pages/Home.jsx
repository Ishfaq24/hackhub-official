// src/pages/Home.jsx
import { motion } from "framer-motion";
import { ArrowRight, Code, BookOpen, Users, Rocket } from "lucide-react";
import { TypeAnimation } from 
"react-type-animation"; 
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-gray-100 font-mono">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          <TypeAnimation
            sequence={[
              "Build Together.",
              1500,
              "Collaborate Globally.",
              1500,
              "Grow as Developers.",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>
        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          HackHub is your platform to connect, learn, and create together with developers worldwide.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center gap-2 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">
        {[
          { title: "Open Source Events", desc: "Participate in hackathons and coding challenges.", icon: <Code /> },
          { title: "Learning Resources", desc: "Explore curated guides, blogs, and tutorials.", icon: <BookOpen /> },
          { title: "Community Support", desc: "Connect with peers and grow together.", icon: <Users /> },
        ].map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/30 transition"
          >
            <div className="flex items-center gap-3 mb-4 text-purple-400">{f.icon} <h3 className="text-xl font-semibold">{f.title}</h3></div>
            <p className="text-gray-400">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Blog Preview Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-12">
          Latest from the Blog
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((post) => (
            <motion.div
              key={post}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 p-6 rounded-2xl border border-transparent hover:border-purple-500/40 backdrop-blur-md shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">Blog Title {post}</h3>
              <p className="text-gray-400 mt-2">A short description about the blog post...</p>
              <a href="#" className="mt-4 inline-block text-purple-400 hover:underline">Read More →</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to hack with us?</h2>
        <p className="text-gray-400 mb-6">Join a growing community of developers and innovators today.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition"
        >
          Get Started
        </motion.button>
      </section>

      {/* Footer */}
      
    </div>
  );
}
