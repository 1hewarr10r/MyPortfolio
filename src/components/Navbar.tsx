import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="header">
      <div className="header-inner container">
        <div className="row">
          <div>
            <strong>Umar Turdumambetov</strong><br/>
            <span className="muted">Student — Bellevue College</span>
          </div>
        </div>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink> 
          <NavLink to="/hobbies">Hobbies</NavLink>
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
