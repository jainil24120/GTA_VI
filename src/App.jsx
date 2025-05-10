import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
const App = () => {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 3,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -2.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

    useGSAP(()=>{
      const main = document.querySelector(".main");
      if (!main) return;

      gsap.to(".main",{
           scale:1,
           rotate:0,
           duration:4,
           ease:"Expo.ease"
      })

        gsap.to(".sky",{
           scale:1.1,
           rotate:0,
           duration:2,
           delay:"-.8",
           ease:"Expo.ease"
      })

        gsap.to(".bg",{
           scale:1.1,
           rotate:0,
           duration:2,
           delay:"-.8",
           ease:"Expo.ease"
      })

         gsap.to(".me ",{
           scale:1.3,
           x:"-50%",
           rotate:0,
           bottom:"-20%",
           duration:2,
           delay:"-.8",
           ease:"Expo.ease"
      }) 
       gsap.to(".text ",{
           scale:1.3,
           rotate:0,
           duration:2,
           delay:"-.8",
           ease:"Expo.ease"
      }) 


      main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-6deg] scale-[1.7]">
          <div className="landing w-full h-screen bg-black overflow-hidden relative">
            <div className="navbar w-full z-10 py-10 px-10 absolute top-0 left-0">
              <div className="logo flex gap-4 align-middle">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                  <div className="line w-3 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] text-white">Rockstar</h3>
              </div>
            </div>

            <div className="imagesdiv  relative w-full h-screen overflow-hidden">
              <img
                className="sky absolute top-0 left-0 w-full h-full  scale-[1.8] rotate-[-20deg]"
                src="sky.png"
              ></img>
              <img
                className="bg absolute top-0 left-0 w-full h-full object-cover scale-[2] rotate-[-3deg]"
                src="./bg.png"
              ></img>
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]" >
                <h1 className="text-[8rem] leading-none -ml-20">grand</h1>
                <h1 className="text-[8rem] leading-none ml-20">theft</h1>
                <h1 className="text-[8rem] leading-none -ml-20">auto</h1>
              </div>
              <img
                className="me absolute  left-1/2 -translate-x-1/2 bottom-[-150%] scale-[3] rotate-[-20deg]"
                src="./me.png"
              ></img>
            </div>
            <div className="btmbar text-white absolute py-15 px-10 w-full bottom-0 left-0 bg-gradient-to-t from-black to-transparent ">
              <div className="flex gap-4 text-4xl items-center">
                <i className="ri-arrow-down-line"></i>
                <h3 className="font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img
                className="h-[45px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              ></img>
            </div>
          </div>
        
         <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[.6] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./Duo1.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] ">
                <h1 className="text-6xl">Still Running,</h1>
                <h1 className="text-6xl">Not Hunting</h1>
              
               
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-10 py-10 text-black mt-10 text-4xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
