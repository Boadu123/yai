import { useState, useEffect } from "react";
import logo from "../images/multipurposefan.png"; // Adjust path if necessary

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 m-0 transition-all duration-300 ${
        scrolled ? "bg-black/90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-14 flex justify-between items-center">
        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => handleLinkClick("home")}
        >
          <img
            src={logo}
            alt="MultiPurpose Fan Logo"
            className="h-10 w-auto rounded-md" 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Products", "Showcase", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleLinkClick(item.toLowerCase())}
              className="relative group py-2 text-white hover:text-blue-400 transition-colors duration-300"
            >
              <span>{item}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-2 space-y-1">
          {["Home", "About", "Products", "Showcase", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleLinkClick(item.toLowerCase())}
              className="block w-full text-left px-4 py-3 text-white hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
