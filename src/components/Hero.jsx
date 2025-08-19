// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Users, Code, Rocket, Award } from "lucide-react";
export default function Hero() {
  return (
    <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4"
        >
          About HackHub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl"
        >
          HackHub is a thriving community of developers, coders, and tech enthusiasts. 
          We collaborate, share knowledge, and host events to help everyone grow in their coding journey.
        </motion.p>
      </section>

  );
}
