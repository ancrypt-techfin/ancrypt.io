import React, {useEffect, useRef} from 'react'
import { gsap } from 'gsap'

export const BreakBarriers = () => {
  const sec1TtlRef = useRef(null);
  const sec1VideoRef = useRef(null);

  var request:any = null;
  var request2:any = null;
	var mouse = { x: 0, y: 0 };
	var cx:number, cy:number;

  useEffect(() => {
    cx = window?.innerWidth / 50;
    cy = window?.innerHeight / 50;

    gsap.fromTo(
      sec1TtlRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        x: 50,
        duration: 3,
        ease: 'power0',
        delay: 1,
      }
    )
  }, [])

  const section1HandleMouseMove = (event:any) => {
    mouse.x = event.pageX;
		mouse.y = event.pageY;
		cancelAnimationFrame(request);
		request = requestAnimationFrame(updateSec1TextPos);
    // request2 = requestAnimationFrame(updateSec1Video);
  }

  function updateSec1TextPos() {
		var dx = mouse.x - cx;
		var dy = mouse.y - cy;

		var tiltx = (dy / cy)*0.7;
		var tilty = - (dx / cx)*0.7;
		gsap.to(sec1TtlRef.current, {duration: 1, transform:'translate(' + tilty + 'px, ' + tiltx + 'px)', ease: "Power2.easeOut" });
	}

  function updateSec1Video() {
		var dx = mouse.x - cx;
		var dy = mouse.y - cy;

		var tiltx = - (dy / cy)*0.5;
		var tilty = (dx / cx)*0.5;
		gsap.to(sec1VideoRef.current, {duration: 1, transform:'translate(' + tilty + 'px, ' + tiltx + 'px)', ease: "Power2.easeOut" });
	}

  return (
    <section
      className=" relative flex w-full flex-col bg-arta-russet-100 z-3"
      id="initial"
      onMouseMove={(ev)=> section1HandleMouseMove(ev)}
    >
      <video
        ref={sec1VideoRef}
        autoPlay
        muted
        playsInline
        crossOrigin="anonymous"
        className="h-[100vh] w-full object-cover"
      >
        <source src="/videos/Comp 1_2.mp4" typeof="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* top-[20%] left-0   sm:top-[40%] lg:left-[10%] xl:left-[20%] xl:mx-auto */}
      <div className="flex max-w-main-contain items-start justify-center px-6 xl:mx-auto movable-elements-wrapper">
        <div className="absolute top-[20%] left-0 sm:top-[35%] xl:left-[10%] xl:mx-auto 2xl:left-[15%]">
          <h1 id="animation" ref={sec1TtlRef} className="z-[200] font-Verah text-4xl leading-10 text-white sm:text-6xl sm:leading-tight movable text-left">
            BREAK BARRIERS TODAY
            <br />
            <span className="flex space-x-2">
              <hr className="mt-6 h-1.5 w-12 sm:mt-1.5 sm:w-24" />
              <span className="pr-3 text-lg sm:text-base">FOR BRIDGING TO<br />A DECENTRALIZED TOMORROW</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}
