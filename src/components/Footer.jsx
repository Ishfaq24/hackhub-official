// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github, Twitter, MessageCircle, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white">HackHub</h2>
          <p className="mt-3 text-sm text-gray-400">
            A community-driven hub for developers to learn, share, and build
            together.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Events</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </motion.div>

        {/* Community Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-white">Community</h3>
          <ul className="mt-3 space-y-3 text-sm">
            <li>
              <a
                href="https://discord.com/invite/CmemBbBQ4F"
                target="_blank"
                className="flex items-center gap-2 hover:text-white"
              >
                <Users className="w-4 h-4" /> Discord
              </a>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/CQ9CJ5gRQmu5n5NpOS5chF"
                target="_blank"
                className="flex items-center gap-2 hover:text-white"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-white"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-white"
              >
                <Twitter className="w-4 h-4" /> Twitter
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-white">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © 2025 HackHub. Built with ❤️ by the community.
      </div>
    </footer>
  );
}