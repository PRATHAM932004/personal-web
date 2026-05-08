import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <div className="container-main h-px bg-border-subtle" />
          <About />
          <div className="container-main h-px bg-border-subtle" />
          <Skills />
          <div className="container-main h-px bg-border-subtle" />
          <Experience />
          {/* <div className="container-main h-px bg-border-subtle" />
        <Projects /> */}
          {/* <div className="container-main h-px bg-border-subtle" />
        <Testimonials /> */}
          <div className="container-main h-px bg-border-subtle" />
          <Contact />
        </main>
        <Footer />
      </div>
      <Analytics />
    </>
  );
}

export default App;
