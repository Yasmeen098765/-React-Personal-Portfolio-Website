import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/nav-icon4.jpg'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { refContext } from './Reference'
export default function Footer() {
    const navigate = useNavigate();
    const { homeRef } = useContext(refContext);
    const handleScroll = (ref, path) => {
        navigate(path);
        setTimeout(() => {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };
    return (
        <>
            <footer className="w-100  footer-background pt-5 pb-1 " >
                <div className="position-relative bottom-0 start-0 end-0 ">
                    <div className="container    px-4 px-sm-5 py-5 ">
                        <div className="row d-flex justify-content-start align-items-center footer_padding  ">
                            <div className="col-12 col-md-6  " >
                                <NavLink onClick={(e) => { e.preventDefault(); handleScroll(homeRef, '/'); }} className=" text-decoration-none text-white  fs-1 fw-bold   text-capitalize portfolio" to="/">portfolio</NavLink>
                            </div>
                            <div className="col-12 col-md-6  ">
                                <div className='row  mt-3 d-flex  justify-content-end align-items-center flex-wrap' >
                                    <div className="col-12  social-icon  d-flex justify-content-center justify-content-md-end align-items-center  ">
                                        <a target='_blank' href='https://www.linkedin.com/' className=" m-1"><img src={navIcon1} alt='linkedin' /></a>
                                        <a target='_blank' href='https://www.facebook.com/' className=" m-1"><img src={navIcon2} alt='facebook' /></a>
                                        <a target='_blank' href='https://www.instagram.com/' className=" m-1"><img src={navIcon3} alt='instagram' /></a>
                                        <a target='_blank' href='https://github.com/' className=" m-1 img1"><img src={navIcon4} alt='github' /></a>
                                    </div>
                                    <div className="col-12 text-center text-md-end d-flex justify-content-center justify-content-md-end align-items-center mt-4 footer_copyright">
                                        <p className=' text-capitalize'>&copy; Copyrights 2025. All Rights Reserved by yasmeen</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
