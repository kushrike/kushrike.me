import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import "../assets/css/main.css"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h1 className="logo">Shrike's Playground</h1>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          <PageLinks styleClass="nav-links"></PageLinks>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
