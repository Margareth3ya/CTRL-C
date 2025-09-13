import Navbar from "../components/Navbar";
import Hero from "../components/layouts/Home/Hero";
import Section_2 from "../components/layouts/Home/Section_2";
import Rekomendasi from "../components/layouts/Home/Rekomendasi";
import DepartemenUnggulan from "../components/layouts/Home/Departemen";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Section_2 />
            <Rekomendasi />
            <DepartemenUnggulan />
            <Footer />
        </div>
    )
}
