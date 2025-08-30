import About from "./About";
import Experience from "./Experience";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Project";
import Skills from "./Skills";
import Footer from "./Footer";
import Contact from "./Contact";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="bg-black">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
