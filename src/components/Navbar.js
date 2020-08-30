import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink to="/" className="navbar-brand" >Portfolio</NavLink>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink to="/" activeClassName="menu_active" exact className="nav-link" >Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/about" activeClassName="menu_active" exact className="nav-link">About</NavLink>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <NavLink to="/projects" activeClassName="menu_active" exact className="nav-link" >Projects</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/resume"  activeClassName="menu_active" exact className="nav-link" >Resume</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/contact" activeClassName="menu_active" exact className="nav-link" >Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;