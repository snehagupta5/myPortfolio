import React from 'react'
import { motion } from 'framer-motion';
import Project1 from '../img/Project1.png'
import Project2 from '../img/Project2.png'
import Project3 from '../img/Project3.png'
import Project4 from '../img/Project4.png'
import Project5 from '../img/Project5.png'
import Project6 from '../img/Project6.png'


const Projects = () => {
    return (
        <div className='md:h-[120vh] w-full flex flex-col py-[5rem] px-[2rem] md:p-0 gap-8 bg-container_colour items-center justify-center'>
            <motion.div initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 25,
                    damping: 15,
                    mass: 1,
                }}
                className='text-center pb-6'>
                <h3 className='text-normal'><span className='first-color'>My </span>Work</h3>
                <h2 className='text-biggest'>My Projects</h2>
            </motion.div >
            <div className='flex md:w-[75%] md-full mx-auto gap-8 md:flex-row flex-col'>
                <motion.div initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 25,
                        damping: 15,
                        mass: 1,
                    }}
                    className='text-center w-full h-full cursor-pointer relative ProjectCard'>
                    <div className='projects__card'>
                        <img src={Project4} className='rounded-lg w-[350px] ProjectCard' />
                        <div className=' projectHover flex justify-center items-center flex-col md:gap-4 gap-2 font-medium'>
                            <h3>thejoru.com</h3>
                            <h2 className='text-bigger'>E-commerce Event Service Website</h2>
                            <a href='https://thejoru.com' target="_blank">View Demo<i class="ri-external-link-line"></i></a>
                        </div>
                    </div>
                </motion.div >

                <motion.div initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 35,
                        damping: 15,
                        mass: 1,
                    }}
                    className='text-center w-full h-full cursor-pointer relative ProjectCard'>
                    <div className='projects__card'>
                        <img src={Project2} className='rounded-lg w-[350px] ProjectCard' />
                        <div className=' projectHover flex justify-center items-center flex-col md:gap-4 gap-2 font-medium'>
                            <h3>Ging</h3>
                            <h2 className='text-bigger'>Fine-dining resturant</h2>
                            <a href='https://snehagupta5.github.io/gingRestaurant/' target="_blank">View Demo<i class="ri-external-link-line"></i></a>
                        </div>
                    </div>
                </motion.div >
                <motion.div initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 15,
                        mass: 1,
                    }}
                    className='text-center w-full h-full cursor-pointer relative ProjectCard'>
                    <div className='projects__card'>
                        <img src={Project1} className='rounded-lg w-[350px] ProjectCard' />
                        <div className=' projectHover flex justify-center items-center flex-col md:gap-4 gap-2 font-medium'>
                            <h3>Savari</h3>
                            <h2 className='text-bigger'>Rapido website</h2>
                            <a href='https://snehagupta5.github.io/savari.github.io/' target="_blank">View Demo<i class="ri-external-link-line"></i></a>
                        </div>
                    </div>
                </motion.div >
            </div>




            <div className='flex md:w-[75%] w-full mx-auto gap-8 md:mt-20 md:flex-row flex-col'>
                <motion.div initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 25,
                        damping: 15,
                        mass: 1,
                    }}
                    className='text-center w-full h-full cursor-pointer relative ProjectCard'>
                    <div className='projects__card'>
                        <img src={Project5} className='rounded-lg w-[350px] ProjectCard' />
                        <div className=' projectHover flex justify-center items-center flex-col md:gap-4 gap-2 font-medium'>
                            <h3>About Github</h3>
                            <h2 className='text-bigger'>github Real user Search</h2>
                            <a href='https://github-user-search-pink-two.vercel.app/' target="_blank">View Demo<i class="ri-external-link-line"></i></a>
                        </div>
                    </div>
                </motion.div >

                <motion.div initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 15,
                        mass: 1,
                    }}
                    className='text-center w-full h-full cursor-pointer relative ProjectCard'>
                    <div className='projects__card'>
                        <img src={Project6} className='rounded-lg w-[350px] ProjectCard' />
                        <div className=' projectHover flex justify-center items-center flex-col md:gap-4 gap-2 font-medium'>
                            <h3>Hotel Booking</h3>
                            <h2 className='text-bigger'>book hotel Website</h2>
                            <a href='https://github.com/snehagupta5/hotelBooking' target="_blank">View Demo<i class="ri-external-link-line"></i></a>
                        </div>
                    </div>
                </motion.div >

                  <motion.div initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 35,
                        damping: 15,
                        mass: 1,
                    }}
                    className='text-center w-full h-full cursor-pointer relative ProjectCard'>
                    <div className='projects__card'>
                        <img src={Project3} className='rounded-lg w-[350px] ProjectCard' />
                        <div className=' projectHover flex justify-center items-center flex-col md:gap-4 gap-2 font-medium'>
                            <h3>joru App</h3>
                            <h2 className='text-bigger'>E-commerce Android App</h2>
                            <a href='https://play.google.com/store/apps/details?id=com.joru.customer&hl=en_IN' target="_blank">View Demo<i class="ri-external-link-line"></i></a>
                        </div>
                    </div>
                </motion.div >
            </div>
        </div>
    )
}

export default Projects