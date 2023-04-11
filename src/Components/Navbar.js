import "../Styles/Navbar.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
<<<<<<< HEAD

=======
    const [isOpen, setIsOpen] = useState(false)
>>>>>>> d8e1d4b80ec6dcb563b70e0791a30f1da2517b5d


    return (

        <nav className="navbar">
            <div className="navbar-brand">Jeremiah Marcos</div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;