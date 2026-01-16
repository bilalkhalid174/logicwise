import { useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);
const handlePopUp = () => {
    setMenuOpen(!menuOpen);
} 
    return (
    <nav className="sticky top-0 flex items-center justify-between bg-white px-8 py-3 shadow-lg z-10 "> 
        <img src="https://logicwise.co/logo.png" alt="LogicWise Logo" className="h-16 cursor-pointer transition-transform hover:scale-105 max-lg:h-14" />
        <ul className="hidden  gap-8 lg:flex">
            <li><a className="inline-block text-base font-medium  text-gray-700 transition-all hover:-translate-y-0.5 hover:text-blue-600" href="#home">Home</a></li>
            <li><a className="inline-block text-base font-medium  text-gray-700 transition-all hover:-translate-y-0.5 hover:text-blue-600"  href="#services">Work</a></li>
            <li><a className="inline-block text-base font-medium  text-gray-700 transition-all hover:-translate-y-0.5 hover:text-blue-600"  href="#about">Solution</a></li>
            <li><a className="inline-block text-base font-medium  text-gray-700 transition-all hover:-translate-y-0.5 hover:text-blue-600"  href="#contact">Contact</a></li>
        </ul>
        <button className="hidden rounded-md  px-7 py-3 bg-blue-600 text-base text-white transition-all hover:scale-105 hover:bg-blue-800 lg:block">Get Started</button>
        <div className="block text-3xl lg:hidden"  onClick={handlePopUp}>
        { menuOpen ? <AiOutlineClose />  : <AiOutlineAlignRight /> }
        </div>
        {menuOpen && (
        <div className="absolute right-0 top-full z-10 flex h-72 w-80 flex-col gap-5 bg-white px-8 py-6 shadow-md  lg:hidden ">
            <a className="text-lg font-medium text-gray-500 hover:text-blue-600" href="#home">Home</a>
            <a className="text-lg font-medium text-gray-500 hover:text-blue-600" href="#about">Solution</a>
            <a className="text-lg font-medium text-gray-500 hover:text-blue-600" href="#services">Work</a>
            <a className="text-lg font-medium text-gray-500 hover:text-blue-600" href="#contact">Contact</a>
            <button className="mt-2 w-full rounded-md bg-blue-600 px-7 py-3 text-sm text-white transition-all hover:scale-105 hover:bg-blue-800">Get Started</button>
        </div>
        )}
    </nav>
    );
}   
export default Navbar;