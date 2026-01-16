import Business from "./Business";
import Contact from "./Contact";
import Hero from "./Hero";
import Solution from "./Solution";
import Technologies from "./Technologies";
import Work from "./Work";

const Body = () => {
    return (
    <section className="section">
    <Hero />
    <Solution />
    <Business />
    <Technologies />
    <Work />
    <Contact />
    </section>
    );
};
export default Body;