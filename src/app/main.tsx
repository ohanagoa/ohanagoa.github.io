import { StrictMode } from "react";
import Carousel from "./modules/carousel/Carousel";
import Header from "./modules/header/Header";
import Testimonials from "./modules/testimonials/Testimonials";
import Footer from "./modules/footer/Footer";
import Contact from "./modules/contact/Contact";
import Gmap from "./modules/gmap/Gmap";
import Philosophy from './modules/philosophy/Philosophy';

export default function App() {
  return (
    <StrictMode>
      <Header />
      <Carousel />
      <Philosophy />
      <Testimonials />
      <Gmap />
      <Contact />
      <Footer />
    </StrictMode>
  );
}
