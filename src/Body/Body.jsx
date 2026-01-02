import "./Body.css";
import workData from "./Card.jsx";


const Body = () => {
    return (
    <section className="section">
    <div className="hero-section">
        {/* First Div Hero section */}
    <div className="hero-left">
        <h1>Building Tomorrow's Solutions with <span className="span"> AI & Automation</span></h1>
        <p>We specialize in computer vision, AI agent workflows, modern web development, and intelligent automation solutions that transform how businesses operate and scale.Discover Solutions</p>
        <div className="hero-buttons">
            <button className="primary-btn">Discover Solution</button>
            <button className="secondary-btn">Chat with AI Assistance</button>
        </div>
    </div>

    <div className="hero-right">
        <img
            src="https://logicwise.co/hero-image.png"
            alt="Digital Solutions"
        />
    </div>
    </div>

    {/* Second Div Solutions */}
    <div className="solutions-section">
        <div className="solutions-top">
        <span className="solutions-label">Our Solution</span>
        <h2 className="solutions-heading">
            We help businesses grow through <span className="span2"> smart technology </span>
        </h2>
        <p className="solutions-paragraph">
            Our comprehensive solutions streamline operations, reduce costs, and accelerate growth for forward-thinking companies.
        </p>
        </div>

        <div className="solutions-bottom">
        <div className="solution-card">
            <h3>Computer Vision</h3>
        <p>
            Advanced image and video analysis powered by deep learning for automated visual intelligence.
        </p>
        <ul>
            <li>Object detection & tracking</li>
            <li>Image classification</li>
            <li>Real-time processing</li>
        </ul>
            <button>Learn More</button>
        </div>

        <div className="solution-card">
            <h3>AI Agent Workflows</h3>
        <p>
            Intelligent autonomous agents that execute complex tasks and make decisions with minimal human intervention.
        </p>
        <ul>
            <li>Multi-agent systems</li>
            <li>Task automation</li>
            <li>Smart decision-making</li>
        </ul>
            <button>Learn More</button>
        </div>

        <div className="solution-card">
            <h3>Web Development</h3>
        <p>
            Modern, scalable web applications built with cutting-edge technologies and best practices.
        </p>
        <ul>
            <li>Responsive design</li>
            <li>Cloud deployment</li>
            <li>SEO optimized</li>
        </ul>
            <button>Learn More</button>
        </div>

        <div className="solution-card">
            <h3>Automation Solutions</h3>
        <p>
            Streamline operations with intelligent automation that eliminates repetitive tasks and boosts efficiency.
        </p>
        <ul>
            <li>Process automation</li>
            <li>Workflow optimization</li>
            <li>Integration services</li>
        </ul>
            <button>Learn More</button>
        </div>
        </div>
    </div>

    {/* Third Div Business */}
    <div className="business">
        <div className="business-left">
            <h1 className="business-left h">Ready to transform your business?</h1>
            <p className="business-left p">Let's discuss your project and explore how we can help you achieve your goals.</p>
            <button className="business-left button">Get Started Today</button>
        </div>
        <div className="business-right">
            <div className="business-right-item">
                <div className="business-right-item-no">50+</div>
                <div>Project</div>
            </div>
            <div className="business-right-item">
                <div className="business-right-item-no">99%</div>
                <div>Success Rate</div>
            </div>
            <div className="business-right-item">
                <div className="business-right-item-no">24h</div>
                <div>Response</div>
            </div>
        </div>
    </div>

    {/* Fourth Div Mover (Technologies) */}
    <div className="mover">
        <div className="mover-item">
            <h1>Technologies</h1>
            <p>The Technology Stack We Use to Make Optimal Solutions</p>
        </div>
        <div className="mover-container">
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/python" alt="python"></img>
            <span>Python</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/tensorflow" alt="tensorflow"></img>
            <span>TensorFlow</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/pytorch" alt="pytorch"></img>
            <span>PyTorch</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/opencv" alt="opencv"></img>
            <span>OpenCV</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/langchain" alt="langchain"></img>
            <span>LangChain</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/react" alt="react"></img>
            <span>React</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/nextdotjs" alt="nextdotjs"></img>
            <span>Next.js</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/nodedotjs" alt="nodedotjs"></img>
            <span>Node.js</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/fastapi" alt="fastapi"></img>
            <span>FastAPI</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/flutter" alt="flutter"></img>
            <span>Flutter</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/docker" alt="docker"></img>
            <span>Docker</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/amazonaws" alt="amazonaws"></img>
            <span>Amazon AWS</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/mongodb" alt="mongodb"></img>
            <span>MongoDB</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/postgresql" alt="postgresql"></img>
            <span>PostgreSQL</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/python" alt="python"></img>
            <span>Python</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/tensorflow" alt="tensorflow"></img>
            <span>TensorFlow</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/pytorch" alt="pytorch"></img>
            <span>PyTorch</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/opencv" alt="opencv"></img>
            <span>OpenCV</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/langchain" alt="langchain"></img>
            <span>LangChain</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/react" alt="react"></img>
            <span>React</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/nextdotjs" alt="nextdotjs"></img>
            <span>Next.js</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/nodedotjs" alt="nodedotjs"></img>
            <span>Node.js</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/fastapi" alt="fastapi"></img>
            <span>FastAPI</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/flutter" alt="flutter"></img>
            <span>Flutter</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/docker" alt="docker"></img>
            <span>Docker</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/amazonaws" alt="amazonaws"></img>
            <span>Amazon AWS</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/mongodb" alt="mongodb"></img>
            <span>MongoDB</span>
        </div>
        <div className="mover-item1">
            <img src="https://cdn.simpleicons.org/postgresql" alt="postgresql"></img>
            <span>PostgreSQL</span>
        </div>
        </div>
    </div>

     {/*fifth Div Work  */}

    <div className="work-container">

    <div className="work-header">
    <p>Our Work</p>
    <h1>Client Success Stories</h1>
    <h5>
        Real-world AI solutions we've built for our clients—driving efficiency,
        automation, and measurable results.
    </h5>
    </div>


    <div className="work-cards">
        {workData.map((item, index) => (
        <div className="work-card" key={index}>

        <div className="work-img">
            <img src={item.img} alt={item.title} />
        </div>

        <div className="work-tag">
            {item.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
        ))}
        </div>

        <div className="work-content">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </div>

        <div className="work-button">
            <button>{item.buttonText}</button>
        </div>

        </div>
    ))}
    </div>


    <div className="work-lower">
    <p>Have a project in mind?</p>
    <button>Get Start</button>
    </div>

</div>                  

    {/* Form Section */}
    
    <div className="form">

    <div className="form-left">
    <h2>Get in Touch</h2>

    <div className="contact-info">
        <a>contact@example.com</a>
        <h6>+92 300 1234567</h6>
        <p>
            Let's talk about your project, partnership, or any questions you have. Fill out the form and our team will get back to you soon.
        </p>
    </div>
    </div>


    <div className="form-right">
    <form>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />

        <label>Company Name</label>
        <input type="text" placeholder="Enter your company name" />

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter your phone number" />

        <label>Service Needed</label>
        <input type="text" placeholder="Service you are looking for" />

        <label>Project Details</label>
        <textarea placeholder="Describe your project"></textarea>

        <button type="submit">Send Message</button>

    </form>
    </div>

</div>

    </section>

    

    );
};


export default Body;