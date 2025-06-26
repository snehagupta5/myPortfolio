import React from 'react'
import { motion } from 'framer-motion';

const Footer = () => {
    const icons = [
        { icon: "ri-github-fill", link: "https://github.com/snehagupta5" },
        { icon: "ri-linkedin-box-fill", link: "https://www.linkedin.com/in/snehagupta9433771a7/" },
        { icon: "ri-code-s-slash-line", link: "https://leetcode.com/problemset/" },
    ];
    return (
        <div className='md:h-[40vh] w-full py-[5rem] px-[2rem] md:p-0 bg-container_colour'>
            <div className='w-[70%] m-auto flex justify-between items-center h-full md:flex-row flex-col gap-6'>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 25,
                        damping: 15,
                        mass: 1,
                    }} className='text-center'>
                    <h2 className='text-biggest'> Sneha <span className='first-color'>Gupta</span></h2>
                    <h3 className='text-bigger'>Full Stack Developer</h3>
                    <h3 className='text-bigger'>snehadollygupta2@gmail.com</h3>
                </motion.div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 25,
                        damping: 15,
                        mass: 1,
                    }} className="flex gap-4 mt-4 justify-center md:justify-start">
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
                </motion.div>
                <div className='text-text_color text-center md:text-left'>
                    © Copyright . All Rights Reserved
                </div>

            </div>
        </div>
    )
}

export default Footer