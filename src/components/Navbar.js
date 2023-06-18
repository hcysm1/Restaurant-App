import { useState } from "react";
import Navigation from "./Navigation";
import Logo from "../images/logo5.png";
import Hamburger from "../images/hamburger.png";
import Close from "../images/close.png";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <nav className="burger">
        <img src={Logo} alt="little lemon logo" className="nav-image"></img>
        <button className="burger-icon" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
      </nav>
      <Navigation device="desktop" />
      {navbarOpen ? <Navigation device="mobile" /> : ""}
    </nav>
  );
}
