import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Companies from "./Components/Companies/Companies";
import FunFacts from "./Components/FunFacts/FunFacts";
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
      <Blogs/>
      <FunFacts/>
    </>
  );
}

export default App;
