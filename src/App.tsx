
import About from "./About";
import Experience from "./Experience";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Project";
import Skills from "./Skills";
import Footer from "./Footer";
import Contact from "./Contact";

const App = () => {
  return (
    <div className="bg-black"
      >
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
