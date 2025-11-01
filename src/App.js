import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSection from "./components/HomeSection";


export default function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeSection />} />
                <Route path="/home" element={<HomeSection />} />
                <Route path="/contact" element={<HomeSection />} />
                <Route path="/skills" element={<HomeSection />} />
                <Route path="/projects" element={<HomeSection />} />
                <Route path="/projects/sec1" element={<HomeSection />} />
                <Route path="/projects/sec2" element={<HomeSection />} />
                <Route path="/projects/sec3" element={<HomeSection />} />
                <Route path="/*" element={<><h1>page not found</h1></>} />
            </Routes>
        </BrowserRouter>

    );
}