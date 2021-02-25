import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
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
    </Suspense>
  );
}

export default App;
