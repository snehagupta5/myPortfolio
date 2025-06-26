import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const sidebarVariants = {
    open: {
        clipPath: `circle(1200px at 250px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    },
    closed: {
        clipPath: "circle(00px at 00px 00px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    return (
        <div className='nav h-[5rem] relative w-full mx-auto z-10'>
            <nav className='h-full p-8 container w-full'>
                <div className='flex text-[hsl(228, 8%, 95%)] font-medium justify-between items-center h-full w-full'>
                    <a href='#hero'>  Sneha <span className='first-color'>Gupta</span></a>
                    <div>
                        <nav className='md:flex gap-6 hidden'>
                            <a href='#hero'>Home</a>
                            <a href='#about'>About</a>
                            <a href='#services'>Services</a>
                            <a href='#projects'>Projects</a>
                            <a href='#contacts'>Contact</a>
                        </nav>
                        <button
                            className="md:hidden text-white z-[101]"
                            onClick={() => setIsOpen(true)}
                        >
                            <Menu size={28} />
                        </button>
                        <motion.aside
                            initial={false}
                            animate={isOpen ? 'open' : 'closed'}
                            variants={sidebarVariants}
                            ref={containerRef}
                            className="fixed top-0 left-36 w-full h-full bg-container overflow-hidden md:hidden p-4 subnav"
                        >
                            <button
                                className="md:hidden text-white z-[101]"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={28} />
                            </button>
                            <ul className="flex flex-col gap-4 text-white pt-4" onClick={() => setIsOpen(false)}>
                                <li><a href='#hero' >Home</a></li>
                                <li><a  href='#about'>About</a></li>
                                <li><a href='#services'>Services</a></li>
                                <li><a href='#projects'>Projects</a></li>
                                <li><a href='#contacts'>Contacts</a></li>
                            </ul>
                        </motion.aside>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header