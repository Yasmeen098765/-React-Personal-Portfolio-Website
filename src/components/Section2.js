import projectimg1 from '../assets/img/mobile_proj1.jpg'
import projectimg2 from '../assets/img/mobile_proj2.jpg'
import projectimg3 from '../assets/img/mobile_proj3.jpg'
import projectimg4 from '../assets/img/mobile_proj4.jpg'
import projectimg5 from '../assets/img/mobile_proj5.jpg'
import projectimg6 from '../assets/img/mobile_proj6.jpg'
import projectimg7 from '../assets/img/mobile_proj7.jpg'


export default function Section2() {
    const projects = [
        {
            title: "find rent house",
            description: "Property Search App",
            imgUrl: projectimg2,
            tools: "React Native & Firebase & Google Maps"
        },
        {
            title: "tp do list task",
            description: "Task Management Tool",
            imgUrl: projectimg3,
            tools: "Flutter & SQLite & Provider"
        },
        {
            title: "Travel Mobile App",
            description: "Trip Planning Assistant",
            imgUrl: projectimg6,
            tools: "React Native & Node.js & MongoDB"
        },
        {
            title: "Statistic Mobile App",
            description: "Data Visualization Dashboard",
            imgUrl: projectimg4,
            tools: "Flutter & D3.js & REST API"
        },
        {
            title: "Virtual Reality",
            description: "Immersive Experience Platform",
            imgUrl: projectimg5,
            tools: "Unity & C# & ARCore"
        },
        {
            title: "Doctor Appointment",
            description: "Medical Booking System",
            imgUrl: projectimg7,
            tools: "React Native & Express.js & MySQL"
        },
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
