import { useEffect, useState } from "react";

export default function TopNavbar() {
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
            <nav id="top-navbar" className="fixed p-4 top-0 left-0 right-0">
                <div id="logo">
                    <img src="" alt="" />
                </div>
                <div className="time">
                    <p>{displayTime}</p>
                </div>
            </nav>
        </>
    );
}