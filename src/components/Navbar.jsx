import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <a href="/">Stephen Mungai</a>
    </div>
    <ul className="navbar-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
      <li><a href="https://mungaimwangi001.medium.com/" target="_blank" rel="noopener noreferrer">Articles</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar; 