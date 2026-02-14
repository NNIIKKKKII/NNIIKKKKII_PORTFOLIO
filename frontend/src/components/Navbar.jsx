import React from "react";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (



    <nav className="flex justify-around items-center h-[17vh] w-full">
      <div className="hidden md:block text-5xl font-bold hover:cursor-pointer">NNIIKKII</div>

      <div className="hidden md:flex gap-5 text-2xl ">
        {/* <a
          className="text-black no-underline decoration-white
             transition-all duration-400 ease-in-out
             hover:text-gray-500 hover:underline
             hover:underline-offset-[1rem]
             hover:decoration-gray-300"
          href="#home"
        >
          Home
        </a> */}
        <a
          className="text-black no-underline decoration-white
             transition-all duration-400 ease-in-out
             hover:text-gray-500 hover:underline
             hover:underline-offset-[1rem]
             hover:decoration-gray-300"
          href="#about"
        >
          About
        </a>
        <a
          className="text-black no-underline decoration-white
             transition-all duration-400 ease-in-out
             hover:text-gray-500 hover:underline
             hover:underline-offset-[1rem]
             hover:decoration-gray-300"
          href="#experience"
        >
          Experience
        </a>
        <a
          className="text-black no-underline decoration-white
             transition-all duration-400 ease-in-out
             hover:text-gray-500 hover:underline
             hover:underline-offset-[1rem]
             hover:decoration-gray-300"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="text-black no-underline decoration-white
             transition-all duration-400 ease-in-out
             hover:text-gray-500 hover:underline
             hover:underline-offset-[1rem]
             hover:decoration-gray-300"
          href="#contact"
        >
          Contact
        </a>
      </div>

      {/* <button className="hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button> */}

      < Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>






  );
};

export default Navbar;
