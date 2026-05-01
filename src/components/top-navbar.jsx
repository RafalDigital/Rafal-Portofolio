import { useEffect, useState } from "react";
import RafalPlainLogo from "./small-component/logo";
import Hamburger from "./small-component/hamburger";

export default function TopNavbar({ HamburgerOpen, hamburgerClick}) {
    const [displayTime, setDisplayTime] = useState("");

    useEffect(() => {
        const updateClock = () => {
                const time = new Date();
                const hours = time.getHours().toString().padStart(2, '0');
                const minutes = time.getMinutes().toString().padStart(2, '0');
                const seconds = time.getSeconds().toString().padStart(2, '0');
                setDisplayTime(`${hours}:${minutes}:${seconds}`)
            };

            updateClock();
            const intervalClock = setInterval(updateClock, 1000);
            
            return () => clearInterval(intervalClock);
        }, [])


    return (
        <>
            <nav id="top-navbar" className="fixed z-30 py-2 px-4 top-0 left-0 right-0 flex justify-between items-center ">
                <div id="logo">
                    <RafalPlainLogo size={40}/>
                </div>
                {/* <div className="time">
                    <p className="text-tertiary">{displayTime}</p>
                </div> */}
                <div className="hamburger md:hidden" onClick={HamburgerOpen}>
                    <Hamburger isOpen={hamburgerClick}/>
                </div>
            </nav>
        </>
    );
}