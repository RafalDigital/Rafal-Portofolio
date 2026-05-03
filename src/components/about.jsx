import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function AboutSection() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const textContainer = useRef();
    gsap.registerPlugin(ScrollTrigger);

    const aboutTextMobile = "Hi, I'm Rafif Fadhil D. A frontend developer and high school student who loves turning ideas into interactive, visually compelling web experiences. My current focus is on React and UI/UX design, where I enjoy pushing the boundaries of animation and user interaction."

    const aboutText = "Hi, I'm Rafif Fadhil D. A frontend developer and high school student who loves turning ideas into interactive, visually compelling web experiences. My current focus is on React and UI/UX design, where I enjoy pushing the boundaries of animation and user interaction. Looking ahead, I'm working toward becoming a fullstack developer and broadening my technical foundation with languages like Python and TypeScript."

    useGSAP(() => {
        gsap.fromTo(".char", {
                opacity: 0.4
            },{
                opacity: 1,
                duration: 0.3,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: textContainer.current,
                    start: "top 20%",
                    end: "+=120%",
                    scrub: true,
                    toggleActions: "play play reverse reverse",
                    pin: true,
                    pinSpacing: true,               
                }
            }
        )
    }, { scope: textContainer })

    useEffect(() => {
        const handleWidth = () => {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleWidth)
        return () => {window.removeEventListener('resize', handleWidth)}
    }, [isMobile])

    return (
        <>
            <section className='w-full h-fit py-32 flex justify-center items-center relative'>
                <div className='my-8 px-8 w-full h-full' ref={textContainer}>
                    {isMobile ? (     
                        aboutTextMobile.split(' ').map((char, index) => (
                            <span className="char mr-[0.4rem] inline-block text-lg font-bold font-nunito text-tertiary" key={index}>
                                {char} 
                            </span>
                        ))
                    ) : (
                        aboutText.split('').map((char, index) => (
                            <span className="char inline-block text-xl font-bold font-zain text-tertiary" key={index}>
                                {char === ' ' ? '\u00A0' : char} 
                            </span>
                        ))
                    )}
                </div>
            </section>
        </>
    )
}
// Masih Lorem ipsum
// Kasih kondisi jika diliat di desktop dan di mobile
//