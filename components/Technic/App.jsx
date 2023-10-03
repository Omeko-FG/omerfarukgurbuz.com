import "../../app/globals.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import data from "@/public/data/Techs"

const middleIndex = Math.floor(data.length / 2);

const { firstHalf, secondHalf } = data.reduce(
  (result, item, index) => {
    if (index < middleIndex) {
      result.firstHalf.push(item);
    } else {
      result.secondHalf.push(item);
    }
    return result;
  },
  { firstHalf: [], secondHalf: [] }
);

const mappedFirstHalf = firstHalf.map(item => item * 2);
const mappedSecondHalf = secondHalf.map(item => item * 3);


function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
   const x = useTransform(baseX, (v) => `${wrap(50, -50, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });


  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span className="flex gap-2">{children} </span>
      </motion.div>
    </div>
  );
}

export default function App() {
  const cardItemVariants = {
    hidden: { opacity: 0, scale:0.50},
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.4,
        type: "spring",
        // damping: 3,
        // stiffness: 25,
      }
    }
  };
  
  const cardSectionTitleVariants = {
    hidden: {
      scale:0.95,
      opacity: 0
    },
    show: {
      opacity: 1,
      scale:1,
      transition: {
        duration: 2,
        delay: 0.2,
      }
    }
  };
  
  const cardsContainerVariants = {
    hidden: { opacity: 0},
    show: {
      opacity: 1,
      transition: {
        duration:1.5,
        delayChildren: 0.7,
        staggerChildren: 0.5
      }
    }
  };

  const cardsContainerVariants2 = {
    hidden: { opacity: 0},
    show: {
      opacity: 1,
      transition: {
        duration:1.5,
        delayChildren: 0.7,
        staggerChildren: 0.5
      }
    }
  };
  return (
<div className="sm:mt-24">
  <motion.div className="p-10 flex justify-center text-3xl md:text-5xl font-semibold mb-16"      variants={cardSectionTitleVariants}
        initial="hidden"
        whileInView="show"
        item>Tech Stack
  </motion.div>
  <section >
      <motion.div  variants={cardsContainerVariants}
        initial="hidden"
        whileInView="show"
        item
        container>
      <ParallaxText  baseVelocity={-10}>{firstHalf.map((item)=>(<motion.img           
      variants={cardItemVariants}
          container  class="w-20 sm:w-44" src={item.src} alt={item.alt} height="50"/>))}
      </ParallaxText>
      </motion.div>
    <br />
    <motion.div variants={cardsContainerVariants2}
        initial="hidden"
        whileInView="show"
        item
        containe>
    <ParallaxText baseVelocity={10}>{secondHalf.map((item)=>(<motion.img           
      variants={cardItemVariants}
          container  class="w-20 sm:w-44" src={item.src} alt={item.alt} height="50"/>))}
      </ParallaxText>
    </motion.div>
  </section>
</div>
  );
}
