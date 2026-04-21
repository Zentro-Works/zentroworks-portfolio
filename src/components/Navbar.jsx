import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-black text-white">
      
      <h1 className="text-xl font-bold">ZetroWorks</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm">
        <li>Home</li>
        <li>Services</li>
        <li>Projects</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>

      <button className="hidden md:block bg-indigo-600 px-4 py-2 rounded-lg">
        Get a Quote
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col gap-4 p-6 md:hidden">
          <span>Home</span>
          <span>Services</span>
          <span>Projects</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;