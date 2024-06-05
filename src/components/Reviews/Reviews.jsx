import { useState } from "react";
import { content } from "../../data/reviewsData";

function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="Reviews" className="py-16 lg:px-10 text-black">
      <h1 className="font-poppins text-center font-bold text-5xl lg:py-10 md:py-7"> Reviews</h1>
      <div className="font-mono tracking-tighter min-h-screen lg:h-screen flex flex-col-reverse justify-between gap-10 p-4 py-6 lg:flex-row lg:gap-0">
        {/* left section */}
        <div className="lg:flex-1 lg:max-w-3xl">
          <div className="p-3 relative h-[50vh] lg:h-80">
            {content.map((item, index) => (
              <div
                key={index}
                className={`absolute transition-opacity duration-700 space-y-12 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* description */}
                <p className="text-base lg:text-lg font-poppins">{item.text}</p>

                {/* person */}
                <div className="flex items-center mt-4">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={item.image}
                    alt={item.author}
                  />
                  <div>
                    <p className="font-poetsen ">{item.author}</p>
                    <p className="">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* arrows */}
          <div className="pl-7 my-8 hidden lg:flex justify-start lg:gap-4">
            <button onClick={prevSlide} className="p-[2px] relative h-10 w-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)]  rounded-full" />
              <div className="h-full w-full bg-white rounded-full relative flex items-center justify-center group transition duration-200 text-[rgb(198,173,142)] ">
                &lt;
              </div>
            </button>

            <button onClick={nextSlide} className="p-[2px] relative h-10 w-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)]  rounded-full" />
              <div className="h-full w-full  bg-white rounded-full relative flex items-center justify-center group transition duration-200 text-[rgb(198,173,142)]">
                &gt;
              </div>
            </button>
          </div>

          {/* below button */}
          <div className=" flex flex-wrap justify-around gap-y-7 lg:flex-nowrap lg:gap-0 lg:justify-around lg:items-center">
            <button className="">
              <div className="px-8 py-4 rounded-xl lg:px-14 lg:py-4 bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)]  lg:rounded-3xl">
                <p className="font-bold text-xl text-black ">Upto 95%</p>
                <p className="text-sm">Demand Fulfilment</p>
              </div>
            </button>
            <button className="">
              <div className="px-8 py-4 rounded-xl lg:px-14 lg:py-4 bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)]  lg:rounded-3xl">
                <p className="font-bold text-xl">&lt; 3%</p>
                <p className="text-sm">Daily Stock-out</p>
              </div>
            </button>

            <button className="p-[2px] relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r rounded-full  lg:rounded-3xl" /> */}
              <div className="px-8 py-3 lg:px-16 lg:py-4 rounded-full lg:rounded-3xl relative group transition duration-200 text-[rgb(198,173,142)]      border-2 border-[rgb(198,173,142)] ">
                <span className="text-xl font-bold">Read Story</span>{" "}
                <br className="hidden lg:block" />
                &rarr;
              </div>
            </button>

            {/*for small screen arrows */}
            <div className="flex items-center gap-4 mr-8 lg:hidden ">
              <button
                onClick={prevSlide}
                className="p-[2px] relative h-10 w-10"
              >
                <div className="absolute inset-0 border-2 border-[rgb(198,173,142)]   rounded-full" />
                <div className="h-full w-full rounded-full relative flex items-center justify-center group transition duration-200 text-[rgb(198,173,142)]    ">
                  &lt;
                </div>
              </button>

              <button
                onClick={nextSlide}
                className="p-[2px] relative h-10 w-10"
              >
                <div className="absolute inset-0 border-2 border-[rgb(198,173,142)]   rounded-full" />
                <div className="h-full w-full   rounded-full relative flex items-center justify-center group transition duration-200 text-[rgb(198,173,142)] ">
                  &gt;
                </div>
              </button>
            </div>
            {/* ------- */}
          </div>
        </div>

        {/* right image 
            {/* right image */}
            <div className="hidden lg:block  justify-center items-center mt-8 md:mt-0 lg:w-[30%] relative">
  {content.map((item, index) => (
    <img
      key={index}
      className={`w-[70%] h-auto rounded-3xl lg:w-full absolute transition-opacity duration-700 ease-in-out ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
      src={item.image}
      alt="Right Image"
    />
  ))}
</div>


        {/* right image */}
        {/* <div className="
        w-full flex justify-center items-center mt-8 md:mt-0 lg:w-[50%] relative">
          {content.map((item, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                className="w-[100%] h-auto rounded-3xl lg:w-full"
                src={item.rightImage}
                alt="Samosa Party"
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Review;
