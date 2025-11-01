
import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { refContext } from './Reference'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/nav-icon4.jpg'

const Navbar = () => {
    const navigate = useNavigate();
    const { homeRef, skillsRef, projectsRef, contactRef } = useContext(refContext);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scrolled = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
            return window.removeEventListener
        }
        window.addEventListener('scroll', scrolled)
    }, [])


    const handleScroll = (ref, path) => {
        navigate(path);
        setTimeout(() => {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <>
            <nav className={`navbar  navbar-expand-lg navbar-dark py-3 fixed-top   ${scrolled ? 'scrolled' : ''} `}>
                <div className=" container px-0 px-sm-5   ">
                    <NavLink onClick={(e) => { e.preventDefault(); handleScroll(homeRef, '/'); }} className="navbar-brand  fs-1 fw-bold  px-sm-0 px-4 text-capitalize portfolio" to="/">portfolio</NavLink>
                    <button className="navbar-toggler mx-4 mx-sm-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="  collapse navbar-collapse " id="navbarSupportedContent">
                        <div className='w-100 d-flex flex-column flex-xl-row justify-content-center align-items-center justify-content-sm-end '>
                            <ul className="navbar-nav  text-center  ">
                                <li className="nav-item">
                                    <NavLink onClick={(e) => { e.preventDefault(); handleScroll(homeRef, '/'); }} className="nav-link text-capitalize  fs-5 ms-4" to="/">Home </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={(e) => { e.preventDefault(); handleScroll(skillsRef, '/skills'); }} className="nav-link text-capitalize fs-5  ms-4" to="/skills">skills</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={(e) => { e.preventDefault(); handleScroll(projectsRef, '/projects/sec1'); }} className="nav-link text-capitalize fs-5  ms-4" to="/projects/sec1">projects</NavLink>
                                </li>
                            </ul>
                            <div className=' d-flex flex-column flex-sm-row justify-content-center align-items-center  mt-2 mt-sm-0 '>
                                <div className="social-icon ms-4 mb-2 mb-sm-0  ">
                                    <a target='_blank' href='https://www.linkedin.com/' className=" m-1"><img src={navIcon1} alt='linkedin' /></a>
                                    <a target='_blank' href='https://www.facebook.com/' className=" m-1"><img src={navIcon2} alt='facebook' /></a>
                                    <a target='_blank' href='https://www.instagram.com/' className=" m-1"><img src={navIcon3} alt='instagram' /></a>
                                    <a target='_blank' href='https://github.com/' className=" m-1 img1"><img src={navIcon4} alt='github' /></a>
                                </div>
                                <div className='contact mt-2 mt-sm-0 mb-2 mb-sm-0'>
                                    <NavLink onClick={(e) => { e.preventDefault(); handleScroll(contactRef, '/contact'); }} className=" text-capitalize fs-5  ms-4 fw-bold" to="/contact">let's connect</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;