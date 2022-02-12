import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="nav-image">
            <img
                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png"
                alt="Navbar Logo"
                className="navbar-logo"
            />
        </div>
        <div className="navbar-links">
            <ul>
                <li>
                    <a href="#Features">Features</a>
                </li>
                <li>
                    <a href="#Works">How It Works</a>
                </li>
                <li>
                    <a href="#Pricing">Pricing</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar