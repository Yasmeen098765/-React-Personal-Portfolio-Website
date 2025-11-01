import projectimg1 from '../assets/img/frontend_proj1.png'
import projectimg2 from '../assets/img/frontend_proj2.png'
import projectimg3 from '../assets/img/frontend_proj3.png'
import projectimg4 from '../assets/img/frontend_proj4webp.webp'
import projectimg5 from '../assets/img/frontend_proj5.webp'
import projectimg6 from '../assets/img/frontend_proj6.png'

export default function Section3() {
    const projects = [
        {
            title: "salon beauty",
            description: "Beauty Salon Booking",
            imgUrl: projectimg6,
            tools: "React.js & Material-UI & Context API & Calendar API"
        },
        {
            title: "Startup",
            description: "Corporate Business Website",
            imgUrl: projectimg2,
            tools: "Bootstrap 5 & HTML5 & JavaScript & jQuery"
        },
        {
            title: "Carbook",
            description: "Car Rental System",
            imgUrl: projectimg3,
            tools: "Vue.js & Tailwind CSS & Vuex & Axios"
        },
        {
            title: "shopify",
            description: "E-commerce Store Front",
            imgUrl: projectimg4,
            tools: "React.js & Redux & SASS & Stripe API"
        },
        {
            title: "Bus Traveller",
            description: "Travel Booking Platform",
            imgUrl: projectimg1,
            tools: "React.js & CSS3 & JavaScript & REST API"
        },
        {
            title: "desserty",
            description: "Food Delivery Service",
            imgUrl: projectimg5,
            tools: "HTML5 & CSS3 & JavaScript & Firebase"
        },
    ]

    return (
        <>
            <section>
                <div className=" row d-flex justify-content-center align-items-center flex-wrap pt-3">
                    {
                        projects.map((project, index) => {
                            return (
                                <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
                                    <div className="card w-100 section1-project overflow-hidden rounded-5 border-0">
                                        <img src={project.imgUrl} className="card-img1  w-100 h-100  " alt={project.title} />
                                        <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center ">
                                            <h4 className="card-title fs-2 fw-bold text-white text-capitalize">{project.title}</h4>
                                            <h6 className="card-text fs-6 fst-italic text-white w-100 fw-normal text-capitalize">{project.description}</h6>
                                            <h5 className="card-text fs-6 fst-italic text-white w-100 fw-normal text-capitalize">({project.tools})</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}
