import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./components/contact";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Thank from "./components/thank";

function App() {
  return (
    <div className="App">
      <div id="main-content">
        <Router>
          <header>
            <ul id="navbar">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              </ul>
          </header>
          <main>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/thank" component={<Thank />} />
            </Routes>
          </main>
        </Router>
        </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;