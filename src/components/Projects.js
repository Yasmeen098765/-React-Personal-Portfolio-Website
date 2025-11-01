import { useContext } from "react";
import { refContext } from './Reference';
import { useNavigate } from 'react-router-dom'
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
export default function Projects() {
    const { projectsRef } = useContext(refContext);
    const navigate = useNavigate();
    return (
        <>
            <section className='projects-section  w-100 position-relative pt-2 pb-3' id='projects' ref={projectsRef}>
                <div className=' container w-100 px-4 px-sm-5  '>
                    <div className=' py-5 position-relative '>
                        <div className="row">
                            <div className="col-12 text-center projects-section-header ">
                                <h2 className=" text-white fs-1 fw-bold text-capitalize">My Projects</h2>
                                <p className="w-75 m-auto fs-5 mt-3 ">
                                    I'm Yasmeen, a Fullstack Developer from Syria, crafting mobile apps,
                                    frontend interfaces, and end-to-end solutions. Discover my projects below.
                                </p>
                                <ul className="nav nav-pills   my-5 w-75 m-auto d-flex justify-content-evenly align-items-center nav-projects-ul" id="pills-tab" role="tablist" >
                                    <li className="nav-item nav-first">
                                        <a onClick={(e) => { e.preventDefault(); navigate('/projects/sec1'); }} className="nav-link active text-capitalize" id="pills-sec1-tab" data-bs-toggle="pill" href="#pills-sec1" role="tab" aria-controls="pills-sec1" aria-selected="true" > Mobile</a>
                                    </li>
                                    <li className="nav-item nav-second">
                                        <a onClick={(e) => { e.preventDefault(); navigate('/projects/sec2'); }} className="nav-link text-capitalize" id="pills-sec2-tab" data-bs-toggle="pill" href="#pills-sec2" role="tab" aria-controls="pills-sec2" aria-selected="false">Frontend</a>
                                    </li>
                                    <li className="nav-item nav-thrid">
                                        <a onClick={(e) => { e.preventDefault(); navigate('/projects/sec3'); }} className="nav-link text-capitalize" id="pills-sec3-tab" data-bs-toggle="pill" href="#pills-sec3" role="tab" aria-controls="pills-sec3" aria-selected="false" >Fullstack</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active " id="pills-sec1" role="tabpanel" aria-labelledby="pills-sec1-tab">
                                        <Section2 />
                                    </div>
                                    <div className="tab-pane fade" id="pills-sec2" role="tabpanel" aria-labelledby="pills-sec2-tab">
                                        <Section3 />
                                    </div>
                                    <div className="tab-pane fade" id="pills-sec3" role="tabpanel" aria-labelledby="pills-sec3-tab">
                                        <Section1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
