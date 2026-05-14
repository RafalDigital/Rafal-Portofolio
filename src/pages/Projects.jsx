/* eslint-disable no-unused-vars */
import TopNavbar from "../components/top-navbar";
import SideNavbar from "../components/side-navbar";
import { RiInstagramFill, RiSearchLine, RiGithubFill } from '@remixicon/react';
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useRef } from 'react';
import Loading from "../components/small-component/loading-svg";

export default function Projects({ openMenu, hamburgerClick, closeMenu}) {
    const [selectedProject, setSelectedProject] = useState(null)
    const [displayData, setDisplayData] = useState(null);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const projectGroupContainer = useRef();

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    const ICON_MAP = {
        RiInstagramFill,
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const response = await fetch("/data/data.json");
                const dataResponse = await response.json();
                setData(dataResponse.ProjectsFolder)
            } catch (error) {
                console.log("Gagal Melakukan Fetching Data : ", error)
            } finally {
                setIsLoading(false)
            }
        }
        
        fetchData()
    }, [])
    
    console.log(data)
    if (data.length > 0) {
    console.log(data[0].name)
    console.log(data[0].id)
    console.log(data[0].icon)
    console.log(data[0].projects)
    }

    useEffect(() => {
        console.log(selectedProject)
    }, [selectedProject])

    function openFolderProject(project) {
        setSelectedProject(project);
        setDisplayData(project);
    }

    function closeFolderProject() {
        setSelectedProject(null);
    }

    useGSAP(() => {
        if (data.length === 0) return;
        gsap.fromTo(".projectGroup", 
        { 
            y: 60, 
            opacity: 0 
        }, 
        {
            y: 0, 
            opacity: 1,
            duration: 1,
            ease: "back.out(2)", 
            stagger: {
                amount: 0.8,
                from: "start"
            },
            clearProps: "all" 
        })
    }, { scope: projectGroupContainer, dependencies: [data] });

    return (
        <>
            <TopNavbar HamburgerOpen={openMenu} hamburgerClick={hamburgerClick}/>
            <div className={`${isScrolled?'opacity-100':'opacity-0'} fixed top-0 right-0 left-0 h-16 w-full z-30 backdrop-blur-sm`}></div>
            <SideNavbar HamburgerClose={closeMenu} hamburgerClick={hamburgerClick}/>
            <div ref={projectGroupContainer} className="pt-24 pb-6 px-6 w-full h-fit flex flex-col gap-4 z-20">
                {data.map((project, index) => (
                    <GroupProject key={index} Header={project.name} icon={ICON_MAP[project.icon]} onOpen={() => {openFolderProject(project)}}/>
                ))}
            </div>
            <div className="absolute z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_90%,transparent_110%)] pointer-events-none"></div>
            <div class="absolute inset-0 z-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#08090a_60%,#63e_100%)]"></div>

        {/* {selectedProject && ( */}
            <div 
                key='nokey' 
                className={`fixed overflow-x-hidden left-0 right-0 bottom-0 w-full h-[95dvh] right-0 z-50 pb-4 flex flex-col gap-8 bg-secondary  rounded-tl-4xl rounded-tr-4xl transform transition-transform duration-500 ease-in-out ${
                    selectedProject ? 'translate-y-0' : 'translate-y-full'
                }`}>
                <div className="w-full h-fit pt-6 flex flex-col rounded-tl-4xl rounded-tr-4xl border-t border-l border-r border-tertiary/40 bg-option1">
                    <div className="flex gap-4 px-6 pb-6 items-center justify-between">
                        {/* KIRIM SETSELECTEDPROJECT KE CLOSE DAN SELECTEDPROJECT KE H1 */}
                        <h1 className="text-xl font-nunito text-center text-tertiary">{displayData?.name}</h1>
                        <Close onClose={closeFolderProject}/>
                        {/* <Search/> */}
                    </div>
                    <span className="h-[1px] w-full bg-tertiary/40 rounded-2xl"></span>
                </div>

                <div className="flex w-full h-full flex-col gap-4 px-4">
                    {displayData?.projects.map((project, index) => (
                        <Project key={index} title={project.name} desc={project.desc} image={project.image} stacks={project.stacks} visit={project.visit} github={project.github}/>
                    ))}
                </div>

            </div>
            <div 
                className={`fixed z-40 inset-0 w-full h-dvh bg-secondary/40 transition-all duration-500 ease-in-out ${selectedProject ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            </div>
        {/* )} */}

            {isLoading && (
                <div className="fixed top-1/2 -translate-1/2 left-1/2 w-3/4 h-fit p-4 z-30 bg-secondary border border-tertiary/20 rounded-lg text-tertiary">
                    <Loading className="scale-125"/>
                </div>
            )}
        </>
    )
}

function GroupProject({Header, icon: Icon, onOpen}) {
    return (
        <div className="projectGroup w-full h-fit p-4 z-20 bg-secondary border border-tertiary/20 rounded-lg text-tertiary">
            {/* <img src={mockup} alt="" /> */}
            <div className="mb-4 flex justify-between items-center">
                <h1 className="font-zain text-xl m-0">{Header}</h1>
                <Icon/>
            </div>
            <motion.button
                whileHover={{scale: 1.02, y: -1}}
                whileTap={{ scale: 0.95, y: 1}}
                transition={{type: 'spring', stiffness: 300}} 
                onClick={onOpen}
                className="w-full h-fit py-1 rounded-md bg-primary hover:bg-transparent transition-all ease border border-tertiary/20 cursor-pointer">
                    Open
                </motion.button>
        </div>
    )
}

function Project({ image, title = 'Template', desc = 'A template', stacks = ['HTML', 'JS', 'CSS'], visit, github}) {
    return(
        <div className="w-full h-fit p-4 bg-background border border-tertiary/20 rounded-xl text-tertiary">
            <div className="w-full h-fit flex justify-between gap-4">
                <img src={image} className="rounded-md w-1/2" />
                <div className="w-1/2 flex flex-col gap-1">
                    <h1 className="w-full font-zain font-medium text-md text-tertiary leading-5">Project {title}</h1>
                    <span className="w-full font-nunito text-tertiary/40 text-xs leading-4">{desc}</span>
                </div>
            </div>
            <div className="my-4 flex gap-2">
                {stacks.map((s, index) => (
                    <Stack key={index} stackName={s}/>
                ))}

            </div>
            <div className="w-full h-fit flex justify-between gap-3 font-nunito font-medium text-sm">
                <motion.a
                    whileHover={{scale: 1.02, y: -1}}
                    whileTap={{ scale: 0.95, y: 1}}
                    transition={{type: 'spring', stiffness: 300}} 
                    target="_blank"
                    href={visit}
                    className="w-1/2 bg-tertiary/40 py-1 rounded-lg border border-tertiary/20 cursor-pointer  active:bg-tertiary/5 transition-all duration-500 ease-in-out flex justify-center items-center">
                    View Live
                </motion.a>

                <motion.a 
                    whileHover={{scale: 1.02, y: -1}}
                    whileTap={{ scale: 0.95, y: 1}}
                    transition={{type: 'spring', stiffness: 300}}
                    target="_blank"
                    href={github}
                    className="w-1/2 flex justify-center items-center active:bg-tertiary/20 bg-option1 py-1.5 rounded-lg border border-tertiary/40 gap-1 cursor-pointer transition-all duration-500 ease-in-out">
                <RiGithubFill size={20}/>
                Github
                </motion.a>
            </div>
        </div>
    )
}

function Stack({stackName}) {
    return(
        <span className="w-fit h-fit bg-tertiary/20 px-2 py-0.5 rounded-4xl text-[10px] font-nunito">
            {stackName}
        </span>
    )
}

// Untuk Bagian Lihat Group Project
function Close({onClose}) {
    const genericBar = "h-0.5 w-6 my-1 rounded-full bg-tertiary transition ease-in-out duration-300 rounded-2xl group-hover:bg-tertiary/40 transition-all ease group";
    return(
        <button onClick={onClose} className="flex flex-col h-6 w-8 justify-center items-center group cursor-pointer  ">
            <span className={`${genericBar} rotate-45 translate-y-1.5`}></span>
            <span className={`${genericBar} -rotate-45 -translate-y-1`}></span>
        </button>
    )
}

function Search() {
    return(
        <button className="h-8 w-8 justify-center items-center group cursor-pointer text-tertiary hover:text-tertiary/40 transition-all ease">
            <RiSearchLine size={23}/>
        </button>
    )
}

// Tinggal Fungsi Search, Close, Pemanggilan Data, Pengambilan data dari JSON, Open