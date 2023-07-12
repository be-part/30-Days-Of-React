import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-option">Home</Link>
      <Link to="/example-portfolio" className="nav-option">Example Portfolio</Link>
      <Link to="/colour-generator" className="nav-option">Colour Generator</Link>
      <Link to="/colour-coding" className="nav-option">Colour Coding</Link>
      <Link to="/bar-chart" className="nav-option">Bar Chart</Link>
    </nav>
  );
}
export default Nav;