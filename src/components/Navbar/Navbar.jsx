import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { navItems } from "../../data/navbarData";
import "./Navbar.css"; 
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [navbarTop, setNavbarTop] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
      lastScrollTop = scrollTop;
      setNavbarTop(scrollTop > navbarTop ? 0 : -100); // Adjust -100 to the height of your navbar
      if (scrollTop > lastScrollTop) {
        controls.start({ top: -100 });
      } else {
        controls.start({ top: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarTop, controls]);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <motion.nav 
    className={` z-50 top-0 backdrop-blur-lg justify-between bg-black ${scrollDirection === "up" ? "sticky" : ""} `}
    style={{ top: navbarTop }}
    initial={{ top: -100 }}
      animate={controls}
    >

      <motion.div 
      className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 ">
            <img className=" w-16 mr-1" src={logo} alt="Logo" />
            <span className="text-3xl tracking-tight">CleverBooks</span>
          </div>
          <ul className="hidden lg:flex items-center justify-center align space-x-7 px-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="font-medium hover:text-[rgb(198,173,142)]">{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-2 rounded-md
              text-[rgb(198,173,142)] transition-colors duration-700 hover:text-white
             ">
              Login
            </a>
            <div>

            <a
              href="#"
              className="font-medium bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)] py-3 px-6 rounded-full hover:text-black"
            >
              Talk to Us
            </a>
            </div>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end ">
            <button onClick={toggleNavbar} className="menu-button">
              {mobileDrawerOpen ? <X className="icon icon-open" /> : <Menu className="icon icon-close" />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden bg-black">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 font-medium">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
            <a
              href="#"
              className="font-medium bg-gradient-to-r from-[rgb(198,173,142)] to-[rgb(171,173,142)] py-3 px-6 rounded-full hover:text-black"
            >
              Talk to Us
            </a>
            </div>
          </div>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;


