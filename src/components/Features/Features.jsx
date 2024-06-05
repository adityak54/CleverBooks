import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { content } from "../../data/featuresData";  

function Features() {
  const ref = useRef(null);
  const [isIndex, setIsIndex] = useState(0);
  const isInView = useInView(ref, { amount: 0.3 });
  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("final");
    }
  }, [isInView, isIndex]);

  return (
    <section ref={ref} className="font-poppins text-black text-center py-10">
      {/* heading */}
      <h1 className="font-poppins px-8 lg:text-3xl lg:leading-relaxed tracking-tight lg:px-0 font-bold">
        <span className="bg-gradient-to-r mx-1.5 from-[rgb(198,173,142)] to-[rgb(171,173,142)] px-2 py-1 rounded-lg text-black">
          CleverBook
        </span>
        : The Ultimate Online Bookstore for Every Reader
      </h1>
      <br></br>
      {/* main  */}
      <div className="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row">
        {/* left-section */}
        <div className="px-5 space-y-7 lg:w-1/2 lg:px-12 lg:py-2 lg:pt-10 lg:space-y-5 ">
          {content.map((item, index) => (
            <div key={item.index}>
              <div className="text-left w-full space-y-5 lg:space-y-5">
              <button
        className={`text-left w-full lg:py-3 font-poppins font-bold text-5xl lg:text-2xl  ${
          isIndex === index ? 'bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)] bg-clip-text text-transparent' : 'text-black'
        }`}
        onClick={() => setIsIndex(index)}
      >
        {item.title}
      </button>

                {index === isIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, color: "transparent" }}
                    animate={{
                      height: "fit-content",
                      opacity: 1,
                      color: "white",
                    }}
                    transition={{ ease: "easeIn", duration: 0.35 }}
                    className="space-y-5 pb-3 text-sm lg:space-y-6 lg:text-base"
                  >
                    <p className="text-black">{item.content}</p>
                    <button className=" font-bold bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)] bg-clip-text text-transparent font-poppins">
                      Learn more &#8594;
                    </button>
                  </motion.div>
                )}
                <hr />
              </div>
            </div>
          ))}
        </div>

        {/* right-section */}
        <div className=" lg:w-1/2 mt-8 lg:h-[80vh] rounded-s-3xl flex items-center justify-center">
          <motion.div
            variants={{
              initial: { y: 200, opacity: 0 },
              final: { y: 0, opacity: 1 },
            }}
            initial="initial"
            animate={animationControl}
            transition={{
              ease: "linear",
              duration: 0.6,
            }}
            className=" flex justify-center h-[100%] w-[100%]"
          >
            <img
              className="h-100 rounded-3xl"
              src={`${content[isIndex].Image}`}
              alt=""
            />
          </motion.div>
        </div>
      </div>
      {/* -------- */}

      {/* button */}
      <button className="p-[2px] relative tracking-tighter mt-10">
      <a
              href="#"
              className="font-medium transition-colors ease-linear duration-700 py-3 px-6 border-4 rounded-full border-[rgb(198,173,142)] hover:text-black hover:bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)]"
            >
              View all features
            </a>
      </button>
    </section>
  );
}

export default Features;
