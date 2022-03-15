import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/Hero';
import About from '../components/About/About';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import ProjectSection from '../components/Projects/Projects';
import FooterSection from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import BottomBar from '../components/BottomBar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <ProjectSection />
      <BottomBar />
      <Contact />
      <FooterSection />
    </>
  );
};

export default Home;
