import React from 'react'
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo"></div>
            <img src="{logo}" alt="" />
            <div className="nav-links">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
