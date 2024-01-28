// Student Name: Klea Karaj
// Student Id: 301369256
// Date: 28 Jan 2024
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Projects from "../Projects";
import Services from "../Services";
import Navbar from "../NavBar";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Services />
      <ContactMe />
      <Footer />
    </>
  );
}