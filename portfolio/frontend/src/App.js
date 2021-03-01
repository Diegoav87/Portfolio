import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
// import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Title />
      <About />
      <Projects />
      <Services />
      <Contact />
      <footer className="footer">
        <p>&copy; 2021 Diego Abdo</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
