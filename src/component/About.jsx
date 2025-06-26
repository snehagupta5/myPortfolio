import React from 'react'
import aboutMe from '../img/aboutMe.jpg'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='md:h-[100vh] w-full bg-body_colour py-[5rem] px-[2rem] md:p-0'>
      <div className='md:w-[80%] w-full h-full flex m-auto justify-center items-center md:flex-row flex-col-reverse gap-8'>
        < motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 25,     
            damping: 15,       
            mass: 1,
          }}
           className='md:w-1/2 w-full flex justify-center'>
          <img src={aboutMe} className='md:w-[300px] md:h-[350px] w-[70%] h-full rounded-lg object-cover' style={{boxShadow: "0 0 10px hsl(200, 100%, 70%)"}}/>
        </motion.div>
        < motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 25,      
            damping: 15,        
            mass: 1,
          }}
           className='md:w-[40%] w-[75%] text-center md:text-left'>
          <h3 className='text-sm font-semibold text-center'>My <span className='first-color'>Intro</span></h3>
          <h2 className='text-biggest font-semibold text-center '>About Me</h2>
          <p className='py-6 text-text_color text-base'>I’m an enthusiast of frontend development and UI design, passionate about creating unique, modern, and cool-looking web pages that stand out. I love experimenting with the latest technologies, bringing ideas to life with 3D animations, clean layouts, and intuitive user experiences. Alongside frontend, I’m genuinely interested in full-stack development and always eager to learn, grow, and build things that solve real problems. My goal is simple — keep leveling up, stay current, and deliver smart, smooth, and impactful digital products.</p>
          <button className='py-4 bg-primary rounded-md px-4 text-normal font-semibold text-title_colour hover:bg-primary_alt duration-150'><a href='#contacts'>Connect Me</a></button>
        </motion.div>

      </div>
    </div>
  )
}

export default About