import "./App.css";
import About from "./Components/About/About";
import Companies from "./Components/Companies/Companies";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Companies/>
      <About/>
    </>
  );
}

export default App;
