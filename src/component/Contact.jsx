import React from 'react'
import { motion } from 'framer-motion';

const Contact = () => {
    const handleFormSubmit = () => {
        e.target.reset();
    }
    return (
        <div className='md:h-[100vh] w-full bg-body_colour py-[5rem] px-[2rem] md:py-[2rem] md:px-[2rem] justify-center items-center flex flex-col gap-8'> <motion.div initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 25,
                damping: 15,
                mass: 1,
            }}
            className='text-center'>
            <h3 className='text-normal'>Get In <span className='first-color'>Touch</span></h3>
            <h2 className='text-biggest'>Contact Me</h2>
        </motion.div >
            <motion.div initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 25,
                    damping: 15,
                    mass: 1,
                }}
                
                >
                <form className='flex flex-col gap-4 text-center' onSubmit={handleFormSubmit}>
                    <div className='flex md:flex-row flex-col gap-2'>
                        <input type='text' name='name' placeholder='Enter your Name' className='bg-container_colour px-2 py-6 rounded-md w-[250px] md:mr-4' required></input>
                        <input type='text' name='email' placeholder='Enter your Email' className='bg-container_colour px-2 py-6 rounded-md w-[250px]' required></input>
                    </div>
                    <textarea className='bg-container_colour px-2 py-6 rounded-md w-full h-[200px]' name='msg' type='text' placeholder='Enter your message' required />
                    <div className='mt-4'>
                        <button className='py-4 bg-primary rounded-md px-4 text-normal font-semibold text-title_colour hover:bg-primary_alt duration-150'><a href='#contact' type='Submit'>Send Message</a></button>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default Contact