import './App.css';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index component={<Home/>} />
        
      </Route>
    </Routes>
  );
}

function Home() {
  <div className="Home">
    <Name/>
    <Content/>
  </div>
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
      click here."
      />

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

function handleMouseHover() {

}

function Item({itemTitle, itemText}) {
  return (
    <div className="Item" onMouseEnter={handleMouseHover}>
      <h2 className="ItemTitle">{itemTitle}</h2>
      <p className="ItemText">{itemText}</p>
    </div>
  );
}

export default App;
