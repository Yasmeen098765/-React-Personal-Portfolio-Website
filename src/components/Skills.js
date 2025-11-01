

import { useContext } from "react";
import { refContext } from './Reference';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img_skill1 from "../assets/img/skill1.svg";
import img_skill2 from "../assets/img/skill2.svg";
import img_skill3 from "../assets/img/skill3.svg";

export default function Skills() {
    const { skillsRef } = useContext(refContext);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <section className='skills-section pb-3 w-100 position-relative' id='skills' ref={skillsRef}>
                <div className=' container w-100 px-4 px-sm-5  '>
                    <div className='py-4 pt-5  skills-section-box  position-relative shadow  '>
                        <div className="row">
                            <div className="col-12 text-center skills-section-header ">
                                <h2 className=" text-white fs-1 fw-bold text-capitalize">Skills</h2>
                                <p className=" w-75 m-auto fs-5 mt-3 lead ">you can see My skills Here </p>
                                <div className='pt-2' >
                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        className=" m-auto  mt-5  carosuel_skills"
                                        autoPlay={true}
                                        autoPlaySpeed={1500}
                                        customTransition="all 0.5s"
                                        transitionDuration={500}
                                    >
                                        <div className="Carousel-item ">
                                            <img className=" img-fluid  m-auto" src={img_skill2} alt='skill img' />
                                            <h3 className=" text-light mt-4 fs-5 text-capitalize">frontEnd development</h3>
                                        </div>
                                        <div className="Carousel-item ">
                                            <img className=" img-fluid " src={img_skill1} alt='skill img' />
                                            <h3 className=" text-light mt-4 fs-5 text-capitalize">HTML5</h3>
                                        </div>
                                        <div className="Carousel-item ">
                                            <img className=" img-fluid " src={img_skill2} alt='skill img' />
                                            <h3 className=" text-light mt-4 fs-5 text-capitalize">CSS3</h3>
                                        </div>
                                        <div className="Carousel-item ">
                                            <img className=" img-fluid " src={img_skill3} alt='skill img' />
                                            <h3 className=" text-light mt-4 fs-5 text-capitalize">javascrit (ES6+)</h3>
                                        </div>
                                        <div className="Carousel-item ">
                                            <img className=" img-fluid " src={img_skill3} alt='skill img' />
                                            <h3 className=" text-light mt-4 fs-5 text-capitalize">react js</h3>
                                        </div>
                                        <div className="Carousel-item ">
                                            <img className=" img-fluid " src={img_skill2} alt='skill img' />
                                            <h3 className=" text-light mt-4 fs-5 text-capitalize">bootstrap</h3>
                                        </div>
                                        <div className="Carousel-item ">
                                            <img className=" img-fluid " src={img_skill2} alt='skill img' />
                                            <h3 className=" text-light mt-4 fs-5 text-capitalize">Responsive design</h3>
                                        </div>
                                    </Carousel>;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}


