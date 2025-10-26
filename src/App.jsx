import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Insights from './components/Insights';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import AboutUs from './components/AboutUs/AboutUs';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import BestSellingSlider from "./components/BestSellingSlider";



// Home page
const HomePage = () => (
  <>
    <Hero />
    <Insights />
    <BestSellingSlider />
    <Stats />
    <Pricing />
    <Testimonial />
    <Faq />
  </>
);

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
