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
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <div className="sm:mt-24">
    <div className="p-10 flex justify-center text-3xl md:text-5xl font-semibold">Technologies I Use</div>
    <section>
      <ParallaxText baseVelocity={-10}>
<img  class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png" alt="" />
<img  class="w-20 sm:w-44" src="https://www.svgrepo.com/show/349375/github.svg" alt="" />
<img  class="w-20 sm:w-44" src="https://www.svgrepo.com/show/354354/slack-icon.svg" height="45"/> 
<img class="w-20 sm:w-44" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" alt="react" width="50"/>  
 <img  class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" alt="redux" width="50"/>  
 <img  class="w-20 sm:w-44" src="https://www.svgrepo.com/show/353884/html-5.svg" alt="html" height="50"/>  
 <img  class="w-20 sm:w-44" src="https://www.svgrepo.com/show/303263/css3-logo.svg" alt="css" height="50"/>  
 <img class="w-20 sm:w-44" src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png" alt="js" height="50"/>  
 <img class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"alt="typescript" height="50"/> 
 <img class="w-20 sm:w-44" src="https://www.python.org/static/img/python-logo.png" alt="python" width="150"/>   github
 <img class="w-20 sm:w-44" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/django_plain_logo_icon_146558.png" alt="django" height="60"/>  
 <img class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" alt="bootstrap" height="50"/>  
 <img class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="tailwind" height="50"/>  
      </ParallaxText>
      <br />
      <ParallaxText baseVelocity={5}>               
 <img class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png" alt="sass" height="50"/>  
 <img class="w-20 sm:w-44" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png" alt="MySQL" height="50"/>  
 <img class="w-20 sm:w-44" src="https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg" alt="PostgreSQL" height="50"/>  
 <img class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/183049794-a3dfaddd-22ee-4ffe-b0b4-549ccd4879f9.png" alt="yarn" height="50"/> 
 <img class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" height="60"/>  
 <img class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png" alt="firebase" height="50"/>  
 <img class="w-20 sm:w-44" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" height="50"/>
 <img class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" height="45"/> 
 <img class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" height="45"/> 
 <img class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/68279555/200387386-276c709f-380b-46cc-81fd-f292985927a8.png" height="45"/> 
 <img class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="vs-code" height="50"/>  
 <img class="w-20 sm:w-44" src="https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png" height="40"/> 
 <img class="w-20 sm:w-44" src="https://www.svgrepo.com/show/354354/slack-icon.svg" height="45"/> 
        </ParallaxText>
    </section>
    </div>
  );
}
