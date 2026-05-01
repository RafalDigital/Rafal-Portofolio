// import Marquee from "react-fast-marquee";

import * as MarqueeModule from "react-fast-marquee";

// Kita deteksi secara manual di mana komponennya berada
const Marquee = MarqueeModule.default?.default // Jika nested default
  || MarqueeModule.default                    // Jika standar default
  || MarqueeModule.Marquee                    // Jika named import
  || MarqueeModule;                           // Jika langsung objek


// export default function HeroSection() {
//     // Log ini untuk debugging, cek di Console F12
//     console.log("Tipe Marquee:", typeof Marquee); 

//     return (
//         <section>
//             {/* Hanya render jika Marquee bukan undefined/object kosong */}
//             {typeof Marquee === 'function' ? (
//                 <MobileHero />
//             ) : (
//                 <p>Library Marquee gagal dimuat dengan benar</p>
//             )}
//         </section>
//     );
// }  

// function MobileHero() {
//     return (
//         <div style={{ width: '100%', padding: '20px 0' }}>
//             <Marquee speed={50} gradient={false}>
//                 <span style={{ marginRight: '40px' }}>
//                     KONTEKS TEKS BERJALAN DISINI
//                 </span>
//             </Marquee>
//         </div>
//     );
// }


export default function HeroSection() {
    return (
        <section className="w-full h-dvh">
            <MobileHero />
        </section>
    );
}

function MobileHero() {
    // Pengecekan ekstra agar tidak crash
    if (!Marquee || typeof Marquee === 'undefined') {
        console.error("Marquee masih undefined! Cek koneksi library.");
        return null; 
    }

    return (
        <div className="w-full py-5">
            <Marquee speed={50} gradient={false}>
                <span className="mr-10 text-white">TEKS BERJALAN BERHASIL</span>
            </Marquee>
        </div>
    );
}