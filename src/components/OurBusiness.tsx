import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';



const OurBusiness = () => {
  const businessRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);



  return (
    
    <div className="relative min-h-screen screen-start z-2">
      <div className="flex h-full w-full max-w-main-contain flex-col items-center px-6 py-8 md:flex-row md:px-24 xl:mx-auto">
        <div
          id="BusinessAnime"
          ref={businessRef}
          className="flex h-full flex-col items-start justify-center justify-items-center gap-[24px] text-white opacity-0"
        >

        
          <h1 className="font-verah text-[48px] text-white md:text-[68px]">
            Culture & Values
          </h1>
          <p className="max-w-full pb-5 text-left font-Neue text-base text-white md:max-w-[600px]">
          Arta-Emali is dedicated to cultivating an exceptional company culture that fosters innovation, collaboration, and a customer-centric approach. We firmly believe that a strong culture is the bedrock of our success, and we actively nurture an environment that inspires our talented team to thrive and exceed expectations.
          </p>
          <ul className="flex w-full list-none flex-col items-center justify-center gap-[24px] lg:flex-row lg:items-start">
            <li className="activeList innerShadow">
              <a href="#">Innovation</a>
            </li>
            <li className="list hidden lg:flex">
              {' '}
              <a href="#">Collaboration</a>
            </li>
            <li className="list hidden lg:flex">
              {' '}
              <a href="#">Customer focus</a>
            </li>
            <li className="list hidden lg:flex">
              {' '}
              <a href="#">Diversity and inclusion</a>
            </li>
            <li className="list hidden lg:flex">
              {' '}
              <a href="#">Work-life balance</a>
            </li>
          </ul>

        

          
          <p className="max-w-full pb-5 text-left font-Neue text-base text-white md:max-w-[600px]">
            We develop innovative and transformative blockchain-enabled
            solutions to service society.
          </p>


          <p className="max-w-full pb-5 text-left font-Neue text-base text-white md:max-w-[1000px]">
            <span className="block mb-4">
              <span className="text-yellow-300 text-3xl md:text-4xl">Innovation:</span> At Arta-Emali, we prioritize innovation and creativity in all aspects of our operations. We encourage our employees to think outside the box and push the boundaries of what is possible, always seeking new and innovative solutions to our customers' challenges.
            </span>
            <span className="block mb-4">
              <span className="text-yellow-300 text-3xl md:text-4xl">Collaboration:</span> We foster a collaborative and supportive work environment where teamwork is valued and encouraged. Open communication, feedback, and constructive criticism are prioritized, creating a culture of learning and growth.
            </span>
            <span className="block mb-4">
              <span className="text-yellow-300 text-3xl md:text-4xl">Customer focus:</span> Our customers are at the center of everything we do. We prioritize their needs and work tirelessly to create solutions that meet their unique challenges and requirements.
            </span>
            <span className="block mb-4">
              <span className="text-yellow-300 text-3xl md:text-4xl">Diversity and inclusion:</span> We strive to create a diverse and inclusive work environment that values and celebrates differences. Hiring and retaining a diverse workforce is a priority, and we promote equality and fairness through our policies and practices.
            </span>
            <span className="block">
              <span className="text-yellow-300 text-3xl md:text-4xl">Work-life balance:</span> We value work-life balance and prioritize the well-being of our employees. Flexible work arrangements are offered, and we encourage employees to take care of themselves and their families, recognizing that a healthy and happy workforce is essential to our success.
            </span>
          </p>




          <a
            href="#_"
            className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-white  py-[8px] px-[32px] font-Neue text-base font-normal text-white shadow-md transition duration-300 ease-out sm:w-fit"
          >
            <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center space-x-4 bg-[#f1eded45] font-Neue text-white duration-300 group-hover:translate-x-0">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
              <span> Learn more</span>
            </span>
            <span className="ease absolute flex h-full w-full transform items-center justify-center font-Neue text-[16px] leading-[24px] text-white transition-all duration-300 group-hover:translate-x-full">
              Learn more
            </span>
            <span className="invisible relative font-Neue">Learn more</span>
          </a>


         


     
          
          
      </div>
      </div>
      </div>

    
  )
}


export default OurBusiness
