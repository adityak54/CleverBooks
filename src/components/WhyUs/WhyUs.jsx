import  { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Png1 from "../../assets/logo.png";
import { FaStar } from "react-icons/fa";

import { content } from "../../data/whyusData";

export default function WhyUs() {
  const ref = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const isInView = useInView(ref, { amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollValue(latest);
    const cardsBreakpoints = content.map((_, index) => index / contentLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });


  useEffect(() => {
    if (isInView) {
      const timerId = setInterval(() => {
        setCountdown((prevSeconds) => {
          if (prevSeconds < content[activeCard].content) {
            return prevSeconds + 1;
          } else if (prevSeconds > content[activeCard].content) {
            return prevSeconds - 1;
          } else {
            clearInterval(timerId);
            return prevSeconds;
          }
        });
      }, 0.00001);
    }
  }, [activeCard, isInView]);

  return (
    <motion.div
      id="WhyCleverBook"
      animate={{
        backgroundColor: "black"
      }}
      className="min-h-[300vh] max-h-[300vh] relative"
      ref={ref}
    >
      <div className="h-screen sticky top-0 flex flex-col justify-center lg:gap-0 lg:flex-row lg:items-center ">
        {/* Scroll and title */}    
        <div className=" h-fit flex pl-10 pt-5 lg:h-fit lg:p-0 lg:absolute lg:left-14 lg:top-[23%]">
          {/* left body */}
          <div className="flex items-center gap-10 tracking-tighter text-xl">
            {/* scroll bar */}
            <div className="transform -translate-x-1/2 bg-gradient-to-t from-[rgb(198,173,142)] to-[rgb(171,173,142)]  w-1 h-[90%] rounded-full relative">
              <div
                className="absolute h-10 w-10 left-1/2 -translate-x-1/2 p-1 bg-transparent/80 rounded-full"
                style={{ top: `${scrollValue * 100}%` }}
              >
                <img className="h-full" src={`${Png1}`} alt="" />
              </div>
            </div>
            {/* ---------- */}

            {/* texts */}
            <div className="space-y-5">
              {content.map((item, index) => (
                <button
                  key={item.title}
                  className="p-[3px] relative flex flex-col"
                >
                  {activeCard === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)]  rounded-full" />
                  )}
                  <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white ">
                    {item.name}
                  </div>
                </button>
              ))}
            </div>
            {/* ---------- */}
          </div>
        </div>

        {/* Right body */}
        <div className=" text-center h-1/2 flex justify-center items-center pt-8 lg:p-0 ">
          <div className=" space-y-8">
            {content[activeCard].name === "Books" && (
              <>
                <div className="text-8xl font-extrabold">
                  {countdown}
                  <span className="text-2xl lg:text-5xl">K+</span>
                </div>
                <div className="text-xl lg:text-3xl font-poetsen bg-gradient-to-r mx-2 from-[rgb(198,173,142)] to-[rgb(171,173,142)]  px-4 py-2 rounded-lg text-neutral-950">
                  {content[activeCard].title}
                </div>
              </>
            )}
            {content[activeCard].name === "Plan" && (
              <>
                <div className="text-8xl font-extrabold">
                  {countdown}
                  <span className="text-2xl lg:text-5xl">Rs Monthly</span>
                </div>
                <div className="text-xl lg:text-3xl font-poetsen bg-gradient-to-r mx-2 from-[rgb(198,173,142)] to-[rgb(171,173,142)]  px-4 py-2 rounded-lg text-neutral-950">
                  {content[activeCard].title}
                </div>
              </>
            )}

            {content[activeCard].name === "Ratings" && (
              <>
                <div className="text-8xl flex justify-center items-end font-extrabold">
                  {countdown}
                  <span className="text-4xl lg:text-5xl">/5</span>
                  <span className="text-yellow-600 text-4xl pl-3">
                    <FaStar />
                  </span>
                </div>
                <div className="text-xl lg:text-3xl font-poetsen bg-gradient-to-r mx-2 from-[rgb(198,173,142)] to-[rgb(171,173,142)]  px-4 py-2 rounded-lg text-neutral-950">
                  {content[activeCard].title}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
