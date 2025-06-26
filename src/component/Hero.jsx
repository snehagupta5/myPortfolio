import React from 'react'
import { motion } from 'framer-motion';
import myImg from '../img/myImg.png'

const Hero = () => {
  const icons = [
    { icon: "ri-github-fill", link: "https://github.com/snehagupta5" },
    { icon: "ri-linkedin-box-fill", link: "https://www.linkedin.com/in/snehagupta9433771a7/" },
    { icon: "ri-code-s-slash-line", link: "https://leetcode.com/problemset/" },
  ];
  return (
    <div
      className='md:h-[100vh] flex py-[5rem] px-[2rem] md:py-[2rem] md:px-[2rem] w-full gap-2 mt-20 md:mt-8 bg-container_colour'
    >
      <div className='flex md:w-[1100px] w-full md:flex-row flex-col justify-center items-center h-full m-auto relative'>
        < motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 25,      // Lower = slower
            damping: 15,        // Higher = more smooth stopping
            mass: 1,
          }}
           className='text-biggest font-medium md:w-3/6 w-[75%] text-center md:text-left'>
          <h2>Hello, <span className='first-color'>I'm</span></h2>
          <h1 className="first-color">Sneha Gupta</h1>
          <h2>Full-Stack Developer</h2>
          <p className='py-4 home__description text-text_color text-bigger'>With the knowledge of web development and design, I offer free-lancing services of quality design and user-friendly interface.</p>
          <button className='py-4 bg-primary rounded-md px-4 text-normal font-semibold text-title_colour hover:bg-primary_alt duration-150'><a href='#contacts'>Let's Connect</a></button>
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            {icons.map((item, index) => (
              <motion.div
                whileHover={{ transform: "translateY(-8px)" }}
                whileTap={{ scale: 0.8 }}
              >
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary_alt clip-hexagon flex justify-center p-2"
                >
                  <i className={`${item.icon} text-2xl`}></i>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            mass: 1,
          }}
           className="md:w-3/6 w-full h-full relative flex items-center justify-center">
          <svg className="heroImg md:w-[300px] md:h-[300px] w-[500px] h-[500px]" viewBox="0 0 550 591" xmlns="http://www.w3.org/2000/svg">
            <mask id="maskBlob" mask-type="alpha">
              <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z" />
            </mask>

            <g mask="url(#maskBlob)">
              <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z" />

              <rect x="37" width="476" height="630" fill="url(#pattern0)" />
            </g>

            <rect x="37" width="476" height="300" fill="url(#pattern1)" />

            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)" />
              </pattern>

              <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)" />
              </pattern>

              <g className="home__img">
                <image
                  id="imageBlob"
                  href={myImg}
                  width="640"
                  height="1200"
                />
              </g>
            </defs>
          </svg>

        </motion.div>
      </div>



    </div >
  )
}

export default Hero