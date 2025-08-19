import React from "react"; 
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, BookOpen, Info, Mail, Code } from "lucide-react";

export default function Navbar() {
  const location = useLocation(); // get current path

  const menuItems = [
    { name: "Home", icon: <Home size={24} />, path: "/" },
    { name: "Events", icon: <Calendar size={24} />, path: "/events" },
    { name: "Resources", icon: <BookOpen size={24} />, path: "/resources" },
    { name: "About", icon: <Info size={24} />, path: "/about" },
    { name: "Contact", icon: <Mail size={24} />, path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md text-white px-6 py-4 shadow-lg hidden md:flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-extrabold tracking-wide flex items-center">
          <Code size={32} />
          <span className="ml-2">HackHub</span>
        </Link>

        <div className="flex space-x-10">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className="flex flex-col items-center group relative"
              >
                {/* Change icon color if active */}
                {React.cloneElement(item.icon, {
                  color: isActive ? "#a855f7" : "#ffffff", // purple if active, white otherwise
                })}
                <span className="absolute -bottom-6 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 w-full backdrop-blur-md text-white flex justify-around items-center py-3 md:hidden z-50 shadow-t-lg">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex flex-col items-center text-xs px-2"
            >
              {React.cloneElement(item.icon, {
                color: isActive ? "#a855f7" : "#ffffff", // purple if active
              })}
              <span className="mt-1 text-[10px] text-center truncate w-12">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
