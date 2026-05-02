// import Marquee from "react-fast-marquee";

// import * as MarqueeModule from "react-fast-marquee";

// // Kita deteksi secara manual di mana komponennya berada
// const Marquee = MarqueeModule.default?.default 
//   || MarqueeModule.default                    
//   || MarqueeModule.Marquee                    
//   || MarqueeModule;                           
import {RiArrowDownSLine} from '@remixicon/react';

export default function HeroSection() {
    // Log ini untuk debugging, cek di Console F12
    console.log("Tipe Marquee:", typeof Marquee); 

    return (
        <section className="w-full h-dvh flex flex-col items-center relative">
            <div className="w-full h-full flex flex-col items-center bg-transparent backdrop-blur-3xl z-20">

                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <MobileHero/>
                </div>
                <a href="#" className='p-2 -translate-y-10 rounded-full bg-secondary border border-tertiary/20 text-tertiary active:text-primary hover:text-primary group'><RiArrowDownSLine className='group-hover:translate-y-0.5 transition-all ease-in-out' /></a>
            </div>
            <div className="rounded-full top-5 -right-5 w-56 h-56 bg-primary opacity-50 absolute z-0"></div>
            <div className="rounded-full bottom-32 left-0 w-56 h-56 bg-primary opacity-50  absolute z-0"></div>
            
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