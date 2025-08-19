/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";

export default function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        // Add your EmailJS service ID, template ID, and public key here
      )
      .then(
        () => {
          alert("Message sent successfully! We'll get back to you soon.");
          setLoading(false);
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-black font-sans">
      <section className="py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-gray-100">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          📬 Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 text-center max-w-xl mx-auto mb-12 text-sm sm:text-base"
        >
          Have questions, suggestions, or want to collaborate? Reach out to us!
        </motion.p>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 sm:p-4 rounded-xl bg-white/10 border border-white/20 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 sm:p-4 rounded-xl bg-white/10 border border-white/20 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="p-3 sm:p-4 rounded-xl bg-white/10 border border-white/20 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex flex-col gap-4"
          >
            {[
              {
                icon: <Mail className="w-6 h-6 text-purple-400" />,
                title: "Email",
                info: "hackhub.dev@gmail.com",
              },
              {
                icon: <MessageCircle className="w-6 h-6 text-purple-400" />,
                title: "Discord",
                info: "https://discord.com/invite/CmemBbBQ4F",
              },
              {
                icon: <Phone className="w-6 h-6 text-purple-400" />,
                title: "WhatsApp",
                info: "https://chat.whatsapp.com/CQ9CJ5gRQmu5n5NpOS5chF",
              },
            ].map((contact, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-lg flex items-center gap-4 hover:shadow-purple-500/30 transition cursor-pointer break-words"
                onClick={() => {
                  if (contact.title === "Email")
                    window.location.href = `mailto:${contact.info}`;
                  if (contact.title === "Phone")
                    window.location.href = `tel:${contact.info}`;
                  if (contact.title === "Discord" || contact.title === "WhatsApp")
                    window.open(contact.info, "_blank");
                }}
              >
                {contact.icon}
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">{contact.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{contact.info}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
