import { Link } from "react-scroll";
import { SCROLL_DURATION, POPEFFECT } from "../../../consts";
import { motion } from "framer-motion";

const h1Variant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
};

const h2Variant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
    },
  },
};

const buttonVariant = {
  hidden: { y: "100vw", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

export default function Hero() {
  return (
    <div className="relative z-0 bg-offblack shadow-xl">
      <img
        src="/images/flour.jpg"
        alt="background flour"
        className="w-screen h-screen75 lg:h-screen object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 flex justify-center top-48 lg:top-52 z-20">
        <motion.h1
          className="text-4xl lg:text-6xl text-offwhite font-extrabold tracking-wider uppercase"
          variants={h1Variant}
          initial="hidden"
          animate="visible"
        >
          Best i test
        </motion.h1>
      </div>
      <div className="absolute inset-0 flex justify-center top-60 lg:top-72 z-20">
        <motion.h2
          className="text-xl lg:text-4xl text-offwhite font-extrabold tracking-wider uppercase"
          variants={h2Variant}
          initial="hidden"
          animate="visible"
        >
          Siden 1992
        </motion.h2>
      </div>
      <div className="absolute inset-0 flex justify-center z-20 top-36 lg:top-52">
        <motion.img
          src="/images/blackburger.png"
          // src="/images/nesbrukebab/nesbrukebabwhite.png"
          alt="logo picture/burger"
          className="w-full h-screen58 object-contain lg:h-screen75 opacity-90"
          variants={POPEFFECT}
          initial="hidden"
          animate="visible"
        />
      </div>
      <div className="absolute inset-0 flex justify-center top-3/4 z-40">
        <Link to="menu" smooth={true} duration={SCROLL_DURATION}>
          <motion.button
            className="button"
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
          >
            Meny
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
