import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const images = [
  "/showcase/1.png",
  "/showcase/2.png",
  "/showcase/3.png",
  "/showcase/4.png",
  "/showcase/5.png",
  "/showcase/6.png",
  "/showcase/7.png",
  "/showcase/8.png",
  "/showcase/9.png",
  "/showcase/10.png",
  "/showcase/11.png",
  "/showcase/12.png",
];

const SectionTwo = () => {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const imgRefs = useRef([]);
  const imgRef2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-210vw",
        ease: "none",
        duration: 1,
        onComplete: animateCards,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1,
          pin: true,
          onEnterBack: ResetCards,
          onscrollend: OnScrollEnd,
        },
      }
    );

    const titleAnim = gsap.fromTo(
      ".title-1",
      {
        y: -20,
      },
      {
        y: 20,
      }
    );

    return () => {
      pin.kill();
      titleAnim.kill();
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const section = document.getElementById("sectionTwo");
  //     if (section) {
  //       let sX = sectionRef?.current?._gsap?.x?.split("v")[0];
  //       setScrollX(Number(sX));
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const ResetCards = () => {
    gsap.to(".slide", { x: 0, duration: 1, zIndex: -1, opacity: 1});
    gsap.to(".second-secton", { display: "none", opacity: 0 });
    gsap.to(".second-secton-bg", { height: "0%", width: "0%", duration: 1 });
    gsap.to(sectionRef.current, { width: "300vw", translateX: "-210vw" });
    gsap.to(".first-secton", { display: "grid", opacity: 1 });
  };

  const OnScrollEnd = () => {
    console.log("scroll ended");
  };

  const animateCards = () => {
    gsap.fromTo(
      ".slide",
      { x: 0, opacity: 1 },
      { x: "250vw", opacity: 0, duration: 1, zIndex: -1}
    );
    gsap.to(sectionRef.current, { width: "100%", translateX: 0 });
    gsap.to(".first-secton", { display: "none", opacity: 0 });
    setTimeout(() => {
      gsap.to(".second-secton", { display: "block", duration: 1, opacity: 1 });
      gsap.to(".second-secton-bg", {
        height: "100%",
        width: "100%",
        duration: 1,
      });
      gsap.fromTo(
        ".title-2",
        {
          x: -20,
        },
        {
          x: 0,
        }
      );
    }, 500);
  };

  return (
    <section className="bg-[#ECECEC]">
      <div ref={triggerRef} className="">
        <div
          id="sectionTwo"
          ref={sectionRef}
          className="w-[300vw] flex flex-row h-[100vh] items-center px-2"
        >
          <div className="grid grid-cols-12 first-secton">
            <div className="col-span-2 h-full flex flex-col justify-center">
              <div className="">
                <div className="title-1">
                  <h1>
                    The most <br />
                    comprehensive <br />
                    <span>analysis of your face</span>
                  </h1>
                </div>
              </div>
            </div>
            <div
              id="section-content"
              className="col-span-10 flex flex-row gap-5 relative"
            >
              {images.map((img, index) => (
                <Image
                  ref={(el) => (imgRefs.current[index] = el)}
                  className="shadow-xl hover:shadow-2xl transition-all border slide"
                  height={300}
                  width={250}
                  alt=""
                  key={index}
                  src={img}
                />
              ))}

              <Image
                ref={imgRef2}
                className="shadow-xl hover:shadow-2xl transition-all border slide-last"
                height={300}
                width={250}
                alt=""
                src={"/showcase/13.png"}
              />

              {/* <div
                className="w-full hidden absolute top-0 left-0 h-full z-10"
                id="animated-section"
              >
                <div className="container px-5 mx-auto">
                  <div id="animated-section" className="grid grid-cols-2 h-full">
                    <div className="">
                      <div className="title-1">
                        <h1>
                          The most <br />
                          comprehensive <br />
                          <span>analysis of your face</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="second-secton hidden relative h-full w-full">
            <div className="absolute second-secton-bg top-0 left-0 " />

            <div
              className="container mx-auto"
              style={{
                paddingLeft: "100px",
                paddingRight: "100px",
              }}
            >
              <div className="grid grid-cols-2 items-center h-[100vh]">
                <div class="title-2 mt-4">
                  <h1>
                    Documented into <br />
                    200 pages <span>report of you</span>
                  </h1>

                  <p class="caption">
                    Professional facial assessments and clear facial changes
                    visualisation.
                  </p>

                  <button class="all-reports-btn">
                    ALL REPORTS
                    <div class="icon">
                      <svg
                        width="21"
                        height="14"
                        viewBox="0 0 21 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6718 0.625977L19 6.68034L12.6718 12.7347"
                          stroke="white"
                          stroke-width="1.5"
                        />
                        <path
                          d="M19 6.68066H0.0154662"
                          stroke="white"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="flex flex-row justify-end">
                <Image
                  className="shadow-xl hover:shadow-2xl transition-all border slide-last mb-5 mr-5"
                  height={330}
                  width={280}
                  alt=""
                  src={"/showcase/13.png"}
                />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
