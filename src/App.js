import './App.css';
import {Routes, Route, BrowserRouter, Link, Outlet} from "react-router-dom"
import {useState} from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="skills-and-resume" element={<SkillsAndResume/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return(
    <div className="Home">
      <Name/>
      <Content/>
    </div>
  );
}

function About() {
  const [active, setActive] = useState(0);
  return (
    <div className="About">
      <div className="ImageContainer">
        <div className="Overlay">
          <h1 className="ImageText">Hey there! My name is Arden Stanley.  Nice to meet you!  Click the button below to learn more about me.</h1>
          <button onClick={() => {
            setActive(1);
          }} 
          className="LearnMore">Learn More</button>
        </div>
        <img src="IMG_3799.jpg" alt="" width="300" height="500" id="SelfPortrait"/> 
      </div>
      {(active === 1) 
      && (
      <div className="AboutTextContainer">
        <p className="AboutText">
          Want to know about me?
          I am a junior undergrad in college at the University of Tennessee at Chattanooga 
          pursuing a degree in computer engineering.  I transferred to this university during the fall semester
          of 2024 from the University of Tennessee at Martin, where I also pursued a degree in computer engineering.
          Ever since a kid, I have been curious about electronics, math, physics, and programming.  
          Now, as a highly passioned university student, I spend my time immersed in textbooks, projects,
          and tinkering in general.  I love the subject I am pursuing and wish to not only master it, 
          but also create a better future for everyone, being on the frontlines of the age of innovation.  
          My primary areas of interest include, but are not limited to: computer hardware, firmware/systems programming,
          computer graphics, FPGA design, ASIC design, embedded systems, RF electronics, and application programming.  
          My passions in this field have not only given me purpose in life but have also given me the ability
          to further mankind and make my mark on this world!
        </p>
        <Link to="/">
          <button className="BackHome">Home</button>
        </Link>
      </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <div className="Projects">
      <div className="Project">
        <h1 className="ProjectTitle">This Website</h1>
        <p className="ProjectInfo">
          This website took a great deal of time and effort to learn ReactJS and make! 
          At the moment, it utilizes ReactJS, CSS, and HTML to create a simple three page layout 
          (with the assistance of the react router for client side routing).  All of the animations and UI
          were created by me alone (almost no web-dev experience other than having read the Jon Duckett web-dev books), 
          and I hope this stands as a testament to my ability to learn new
          things and create a neat website!.  The site has gone through multiple iterations,
          lots of trial and error, and numerous plan changes, yet like anything else I persevered
          in creating a neat web portfolio with beautiful animations and good content.

        </p>
      </div>
      <div className="Project">
        <h1 className="ProjectTitle">Conjure 2D Game Engine (in progress)</h1>
        <p className="ProjectInfo">
          Being a fan of systems level programming and computer graphics theory, 
          it was inevitable that I would set out on a journey to create my own game engine.
          Perhaps one of the greatest ways of learning APIs/libraries like OpenGL and GLFW,
          I started this project almost 2 years ago.  However, my initial version did not work out and I ended up deleting
          it because it became too unnecessarily complex.  I took a hiatus, but as of this semester, I have begun work again on it,
          in full force.  The idea behind Conjure is that it is to be a lightweight 2D game engine that utilizes a file format called
          .conj that act as scripts for the game objects, as well as a creational tool for said game objects.  Upon being loaded with
          that file format, it handles the graphics and attaches events specified on game objects in the .conj file to those respective game objects.
          As of now, it will only support 2D game development, and will have no GUI; however, I am working on familiarizing myself with C/C++
          GUI design so as to provide a GUI for ease of development.  The game engine will also use the notorious Entity Component System
          in order to maximize efficiency and not get lost in the sea of inheritance.

        </p>
      </div>
      <div className="Project">
        
      </div>
    </div>
  );
}

function SkillsAndResume() {
  return (
    <div className="Home">

    </div>
  );
}

function Name() {
  return (
    <div className="TitleBar">
      <div className="NameContainer">
        <h1 className="Name">Arden Stanley</h1>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="Content">
      <Item title="About" to="/about"></Item>
      <Item title="Projects" to="/projects"></Item>
      <Item title="Skills + Resume" to="/skills-and-resume"></Item>
      <Outlet/>
    </div>
  );
}

function Item({title, to}) {
  return (
    <div className="ItemContainer">
      <Link to={to}>
        <button className="Item">
          <h1 className="ItemTitle">{title}</h1>
        </button>
      </Link>
    </div>
  );
}



export default App;
