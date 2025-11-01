import projectimg1 from '../assets/img/project-img1.png'
import projectimg2 from '../assets/img/project-img2.png'
import projectimg3 from '../assets/img/project-img3.png'
import projectimg4 from '../assets/img/project-img4.jpg'
import projectimg5 from '../assets/img/project-img5.jpg'
import projectimg6 from '../assets/img/project-img6.webp'
import projectimg7 from '../assets/img/project-img7.jpg'

export default function Section1() {
    const projects = [
        {
            title: "discover places near you",
            description: "Location-Based Discovery App",
            imgUrl: projectimg7,
            tools: "React & Node.js & MongoDB & Google Maps API & JWT"
        },
        {
            title: "lets do it together",
            description: "Collaborative Task Platform",
            imgUrl: projectimg2,
            tools: "Vue.js & Express.js & PostgreSQL & Socket.io & Redis"
        },
        {
            title: "boost your startup",
            description: "Startup Growth Analytics",
            imgUrl: projectimg3,
            tools: "Next.js & Python & FastAPI & Chart.js & AWS"
        },
        {
            title: "hironama",
            description: "Interactive Learning Platform",
            imgUrl: projectimg4,
            tools: "React & NestJS & MySQL & WebRTC & Stripe"
        },
        {
            title: "travel the world",
            description: "Multi-Destination Travel Planner",
            imgUrl: projectimg1,
            tools: "Angular & Express.js & MongoDB & Payment API & Cloudinary"
        },
        {
            title: "advertising",
            description: "Digital Ad Management System",
            imgUrl: projectimg6,
            tools: "React & Node.js & Firebase & Analytics API & OAuth"
        }
    ]

    return (
        <>
            <section>
                <div className=" row d-flex justify-content-center align-items-center flex-wrap pt-3">
                    {
                        projects.map((project, index) => {
                            return (
                                <div className=" col-12 col-sm-6 col-lg-4 mb-4" key={index}>
                                    <div className="card w-100 section1-project overflow-hidden rounded-5 border-0">
                                        <img src={project.imgUrl} className="card-img1  w-100 h-100  " alt={project.title} />
                                        <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center ">
                                            <h4 className="card-title fs-3 fw-bold text-white text-capitalize">{project.title}</h4>
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


