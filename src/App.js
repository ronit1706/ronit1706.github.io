import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import './styles/App.css';
import Skills from './pages/Skills';
import Soft_Skills from './pages/Soft_Skills';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="nav-container">
            <Navbar />
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/soft_skills" element={<Soft_Skills />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
