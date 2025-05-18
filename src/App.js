import './App.css';
import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import NotFound from "./Pages/Not Found/NotFound";
import Projects from './Pages/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from './Components/CustomComponent/AppLayout';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
