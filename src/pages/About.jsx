import TopNavbar from "../components/top-navbar";
import SideNavbar from "../components/side-navbar";
import { motion } from "motion/react";
import { RiInstagramFill, RiGithubFill, RiLinkedinFill, RiYoutubeFill} from '@remixicon/react';

export default function About({ openMenu, hamburgerClick, closeMenu}) {
    return (
        <>
            <TopNavbar HamburgerOpen={openMenu} hamburgerClick={hamburgerClick}/>
            <div className="fixed top-0 right-0 left-0 h-16 w-full z-30 backdrop-blur-sm"></div>
            <SideNavbar HamburgerClose={closeMenu} hamburgerClick={hamburgerClick}/>
            <div className="pt-24 px-6 w-full h-20">
                <TopAbout/>
                <div className="w-full h-fit grid grid-rows-2 grid-flow-col auto-cols-fr gap-4 my-4">
                    <Link logo={RiInstagramFill} link={'#'} col={'#DD2A7B'}/>
                    <Link logo={RiGithubFill} link={'#'} col={'#24292e'}/>
                    <Link logo={RiYoutubeFill} link={'#'} col={'#cc181e'}/>
                    <Link logo={RiLinkedinFill} link={'#'} col={'#0077B5'}/>
                </div>
                <FullAbout/>
            </div>
        </>
    )
}

function TopAbout() {
    return(
        <motion.div
            whileHover={{scale: 1.02, y: -2}}
            whileTap={{ scale: 0.95, y: 1}}
            transition={{type: 'spring', stiffness: 500}}
            className="w-full h-fit p-4 bg-secondary border border-tertiary/20 rounded-lg text-tertiary">
                
        </motion.div>
    )
}

function FullAbout() {
    const about = "I'm a high school student with a genuine passion for frontend development, always eager to build things that look great and feel even better to use. I'm currently focused on deepening my knowledge in UI/UX design and React, where I especially enjoy crafting smooth animations and interactive interfaces that bring a website to life. Beyond just making things work, I care deeply about how they feel, the transitions, the details, the moments that make a user smile. In the past, I've taken on personal and creative projects that sharpened both my design thinking and my coding skills. Looking ahead, my goal is to grow into a fullstack web developer, expanding into technologies like Python and TypeScript, because I believe the best developers are always curious, always learning, and never done growing."
    return(
        <motion.div 
            whileHover={{scale: 1.02, y: -2}}
            whileTap={{ scale: 0.95, y: 1}}
            transition={{type: 'spring', stiffness: 300}} 
            className="w-full h-fit p-4 bg-secondary border border-tertiary/20 rounded-lg text-tertiary select-none">
            <span className="text-md font-medium font-nunito">{about}</span>
        </motion.div>
    )
}

// eslint-disable-next-line no-unused-vars
function Link({logo: Icon, link, col}) {
    return (
        <motion.a
            href={link}
            whileHover={{scale: 1.02, y: -2}}
            whileTap={{ scale: 0.95, y: 1}}
            transition={{type: 'spring', stiffness: 500}}
            style={{backgroundColor: col}}
            className='p-4 text-center w-full h-full text-tertiary rounded-lg border border-tertiary/20 flex justify-center items-center'
        >
            <Icon size={40}/>
        </motion.a>
    )
}