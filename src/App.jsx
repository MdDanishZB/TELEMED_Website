import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/hero/Hero";
import Parallax from "./components/parallax/parallax";
import Contact from "./components/contact/Contact";
import Services from "./components/Services/Services";
import Cursor from "./components/cursor/cursor";
import Portfolio from "./components/portfolio/portfolio";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="portfolio">
        <Parallax type="Portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
