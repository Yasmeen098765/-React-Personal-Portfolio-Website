
import { useContext, useState, useEffect } from "react";
import { refContext } from './Reference';
import img_header from '../assets/img/header-img.svg'

export default function Main() {
    const { homeRef } = useContext(refContext);
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const texts = ["Web Developer", "UI/UX Designer", "Frontend Developer", "FullStack Developer"]

    //  إعدادات السرعة (يمكن تعديلها بسهولة)
    const SPEED_SETTINGS = {
        typing: 500,        // سرعة الكتابة (ms)
        deleting: (300 - (Math.random() * 100)) / 2,       // سرعة المسح (ms)
        pause: 2000,        // وقت الانتظار بعد الكتابة (ms)
    };

    useEffect(() => {
        const currentString = texts[currentIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // الكتابة
                if (currentText === currentString) {
                    // انتظر ثم ابدأ المسح
                    setTimeout(() => setIsDeleting(true), SPEED_SETTINGS.pause);
                } else {
                    setCurrentText(currentString.substring(0, currentText.length + 1));
                }
            } else {
                // المسح
                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                } else {
                    setCurrentText(currentText.substring(0, currentText.length - 1));
                }
            }
        }, isDeleting ? SPEED_SETTINGS.deleting : SPEED_SETTINGS.typing);

        return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isDeleting, texts]);

    return (
        <>
            <main ref={homeRef} className="w-100 max-vh-100 main-background py-5" >
                <div className="container    px-4 px-sm-5 ">
                    <div className="row d-flex flex-column-reverse flex-md-row justify-content-center align-items-center my-5 pt-5 pb-3 ">
                        <div className="col-12  col-md-7 col-lg-6 main-contain  mt-4  mb-5    ">
                            <span className=' main-welcome fw-bold text-white fs-4 text-capitalize  '>welcome all in my Portfolio</span>
                            <h1 className=" main-info  text-white  fw-bold  my-3 text-capitalize ">Hi! I'm Yasmin sharaf eddin, <span className="  border border-5 border-start-0 border-end border-bottom-0  border-top-0  pe-1">{currentText}  </span></h1>
                            <p className=" main-description fs-5 lead">
                                Innovative frontend developer with a passion for creating engaging user experiences.
                                I specialize in building responsive web applications using modern technologies like React.js.
                            </p>
                            <div className='d-flex justify-content-start align-items-center main-contact d-inline-block mt-4'>
                                <a href="#contact" className="fw-bold text-white text-capitalize fs-4 text-decoration-none"><span>Let’s Connect <i class="fas fa-circle-arrow-right ms-2  "></i></span></a>
                            </div>
                        </div>
                        <div className="col-12  col-md-5 col-lg-6 main-img d-flex justify-content-end  align-items-center my-4    ">
                            <img src={img_header} className=" img-fluid start-0 bottom-0  " alt="image header " />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}


