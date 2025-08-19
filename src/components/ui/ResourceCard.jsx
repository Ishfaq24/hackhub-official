// src/components/ui/ResourceCard.jsx
import { motion } from "framer-motion";

export default function ResourceCard({ title, description, icon, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition cursor-pointer"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="flex items-center gap-3 mb-4 text-purple-400">
        {icon} 
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
      <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:shadow-lg transition">
        Open
      </button>
    </motion.div>
  );
}
