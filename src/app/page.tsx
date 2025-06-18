import About from "./about/page";
import Footer from "./components/footer";
import Navbar from "./components/header";
import Contact from "./contact/page";
import Education from "./education/page";
import HeroSection from "./home/page";
import Skills from "./skills/page";



export default function Home() {
  return (
    <section className="bg-blue-950">
      <HeroSection/>
    </section>
  );
}
