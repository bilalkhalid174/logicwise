const Contact = () => {
    return (
    <div className=" flex flex-col px-2 py-2 items-center gap-16 bg-white md:gap-8 md:px-5 md:py-7 lg:flex-row lg:gap-3">
      {/* Left */}
    <div className="flex flex-col justify-center p-4  md:w-full">
        <h2 className="text-3xl mb-5 text-gray-900 md:text-2xl">Get in Touch</h2>
        <div className="space-y-3">
        <a className="text-blue-600">contact@example.com</a>
        <h6 className="text-blue-600">+92 300 1234567</h6>
        <p className="text-base text-gray-500 leading-normal">
            Let's talk about your project, partnership, or any questions you have. Fill out the form and our team will get back to you soon.</p>
        </div>
    </div>
      {/* Right */}
    <div className=" border-2 w-full border-gray-200 rounded-lg  px-10 py-7 bg-gray-100 shadow-md md:w-full md:p-5">
        <form className="flex flex-col gap-3">
        <label className="text-sm font-medium ">Full Name</label>
        <input
            type="text" placeholder="Enter your full name"
            className="px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"/>
        <label className="text-sm font-medium">Email Address</label>
        <input
            type="email" placeholder="Enter your email"
            className="px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"/>
        <label className="text-sm font-medium">Company Name</label>
        <input
            type="text" placeholder="Enter your company name"
            className="px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"/>
        <label className="text-sm font-medium">Phone Number</label>
        <input
            type="tel" placeholder="Enter your phone number"
            className="px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"/>
        <label className="text-sm font-medium">Service Needed</label>
        <input
            type="text" placeholder="Service you are looking for"
            className="px-3 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"/>
        <label className="text-sm font-medium">Project Details</label>
        <textarea placeholder="Describe your project"
            className="px-3 py-2 h-32 resize-none border border-gray-300 rounded-md text-sm outline-none focus:border-blue-500"></textarea>
        <button
            type="submit"
            className="mt-3 w-full py-4 rounded-md bg-blue-500  text-white text-sm hover:bg-blue-800"> Send Message </button>
        </form>
    </div>
    </div>
    );
};
export default Contact;