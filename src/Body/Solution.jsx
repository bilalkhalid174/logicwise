const Solution = () => {
  return (
    <div className="flex flex-col font-sans gap-6 px-4 py-6 bg-slate-50 md:px-8 md:py-10 md:gap-8">
      {/* Top section */}
        <div className="flex flex-col items-center gap-5 text-center">
        <span className="px-4 py-3 text-sm font-semibold text-blue-600 bg-blue-200 rounded-full md:text-base">Our Solution</span>

        <h2 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl"> We help businesses grow through <span className="text-blue-600"> smart technology </span> </h2>

        <p className="max-w-3xl px-3 text-sm font-bold leading-relaxed text-slate-500 md:px-0 md:text-base lg:text-base"> Our comprehensive solutions streamline operations, reduce costs, and accelerate growth for forward-thinking companies. </p>
        </div>
      {/* Cards section */}
        <div className="grid  grid-cols-1 font-sans items-center gap-5 md:grid-cols-2 md:justify-center lg:grid-cols-4 lg:justify-between">
        {/* Card 1 */}
        <div className="w-full flex flex-col gap-3 p-8 bg-white rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-lg font-semibold text-gray-900 ">Computer Vision</h3>

        <p className="text-sm font-bold text-gray-600 leading-relaxed md:text-base lg:text-sm">Advanced image and video analysis powered by deep learning for automated visual intelligence.</p>

          <ul className="ml-5 space-y-1 text-sm font-medium text-gray-600 list-disc">
            <li>Object detection & tracking</li>
            <li>Image classification</li>
            <li>Real-time processing</li>
          </ul>

          <button className="mt-3 w-full px-5 py-3 font-semibold text-white bg-blue-600 rounded-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 md:w-auto"> Learn More</button>
        </div>
        {/* Card 2 */}
        <div className="w-full flex flex-col gap-3 p-8 bg-white rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
          <h3 className=" text-lg font-semibold text-gray-900 md:text-xl"> AI Agent Workflows</h3>

          <p className="text-sm font-bold text-gray-600 leading-relaxed md:text-base lg:text-sm"> Intelligent autonomous agents that execute complex tasks and make decisions with minimal human intervention. </p>

          <ul className="ml-5 space-y-1 text-sm font-medium text-gray-600 list-disc">
            <li>Multi-agent systems</li>
            <li>Task automation</li>
            <li>Smart decision-making</li>
          </ul>

          <button className="mt-3 w-full px-5 py-3 font-semibold text-white bg-blue-600 rounded-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 md:w-auto"> Learn More</button>
        </div>
        {/* Card 3 */}
        <div className="w-full flex flex-col gap-3 p-8 bg-white rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
          <h3 className=" text-lg font-semibold text-gray-900 md:text-xl">
            Web Development
          </h3>

          <p className="text-sm font-bold text-gray-600 leading-relaxed md:text-base lg:text-sm">
            Modern, scalable web applications built with cutting-edge technologies and best practices.
          </p>

          <ul className="ml-5 space-y-1 text-sm font-medium text-gray-600 list-disc">
            <li>Responsive design</li>
            <li>Cloud deployment</li>
            <li>SEO optimized</li>
          </ul>

          <button className="mt-3 w-full px-5 py-3 font-semibold text-white bg-blue-600 rounded-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 md:w-auto">
            Learn More
          </button>
        </div>
        {/* Card 4 */}
        <div className="w-full flex flex-col gap-3 p-8 bg-white rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
          <h3 className=" text-lg font-semibold text-gray-900 md:text-xl">
            Automation Solutions
          </h3>

          <p className="text-sm font-bold text-gray-600 leading-relaxed md:text-base lg:text-sm">
            Streamline operations with intelligent automation that eliminates repetitive tasks and boosts efficiency.
          </p>

          <ul className="ml-5 space-y-1 text-sm font-medium text-gray-600 list-disc">
            <li>Process automation</li>
            <li>Workflow optimization</li>
            <li>Integration services</li>
          </ul>

          <button className="mt-3 w-full px-5 py-3 font-semibold text-white bg-blue-600 rounded-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 md:w-auto">
            Learn More
          </button>
        </div>
      </div>
</div>
    );
};
export default Solution;