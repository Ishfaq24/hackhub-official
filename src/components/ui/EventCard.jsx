// src/components/ui/EventCard.jsx
import { motion } from "framer-motion";

export default function EventCard({ event, buttonText }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition hover:shadow-purple-500/30"
    >
      <img
        src={event.banner}
        alt={event.title}
        className="w-full h-44 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
      />
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
          <p className="text-gray-400 text-sm mb-1">📅 {event.date} | 🕒 {event.time}</p>
          <p className="text-gray-400 text-sm mb-3">📍 {event.location}</p>
          <p className="text-gray-200 mb-4">{event.description}</p>
        </div>
        <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-2 rounded-lg font-medium text-white hover:shadow-lg transition">
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
}
