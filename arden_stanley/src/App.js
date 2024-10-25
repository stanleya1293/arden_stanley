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
      <Item title="About" to="/about"></Item>
      <Item title="Projects" to="/projects"></Item>
      <Item title="Useful Links" to="/links"></Item>
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

function About() {
  return (
    <div className="Home">
      
    </div>
  );
}

export default App;
