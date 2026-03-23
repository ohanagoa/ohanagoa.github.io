import { StrictMode } from "react";
import Hero from './modules/hero/Hero';
import Testimonials from "./modules/testimonials/Testimonials";
import Contact from "./modules/contact/Contact";
import Gmap from "./modules/gmap/Gmap";
import Philosophy from './modules/philosophy/Philosophy';

export default function App() {
  return (
    <StrictMode>
      <Hero />
      <Philosophy />
      <Testimonials />
      <Gmap />
      <Contact />
    </StrictMode>
  );
}
