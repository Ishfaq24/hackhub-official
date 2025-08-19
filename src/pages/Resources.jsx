import Navbar from "../components/Navbar";
import ResourceCard from "../components/ui/ResourceCard";
import { Code, BookOpen, Terminal, GitBranch, Database, Server } from "lucide-react";
import { motion } from "framer-motion";

const resources = [
  {
    title: "React Official Docs",
    description: "Comprehensive guide to learn React from scratch.",
    icon: <Code />,
    link: "https://reactjs.org/docs/getting-started.html",
  },
  {
    title: "JavaScript MDN",
    description: "Step-by-step tutorials for modern JavaScript.",
    icon: <Terminal />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "CSS Tricks",
    description: "Explore creative CSS techniques and examples.",
    icon: <BookOpen />,
    link: "https://css-tricks.com/",
  },
  {
    title: "Node.js Guide",
    description: "Official Node.js documentation and learning resources.",
    icon: <Server />,
    link: "https://nodejs.org/en/docs/",
  },
  {
    title: "Git & GitHub",
    description: "Learn version control and collaborating using Git & GitHub.",
    icon: <GitBranch />,
    link: "https://guides.github.com/",
  },
  {
    title: "MongoDB Docs",
    description: "Official documentation for MongoDB, a popular NoSQL database.",
    icon: <Database />,
    link: "https://www.mongodb.com/docs/",
  },
  {
    title: "Open Source Guides",
    description: "Learn how to contribute to open source projects effectively.",
    icon: <BookOpen />,
    link: "https://opensource.guide/",
  },
  {
    title: "Frontend Mentor",
    description: "Practice real-world front-end projects with design specs.",
    icon: <Code />,
    link: "https://www.frontendmentor.io/",
  },
  {
    title: "DevDocs",
    description: "All-in-one documentation browser for multiple languages & frameworks.",
    icon: <Terminal />,
    link: "https://devdocs.io/",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.5 }
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ResourcesSection() {
  return (
    <>
      <Navbar />
      
      <motion.section
        className="py-24 px-6 bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-gray-100"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          📚 Resources
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
          Curated guides, tutorials, and learning resources to boost your developer journey.
        </p>

        <motion.div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {resources.map((res, i) => (
            <motion.div key={i} variants={cardVariants}>
              <ResourceCard
                title={res.title}
                description={res.description}
                icon={res.icon}
                link={res.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}
