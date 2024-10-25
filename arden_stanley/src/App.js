import './App.css';
import {Routes, Route, BrowserRouter, Link, Outlet} from "react-router-dom"

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
  return (
    <div className="About">
      <div className="ImageContainer">
        <div className="Overlay">
          <h1 className="ImageText">Hey there! My name is Arden Stanley.  Nice to meet you!</h1>
        </div>
        <img src="IMG_3799.jpg" alt="" width="300" height="500" id="SelfPortrait"/> 
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="Home">
      
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
