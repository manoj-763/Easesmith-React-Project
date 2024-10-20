import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import CarouselComponent from "./components/courosel-image/CarouselComponent";
import ProductionSection from "./components/product-section/ProductionSection";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="px-5 py-2">
          <Navbar />
          <div className="py-3">
            <Search />
          </div>
          <Hero />
          <CarouselComponent />
          <ProductionSection />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

