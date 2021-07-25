import Hero from "../components/Home/Hero";
import Header from "../components/Home/Header";
import Features from "../components/Home/Features";
import Partners from "../components/Home/Partners";
import Testimonial from "../components/Home/Testimonial";
import ContactInfo from "../components/Home/ContactInfo";
import Team from "../components/Home/Team";
import Contact from "../components/Home/Contact";
import Portfolio from "../components/Home/Portfolio";
import Map from "../components/Home/Map";

export default function Home() {
  return (
    <>
      <Hero />
      <Header />
      <Features />
      <Partners />
      <Testimonial />
      <Portfolio />
      <Contact />
      <ContactInfo />
      <Team />
    </>
  );
}
