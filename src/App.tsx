import { HashRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Hobbies from "./pages/Hobbies"
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";


export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/experience" element={<Experience />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

