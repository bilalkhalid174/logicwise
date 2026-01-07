import "./Navbar.css";
import { useState } from "react";

import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";




const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);

const handlePopUp = () => {
    setMenuOpen(!menuOpen);
} 

    return (
    <nav className="navbar"> 
        <img src="https://logicwise.co/logo.png" alt="LogicWise Logo" className="logo" />
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Solution</a></li>
            <li><a href="#services">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="login-btn">Get Started</button>



        <div className="hamburger"  onClick={handlePopUp}>
        { menuOpen ? <AiOutlineClose />  : <AiOutlineAlignRight /> }
        </div>
        
        {menuOpen && (
        <div className="mobile-menu">
            <a href="#home">Home</a>
            <a href="#about">Solution</a>
            <a href="#services">Work</a>
            <a href="#contact">Contact</a>
            <button className="login-btn mobile-btn">Get Started</button>
        </div>
        )}


    </nav>
    );
}   
export default Navbar;