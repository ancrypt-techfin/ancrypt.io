import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface PhotoWithTextProps {
  imageUrl: string;
  caption: string;
  description: string;
  className?: string;
}

const PhotoWithText: React.FC<PhotoWithTextProps> = ({ imageUrl, caption, description, className }) => {
  return (
    <div className={`photo-with-text ${className}`}>
      <div className="photo">
        <Image src={imageUrl} alt="Photo" width={200} height={210} />
      </div>
      <div className="text">
        <p className="caption">{caption}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    ScrollTrigger.refresh();
    gsap.fromTo(
      '#BusinessAnime',
      {
        autoAlpha: 0,
        xPercent: -15,
      },
      {
        delay: 1,
        duration: 1,
        autoAlpha: 1,
        xPercent: 0,
        ease: 'slow(0.7, 0.7, false)',
        scrollTrigger: {
          id: 'BusinessAnime',
          trigger: '#BusinessAnime',
          start: 'top center+=500',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  

  return (
    <div className="relative z-2 flex min-h-screen w-full flex-col bg-about-gradient md:flex-row">
      <div className="absolute  w-full overflow-hidden md:h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          crossOrigin="anonymous"
          className="absolute min-w-full min-h-full	w-auto h-auto overflow-hidden top-50 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]"
        >
          {/* md:translate-x-[-20%] */}
          <source src="/videos/landing_about.mov" typeof="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full flex z-1 justify-center max-w-main-contain m-auto items-center">
        <div className="md:max-w-[500px] p-6 flex-col w-1/2">
          <div className="relative h-full cursor-pointer opacity-100 transition hover:opacity-100 m-auto">
          
          </div>
        </div>


        <div className="app">
            <h1 className="text-yellow-500 text-4xl font-bold mb-8">Our Leaders</h1>
            <div className="photo-container">
              <div className="photo-unit">
                <PhotoWithText
                  imageUrl="/images/1.jpeg"
                  caption="Mr. Eddie Lau"
                  description="Co-Chief Executive Officer"
                />
              </div>
              <div className="photo-unit">
                <PhotoWithText
                  imageUrl="/images/2.jpeg"
                  caption="Mr. Peter Woo"
                  description="Co-Chief Executive Officer"
                />
              </div>
            </div>
        

          
      </div>
      
      <style jsx>{`
      .Leaders{
        color:white;
        font-size: 24px; // Adjust the font size as needed
        font-weight: bold;
        margin-bottom: 20px;
      }
       .app {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left:-30%;
      }
      
      .photo-container {
        display: flex;
        justify-content: center;
      }
      
      .photo-unit {
        margin: 20px; /* Adjust the margin value as needed */
      }
      
      .photo {
        width: 200px; /* Adjust the image width as needed */
        height: 200px; /* Adjust the image height as needed */
        object-fit: cover; /* Ensure the image maintains its aspect ratio */
      }
      
      .caption {
        font-weight: bold;
      }
      
      .description {
        color: gray;
      }

      `}</style>

        <div className="ml-auto text-right h-full w-1/2 flex-col items-end justify-center gap-[24px] p-6  ">
          <h1 className="font-Verah text-[48px] font-normal text-white md:text-[68px]">
            Authowise
          </h1>
          <p className="font-Neue text-white">
            Authowise helps the world transition from Web2 to Web3 by leveraging cutting-edge technology to empower individuals and businesses to take control of their financial lives.
          </p>
          <br/>

          <div className="font-Neue text-white">
          <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-2 pr-8">
                          Chairman & Non-Executive Director
                        </td>
                        <td className="py-2">
                          <strong className="text-yellow-500">Dr. Adrian Cheng Chi-Kong, SBS, JP</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-8">
                          Chief Executive Officer & Executive Director
                        </td>
                        <td className="py-2">
                          <strong className="text-yellow-500">Mr. Eddie Lau</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-8">
                          Chief Financial Officer & Executive Director
                        </td>
                        <td className="py-2">
                          <strong className="text-yellow-500">Ms. Pamela Yeung</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-8">
                          Chief Technology Officer & Executive Director
                        </td>
                        <td className="py-2">
                          <strong className="text-yellow-500">Mr. Peter Woo</strong>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>


        
            <br/>
        
          <a
            href="#_"
            className="group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-full border  border-white py-[8px] px-[32px] font-Neue text-base font-normal text-white shadow-md transition duration-300 ease-out"
          >

            <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center space-x-4 bg-[#f1eded45] text-white duration-300 group-hover:translate-x-0">
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
              <span> Show more</span>
            </span>
            <span className="ease absolute flex h-full w-full transform items-center justify-center font-Neue text-[16px] leading-[24px] text-white transition-all duration-300 group-hover:translate-x-full">
              Show more
            </span>
            <span className="invisible relative">Show more</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
