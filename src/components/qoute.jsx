import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import { useRef } from 'react';
import { RiDoubleQuotesR } from '@remixicon/react';

export default function QuoteSection() {
    gsap.registerPlugin(ScrollTrigger);
    const quoteSection = useRef();

    useGSAP(() => {
        gsap.fromTo(".quote", {
                scale: 0.6,
                opacity: 0.3,
            },{
                opacity: 0.1,
                scale: 0.8,
                duration: 0.3,
                scrollTrigger: {
                    trigger: '.quote',
                    start: "top 80%",
                    end: "+=50%",
                    scrub: true,
                    toggleActions: "play play reverse reverse",           
                }
            }
        )
        gsap.fromTo(".quotes", {
                opacity: 0.4,
                y: 0,
            },{
                y: -100,
                opacity: 1,
                duration: 0.3,
                scrollTrigger: {
                    trigger: '.quote',
                    start: "top 80%",
                    end: "+=50%",
                    scrub: true,
                    toggleActions: "play play reverse reverse",           
                }
            }
        )
    }, {scope: quoteSection})
    return (
        <>
            <section ref={quoteSection} className="w-full h-[30rem] py-10 flex flex-col justify-center items-center relative">
                <h1 className="quote select-none text-9xl text-tertiary/40 font-zain font-extrabold absolute top-1/2 -translate-y-1/2">QUOTE</h1>
                <RiDoubleQuotesR  className='quotes text-tertiary text-3xl mt-32' size={50}/>
                <div className='quotes px-6 text-center'>
                    <h1 className='text-tertiary text-2xl font-nunito font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, dolore dolor rerum voluptas</h1>
                    <p className='text-md text-tertiary mt-4 font-nunito font-medium'>— Rafif —</p>
                </div>
            </section>
        </>
    )
}