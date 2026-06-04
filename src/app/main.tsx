import { StrictMode } from "react";
import Hero from './modules/hero/Hero';
import Whoweare from './modules/whoweare/Whoweare';
import Philosophy from './modules/philosophy/Philosophy';
import Contact from "./modules/contact/Contact";
import Values from './modules/values/Values';
import Testimonials from './modules/testimonials/Testimonials';

export default function App() {
  return (
    <StrictMode>
      <Hero />
      <Values />
      <Whoweare />
      <Philosophy />
      <Testimonials />
      <Contact />
    </StrictMode>
  );
}
