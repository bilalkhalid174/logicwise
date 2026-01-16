
import workData from "./Card.jsx";

const Work = () => {
    return (
    <div className="flex flex-col items-center gap-12 bg-slate-50 text-black font-inter">
      {/* Header */}
    <div className="flex flex-col items-center text-center gap-5 m-9">
        <p className=" px-4 py-3 text-sm font-semibold text-blue-600 bg-blue-200 rounded-full my-3">Our Work</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Client Success Stories</h1>
        <h5 className="text-sm md:text-base lg:text-lg text-gray-500 font-bold max-w-">Real-world AI solutions we've built for our clients—driving efficiency,automation, and measurable results.</h5>
    </div>
      {/* Cards */}
    <div className="flex flex-wrap justify-center p-3 gap-5 md:gap-6 w-full">
        {workData.map((item, index) => (
        <div key={index}
            className="bg-white rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all w-full sm:w-4/5 lg:w-[30%] flex flex-col justify-between">
            {/* Image */}
            <div className="w-full">
            <img src={item.img} alt={item.title}
                className="w-full h-40 md:h-36 object-cover"/>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap px-2 py-2 gap-2">
            {item.tags.map((tag, i) => (<span key={i}
            className="text-xs text-blue-900 bg-gray-100 px-2 py-1 rounded-md"> {tag}</span>))}
            </div>
            {/* Content */}
            <div className="px-3">
                <h1 className="text-sm sm:text-base font-semibold my-1">
                {item.title}</h1>
            <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
            </div>
            {/* Button */}
            <div className="flex justify-center items-center p-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-4 py-2 rounded-md w-full md:w-auto">
            {item.buttonText} </button>
            </div>
            </div>
        ))}
    </div>
      {/* Lower CTA */}
    <div className="flex flex-col items-center gap-3 py-8 text-center">
        <p className="text-base md:text-lg font-medium text-gray-500">Have a project in mind? </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-9 py-4 rounded-md text-sm w-full md:w-auto"> Get Start </button>
    </div>
    </div>
    );
}
export default Work;