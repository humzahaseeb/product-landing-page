import React from 'react'

const Navbar = () => {
  return (
    <header id='header'>
        <nav id='nav-bar'>
            <div className="nav-image">
                <img
                    src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png"
                    alt="Navbar Logo"
                    className="navbar-logo"
                    id='header-img'
                />
            </div>
            <div className="navbar-links">
                <ul>
                    <li>
                        <a href="#Features" className='nav-link'>Features</a>
                    </li>
                    <li>
                        <a href="#Works" className='nav-link'>How It Works</a>
                    </li>
                    <li>
                        <a href="#Pricing" className='nav-link'>Pricing</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar