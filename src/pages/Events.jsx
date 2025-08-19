// src/pages/Events.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "../components/ui/EventCard";
import Navbar from "../components/Navbar";

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const events = {
  upcoming: [
    {
      id: 1,
      title: "HackHub 2025 Launch",
      date: "15 Sept 2025",
      time: "11:00 AM IST",
      location: "GCET Kashmir, Auditorium",
      description: "Official launch event for HackHub 2025 with workshops and networking.",
      banner: "https://tse3.mm.bing.net/th/id/OIP.UYc26DDV3XD4XMJftkrx4gHaFF?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      title: "AI & Web Dev Bootcamp",
      date: "10 Oct 2025",
      time: "10:00 AM IST",
      location: "Online (Zoom)",
      description: "Hands-on sessions on AI integration in modern web applications.",
      banner: "https://image.shutterstock.com/image-illustration/aiml-stand-artificial-intelligence-machine-260nw-1574320612.jpg",
    },
  ],
  past: [
    {
      id: 3,
      title: "Frontend Frenzy 2024",
      date: "12 Dec 2024",
      time: "2:00 PM IST",
      location: "GCET Kashmir",
      description: "A jam-packed frontend battle with live coding, challenges, and rewards.",
      banner: "https://i.ytimg.com/vi/pbxQULLKRX8/maxresdefault.jpg",
    },
  ],
};


  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-gray-100 font-mono">
      
      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-4"
        >
          🚀 Upcoming & Past Events
        </motion.h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Explore HackHub’s events, join the upcoming ones, or check out our past highlights.
        </p>
      </section>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-12">
        {["upcoming", "past"].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                : "border border-gray-700 text-gray-400 hover:bg-gray-800"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Event Cards Grid with Fade Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} // re-render when tab changes
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24"
        >
          {events[activeTab].map((event) => (
            <EventCard
              key={event.id}
              event={event}
              buttonText={activeTab === "upcoming" ? "Register Now" : "View Recap"}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Optional CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated!</h2>
        <p className="text-gray-400 mb-6">
          Join our community to get notified about upcoming events and workshops.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition"
        >
          Subscribe
        </motion.button>
      </section>
    </div>
  );
}
