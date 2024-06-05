import { useState } from "react";
import { problemTargetData } from "../../data/problemTargetData.js";
// import rightArrow from "../../assets/rightArrow.svg";
import { motion } from "framer-motion";

const ProblemTarget = () => {
  const [selected, setSelected] = useState(0);
  const tLength = problemTargetData.length;
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10 py-40  px-4 md:px-10">
      <div className="flex flex-col gap-4 md:gap-10 flex-1 text-black">
        <span className="stroke-text text-2xl md:text-4xl font-bold">
          Get CleverBooks and get ...
        </span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          className="text-lg md:text-2xl"
        >
          <h2 className="font-semibold">{`${problemTargetData[selected].heading} : `}</h2>
          {problemTargetData[selected].review}
        </motion.span>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        />
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={problemTargetData[selected].image}
          alt=""
          className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
        />
        {/* arrow  */}
        <div className=" flex gap-4 mt-4">
          <button
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected(selected - 1);
            }}
            className="p-[2px] relative h-10 w-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)]  rounded-full" />
            <div className="h-full w-full bg-white rounded-full relative flex items-center justify-center group transition duration-200 text-[rgb(198,173,142)] ">
              &lt;
            </div>
          </button>
          <button 
          onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected(selected - 1);
            }}
           className="p-[2px] relative h-10 w-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)]  rounded-full" />
              <div className="h-full w-full  bg-white rounded-full relative flex items-center justify-center group transition duration-200 text-[rgb(198,173,142)]">
                &gt;
              </div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemTarget;
