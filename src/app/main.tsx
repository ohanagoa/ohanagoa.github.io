import { StrictMode } from "react";
import Hero from './modules/hero/Hero';
import Whoweare from './modules/whoweare/Whoweare';
import Philosophy from './modules/philosophy/Philosophy';
import Contact from "./modules/contact/Contact";

export default function App() {
  return (
    <StrictMode>
      <Hero />
      <Whoweare />
      <Philosophy />
      <Contact />
    </StrictMode>
  );
}
