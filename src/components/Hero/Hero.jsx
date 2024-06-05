import styles from "../style";
import  file from "../../assets/hero.png";
import './Hero.css'
import {motion} from "framer-motion"
const Hero = () => {
  const transition ={type: 'spring', duration: 3};
  
  return (
    <motion.section 
    initial={{ borderRadius: 0 }}
    whileInView={{borderRadius: '0 20% 0 20%'}}
    transition={{...transition, type:'tween'}}
    className="flex flex-col py-6 px-10 bg-black 
    lg:flex-row 
    md:flex-col 
    sm:flex-col sm:py-16"
    >
      <div className="flex-1 flex justify-center items-start flex-col gap-4 xl:px-0 sm:px-16 px-6 ">      
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Fuel your <span className="bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)] inline-block text-transparent bg-clip-text">imagination</span> , one page at a time. <br className="sm:block hidden" />{" "}
            {/* <span className="text-gradient">Generation</span>{" "} */}
          </h1>
        </div>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Unlock a Universe of Learning with CleverBook. This innovative tool fuses traditional reading with cutting-edge technology, transforming your educational journey. Dive into a smarter, more engaging way of learning today.
        </p>
        <a
              href="#"
              className="font-medium transition-colors ease-linear duration-700 bg-black py-3 px-6 border-4 rounded-full border-[rgb(198,173,142)] hover:text-black hover:bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)]"
            >
              Get Started with CleverBooks
            </a>
          {/* <img src="text"></img> */}
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={file} alt="billing" className="w-[100%] h-[70%] relative z-[5]" />
      </div>

    </motion.section>
  );
};

export default Hero;


