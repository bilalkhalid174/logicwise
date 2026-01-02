import "./Footer.css";

const Footer = () => {
    return (
    <footer className="footer">
    <div className="footer-top">

        <div className="footer-col">
        <img
            src="https://logicwise.co/logo.png"
            alt="LogicWise Logo"
            className="footer-logo"
        />

            <p className="footer-desc">
            We specialize in AI automation, web development, and digital transformation solutions that drive measurable business growth and operational excellence.
            </p>

        <div className="footer-contact">
            <p>📧 contact@logicwise.co</p>
            <p>📞 +92 300 1234567</p>
            <p>📍 Lahore, Pakistan</p>
        </div>

        
        </div>

        <div className="footer-col">
            <h4>Services</h4>
            <ul>
            <li><a href="#">AI Automation</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Digital Transformation</a></li>
            <li><a href="#">Custom Software</a></li>
            <li><a href="#">Digital Analytics</a></li>
            </ul>
        </div>

        <div className="footer-col">
            <h4>Company</h4>
            <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Work</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            </ul>
        </div>


    <div className="footer-col">
        <h4>Resources</h4>
        <ul>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">White Paper</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
        </div>
    </div>

    <div className="footer-newsletter">
        <div className="newsletter-text">
            <h3>Stay Updated</h3>
            <p>Get the latest insights on automation, web development, and digital transformation.</p>
        </div>

        <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </div>
    </div>


        <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LogicWise. All rights reserved. | Innovte.Automte.Integrate</p>

        <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Policy</a>
        </div>
        </div>
    </footer>
    );
};

export default Footer;
