

import { useContext } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';
import { refContext } from './Reference';

export default function Skills() {
    const { skillsRef } = useContext(refContext);

    // إعدادات الاستجابة للسلايدر
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 4,
            partialVisibilityGutter: 40
        },
        desktop: {
            breakpoint: { max: 1200, min: 992 },
            items: 3,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: { max: 992, min: 576 },
            items: 2,
            partialVisibilityGutter: 20
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
            partialVisibilityGutter: 10
        }
    };

    const skillsData = [
        {
            id: 1,
            title: "التصميم الإبداعي",
            description: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام مع التركيز على تجربة المستخدم.",
            image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
            level: "متقدم"
        },
        {
            id: 2,
            title: "تطوير الويب",
            description: "بناء تطبيقات ويب متكاملة باستخدام أحدث التقنيات وأفضل الممارسات.",
            image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
            level: "متقدم"
        },
        {
            id: 3,
            title: "تحسين SEO",
            description: "تحسين محركات البحث لزيادة ظهور الموقع وتحسين ترتيبه في نتائج البحث.",
            image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
            level: "متوسط"
        },
        {
            id: 4,
            title: "التسويق الرقمي",
            description: "استراتيجيات تسويق رقمي فعالة لزيادة الوعي بالعلامة التجارية وجذب العملاء.",
            image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
            level: "متقدم"
        },
        {
            id: 5,
            title: "تحليل البيانات",
            description: "تحليل البيانات واستخلاص الرؤى لاتخاذ قرارات مستنيرة وتحسين الأداء.",
            image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
            level: "متوسط"
        },
        {
            id: 6,
            title: "إدارة المشاريع",
            description: "تخطيط وتنفيذ ومتابعة المشاريع باستخدام منهجيات Agile وإدارة المخاطر.",
            image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
            level: "متقدم"
        },
        {
            id: 7,
            title: "التطوير المستمر",
            description: "مواكبة أحدث التقنيات والاتجاهات في مجال التطوير والبرمجة.",
            image: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
            level: "متقدم"
        },
        {
            id: 8,
            title: "العمل الجماعي",
            description: "التعاون الفعال مع الفرق المختلفة لتحقيق الأهداف المشتركة بكفاءة.",
            image: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
            level: "متقدم"
        }
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case "مبتدئ": return "info";
            case "متوسط": return "warning";
            case "متقدم": return "success";
            default: return "primary";
        }
    };

    // زر السهم المخصص
    const CustomArrow = ({ onClick, direction }) => (
        <button
            className={`custom-arrow ${direction}-arrow`}
            onClick={onClick}
        >
            <i className={`fas fa-chevron-${direction === 'left' ? 'left' :'right'}`}></i>
        </button>
    );

    return (
        <>
            <div ref={skillsRef} style={{ backgroundColor: "#f8f9fa", padding: "40px 0", minHeight: "100vh" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h1 className="display-4 font-weight-bold text-primary">المهارات</h1>
                        <p className="lead text-muted">هذا هو قسم المهارات - اضغط على Skills في القائمة للعودة إلى هنا</p>
                    </div>

                    <section className="skills-carousel bg-dark">
                        <h3 className="text-center section-title mb-4">مهاراتي التقنية</h3>
                        
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                           autoPlay={true}
                           autoPlaySpeed={3000}
                           keyBoardControl={true}
                           customTransition="all .5s"
                           transitionDuration={500}
                          containerClass="carousel-container"
                          itemClass="carousel-item-padding-40-px"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                         customLeftArrow={<CustomArrow direction="left" />}
                            customRightArrow={<CustomArrow direction="right" />}
                          dotListClass="custom-dot-list-style"
                        className="owl-carousel owl-theme skill-slider"
                        >
                            {skillsData.map((skill) => (
                                <div key={skill.id} className="px-2">
                                    <div className="card skill-card border-0 shadow-sm h-100">
                                        <div className="card-img-container position-relative">
                                            <img
                                                src={skill.image}
                                                className="card-img-top"
                                                alt={skill.title}
                                                style={{ height: "200px", objectFit: "cover" }}
                                            />
                                            <div className="skill-level-badge position-absolute top-0 end-0 m-2">
                                                <span className={`badge badge-${getLevelColor(skill.level)}`}>
                                                    {skill.level}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title font-weight-bold text-dark">{skill.title}</h5>
                                            <p className="card-text text-muted">{skill.description}</p>
                                            <div className="skill-progress mt-3">
                                                <div className="progress" style={{ height: "8px" }}>
                                                    <div 
                                                        className={`progress-bar bg-${getLevelColor(skill.level)}`}
                                                        style={{ 
                                                            width: skill.level === "متقدم" ? "90%" : 
                                                                   skill.level === "متوسط" ? "70%" : "50%" 
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>

                        <div className="instructions bg-light rounded-lg p-4 mt-5">
                            <h3 className="text-center mb-3">كيفية التنقل بين المهارات</h3>
                            <p className="text-center mb-0">
                                يمكنك التنقل بين المهارات باستخدام الأسهم أو النقاط الموجودة أسفل السلايدر. 
                                السلايدر تلقائي الحركة ويمكنك إيقافه عند التحويم فوقه.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}