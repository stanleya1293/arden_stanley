import './App.css';
import {Routes, Route, BrowserRouter, Link, Outlet} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
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
      
      <Item
      itemTitle="About"
      itemText="Greetings! My name is Arden Stanley. Ever since a kid, 
      I have had a passion for all that is engineering, 
      computer science, mathematics, physics, you name it.  I am currently 
      in undergrad pursuing a degree in Computer Engineering at the University of Tennessee at Chattanooga.  To learn more about me,
      click ">
      </Item>

      <Item 
      itemTitle="Projects"
      itemText="Over the years, I have tinkered with electronics and created
      many small programs.  However, as of recent times,
      I have begun work on some much larger scale solo projects.
      To view these projects and my progress on them, click here."
      />
      <Item itemTitle="Resume and Other Links"/>
    </div>
  );
}

function Item({itemTitle, itemText}) {
  return (
    <div className="Item">
      <h2 className="ItemTitle">{itemTitle}</h2>
      <p className="ItemText">{itemText}</p>
    </div>
  );
}

function About() {
  return (
    <div className="Home">
      
    </div>
  );
}

export default App;
