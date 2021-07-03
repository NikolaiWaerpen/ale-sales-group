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
    <div className="relative z-0 bg-offblack shadow-xl" id="hjem">
      <img
        src="/images/heroimage.webp"
        alt="Meeting"
        className="w-screen h-screen75 lg:h-screen object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 flex justify-center top-48 lg:top-52 z-20">
        <motion.h1
          className="text-4xl lg:text-6xl text-white font-extrabold tracking-wider"
          variants={h1Variant}
          initial="hidden"
          animate="visible"
        >
          Solid kunnskap
        </motion.h1>
      </div>
      <div className="absolute inset-0 flex justify-center top-60 lg:top-72 z-20 opacity-90">
        <motion.h2
          className="text-md lg:text-xl text-white font-extrabold tracking-wider uppercase "
          variants={h2Variant}
          initial="hidden"
          animate="visible"
        >
          gir gode resultater
        </motion.h2>
      </div>
      <div className="absolute inset-0 flex justify-center z-20 top-24 lg:top-40">
        <motion.img
          src="/images/logo/alesgtransparent.png"
          // src="/images/nesbrukebab/nesbrukebabwhite.png"
          alt="Ale Salesgroup AS Logo"
          className="w-3/5 h-screen58 object-contain lg:h-screen75 opacity-90"
          variants={POPEFFECT}
          initial="hidden"
          animate="visible"
        />
      </div>
      <div className="absolute inset-0 flex justify-center top-3/4 z-40">
        <Link to="kontakt" smooth={true} duration={SCROLL_DURATION}>
          <motion.button
            className="flex rounded-md py-4 px-10 uppercase font-semibold text-sm lg:text-base tracking-wider border-2 hover:border-white hover:bg-transparent hover:text-white text-offblack bg-theme-600 border-theme-600 transition ease-out duration-500"
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
          >
            Kontakt oss
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
