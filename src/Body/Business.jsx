const Business = () => {
    return (
    <div className="flex flex-col gap-6 p-5 m-5 bg-slate-50 border border-gray-200 rounded-2xl font-sans md:p-10 md:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

      {/* Left */}
    <div className="flex flex-col gap-4 text-center md:items-center lg:items-start lg:text-left">
        <h1 className="text-3xl font-bold leading-tight text-black md:text-4xl lg:text-4xl">Ready to transform your business?</h1>

        <p className="text-sm leading-6 text-gray-600 md:text-sm md:leading-7 lg:text-base lg:leading-9">Let's discuss your project and explore how we can help you achieve your goals.</p>

        <button className="px-4 py-3 text-white  bg-blue-600 rounded-full transition-transform hover:scale-110 md:px-8 md:py-3"> Get Started Today</button>
    </div>

      {/* Right */}
    <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-5">
        <div className="flex flex-col items-center gap-2 p-5 border border-gray-200 rounded-lg">
        <div className="text-sm  text-blue-600 md:text-base">50+</div>
        <div className="text-sm text-gray-700">Project</div>
        </div>

        <div className="flex flex-col items-center gap-2 p-5 border border-gray-200 rounded-lg">
        <div className="text-sm text-blue-600 md:text-base">99%</div>
        <div className="text-sm text-gray-700">Success Rate</div>
        </div>

        <div className="flex flex-col items-center gap-2 p-5 border border-gray-200 rounded-lg">
        <div className="text-sm  text-blue-600 md:text-base">24h</div>
        <div className="text-sm text-gray-700">Response</div>
        </div>
    </div>
    </div>
    );
};
export default Business;