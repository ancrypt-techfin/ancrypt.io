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
          Authowise is dedicated to cultivating an exceptional company culture that fosters innovation, collaboration, and a customer-centric approach. We firmly believe that a strong culture is the bedrock of our success, and we actively nurture an environment that inspires our talented team to thrive and exceed expectations.
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
                <strong className="text-yellow-500 text-2xl">Innovation:</strong> At Authowise, we prioritize innovation and creativity in all aspects of our operations. We encourage our employees to think outside the box and push the boundaries of what is possible, always seeking new and innovative solutions to our customers' challenges.
              </span>
              <span className="block mb-4">
                <strong className="text-yellow-500 text-2xl">Collaboration:</strong> We foster a collaborative and supportive work environment where teamwork is valued and encouraged. Open communication, feedback, and constructive criticism are prioritized, creating a culture of learning and growth.
              </span>
              <span className="block mb-4">
                <strong className="text-yellow-500 text-2xl">Customer focus:</strong> Our customers are at the center of everything we do. We prioritize their needs and work tirelessly to create solutions that meet their unique challenges and requirements.
              </span>
              <span className="block mb-4">
                <strong className="text-yellow-500 text-2xl">Diversity and inclusion:</strong> We strive to create a diverse and inclusive work environment that values and celebrates differences. Hiring and retaining a diverse workforce is a priority, and we promote equality and fairness through our policies and practices.
              </span>
              <span className="block">
                <strong className="text-yellow-500 text-2xl">Work-life balance:</strong> We value work-life balance and prioritize the well-being of our employees. Flexible work arrangements are offered, and we encourage employees to take care of themselves and their families, recognizing that a healthy and happy workforce is essential to our success.
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
      
      
    <br/>
    <br/>

    


      </div>
      <div className="min-h-screen w-full  overflow box-border relative">
        <div className="mr-auto flex h-full w-full flex-col items-start justify-center gap-[24px] text-left md:items-end md:text-right">
          <div className="text-right md:text-right">
          
            <br/>


            <div className="relative min-h-screen screen-start z-2">
              <div className="flex h-full w-full max-w-main-contain flex-col items-end px-6 py-8 md:px-24 xl:mx-auto">
                <div className="text-right md:text-right">
                  <h1 className="font-Verah text-4xl md:text-6xl text-white">
                    Press Release
                  </h1>
                  <p className="max-w-full pb-5 font-Neue text-xl text-yellow-500 md:max-w-[1000px]">
                    Press Release: March 14th
                  </p>
                  <p className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    FOR IMMEDIATE RELEASE
                  </p>
                  <p className="max-w-full pb-5 font-Neue text-3xl text-white md:max-w-[1000px]">
                    <strong>Authowise Launches as a Joint Venture between ARTA TechFin and EMALI Limited</strong>
                  </p>
                  <p className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    [Hong Kong, March 14th, 2023] Authowise, a new joint venture between ARTA TechFin Corporation Limited and EMALI Limited, has been launched to revolutionize the fintech industry in Hong Kong and beyond.
                  </p>
                  <p className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    ARTA TechFin is a hybrid fintech platform that bridges Web2 and Web3 through innovation in blockchain infrastructures and applications, while EMALI is an enterprise technology company that develops, licenses, supports, and delivers fintech software, solutions, and related services to the Asia Pacific region and beyond, specializing in AI, blockchain, cryptography, security, and privacy technologies.
                  </p>
                  <p className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    As a joint venture between these two innovative companies, Authowise is uniquely positioned to leverage cutting-edge technologies and expertise to develop and deliver fintech solutions that are secure, efficient, and accessible to all.
                  </p>
                  <p className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    The CEO of Authowise is Mr. Eddie Lau, also known as Lau Fu Wing, who is educated at the University of Chicago and also serves as the CEO of ARTA TechFin Corporation Limited. The CTO of Authowise is Mr. Peter Woo, who is educated at the University of Calgary and also serves as the CEO of EMALI Limited.
                  </p>
                  <p className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    "We are excited to launch Authowise and to bring together the expertise of ARTA TechFin and EMALI to create innovative fintech solutions that will benefit users across the Asia Pacific region and beyond," said Mr. Eddie Lau, CEO of Authowise. "Our goal is to advance financial inclusion and bridge the decentralized finance (defi) and centralized finance (cefi) worlds, leveraging our expertise in blockchain, cryptography, security, and privacy to create a better world for all."
                  </p>
                  <p       className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    Mr. Peter Woo, CTO of Authowise, added, "With the launch of Authowise, we are committed to driving progress and innovation in the fintech industry, and to delivering solutions that are secure, efficient, and accessible to all. We look forward to working with our partners, stakeholders, and users to create a brighter future for finance."
                  </p>
                  <p className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    <strong>About Authowise</strong>
                  </p>
                  <p className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    Authowise is a joint venture between ARTA TechFin Corporation Limited (HKEX: 279) and EMALI Limited. ARTA TechFin is a hybrid fintech platform that bridges Web2 and Web3 through innovation in blockchain infrastructures and applications, while EMALI is an enterprise technology company that develops, licenses, supports, and delivers fintech software, solutions, and related services to the Asia Pacific region and beyond, specializing in AI, blockchain, cryptography, security, and privacy technologies. Authowise is committed to advancing financial inclusion and bridging the defi and cefi world, with a goal to building a better world for all.
                  </p>
                  <p className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    For more information, please visit <a href="http://www.authowise.com/" className="text-yellow-500">www.authowise.com</a>.
                  </p>
                  <p className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    Contact: Cynthia Cheung
                  </p>
                 
                  
                  <p className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    <a href="mailto:cynthia.cheung@authowise.com" className="text-yellow-500">cynthia.cheung@authowise.com</a>
                  </p>
                  <p className="max-w-full pb-5 font-Neue text-base text-white md:max-w-[1000px]">
                    +852 6598 8606
                  </p>
                </div>
              </div>
            </div>


          </div>
          
        </div>
      </div>




      </div>

    
  )
}


export default OurBusiness
