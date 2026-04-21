import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Team from "../sections/Team";
import Stats from "../sections/Stats";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Team />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;