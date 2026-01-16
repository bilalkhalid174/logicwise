const Footer = () => {
    return (
<footer className="bg-slate-900 text-gray-400 lg:px-20 lg:py-7 px-3 py-2  font-sans    ">
        {/* footer top */}
    <div className=" grid lg:grid-cols-4 md:grid-cols-2  gap-10 pb-8   ">
        <div className="">
        <img
            src="https://logicwise.co/logo.png"
            alt="LogicWise Logo"
            className="h-10 mb-4 "
        />
            <p className="text-sm text-gray-300 mb-4 pr-5  ">
            We specialize in AI automation, web development, and digital transformation solutions that drive measurable business growth and operational excellence.
            </p>
        <div className="text-sm text-gray-300 space-y-2 ">
            <p>📧 contact@logicwise.co</p>
            <p>📞 +92 300 1234567</p>
            <p>📍 Lahore, Pakistan</p>
        </div>
        </div>
        <div className=" ">
            <h4 className="text-2xl text-white mb-4" >Services</h4>
            <ul className="space-y-2 ">
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">AI Automation</a></li>
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">Web Development</a></li>
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">Digital Transformation</a></li>
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">Custom Software</a></li>
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">Digital Analytics</a></li>
            </ul>
        </div>
        <div className=" ">
            <h4 className="text-2xl text-white mb-4">Company</h4>
            <ul className="space-y-2">
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">About Us</a></li>
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">Our Work</a></li>
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">Contact</a></li>
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">Blog</a></li>
            </ul>
        </div>
    <div className="">
        <h4 className="text-2xl text-white mb-4">Resources</h4>
        <ul className="space-y-2">
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">Case Studies</a></li>
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">White Paper</a></li>
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">Documentation</a></li>
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">Support</a></li>
            <li><a className="text-sm text-gray-300 hover:text-sky-400 transition-transform  hover:-translate-y-1 inline-block" href="#">FAQ</a></li>
        </ul>
        </div>
    </div>
        {/* footer newsletter */}
    <div className="flex flex-col gap-6 p-6 bg-gray-800 rounded-lg mb-10 md:flex-row md:items-center md:justify-between">
    
    {/* Text section */}
    <div className=" md:text-left">
        <h3 className="mb-1 text-2xl text-white">
        Stay Updated
        </h3>
        <p className="text-sm text-gray-300 max-w-md ">
        Get the latest insights on automation, web development, and digital transformation.</p>
    </div>
    {/* Form section */}
    <div className="flex flex-col gap-3 w-full md:w-auto lg:flex-row lg:items-center">
        <input type="email" placeholder="Enter your email"
        className="w-full lg:flex-1 px-3 py-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-blue-600"/>
        <button className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-md cursor-pointer transition-transform hover:bg-blue-800 hover:scale-105">
        Subscribe </button>
    </div>
</div>
        {/* footer bottom */}
    <div className="flex flex-col gap-5 mb-6 text-sm items-center md:flex-row md:justify-between">
        <p className="text-center md:text-left">© {new Date().getFullYear()} LogicWise. All rights reserved. | Innovate. Automate. Integrate</p>
        <div className="flex gap-2 md:gap-5">
            <a href="#" className="transition-transform duration-200 hover:text-blue-500 hover:scale-105">Privacy Policy</a>
            <a href="#"className="transition-transform duration-200 hover:text-blue-500 hover:scale-105">Terms of Service</a>
            <a href="#" className="transition-transform duration-200 hover:text-blue-500 hover:scale-105">Cookies Policy</a>
        </div>
    </div>
</footer>
    );
};
export default Footer;