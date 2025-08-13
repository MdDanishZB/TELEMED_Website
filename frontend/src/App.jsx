import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Contact from "./components/contact/Contact";
import Services from "./components/Tips/Tips";
import Cursor from "./components/cursor/Cursor";
import Portfolio from "./components/portfolio/Portfolio";
import Signup from "./components/signup/Signup";
import HealthTips from "./components/Tips/Tips";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="AboutUs">
        <Parallax type="about-us" />
      </section>
      <section id="Signup">
        <Signup />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section id="HealthTips">
        <HealthTips />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
