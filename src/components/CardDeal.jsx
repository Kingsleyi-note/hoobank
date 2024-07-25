import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from 'gsap/Flip';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(useGSAP, Flip, ScrollTrigger);

const CardDeal = () => {

  useGSAP(()=> {
    gsap.to(".rob", {
      duration: 4,
      x: 100,
      scrollTrigger: {
        trigger: ".rob",
        start: "top center",
        end: "bottom center",
        scrub: true,
      
    },
    })
  })

  return (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%] rob" />
    </div>
    </section>
  )
  
 
};

export default CardDeal;
