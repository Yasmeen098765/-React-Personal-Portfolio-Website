import Navbar from './Navbar';
import Main from "./Main";
import Skills from './Skills';
import Projects from "./Projects";
import Reference from './Reference.js';
import Contact from './Contact.js';
import Footer from './Footer.js';


export default function HomeSection() {
   
    return (
        <>
            {/* //  مع Context - جميع المكونات تشترك في نفس الـ refs */}
            <Reference> {/* Provider يزود جميع الأبناء بنفس القيم */}
                <Navbar />   {/* يستخدم homeRef, mainRef, etc */}
                <Main />     {/* يستخدم نفس mainRef */}
                <Skills />   {/* يستخدم نفس skillsRef */}
                <Projects /> {/* يستخدم نفس projectsRef */}
                <Contact />     
                <Footer />     
            </Reference>
        </>
    );
}