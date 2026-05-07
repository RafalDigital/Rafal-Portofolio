// import Marquee from "react-fast-marquee";

// import * as MarqueeModule from "react-fast-marquee";

// // Kita deteksi secara manual di mana komponennya berada
// const Marquee = MarqueeModule.default?.default 
//   || MarqueeModule.default                    
//   || MarqueeModule.Marquee                    
//   || MarqueeModule;                           
import {RiArrowDownSLine} from '@remixicon/react';
import BGLine1 from './small-component/bg-line-1';

export default function HeroSection() {
    // Log ini untuk debugging, cek di Console F12
    console.log("Tipe Marquee:", typeof Marquee); 

    return (
        <section className="w-full h-dvh flex flex-col items-center relative">
            <div className="absolute z-20 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_90%,transparent_110%)] pointer-events-none"></div>
            <div className="w-full h-full flex flex-col items-center bg-transparent backdrop-blur-3xl z-10">

                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <MobileHero/>
                </div>
                <a href="#" className='p-2 opacity-40 -translate-y-10 rounded-full bg-secondary border border-tertiary/20 text-tertiary hover:opacity-100 hover:text-primary group'><RiArrowDownSLine className='group-hover:translate-y-0.5 transition-all ease-in-out' /></a>
            </div>
            {/* <div className="rounded-full top-5 -right-5 w-80 h-80 bg-primary opacity-50 absolute z-0"></div>
            <div className="rounded-full bottom-32 left-0 w-56 h-56 bg-primary opacity-50  absolute z-0"></div> */}
            {/* <div className="rounded-2xl h-10 w-92 bg-primary absolute rotate-12 top-1/2 -translate-y-1/2"></div> */}
            {/* <BGLine1 clas={"-top-32 -right-32 z-30 opacity-50"} fill={'primary'} stroke={'primary'}/> */}
        </section>
    );
}  

function MobileHero() {
    return (
        <div>
            {/* <Marquee speed={50} gradient={false}> */}
                <span className="text-tertiary">Buat Marquee</span>
            {/* </Marquee> */}
        </div>
    );
}


// export default function HeroSection() {
//     return (
//         <section className="w-full h-dvh">
//             <MobileHero />
//         </section>
//     );
// }

// function MobileHero() {
//     // Pengecekan ekstra agar tidak crash
//     if (!Marquee || typeof Marquee === 'undefined') {
//         console.error("Marquee masih undefined! Cek koneksi library.");
//         return null; 
//     }

//     return (
//         <div className="w-full py-5">
//             <Marquee speed={50} gradient={false}>
//                 <span className="mr-10 text-white">TEKS BERJALAN BERHASIL</span>
//             </Marquee>
//         </div>
//     );
// }