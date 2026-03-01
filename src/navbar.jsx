import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import './index.css'
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
  

    <div className="w-full flex  items-center justify-center ">
<nav className=  " border-b-2 border-white rounded-b-sm text-white p-4    sticky top-0 w-[70%]  h-20 z-50">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <h2 className="text-2xl lg:text-4xl font-bold text-blue-500 tracking-tight">
          portFolio
        </h2>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
   <li className="cursor-pointer hover:text-blue-400 text-2xl"><Link to="/">Home</Link></li>
          <li className="cursor-pointer hover:text-blue-400 text-2xl"><Link to="/About">About</Link></li>
                   <li className="cursor-pointer hover:text-blue-400 text-2xl"><Link to="/Education">Education</Link></li>
                   <li className="cursor-pointer hover:text-blue-400 text-2xl"><Link to="/Skill">Skill</Link></li>
   <li className="cursor-pointer hover:text-blue-400 text-2xl"><Link to="/Feature">Feature</Link></li>
          <li className="cursor-pointer hover:text-blue-400 text-2xl"><Link to="/Contact">Contact me </Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-gray-900 border-t border-gray-800 transition-all">
          <li className="cursor-pointer hover:text-blue-400 text-2xl"><Link to="/">Home</Link></li>
                    <li className="cursor-pointer hover:text-blue-400 text-2xl"><Link to="/About">About</Link></li>
                                 <li className="cursor-pointer hover:text-blue-400 text-2xl"><Link to="/Education">Education</Link></li>
                                 <li className="cursor-pointer hover:text-blue-400 text-2xl"><Link to="/Skill">Skill</Link></li>
             <li className="cursor-pointer hover:text-blue-400 text-2xl"><Link to="/Feature">Feature</Link></li>
          <li className="cursor-pointer hover:text-blue-400 text-2xl"><Link to="/Contact">Contact me </Link></li>
        </ul>
      )}
    </nav>
    </div>
      

   
    
  );
};

export default Navbar;