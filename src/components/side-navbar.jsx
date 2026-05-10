import Hamburger from "./small-component/hamburger";
import RafalPlainLogo from "./small-component/logo";
import { RiHomeFill, RiUser3Fill, RiCodeFill, RiInstagramFill, RiGithubFill, RiLinkedinFill, RiSunFill, RiMoonFill } from '@remixicon/react';
import { useNavigate } from "react-router-dom";

export default function SideNavbar({ HamburgerClose, hamburgerClick}) {
    return (
        <>
            <aside className={`fixed md:hidden flex flex-col left-4 top-4 bottom-4 w-8/12 h-[94dvh] bg-secondary z-50 overflow-hidden rounded-4xl transition-all duration-500 ease-in-out ${hamburgerClick ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-60 pointer-events-none'}`}>
                <div className="logo p-4">
                    <div className="p-2 w-fit h-fit bg-tertiary rounded-2xl">
                        <RafalPlainLogo size={40} circleCol="fill-secondary" prismCol="fill-secondary"/> 
                    </div>
                </div>
                
                <div className="side-link my-4 px-4 flex flex-col gap-1.5">
                    <SideLink link='/' content={'Home'} icon={RiHomeFill}/>
                    <SideLink link='/about' content={'About'} icon={RiUser3Fill}/>
                    <SideLink link='/projects' content={'Project'} icon={RiCodeFill}/>
                </div>
                {/* <div className=" px-4">
                    
                </div> */}
                {/* <div className=" w-full h-0.5 bg-tertiary/40"></div> */}
                <div className="mt-auto p-4 flex flex-col gap-4">
                    <ToggleLightMode2/>
                    <div className="px-2 py-2 rounded-2xl flex justify-between gap-2 bg-tertiary">
                        <SideMiniLink link="https://www.instagram.com/rafaldigital/" icon={RiInstagramFill}/>
                        <SideMiniLink link="https://github.com/RafalDigital" icon={RiGithubFill}/>
                        <SideMiniLink link="https://www.linkedin.com/in/rafif-d-468297372/" icon={RiLinkedinFill}/>
                        <SideMiniLink link="https://github.com/RafalDigital" icon={RiGithubFill}/>
                    </div>
                </div>
            </aside>
            <div className={`hamburger fixed top-4 right-4 z-50 p-1.5 bg-secondary rounded-2xl transition-all duration-500 ease-in-out ${hamburgerClick ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`} onClick={HamburgerClose}>
                <Hamburger isOpen={hamburgerClick}/>
            </div>
            <div className={`w-full h-full fixed top-0 left-0 right-0 transition-all ease-in-out bg-black/40 z-40 md:hidden ${hamburgerClick ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>
        </>
    )
}

function SideLink({ content, icon: IconComponent, link }) {
    const navigate = useNavigate();
    return (
        <a target="_blank" href={`/${link}`} onClick={(e) => {e.preventDefault(); navigate(link);}} className="flex gap-2 text-white items-center active:bg-tertiary active:text-primary hover:bg-tertiary hover:text-secondary rounded-xl px-2.5 py-2.5">
            <IconComponent size={20}/>
            <span>{content}</span>
        </a>
    );
}

function SideMiniLink({ link = '/', icon: IconComponent }) {
    return (
        <a href={link} className="flex w-fit h-fit gap-2 items-center active:text-primary hover:text-primary text-secondary rounded-lg px-2 py-2">
            <IconComponent size={20}/>
        </a>
    );
}

function ToggleLightMode() {
    return (
        <>  <div>
                <span></span>
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" id="Input"/>
  
                <div class="w-15 h-8 flex justify-evenly gap-1 items-center bg-tertiary peer-focus:outline-none peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:border-primary after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-primary after:border after:rounded-full after:h-7 after:w-7 after:transition-all after:ease-in-out">

                    <RiSunFill size={20} className="z-20 [#Input:checked_+_div_>&]:text-secondary text-tertiary"/>
                    <RiMoonFill size={20} className="z-20 [#Input:checked_+_div_>&]:text-tertiary text-secondary"/>
                </div>

                

                </label>
            </div>
            
            {/* ITU MASIH SEMENTARA BELUM PAKE STATE ALIAS MASIH MATI */}
        </>
    )
}

function ToggleLightMode2() {
    return (
        <>  
            {/* <div className="flex group items-center justify-between hover:bg-tertiary rounded-lg px-2 py-2">
                <div className="text-tertiary flex items-center gap-2 group-hover:text-primary">
                    <RiMoonFill size={20}/>
                    <span>Light Mode</span>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" id="Input"/>
  
                <div class="w-11 h-6 group-hover:bg-tertiary-200 flex justify-evenly gap-1 items-center bg-tertiary peer-focus:outline-none peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:border-primary after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:ease-in-out">
                </div>

                

                </label>
            </div> */}

            <label className="flex group items-center justify-between hover:bg-tertiary rounded-xl px-2.5 py-2.5 cursor-pointer">
                <input type="checkbox" className="sr-only peer" id="Input" />

                <div className="text-tertiary flex items-center gap-2 group-hover:text-primary transition-colors">
                    <RiMoonFill size={20} />
                    <span>Dark Mode</span>
                </div>

                <div className="relative w-11 h-6 group-hover:bg-tertiary-200 bg-tertiary rounded-full transition-all after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-primary after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full after:ease-in-out"></div>
            </label>
            
            {/* ITU MASIH SEMENTARA BELUM PAKE STATE ALIAS MASIH MATI */}
        </>
    )
}

// Note
// Belum Fix Desainnya
// Hamburger belum ada state untuk menjadi silang
// Belum ada animasi masuk ke side bar