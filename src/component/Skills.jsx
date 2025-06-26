import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ['DSA', 'JavaScript', 'React', 'Redux', 'Node', 'Express', 'HTMLS', 'CSS', 'C/C++', 'Git & GitHub', 'MongoDB', 'Figma', ' Optimization', 'Generative AI','SEO','React Native']
  return (
    <div className='md:h-[100vh] w-full flex md:flex-row flex-col py-[5rem] px-[2rem] md:p-0 md:gap-36 gap-8 bg-container_colour justify-center items-center'>
      < motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 25,
          damping: 15,
          mass: 1,
        }}
         className='md:w-[20%] w-[75%] text-center'>
        <h3 className='text-sm font-semibold'>Favourite <span className='first-color'>Skills</span></h3>
        <h2 className='text-biggest font-semibold '>My Skills</h2>
        <p className='py-6 text-text_color text-base '>There are the list of skills which i have been applying in different projects for the past few years This Includs DSA and Web Development</p>
        <button className='py-4 bg-primary rounded-md px-4 text-normal font-semibold text-title_colour hover:bg-primary_alt duration-150'><a href='#projects'>See Projects</a></button>
      </motion.div>
      < motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}

        className='flex flex-wrap md:h-[55%] flex-col gap-4 h-full text-center md:text-left justify-center md:w-[30%] w-[100%]'
      >
        {skills.map((skill, index) => {
          return (
            <motion.div key={index} className='text-bigger'
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            ><span className='first-color'> {index + 1 < 10 ? `0${index + 1}` : index + 1}</span> {skill}</motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Skills