import "./App.css";
import About from "./Components/About/About";
import Companies from "./Components/Companies/Companies";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Testimonial from "./Components/Testimonial/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Companies/>
      <About/>
      <Testimonial/>
    </>
  );
}

export default App;
