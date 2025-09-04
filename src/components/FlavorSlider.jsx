import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constant";
import gsap from "gsap";
import { useRef } from "react";

const FlavorSlider = () => {
  const sliderRef = useRef();
  useGSAP(() => {
    const scrllAmout = sliderRef.current.scrollWidth - window.innerWidth;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "2% top",
        end: `+=${scrllAmout + 1150}px`,
        scrub: true,
        pin: true
      },
    });

    tl.to(".flavor-section", {
      x: `-${scrllAmout + 1150}px`,
      ease: "power1.inOut"
    });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl.to(".flavor-text-split", {
      xPercent: -30,
      ease: "power1.inOut"
    }).to(".flavor-text-scroll", {
      xPercent: -22,
    }, "<");
  })
  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[80vh] md:w-[50vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
            key={flavor.name}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt={flavor.color}
              draggable={false}
              className="absolute bottom-0"
            />
            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt={flavor.color}
              className="drinks"
              draggable={false}
            />
            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt={flavor.color}
              className="elements"
              draggable={false}
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
