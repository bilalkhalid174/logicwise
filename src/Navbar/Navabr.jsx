import "./Navbar.css";

const Navbar = () => {
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
    </nav>
    );
}   
export default Navbar;