import TopNavbar from "../components/top-navbar";
import SideNavbar from "../components/side-navbar";
import { motion } from "motion/react";

export default function About({ openMenu, hamburgerClick, closeMenu}) {
    return (
        <>
            <TopNavbar HamburgerOpen={openMenu} hamburgerClick={hamburgerClick}/>
            <SideNavbar HamburgerClose={closeMenu} hamburgerClick={hamburgerClick}/>
            <div className="pt-24 px-6 w-full h-20">
                <TopAbout/>
                <div className="w-full h-fit grid grid-rows-2 grid-flow-col auto-cols-fr gap-4">
                    <Link logo={'hi'} link={'#'}/>
                </div>
            </div>
        </>
    )
}

function TopAbout() {
    return(
        <>
            <div className="w-full h-fit p-4 bg-secondary border border-tertiary/20 rounded-lg text-tertiary">
                
            </div>
        </>
    )
}

function Link({logo, link}) {
    return (
        <motion.a
            href={link}
            whileHover={{scale: 1.05, y: -2}}
            whileTap={{ scale: 0.9, y: 1}}
            transition={{type: 'spring'}}
            className="p-4 w-full h-full bg-primary text-tertiary"
        >
            {logo}
        </motion.a>
    )
}