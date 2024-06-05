import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import KeyMetrics from './components/Key-Metrics/KeyMetrics'
import Footer from './components/Footer/Footer'
import CTA from './components/CTA/CTA'
import ProblemTarget from './components/Problem-Target/ProblemTarget'
import { useMotionValueEvent, useScroll } from "framer-motion";
import WhyUs from './components/WhyUs/WhyUs'
import Review from './components/Reviews/Reviews'
import Features from './components/Features/Features'

function App() {
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  return (
    <>
      <Navbar visible={visible}/>
      <Hero />
      <KeyMetrics/>
      <WhyUs/>
      <Review/>
      <Features/>
      <ProblemTarget/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default App
