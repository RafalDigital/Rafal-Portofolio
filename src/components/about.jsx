import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import { useRef } from 'react';

export default function AboutSection() {
    const textContainer = useRef();
    gsap.registerPlugin(ScrollTrigger);

    const aboutText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia corporis tempora suscipit vel eaque veniam vero ut rerum id. Consectetur inventore dicta cum aliquam porro enim cumque, eos alias.'

    useGSAP(() => {
        gsap.fromTo(".char", {
                opacity: 0.4
            },{
                opacity: 1,
                duration: 0.3,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: textContainer.current,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: true,
                    toggleActions: "play play reverse reverse"
                }
            }
        )
    }, { scope: textContainer })


    return (
        <>
            <section className='w-full h-fit py-32 my-8'>
                <div className='px-1' ref={textContainer}>
                    {aboutText.split('').map((char, index) => (
                        <span className="char inline-block text-xl font-bold font-zain text-tertiary" key={index}>
                            {char === ' ' ? '\u00A0' : char} 
                        </span>
                    ))}
                </div>
            </section>
        </>
    )
}