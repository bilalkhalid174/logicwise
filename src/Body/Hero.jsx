const Hero = () => {
    return(
  <div className="flex flex-col gap-5 px-5 py-4 bg-white font-sans text-center md:gap-8 md:px-5 md:flex-col md:items-center lg:flex-row lg:items-center lg:justify-around lg:px-12 lg:py-5 lg:text-left">

  {/* Left content */}
  <div className="max-w-xl md:justify-items-center md:m-10 lg:items-center">
    <h1 className="text-2xl text-black md:text-4xl lg:text-6xl lg:leading-none">
      Building Tomorrow's Solutions with
      <span className="text-blue-600"> AI & Automation</span>
    </h1>

    <p className="mt-3 mb-8 text-sm leading-5 text-gray-600 md:text-base md:leading-7 lg:text-lg lg:leading-7">
      We specialize in computer vision, AI agent workflows, modern web development,
      and intelligent automation solutions that transform how businesses operate
      and scale.
    </p>

    <div className="flex flex-col gap-3 w-full md:flex-row md:justify-center md:gap-5 lg:justify-start">
      <button className="w-full md:w-auto px-7 py-3 rounded-full bg-blue-600 text-white font-bold transition-transform hover:scale-105">
        Discover Solution
      </button>

      <button className="w-full md:w-auto px-7 py-3 rounded-full bg-blue-600 text-white font-bold transition-transform hover:scale-105">
        Chat with AI Assistance
      </button>
    </div>
  </div>

  {/* Right image */}
  <div className="w-full max-w-xl mx-auto p-4">
    <img
      src="https://logicwise.co/hero-image.png"
      alt="Digital Solutions"
      className="w-full rounded-2xl shadow-md transition-transform hover:scale-105"
    />
  </div>
</div>

    )
}
export default Hero;