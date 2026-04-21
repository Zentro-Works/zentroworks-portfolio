import { useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-12 py-4 bg-black text-white">
      
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src={logo}
          alt="Company Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm">
        <li className="cursor-pointer hover:text-indigo-400">Home</li>
        <li className="cursor-pointer hover:text-indigo-400">Services</li>
        <li className="cursor-pointer hover:text-indigo-400">Projects</li>
        <li className="cursor-pointer hover:text-indigo-400">About Us</li>
        <li className="cursor-pointer hover:text-indigo-400">Contact</li>
      </ul>

      {/* Desktop Button */}
      <button className="hidden md:block bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">
        Get a Quote
      </button>

      {/* Mobile Button */}
      <button 
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col gap-4 p-6 md:hidden border-t border-gray-700">
          <span className="cursor-pointer hover:text-indigo-400">Home</span>
          <span className="cursor-pointer hover:text-indigo-400">Services</span>
          <span className="cursor-pointer hover:text-indigo-400">Projects</span>
          <span className="cursor-pointer hover:text-indigo-400">About</span>
          <span className="cursor-pointer hover:text-indigo-400">Contact</span>
        </div>
      )}

    </nav>
  );
};

export default Navbar;