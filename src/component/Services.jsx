import React from 'react'
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div className='md:h-[100vh] w-full bg-body_colour py-[5rem] px-[2rem] md:py-[2rem] md:px-[2rem] justify-center items-center flex flex-col'>
            <motion.div initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 25,
                    damping: 15,
                    mass: 1,
                }}
                 className='text-center py-6'>
                <h3 className='text-normal'><span className='first-color'>My </span>Services</h3>
                <h2 className='text-biggest'>What I Do</h2>
            </motion.div >
            <div className='h-full md:w-[70%] w-full flex justify-between items-center  gap-12 flex-col md:flex-row mt-4 md:mt-0'>
                < motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 25,
                        damping: 15,
                        mass: 1,
                    }}
                    whileHover={{
                       scale: 0.9 
                    }}
                     className='md:w-[80%] w-full bg-container_colour py-[6rem] px-[2rem] rounded-lg text-center flex flex-col gap-4 hover:border-2 hover:border-primary_alt'>
                    <p className='text-primary text-5xl'><i class="ri-layout-3-line services__icon"></i></p>
                    <h2 className='text-bigger'>Web Developer</h2>
                    <p className='text-text_color'>I'm a passionate web developer dedicated to crafting interactive and user-centered digital experiences Development of custom web pages using current technologies and giving a web page a cool look and user handly operations</p>
                </motion.div>
                < motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 25,
                        damping: 15,
                        mass: 1,
                    }}
                    whileHover={{
                       scale: 0.9 
                    }}
                     className='md:w-[80%] w-full bg-container_colour py-[6rem] px-[2rem] rounded-lg text-center flex flex-col gap-4 hover:border-2 hover:border-primary_alt'>
                    <p className='text-primary text-5xl'><i class="ri-pen-nib-line services__icon"></i></p>
                    <h2 className='text-bigger'>Freelancing</h2>
                    <p className='text-text_color'>I'm a freelance web developer, specializing in crafting stunning and responsive websites that shine in the digital realm. Let's collaborate to bring your online vision to life! Connect with me on Fiverr today</p>
                </motion.div>
            </div>
        </div >
    )
}

export default Services